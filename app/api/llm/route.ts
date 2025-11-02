import { NextResponse } from "next/server";

const UPSTREAM = process.env.LLM_BASE_URL;

export async function POST(req: Request) {
  if (!UPSTREAM) {
    return NextResponse.json({ error: "LLM_BASE_URL not set" }, { status: 500 });
  }

  try {
    const body = await req.json();
    // Ensure the minimal llama.cpp OpenAI-compatible payload:
    const payload = {
      model: body.model ?? "mistral",
      // messages is what llama.cpp server expects under /v1/chat/completions
      messages: body.messages ?? [
        { role: "user", content: "Say hello in five words." }
      ],
      temperature: body.temperature ?? 0.7,
      stream: false
    };

    const upstream = `${UPSTREAM}/v1/chat/completions`;
    const r = await fetch(upstream, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // If your Caddy adds auth headers or needs a key, add it here.
      body: JSON.stringify(payload),
      // Keep timeouts reasonable since llama.cpp on CPU can be slow
      // @ts-ignore – Next runtime passes through
      duplex: "half"
    });

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json({ error: "Upstream error", details: text }, { status: r.status });
    }

    // Pass through OpenAI-style JSON
    return new NextResponse(r.body, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
