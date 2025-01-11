"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ChatModal from "./ChatModal";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-end items-center">
      {/* WhatsApp Button */}
      <div className="w-full flex flex-[3]">
        <Link
          href="https://wa.me/6157174130"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center text-white py-2 px-4 rounded-full shadow-lg hover:opacity-90"
        >
          <Icon
            icon="mdi:whatsapp"
            width={50}
            height={50}
            className="text-green-500 mr-2"
          />
          615 717 4130
        </Link>
      </div>

      {/* Chat Widget */}
      <div className="w-full flex flex-[3]">
        {/* Chat Button */}
        <button
          className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-3 rounded-full shadow-lg hover:opacity-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon="mdi:chat-outline" width={24} height={24} />
        </button>

        {/* Chat Box */}
        <ChatModal isOpen={isOpen} setIsOpen={false} />
      </div>
    </div>
  );
};

export default ChatWidget;
