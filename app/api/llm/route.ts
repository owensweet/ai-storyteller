import type { NextRequest } from "next/server";

export const runtime = "nodejs"; // keep on Node runtime for broad compatibility
export const dynamic = "force-dynamic";

const LLM_BASE = process.env.LLM_BASE_URL; // e.g. https://api.20-57-192-2.sslip.io

function badEnv(msg: string, code = 500) {
  return new Response(JSON.stringify({ error: msg }), {
    status: code,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  if (!LLM_BASE) return badEnv("LLM_BASE_URL is not set");

  let body: any;
  try {
    body = await req.json();
  } catch {
    return badEnv("Invalid JSON body", 400);
  }

  // Always force streaming at the model layer
  const payload = {
    model: body?.model ?? "mistral",
    messages: body?.messages ?? [],
    temperature: body?.temperature ?? 0.7,
    max_tokens: body?.max_tokens ?? 256,
    stream: true, // <<< key for SSE streaming from llama.cpp
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60_000); // hard timeout 60s

  let upstream: Response;
  try {
    upstream = await fetch(`${LLM_BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      // NOTE: no Authorization header needed for your llama.cpp server
    });
  } catch (e: any) {
    clearTimeout(timeout);
    const message = e?.name === "AbortError" ? "Upstream timeout" : e?.message || "Upstream fetch failed";
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => "");
    return new Response(
      JSON.stringify({
        error: `Upstream ${upstream.status} ${upstream.statusText}`,
        details: text.slice(0, 2000),
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  // Pass-through SSE stream from llama.cpp to the browser
  const headers = new Headers();
  headers.set("Content-Type", "text/event-stream; charset=utf-8");
  headers.set("Cache-Control", "no-cache, no-transform");
  headers.set("Connection", "keep-alive");
  headers.set("X-Accel-Buffering", "no");

  return new Response(upstream.body, { headers, status: 200 });
}

export async function OPTIONS() {
  // Not strictly necessary for same-origin, but nice to have
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}
