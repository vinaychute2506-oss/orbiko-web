"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const whatsappNumber = "919876543210";
  const defaultText = encodeURIComponent("Hello Orbiko! I'm visiting your website and would like to inquire about your premium interior design services.");
  const url = `https://wa.me/${whatsappNumber}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-colors duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="fill-current" />
        
        {/* Floating Tooltip Banner */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#FAF6F0] text-[#2A1B15] text-[10px] tracking-wider uppercase font-bold px-4 py-2 border border-[#C9BAAA]/40 shadow-xl rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with Us
        </span>
        
        {/* Radar Ring Effect */}
        <span className="absolute inset-0 w-full h-full rounded-full bg-green-500/30 animate-ping pointer-events-none z-[-1]" />
      </motion.a>
    </div>
  );
}
