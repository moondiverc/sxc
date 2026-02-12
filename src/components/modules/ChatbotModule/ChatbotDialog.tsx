"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "@/hooks/use-gemini-chat";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  onSend: (text: string) => void;
  onReset: () => void;
};

export default function ChatbotDialog({
  open,
  onClose,
  title = "AI Chatbot",
  messages,
  isLoading,
  error,
  onSend,
  onReset,
}: Props) {
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  function submit() {
    const text = input.trim();
    if (!text || isLoading) return;
    onSend(text);
    setInput("");
  }

  function onKeyDownInput(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "absolute bottom-20 right-4 w-[92vw] max-w-sm",
          "rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-gray-200">
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 truncate">{title}</p>
            <p className="text-xs text-gray-500">Powered by Gemini</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onReset}
              className="text-xs px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
              title="Reset chat"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-xs px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          className="max-h-[55vh] overflow-y-auto px-3 py-3 space-y-2 bg-white"
        >
          {messages.map((m, idx) => (
            <MessageBubble key={idx} role={m.role} content={m.content} />
          ))}

          {isLoading && (
            <div className="text-xs text-gray-500 px-1">AI is typing...</div>
          )}

          {error && (
            <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-3 bg-gray-50">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDownInput}
              rows={2}
              placeholder="Tulis pesan… (Enter untuk kirim, Shift+Enter baris baru)"
              className={cn(
                "flex-1 resize-none rounded-xl border border-gray-300",
                "px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white",
              )}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={submit}
              disabled={isLoading || !input.trim()}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium",
                "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600",
              )}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
