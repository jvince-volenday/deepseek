"use client";

import { useState } from "react";
import { ChatContainer } from "../components/ChatContainer";
import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Index = () => {
  const [chats, setChats] = useState([
    { id: "1", title: "First Conversation", active: true },
    { id: "2", title: "AI Basics Discussion", active: false },
    { id: "3", title: "Project Planning", active: false },
  ]);

  const handleNewChat = () => {
    const newChat = {
      id: String(chats.length + 1),
      title: `New Chat ${chats.length + 1}`,
      active: true,
    };
    setChats(chats.map((chat) => ({ ...chat, active: false })).concat(newChat));
  };

  const handleSelectChat = (id) => {
    setChats(
      chats.map((chat) => ({
        ...chat,
        active: chat.id === id,
      }))
    );
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-background to-accent">
        <AppSidebar
          onNewChat={handleNewChat}
          chats={chats}
          onSelectChat={handleSelectChat}
        />
        <main className="flex-1 relative">
          <div className="absolute top-4 left-4">
            <SidebarTrigger />
          </div>
          <ChatContainer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
