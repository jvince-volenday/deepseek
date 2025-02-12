import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";
import { ChatList } from "./ChatList";

export function AppSidebar({ onNewChat, chats, onSelectChat }) {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <Button
          onClick={onNewChat}
          className="w-full justify-start gap-2"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent className="pt-4">
        <ChatList chats={chats} onSelectChat={onSelectChat} />
      </SidebarContent>
    </Sidebar>
  );
}
