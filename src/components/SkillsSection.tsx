"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Code, Layout, FileCode, Coffee, BrainCircuit, Network, Layers, Table, BarChart3, Server, Atom, Globe, Sparkles, PieChart, TrendingUp, GitBranch, Sliders, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal,
  Database,
  Code,
  Layout,
  FileCode,
  Coffee,
  Cpu,
  BrainCircuit,
  Network,
  Layers,
  Table,
  BarChart3,
  Server,
  Atom,
  Globe,
  Sparkles,
  PieChart,
  TrendingUp,
  GitBranch,
  Sliders,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills);

  const filteredSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            My <span className="text-gradient-cyan">Skills</span> & Proficiencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical stack in Python, Machine Learning, Data Analytics, Web Development, and Databases.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.iconName] || Code;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-slate-700/60 hover:border-cyan-500/50 hover:shadow-cyan-glow group transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors font-heading">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Percentage Badge */}
                  <div className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs">
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="space-y-1.5">
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 rounded-full shadow-cyan-glow"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Competency Badges Summary */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white font-heading">
              Core Technical Strengths
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Proficient across data processing, predictive modeling, database design, and interactive UI dashboards.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Python 3.x", "MySQL Relational DB", "TensorFlow AI", "Power BI DAX", "Flask Full-Stack", "Tableau Analytics", "Git / Version Control"].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
