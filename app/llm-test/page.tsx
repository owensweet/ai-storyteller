"use client";
import { useState } from "react";

export default function LlmTestPage() {
  const [prompt, setPrompt] = useState("Write a two-sentence bedtime story about a friendly dragon.");
  const [out, setOut] = useState<string>("");

  async function send() {
    setOut("…thinking…");
    const res = await fetch("/api/llm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral",
        messages: [{ role: "user", content: prompt }]
      })
    });
    const data = await res.json();
    // llama.cpp returns OpenAI-like shape:
    // data.choices[0].message.content
    const text = data?.choices?.[0]?.message?.content ?? JSON.stringify(data);
    setOut(text);
  }

  return (
    <main style={{maxWidth: 720, margin: "40px auto", padding: 16}}>
      <h1>LLM Test</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{width: "100%", minHeight: 120}}
      />
      <div style={{marginTop: 12}}>
        <button onClick={send}>Send to /api/llm</button>
      </div>
      <pre style={{whiteSpace: "pre-wrap", marginTop: 16}}>{out}</pre>
    </main>
  );
}
