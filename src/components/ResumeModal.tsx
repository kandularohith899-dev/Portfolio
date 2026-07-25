"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO, EDUCATION, EXPERIENCES, PROJECTS } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-700/60 flex items-center justify-between bg-slate-900/90 sticky top-0 z-20 print:hidden">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white font-heading">
                Resume Document — Rohith Kandula
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-8 sm:p-12 space-y-8 overflow-y-auto custom-scrollbar flex-1 bg-slate-950 text-slate-100 print:bg-white print:text-black print:p-0 print:overflow-visible">
            
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-6 print:border-black">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white print:text-black font-heading tracking-tight">
                    ROHITH KANDULA
                  </h1>
                  <p className="text-cyan-400 print:text-blue-700 font-bold text-sm uppercase tracking-wider">
                    FRESHER | Python Developer & Data Analyst
                  </p>
                </div>
                
                <div className="text-xs text-slate-300 print:text-gray-800 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-cyan-400 print:text-blue-700 font-semibold">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3" />
                {PERSONAL_INFO.github}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3" />
                {PERSONAL_INFO.linkedin}
              </a>
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                CAREER OBJECTIVE
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 print:text-gray-800">
                <div>• Python</div>
                <div>• SQL (MySQL)</div>
                <div>• C, HTML, CSS</div>
                <div>• JavaScript</div>
                <div>• TensorFlow & Keras</div>
                <div>• Deep Learning (CNN/LSTM)</div>
                <div>• Flask Framework</div>
                <div>• Power BI & Tableau</div>
                <div>• Scikit-Learn</div>
                <div>• Pandas & NumPy</div>
                <div>• Matplotlib & Seaborn</div>
                <div>• Prompt Engineering</div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                EDUCATIONAL QUALIFICATION
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 print:text-gray-800">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="flex justify-between items-start border-b border-slate-900 print:border-gray-200 pb-2">
                    <div>
                      <div className="font-bold text-white print:text-black">{edu.degree}</div>
                      <div className="text-xs text-slate-400 print:text-gray-600">{edu.institution}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-cyan-300 print:text-blue-700">{edu.grade}</div>
                      <div className="text-[11px] text-slate-400 print:text-gray-500">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                MAJOR PROJECTS
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.title} className="space-y-1 text-xs sm:text-sm">
                    <div className="font-bold text-white print:text-black flex justify-between">
                      <span>{proj.title}</span>
                      <span className="text-cyan-400 print:text-blue-700 text-xs">{proj.category}</span>
                    </div>
                    <p className="text-slate-300 print:text-gray-800 text-xs">
                      {proj.fullDescription}
                    </p>
                    <div className="text-[11px] text-slate-400 print:text-gray-600">
                      <strong>Tools Used:</strong> {proj.technologies.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                INTERNSHIPS
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.role + exp.company} className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-white print:text-black">{exp.role}</span>
                      <span className="text-slate-400 print:text-gray-600"> — {exp.company} ({exp.type})</span>
                    </div>
                    <span className="text-cyan-400 print:text-blue-700 font-semibold">{exp.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Declaration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-800 print:border-black">
              <div>
                <h3 className="font-bold text-cyan-400 print:text-black uppercase mb-1">STRENGTHS</h3>
                <p className="text-slate-300 print:text-gray-800">• Time Management, Quick Learner, Hard Worker, Team Building Ability.</p>
              </div>
              <div>
                <h3 className="font-bold text-cyan-400 print:text-black uppercase mb-1">LANGUAGES</h3>
                <p className="text-slate-300 print:text-gray-800">• English, Telugu.</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
