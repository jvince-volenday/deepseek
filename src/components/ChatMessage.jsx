import { cn } from "@/lib/utils";

export const ChatMessage = ({ content, isUser }) => {
  return (
    <div
      className={cn(
        "w-full flex animate-message-fade-in opacity-0",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl message-transition",
          isUser
            ? "bg-chat-user text-primary mr-2"
            : "bg-chat-assistant text-primary glass-panel ml-2"
        )}
      >
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};
