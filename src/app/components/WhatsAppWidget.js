"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showBadge, setShowBadge] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showBadge) {
      setShowBadge(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const phoneNumber = "919061559827";
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. Official WhatsApp Style Chat Dialog Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[340px] sm:w-[360px] max-w-[calc(100vw-2.5rem)] bg-[#efeae2] rounded-[1.2rem] shadow-2xl overflow-hidden border border-slate-300/40 transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Official WhatsApp Green Header */}
          <div className="bg-[#075e54] px-4 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                {/* Official Support Avatar */}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-lg shadow-inner">
                  A
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] border-2 border-[#075e54] rounded-full"></span>
              </div>

              <div className="flex flex-col items-start justify-center">
                <h4 className="text-white text-[14px] font-semibold leading-tight tracking-wide">
                  Albirr Online Support
                </h4>
                <p className="text-emerald-300 text-[11px] font-medium mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] inline-block animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={toggleChat}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all outline-none cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Authentic WhatsApp Message Body (Using official beige/greenish wallpaper style) */}
          <div className="p-4 h-[220px] overflow-y-auto flex flex-col gap-3 bg-[#efeae2] relative">
            {/* Background WhatsApp Doodle Sub-overlay decoration */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Left aligned WhatsApp message card */}
            <div className="relative bg-white text-slate-800 text-[13.5px] py-2 px-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm self-start border border-slate-200/50">
              {/* WhatsApp message bubble speech tip */}
              <div className="absolute top-0 -left-2 w-2 h-2.5 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)] border-r border-slate-200/20"></div>
              
              <p className="leading-relaxed font-normal">
                Hello! Welcome to Albirr Schools. How can we assist you with admissions or school inquiries today?
              </p>
              
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[9px] text-slate-400">
                  12:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Authentic Bottom Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-[#f0f2f5] flex gap-2.5 items-center border-t border-slate-200"
          >
            {/* White input bubble */}
            <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center shadow-sm border border-slate-200/80">
              <textarea
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full bg-transparent text-slate-800 text-[13.5px] border-none outline-none resize-none placeholder:text-slate-400 max-h-[80px] py-0.5"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
            </div>

            {/* Circular Green Send Button */}
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-10 h-10 rounded-full bg-[#128c7e] hover:bg-[#075e54] text-white flex items-center justify-center transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* 2. Pulsing Official WhatsApp Green Floating Button */}
      <button
        onClick={toggleChat}
        className="relative group w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95 outline-none cursor-pointer border border-white/10"
        aria-label="Contact via WhatsApp"
        suppressHydrationWarning
      >
        {/* Pulsing Shadow Circle */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping opacity-75 group-hover:animate-none"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 relative z-10 text-white fill-white" />

        {/* Floating Notification Dot */}
        {showBadge && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 rounded-full flex items-center justify-center shadow-md animate-bounce">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
