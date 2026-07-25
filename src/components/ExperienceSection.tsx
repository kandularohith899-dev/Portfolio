"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Work & <span className="text-gradient-cyan">Internships</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on offline and virtual internship experience in Deep Learning, Data Engineering, and Web Development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-purple-600 -translate-x-1/2 opacity-40 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.role + item.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-cyan-glow">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 sm:px-8 pl-12 sm:pl-0">
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 hover:border-cyan-500/50 hover:shadow-cyan-glow group transition-all duration-300 relative">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-blue-400 font-semibold mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                        {item.skills.map((sk) => (
                          <span
                            key={sk}
                            className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-medium"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
