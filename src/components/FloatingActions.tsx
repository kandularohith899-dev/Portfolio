"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, FileText, Send, MessageCircle } from "lucide-react";

interface FloatingActionsProps {
  onOpenResume: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenResume }) => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            className="flex flex-col gap-2.5 items-end"
          >
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card text-white border border-cyan-500/40 text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
            >
              <span>Download Resume</span>
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card text-white border border-blue-500/40 text-xs font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
            >
              <span>Quick Contact</span>
              <Send className="w-4 h-4 text-blue-400" />
            </a>

            {showTopButton && (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  scrollToTop();
                }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card text-white border border-purple-500/40 text-xs font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform"
              >
                <span>Back To Top</span>
                <ArrowUp className="w-4 h-4 text-purple-400" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white flex items-center justify-center shadow-xl shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Quick Actions Floating Button"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-25 group-hover:opacity-40 pointer-events-none" />
        <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? "rotate-45" : ""}`} />
      </button>
    </div>
  );
};
