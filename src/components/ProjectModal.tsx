"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Activity, AlertTriangle, Play, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Predictive Maintenance Demo State
  const [sensorValues, setSensorValues] = useState({
    vibration: 2.4,
    temperature: 580,
    pressure: 14.7,
    cycles: 120,
  });
  const [predictionResult, setPredictionResult] = useState<{
    rul: number;
    health: "Healthy" | "Warning" | "Critical";
    confidence: number;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  if (!project) return null;

  const handlePredict = () => {
    setIsCalculating(true);
    setTimeout(() => {
      // Calculate simulated RUL based on cycle and sensor readings
      const baseRUL = Math.max(10, 250 - sensorValues.cycles - (sensorValues.vibration * 12));
      const rul = Math.round(baseRUL);
      let health: "Healthy" | "Warning" | "Critical" = "Healthy";
      if (rul < 30) health = "Critical";
      else if (rul < 75) health = "Warning";

      setPredictionResult({
        rul,
        health,
        confidence: 0.93,
      });
      setIsCalculating(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-700/60 flex items-center justify-between bg-slate-900/80 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading truncate max-w-lg">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
            
            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Overview & Architecture
              </h4>
              <p className="text-slate-200 text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Metrics Grid */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                {project.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-heading">
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Predictive Maintenance Demo Simulator */}
            {project.isPredictiveDemo && (
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/40 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <h4 className="font-bold text-white text-base font-heading">
                      Live RUL Prediction Simulator (NASA C-MAPSS)
                    </h4>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                    Interactive AI Demo
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-medium flex justify-between">
                      <span>Engine Operating Cycles</span>
                      <span className="text-cyan-400 font-bold">{sensorValues.cycles} Cycles</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="220"
                      value={sensorValues.cycles}
                      onChange={(e) => setSensorValues({ ...sensorValues, cycles: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 mt-2"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-medium flex justify-between">
                      <span>Vibration Amplitude (mm/s)</span>
                      <span className="text-cyan-400 font-bold">{sensorValues.vibration} mm/s</span>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="8.0"
                      step="0.1"
                      value={sensorValues.vibration}
                      onChange={(e) => setSensorValues({ ...sensorValues, vibration: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 mt-2"
                    />
                  </div>
                </div>

                <button
                  onClick={handlePredict}
                  disabled={isCalculating}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                >
                  {isCalculating ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                  <span>Calculate Remaining Useful Life (RUL)</span>
                </button>

                {predictionResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl glass-card border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Predicted Remaining Useful Life</div>
                      <div className="text-3xl font-extrabold text-cyan-400 font-heading">
                        {predictionResult.rul} <span className="text-sm font-normal text-slate-300">Cycles Left</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border ${
                        predictionResult.health === "Healthy"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                          : predictionResult.health === "Warning"
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                          : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                      }`}>
                        {predictionResult.health === "Critical" && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                        <span>Status: {predictionResult.health}</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        R² Score: <span className="text-cyan-300 font-bold">93%</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

          </div>

          {/* Footer Action Buttons */}
          <div className="p-6 border-t border-slate-700/60 bg-slate-900/80 flex flex-wrap items-center justify-end gap-3 sticky bottom-0 z-20">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 text-xs font-bold transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
            <button
              onClick={() => alert(`Launching live demo for ${project.title}`)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
