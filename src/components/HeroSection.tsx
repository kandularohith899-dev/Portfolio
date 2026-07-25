"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Send, Mail, MapPin, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleResumeClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563EB", "#06B6D4", "#8B5CF6", "#38BDF8"],
    });
    onOpenResume();
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-cyan-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Hire & Internships</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading">
                <span className="text-white">Rohith </span>
                <span className="text-gradient">Kandula</span>
              </h1>
            </div>

            {/* Typing Animated Role Headline */}
            <div className="h-12 sm:h-16 flex items-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 font-heading">
                <span>{displayText}</span>
                <span className="animate-pulse text-white font-light ml-1">|</span>
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Final-year B.Tech engineering student specializing in <strong className="text-cyan-300">Python Development</strong>, <strong className="text-blue-400">Data Analytics</strong>, <strong className="text-purple-300">Machine Learning</strong>, and <strong className="text-cyan-300">SQL Engineering</strong>. Building intelligent systems and interactive data dashboards.
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              {/* Resume Button */}
              <button
                onClick={handleResumeClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                <Download className="w-4.5 h-4.5" />
                <span>Download Resume</span>
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 font-semibold text-sm hover:-translate-y-1 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>

              {/* Hire Me Button */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/40 font-bold text-sm shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:scale-110 transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Graphic / Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer Animated Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 blur-2xl opacity-40 animate-pulse-subtle" />
              <div className="absolute -inset-4 rounded-full border border-cyan-500/30 animate-spin-slow pointer-events-none" />

              {/* Profile Card / Avatar Container */}
              <div className="relative w-full h-full rounded-3xl glass-card p-3 border border-slate-700/60 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden border border-slate-800">
                  {/* Subtle Inner Glow Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#06B6D4_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  {/* Profile Initials & Avatar Graphic */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-1 shadow-cyan-glow mb-4 relative group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-white relative overflow-hidden">
                      <span className="font-heading text-4xl sm:text-5xl font-black tracking-wider text-gradient">
                        RK
                      </span>
                      <span className="text-[10px] tracking-widest text-cyan-400 uppercase font-semibold mt-1">
                        Developer
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading">
                    Rohith Kandula
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium">
                    B.Tech ECE (2022 - 2026)
                  </p>

                  {/* Floating Skill Badges Around Avatar */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card border border-blue-500/40 text-[11px] font-bold text-blue-400 animate-float">
                    Python
                  </div>
                  <div className="absolute bottom-6 right-4 px-3 py-1 rounded-full glass-card border border-cyan-500/40 text-[11px] font-bold text-cyan-300 animate-float" style={{ animationDelay: "1s" }}>
                    TensorFlow
                  </div>
                  <div className="absolute top-8 right-4 px-3 py-1 rounded-full glass-card border border-purple-500/40 text-[11px] font-bold text-purple-300 animate-float" style={{ animationDelay: "2s" }}>
                    Power BI
                  </div>
                  <div className="absolute bottom-10 left-4 px-3 py-1 rounded-full glass-card border border-emerald-500/40 text-[11px] font-bold text-emerald-400 animate-float" style={{ animationDelay: "3s" }}>
                    SQL
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Smooth Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 sm:mt-24 flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1.5 hover:border-cyan-400 transition-colors">
            <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
