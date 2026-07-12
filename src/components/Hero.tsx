"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight, Send } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = personalInfo.typingRoles;
  const typingSpeed = isDeleting ? 40 : 100;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    if (!isDeleting && currentText === fullText) {
      // Wait before starting deletion
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && currentText === "") {
      // Move to next role
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    } else {
      // Type or delete characters
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-12 overflow-hidden border-b border-slate-900/40"
    >
      {/* Background Ambient Glows */}
      <div className="glow-bg glow-indigo -top-20 -left-20"></div>
      <div className="glow-bg glow-purple bottom-10 right-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Tersedia Untuk Projek Freelance / Fulltime
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-6">
          Hai, Saya <span className="text-gradient font-black">{personalInfo.name}</span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="font-heading font-medium text-lg sm:text-2xl lg:text-3xl text-slate-300">
            Seorang{" "}
            <span className="text-indigo-400 border-r-2 border-indigo-400 pr-1 animate-pulse font-bold">
              {currentText}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-10">
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <button
            onClick={() => handleScrollTo("projects")}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wide transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Lihat Portofolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Hubungi Saya
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative Grid SVG Pattern in Background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
