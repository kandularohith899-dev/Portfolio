"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolioData";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            My <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Professional industry certifications in Python, Machine Learning, Power BI, Tableau, and SQL.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-3xl border border-slate-700/60 hover:border-cyan-500/50 hover:shadow-cyan-glow group transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Header Gradient Stripe */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.badgeColor} absolute top-0 left-0 right-0`} />

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-slate-400 font-semibold px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400">
                    {cert.issuer}
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-800/80 text-slate-300 text-[11px] font-medium border border-slate-700/60"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Badge
                </span>
                <span className="text-slate-400 font-medium group-hover:text-cyan-400 transition-colors">
                  View Certificate &rarr;
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
