"use client";

import { useMemo, useState } from "react";

export type ChatRole = "user" | "assistant";
export type ChatMessage = { role: ChatRole; content: string };

export function useGeminiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Halo! Aku chatbot AI. Ada yang bisa kubantu?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(() => !isLoading, [isLoading]);

  async function sendMessage(userText: string) {
    const text = userText.trim();
    if (!text) return;

    setError(null);
    setIsLoading(true);

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(nextMessages);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }), // user+assistant messages
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.error ?? "Gagal memanggil Gemini API.");

      const assistantText =
        (data?.text ?? "").trim() || "Maaf, aku belum punya jawaban untuk itu.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText },
      ]);
    } catch (e: any) {
      setError(e?.message ?? "Terjadi error.");
    } finally {
      setIsLoading(false);
    }
  }

  function reset() {
    setMessages([
      {
        role: "assistant",
        content: "Halo! Aku chatbot AI. Ada yang bisa kubantu?",
      },
    ]);
    setError(null);
    setIsLoading(false);
  }

  return { messages, isLoading, error, canSend, sendMessage, reset };
}
