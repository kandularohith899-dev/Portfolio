"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { EDUCATION } from "@/data/portfolioData";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Academic milestones and engineering foundation from school through final year B.Tech degree.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-700/60 hover:border-cyan-500/50 hover:shadow-cyan-glow group transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-cyan-400 font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>

                <div className="space-y-1">
                  <div className="text-sm font-semibold text-slate-200">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-800">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Academic Record</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
