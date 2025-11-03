// app/llm-test/page.tsx
"use client";

import { useCallback, useRef, useState } from "react";

type ChunkHandler = (delta: string) => void;

function parseSSELines(line: string): string | null {

  // Expected format:  lines beginning with `data: {...}`
  if (!line.startsWith("data:")) return null;

  const json = line.slice(5).trim();

  if (json === "[DONE]") return null;

  try {
    const parsed = JSON.parse(json);

    // OpenAI-style streamed delta: choices[0].delta.content
    const content =
      parsed?.choices?.[0]?.delta?.content ??
      parsed?.choices?.[0]?.message?.content ?? // fallback if server sends full messages
      "";
    return typeof content === "string" ? content : "";
  } catch {
    return null;
  }
}

async function fetchStreamed(
  url: string,
  body: any,
  onChunk: ChunkHandler,
  opts?: { timeoutMs?: number; signal?: AbortSignal }
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), opts?.timeoutMs ?? 45_000);

  // Allow external signal to cancel too
  opts?.signal?.addEventListener("abort", () => controller.abort(), { once: true });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: controller.signal,
  });

  if (!res.ok || !res.body) {
    clearTimeout(timeout);
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }

  // Stream reader
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {

    while (true) {

      const { done, value } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Split by lines and parse SSE `data: ...`
      const lines = buffer.split(/\r?\n/);

      buffer = lines.pop() ?? "";

      for (const ln of lines) {
        const delta = parseSSELines(ln);
        if (delta) onChunk(delta);
      }
    }

    // Flush any remainder
    if (buffer.length) {
      const delta = parseSSELines(buffer);
      if (delta) onChunk(delta);
    }
  } finally {
    clearTimeout(timeout);
    reader.releaseLock();
  }
}

export default function LlmTestPage() {
  const [prompt, setPrompt] = useState("Write a 1-sentence bedtime story about a friendly dragon.");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">("idle");
  const [attempt, setAttempt] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  const send = useCallback(async () => {

    setAnswer("");
    setErrorMsg(null);
    setStatus("loading");

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    const payload = {
      model: "mistral",
      messages: [
        { role: "system", content: "You are a concise and helpful assistant." },
        { role: "user", content: prompt },
      ],
      // API route forces stream:true upstream; no need to add it here
      max_tokens: 256,
      temperature: 0.7,
    };

    const MAX_RETRIES = 2;
    const baseDelay = 800; // ms

    for (let i = 0; i <= MAX_RETRIES; i++) {

      setAttempt(i + 1);

      try {
        await fetchStreamed(
          `${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/llm`,
          payload,
          (delta) => setAnswer((prev) => prev + delta),
          { timeoutMs: 45_000, signal: abortRef.current.signal }
        );
        setStatus("done");

        return;

      } catch (err: any) {
        // If last attempt, surface error
        if (i === MAX_RETRIES) {
          setStatus("error");
          setErrorMsg(err?.message || "Request failed");

          return;

        }
        // Backoff and retry
        const wait = baseDelay * Math.pow(2, i) + Math.random() * 300;
        
        await new Promise((r) => setTimeout(r, wait));
      }
    }
  }, [prompt]);

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    setStatus("idle");
  }, []);

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">LLM Streaming Test</h1>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Prompt</label>
        <textarea
          className="w-full rounded border p-3"
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something…"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={send}
          disabled={status === "loading"}
          className="rounded bg-black text-white px-4 py-2 disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send"}
        </button>
        {status === "loading" && (
          <button onClick={cancel} className="rounded border px-3 py-2">
            Cancel
          </button>
        )}
        <span className="text-sm text-gray-500">
          {status === "loading" ? `Attempt ${attempt} (with retries)…` : null}
        </span>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Response</label>
        <div className="w-full min-h-24 whitespace-pre-wrap rounded border p-3">
          {answer || (status === "loading" ? "…" : "—")}
        </div>
      </div>

      {status === "error" && (
        <div className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          <div className="font-semibold mb-1">Request failed</div>
          <div className="mb-1">{errorMsg}</div>
          <ul className="list-disc ml-5">
            <li>Check that your API route <code>/api/llm</code> is reachable.</li>
            <li>Confirm <code>LLM_BASE_URL</code> is correct and the VM is up.</li>
            <li>If using TLS, ensure the proxy certificate is valid.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
