"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Submitted:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, a job opportunity, or just want to connect? Send me a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Styled Map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card p-8 rounded-3xl border border-slate-700/60 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">
                Contact Information
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <div className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                    <div className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-white font-semibold text-sm">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      N.T.R Dist, AP 521230
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Follow & Connect
                </div>
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/40 text-xs font-semibold transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Google Maps Placeholder */}
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl h-56 relative group">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79155734346!2d80.56942155!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sAndhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full glass-card text-[11px] font-semibold text-slate-200 border border-slate-700 pointer-events-none flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-700/60 shadow-2xl space-y-6 relative">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-heading">
                  Send a Message
                </h3>
                <p className="text-slate-300 text-sm">
                  Fill out the details below and I will respond to your inquiry promptly.
                </p>
              </div>

              {/* Success Notification Banner */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-xs sm:text-sm font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Rohith Kandula"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="Opportunity Inquiry / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-400 font-medium">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Hello Rohith, I reviewed your portfolio and would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 font-medium">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>Send Message</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
