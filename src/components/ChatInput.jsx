"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { SendHorizontal } from "lucide-react";

export const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t bg-background/80 backdrop-blur-sm"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-3 rounded-lg bg-white shadow-sm border border-input focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        disabled={disabled}
      />
      <Button
        type="submit"
        size="icon"
        disabled={disabled || !message.trim()}
        className="rounded-full h-12 w-12 transition-all duration-200 hover:scale-105"
      >
        <SendHorizontal className="h-5 w-5" />
      </Button>
    </form>
  );
};
