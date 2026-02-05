"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ChatbotDialog from "./ChatbotDialog";
import { useGeminiChat } from "@/hooks/use-gemini-chat";

export default function ChatbotFAB() {
  const [open, setOpen] = useState(false);
  const { messages, isLoading, error, sendMessage, reset } = useGeminiChat();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-5 right-5 z-40",
          "h-14 w-14 rounded-full shadow-xl",
          "bg-blue-600 hover:bg-blue-700 text-white",
          "flex items-center justify-center",
          "transition-transform active:scale-95 cursor-pointer",
        )}
        aria-label="Open AI Chatbot"
        title="Chat dengan AI"
      >
        <span className="text-xl">💬</span>
      </button>

      <ChatbotDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Chatbot AI"
        messages={messages}
        isLoading={isLoading}
        error={error}
        onSend={sendMessage}
        onReset={reset}
      />
    </>
  );
}
