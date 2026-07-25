"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Compass, Target, Heart, Award, Code, CheckCircle2, MapPin, Mail, Phone, BookOpen } from "lucide-react";
import { PERSONAL_INFO, ABOUT_TABS } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"whoIAm" | "journey" | "goals" | "hobbies">("whoIAm");

  const tabs = [
    { id: "whoIAm", label: "Who I Am", icon: User },
    { id: "journey", label: "My Journey", icon: Compass },
    { id: "goals", label: "My Goals", icon: Target },
    { id: "hobbies", label: "Hobbies & Strengths", icon: Heart },
  ] as const;

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering student, full-stack Python developer, and data analyst dedicated to crafting data-driven AI systems.
          </p>
        </div>

        {/* Animated Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-slate-700/60 hover:border-cyan-500/40 text-center group hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid: Tabs + Personal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Bio Tabs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 p-1.5 glass-card rounded-2xl border border-slate-700/60">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Card Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 rounded-3xl border border-slate-700/60 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white font-heading mb-4 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {activeTab === "whoIAm" && <User className="w-5 h-5" />}
                  {activeTab === "journey" && <Compass className="w-5 h-5" />}
                  {activeTab === "goals" && <Target className="w-5 h-5" />}
                  {activeTab === "hobbies" && <Heart className="w-5 h-5" />}
                </span>
                {tabs.find((t) => t.id === activeTab)?.label}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {ABOUT_TABS[activeTab]}
              </p>

              {/* Special Highlights for each tab */}
              {activeTab === "whoIAm" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Analytical Mindset & Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Full-Stack Python & Flask Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Deep Learning & Predictive AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Interactive Power BI & SQL Engineering</span>
                  </div>
                </div>
              )}

              {activeTab === "hobbies" && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
                  {["Time Management", "Quick Learner", "Hard Worker", "Team Building", "Problem Solving", "Prompt Engineering"].map((strength) => (
                    <span
                      key={strength}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-medium"
                    >
                      ✓ {strength}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Personal Detail Summary Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-slate-700/60 shadow-2xl space-y-6 relative">
              <h3 className="text-xl font-bold text-white font-heading pb-4 border-b border-slate-700/60 flex items-center justify-between">
                <span>Personal Overview</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                  Fresher 2026
                </span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Degree</div>
                    <div className="text-slate-200 font-semibold">B.Tech in ECE (2022-2026)</div>
                    <div className="text-xs text-cyan-400">Sasi Institute of Tech & Engineering</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-blue-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-slate-200 font-semibold">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-purple-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline font-semibold">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 hover:text-cyan-400 font-semibold">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Languages Spoken</div>
                    <div className="text-slate-200 font-semibold">English, Telugu</div>
                  </div>
                </div>
              </div>

              {/* Career Objective Box */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs uppercase font-bold tracking-wider text-cyan-400 mb-1">
                  Career Objective
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &quot;{PERSONAL_INFO.careerObjective}&quot;
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
