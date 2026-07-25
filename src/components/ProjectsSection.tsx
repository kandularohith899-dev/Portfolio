"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectsSectionProps {
  onSelectProject: (proj: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Machine Learning", "Data Analytics", "Web Apps", "SQL"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-grade machine learning systems, data analytics dashboards, and full-stack web applications.
          </p>
        </div>

        {/* Filter Category Tabs */}
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

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl border border-slate-700/60 hover:border-cyan-500/50 hover:shadow-cyan-glow group transition-all duration-500 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Glow Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="p-8 space-y-6 relative z-10">
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stats Summary Pill if present */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                    {project.stats.map((st) => (
                      <div key={st.label} className="text-center">
                        <div className="text-sm font-extrabold text-cyan-400 font-heading">
                          {st.value}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium truncate">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-xl bg-slate-800 text-cyan-400 text-xs font-semibold">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 border-t border-slate-800 bg-slate-900/40 flex items-center justify-between relative z-10">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>Explore Architecture & Demo</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
