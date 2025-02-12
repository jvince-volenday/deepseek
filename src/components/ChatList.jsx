import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="space-y-2 px-2">
      {chats.map((chat) => (
        <button
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className={cn(
            "w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-accent transition-colors",
            chat.active && "bg-accent"
          )}
        >
          <MessageSquare className="h-4 w-4" />
          <span className="text-sm truncate">{chat.title}</span>
        </button>
      ))}
    </div>
  );
};
