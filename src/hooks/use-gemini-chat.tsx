"use client";

import { useMemo, useState } from "react";

export type ChatRole = "user" | "assistant";
export type ChatMessage = { role: ChatRole; content: string };

export function useGeminiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I'm an AI chatbot. How may I assist you?",
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
        throw new Error(data?.error ?? "Failed to call Gemini API.");

      const assistantText =
        (data?.text ?? "").trim() || "Sorry, I don't have an answer for that yet.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText },
      ]);
    } catch (e: any) {
      setError(e?.message ?? "An error has occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  function reset() {
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm an AI chatbot. How may I assist you?",
      },
    ]);
    setError(null);
    setIsLoading(false);
  }

  return { messages, isLoading, error, canSend, sendMessage, reset };
}
