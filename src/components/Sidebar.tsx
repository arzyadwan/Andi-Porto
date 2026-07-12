"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Home, User, Cpu, FolderGit2, Briefcase, Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const menuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Sidebar (Left side, hidden on mobile/tablet) */}
      <aside className="hidden lg:flex flex-col justify-between w-[280px] h-screen fixed left-0 top-0 glass-effect border-r border-slate-800/40 p-8 z-40 text-slate-300">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mt-4">
          <div className="relative group cursor-pointer mb-4">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-950 flex items-center justify-center font-heading text-3xl font-extrabold text-white text-gradient">
              {personalInfo.name.split(" ").map(n => n[0]).join("")}
            </div>
          </div>
          <h2 className="font-heading font-bold text-xl text-white tracking-wide">{personalInfo.name}</h2>
          <p className="text-xs text-indigo-400 font-medium tracking-wider uppercase mt-1">{personalInfo.title}</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2 my-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer text-left ${
                  isActive
                    ? "bg-indigo-600/15 text-indigo-400 font-semibold border-l-2 border-indigo-500"
                    : "hover:bg-slate-800/40 hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                <span className="text-sm tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Social Links & Footer */}
        <div className="flex flex-col gap-6 items-center">
          <div className="flex gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/40 hover:border-indigo-500 hover:text-white transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/40 hover:border-indigo-500 hover:text-white transition-all cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {personalInfo.socials.instagram && (
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/40 hover:border-indigo-500 hover:text-white transition-all cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-[10px] text-slate-500 font-medium">© {new Date().getFullYear()} Andi Arzatwan</p>
        </div>
      </aside>

      {/* Mobile Sticky Navigation (Bottom overlay, visible only on mobile/tablet) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[420px] h-16 glass-effect border border-slate-800/50 rounded-2xl flex items-center justify-around px-4 py-2 z-50 shadow-2xl shadow-black/50">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all cursor-pointer ${
                isActive ? "text-indigo-400 scale-110" : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[9px] mt-0.5 tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
