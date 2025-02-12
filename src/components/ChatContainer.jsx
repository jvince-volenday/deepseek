"use client";

import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

export const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (content) => {
    // Add user message
    setMessages((prev) => [...prev, { content, isUser: true }]);

    // Simulate assistant response
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content:
            "This is a simulated response. You can integrate with an AI API to get real responses.",
          isUser: false,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto pt-16 md:pt-4">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            content={message.content}
            isUser={message.isUser}
          />
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          </div>
        )}
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
};
