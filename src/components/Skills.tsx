"use client";

import React from "react";
import { skillCategories } from "../data/portfolioData";
import { 
  Laptop, 
  Database, 
  Wrench, 
  Paintbrush, 
  Cpu, 
  Server, 
  GitBranch, 
  Layers,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import StackIcon from "tech-stack-icons";
import { getTechIconNames } from "@/utils/techIcons";

export default function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  // Extract skills from data structure for custom mapping
  const frontendSkills = skillCategories.find(c => c.title.toLowerCase().includes("frontend"))?.skills || [];
  const backendSkills = skillCategories.find(c => c.title.toLowerCase().includes("backend"))?.skills || [];
  const toolsSkills = skillCategories.find(c => c.title.toLowerCase().includes("tools"))?.skills || [];
  const designSkills = skillCategories.find(c => c.title.toLowerCase().includes("design"))?.skills || [];

  const getTechColorClass = (techName: string) => {
    const n = techName.toLowerCase();
    if (n.includes("react") || n.includes("next")) return "border-sky-500/30 shadow-sky-500/20 bg-sky-500/5";
    if (n.includes("typescript")) return "border-blue-500/30 shadow-blue-500/20 bg-blue-500/5";
    if (n.includes("tailwind")) return "border-teal-500/30 shadow-teal-500/20 bg-teal-500/5";
    if (n.includes("html") || n.includes("css")) return "border-orange-500/30 shadow-orange-500/20 bg-orange-500/5";
    if (n.includes("zustand") || n.includes("redux")) return "border-purple-500/30 shadow-purple-500/20 bg-purple-500/5";
    if (n.includes("node") || n.includes("express")) return "border-green-500/30 shadow-green-500/20 bg-green-500/5";
    if (n.includes("api") || n.includes("restful")) return "border-cyan-500/30 shadow-cyan-500/20 bg-cyan-500/5";
    if (n.includes("postgres") || n.includes("mongo") || n.includes("database")) return "border-emerald-500/30 shadow-emerald-500/20 bg-emerald-500/5";
    if (n.includes("graphql")) return "border-pink-500/30 shadow-pink-500/20 bg-pink-500/5";
    if (n.includes("git")) return "border-orange-600/30 shadow-orange-600/20 bg-orange-600/5";
    if (n.includes("docker")) return "border-blue-600/30 shadow-blue-600/20 bg-blue-600/5";
    if (n.includes("vercel") || n.includes("netlify")) return "border-slate-500/30 shadow-slate-500/20 bg-slate-500/5";
    if (n.includes("figma")) return "border-rose-500/30 shadow-rose-500/20 bg-rose-500/5";
    if (n.includes("component") || n.includes("storybook")) return "border-pink-500/30 shadow-pink-500/20 bg-pink-500/5";
    if (n.includes("token") || n.includes("style")) return "border-amber-500/30 shadow-amber-500/20 bg-amber-500/5";
    return "border-indigo-500/30 shadow-indigo-500/20 bg-indigo-500/5";
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 md:px-12 border-b border-slate-200 dark:border-slate-900/40 overflow-hidden"
    >
      {/* CSS Animation Injector */}
      <style>{`
        @keyframes float-y-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes float-y-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1.5deg); }
        }
        @keyframes float-y-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.8deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .anim-float-1 { animation: float-y-1 7s ease-in-out infinite; }
        .anim-float-2 { animation: float-y-2 9s ease-in-out infinite; }
        .anim-float-3 { animation: float-y-3 6s ease-in-out infinite; }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .grid-bg-dot {
          background-image: radial-gradient(rgba(99, 102, 241, 0.08) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
        .dark .grid-bg-dot {
          background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1.5px, transparent 1.5px);
        }
      `}</style>

      {/* Background ambient glows */}
      <div className="glow-bg glow-indigo top-20 right-20 animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="glow-bg glow-purple bottom-10 left-10 animate-pulse" style={{ animationDuration: "10s" }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          ref={titleRef}
          data-visible={titleVisible ? "true" : undefined}
          className="scroll-fade-up flex flex-col mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-2">
            Keahlian
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Senjata &amp; Teknologi
          </h2>
          <div className="section-line w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={gridRef}
          data-visible={gridVisible ? "true" : undefined}
          className="scroll-fade-up grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children"
        >
          
          {/* Bento Card 1: Frontend Masterclass (Col Span 2, Row Span 2) */}
          <div 
            className="md:col-span-2 md:row-span-2 glass-effect rounded-3xl border border-slate-200 dark:border-slate-800/40 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 min-h-[380px]"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid-bg-dot pointer-events-none opacity-80"></div>
            
            {/* Ambient inner glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all duration-300"></div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Frontend Engineering
                </h3>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm max-w-md">
                Pembangunan antarmuka web modern yang estetik, fluid, responsive, dan performan dengan state management modern.
              </p>
            </div>

            {/* Constellation Workspace of Orbiting Floating Technology Logos */}
            <div className="relative h-44 sm:h-56 mt-6 flex items-center justify-center">
              {frontendSkills.map((skill, idx) => {
                const matched = getTechIconNames(skill.name);
                const colorClass = getTechColorClass(skill.name);
                
                // Set custom offset positions to scatter them beautifully in a modern layout
                const positions = [
                  "top-[10%] left-[10%] anim-float-1",
                  "top-[50%] left-[25%] anim-float-2",
                  "top-[20%] right-[20%] anim-float-3",
                  "bottom-[15%] right-[30%] anim-float-1",
                  "top-[60%] right-[10%] anim-float-2"
                ];

                return (
                  <div
                    key={idx}
                    title={skill.name}
                    className={`absolute ${positions[idx] || "top-1/2 left-1/2"} flex items-center justify-center p-4 rounded-2xl border bg-white/70 dark:bg-slate-900/60 shadow-lg backdrop-blur-md cursor-help transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:bg-white dark:hover:bg-slate-900 ${colorClass}`}
                  >
                    <div className="flex gap-2">
                      {matched.map(icon => (
                        <StackIcon key={icon} name={icon as any} className="w-8 h-8 shrink-0" />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bento Card 2: Backend Architecture (Col Span 1, Row Span 1) */}
          <div 
            className="md:col-span-1 glass-effect rounded-3xl border border-slate-200 dark:border-slate-800/40 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 min-h-[220px]"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-md text-text-primary">
                  Backend Architecture
                </h3>
              </div>
              <p className="text-text-secondary text-[11px] sm:text-xs">
                Perancangan sistem API RESTful, GraphQL, dan modeling basis data terdistribusi yang aman dan terukur.
              </p>
            </div>

            {/* Micro connectivity diagram showing Backend Technologies */}
            <div className="relative h-20 flex items-center justify-between px-2 mt-4">
              {/* Floating connector background */}
              <svg className="absolute inset-0 w-full h-full text-slate-200 dark:text-slate-800/60 pointer-events-none z-0" fill="none">
                <path d="M 20 40 Q 90 20 160 40 T 300 40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="group-hover:text-purple-500/40 transition-colors duration-300" />
              </svg>

              {backendSkills.map((skill, idx) => {
                const matched = getTechIconNames(skill.name);
                const colorClass = getTechColorClass(skill.name);
                if (matched.length === 0) return null;

                return (
                  <div
                    key={idx}
                    title={skill.name}
                    className={`relative z-10 p-2.5 rounded-xl border bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-md cursor-help transition-all duration-300 hover:scale-115 hover:-translate-y-1 ${colorClass}`}
                  >
                    <StackIcon name={matched[0] as any} className="w-5 h-5 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bento Card 3: DevOps & Tools (Col Span 1, Row Span 1) */}
          <div 
            className="md:col-span-1 glass-effect rounded-3xl border border-slate-200 dark:border-slate-800/40 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 min-h-[220px]"
          >
            <div className="absolute -top-10 -left-10 w-45 h-45 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-md text-text-primary">
                  DevOps &amp; Infrastructure
                </h3>
              </div>
              <p className="text-text-secondary text-[11px] sm:text-xs">
                Manajemen deployment repositori, containerization Docker, serta sistem integrasi kontinu (CI/CD).
              </p>
            </div>

            {/* Conveyor Marquee Belt of Tools */}
            <div className="relative mt-4 overflow-hidden w-full py-2.5 border-y border-slate-100 dark:border-slate-800/30">
              <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
                {/* Render double array to allow continuous infinite loop */}
                {[...toolsSkills, ...toolsSkills].map((skill, idx) => {
                  const matched = getTechIconNames(skill.name);
                  const colorClass = getTechColorClass(skill.name);
                  if (matched.length === 0) return null;

                  return (
                    <div
                      key={idx}
                      title={skill.name}
                      className={`p-2 rounded-xl border bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm cursor-help transition-all duration-300 hover:scale-110 ${colorClass}`}
                    >
                      <StackIcon name={matched[0] as any} className="w-5 h-5 shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bento Card 4: Design Systems (Col Span 1, Row Span 2) */}
          <div 
            className="md:col-span-1 md:row-span-2 glass-effect rounded-3xl border border-slate-200 dark:border-slate-800/40 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 min-h-[380px]"
          >
            {/* Dot Grid Background */}
            <div className="absolute inset-0 grid-bg-dot opacity-40 pointer-events-none"></div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                  <Paintbrush className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-md text-text-primary">
                  Design &amp; Tokens
                </h3>
              </div>
              <p className="text-text-secondary text-[11px] sm:text-xs">
                Implementasi desain antarmuka terpadu, prototyping Figma, komponen terdokumentasi, serta design tokens yang sinkron.
              </p>
            </div>

            {/* Design canvas blueprint mock workspace */}
            <div className="relative h-60 mt-6 flex items-center justify-center bg-slate-100/30 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/30 rounded-2xl overflow-hidden p-4">
              
              {/* Figma Center Core */}
              <div 
                title="Figma (UI/UX Design)"
                className="z-10 p-5 rounded-2xl border bg-white dark:bg-slate-900 border-rose-500/30 shadow-lg shadow-rose-500/10 hover:scale-115 transition-transform duration-300 cursor-help"
              >
                <StackIcon name="figma" className="w-10 h-10 animate-pulse" style={{ animationDuration: "3s" }} />
              </div>

              {/* Satellite design nodes */}
              {designSkills.filter(s => !s.name.toLowerCase().includes("figma")).map((skill, idx) => {
                const matched = getTechIconNames(skill.name);
                const colorClass = getTechColorClass(skill.name);
                const positions = [
                  "absolute top-6 left-6 anim-float-2",
                  "absolute bottom-6 right-6 anim-float-3"
                ];

                return (
                  <div
                    key={idx}
                    title={skill.name}
                    className={`p-3 rounded-xl border bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-md cursor-help transition-all duration-300 hover:scale-115 ${positions[idx] || ""} ${colorClass}`}
                  >
                    {matched.length > 0 ? (
                      <StackIcon name={matched[0] as any} className="w-6 h-6 shrink-0" />
                    ) : (
                      <Layers className="w-6 h-6 text-pink-500 shrink-0" />
                    )}
                  </div>
                );
              })}

              {/* Visual crosshair alignment markers to look like design tools */}
              <div className="absolute inset-x-0 h-px border-t border-dashed border-slate-200 dark:border-slate-800/60 pointer-events-none"></div>
              <div className="absolute inset-y-0 w-px border-l border-dashed border-slate-200 dark:border-slate-800/60 pointer-events-none"></div>
              <span className="absolute top-2 left-2 text-[8px] text-slate-400 font-mono">X: 180 Y: 240</span>
              <span className="absolute bottom-2 right-2 text-[8px] text-slate-400 font-mono">100% SCALE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
