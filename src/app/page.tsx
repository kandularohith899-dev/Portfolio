"use client";

import React, { useState, useEffect } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { ResumeModal } from "@/components/ResumeModal";
import { FloatingActions } from "@/components/FloatingActions";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Particle Background Canvas */}
      <ParticleBackground />

      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphism Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-0">
        {/* 1. Hero Section */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Projects Section */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 5. Experience & Internships Section */}
        <ExperienceSection />

        {/* 6. Education Section */}
        <EducationSection />

        {/* 7. Certifications Section */}
        <CertificationsSection />

        {/* 8. Services Section */}
        <ServicesSection />

        {/* 9. Testimonials Section */}
        <TestimonialsSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActions onOpenResume={() => setResumeOpen(true)} />

      {/* Project Deep Dive / Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable Styled Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
