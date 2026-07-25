"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, BarChart3, PieChart, Cpu, Database, CheckCircle2, ArrowRight, Wrench } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal,
  BarChart3,
  PieChart,
  Cpu,
  Database,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Solutions & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Services <span className="text-gradient">I Offer</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Specialized engineering services tailored for AI model building, enterprise data analytics, full-stack Python development, and database architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Terminal;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-slate-700/60 hover:border-cyan-500/50 hover:shadow-cyan-glow group transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Background Radial Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-800 relative z-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
