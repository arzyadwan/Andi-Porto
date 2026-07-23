"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import StackIcon from "tech-stack-icons";

interface TechItem {
  name: string;
  icon: string;
}

export default function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  // 26 technologies compiled from your projects and skills data
  const allTechStacks: TechItem[] = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "js" },
    { name: "Zustand", icon: "zustand" },
    { name: "Redux", icon: "redux" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "expressjs" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
    { name: "Netlify", icon: "netlify" },
    { name: "Figma", icon: "figma" },
    { name: "Storybook", icon: "storybook" },
    { name: "Sanity.io", icon: "sanity" },
    { name: "Solidity", icon: "solidity" },
    { name: "Supabase", icon: "supabase" },
    { name: "Vite", icon: "vitejs" },
    { name: "Python", icon: "python" }
  ];

  const getTechColorClass = (techName: string) => {
    const n = techName.toLowerCase();
    if (n.includes("react") || n.includes("next")) return "border-sky-500/20 shadow-sky-500/10 hover:border-sky-400/40 hover:shadow-sky-400/20";
    if (n.includes("typescript")) return "border-blue-500/20 shadow-blue-500/10 hover:border-blue-400/40 hover:shadow-blue-400/20";
    if (n.includes("tailwind")) return "border-teal-500/20 shadow-teal-500/10 hover:border-teal-400/40 hover:shadow-teal-400/20";
    if (n.includes("html") || n.includes("css")) return "border-orange-500/20 shadow-orange-500/10 hover:border-orange-400/40 hover:shadow-orange-400/20";
    if (n.includes("js") && !n.includes("next") && !n.includes("express")) return "border-yellow-500/20 shadow-yellow-500/10 hover:border-yellow-400/40 hover:shadow-yellow-400/20";
    if (n.includes("zustand") || n.includes("redux")) return "border-purple-500/20 shadow-purple-500/10 hover:border-purple-400/40 hover:shadow-purple-400/20";
    if (n.includes("node") || n.includes("express")) return "border-green-500/20 shadow-green-500/10 hover:border-green-400/40 hover:shadow-green-400/20";
    if (n.includes("postgres") || n.includes("mongo") || n.includes("database") || n.includes("db")) return "border-emerald-500/20 shadow-emerald-500/10 hover:border-emerald-400/40 hover:shadow-emerald-400/20";
    if (n.includes("graphql")) return "border-pink-500/20 shadow-pink-500/10 hover:border-pink-400/40 hover:shadow-pink-400/20";
    if (n.includes("git")) return "border-orange-600/20 shadow-orange-600/10 hover:border-orange-500/40 hover:shadow-orange-500/20";
    if (n.includes("docker")) return "border-blue-600/20 shadow-blue-600/10 hover:border-blue-500/40 hover:shadow-blue-500/20";
    if (n.includes("figma")) return "border-rose-500/20 shadow-rose-500/10 hover:border-rose-400/40 hover:shadow-rose-400/20";
    if (n.includes("storybook")) return "border-pink-500/20 shadow-pink-500/10 hover:border-pink-400/40 hover:shadow-pink-400/20";
    if (n.includes("sanity")) return "border-red-500/20 shadow-red-500/10 hover:border-red-400/40 hover:shadow-red-400/20";
    if (n.includes("solidity")) return "border-indigo-500/20 shadow-indigo-500/10 hover:border-indigo-400/40 hover:shadow-indigo-400/20";
    if (n.includes("supabase")) return "border-emerald-600/20 shadow-emerald-600/10 hover:border-emerald-500/40 hover:shadow-emerald-500/20";
    if (n.includes("python")) return "border-yellow-600/20 shadow-yellow-600/10 hover:border-yellow-500/40 hover:shadow-yellow-500/20";
    return "border-slate-500/20 shadow-slate-500/10 hover:border-slate-400/40 hover:shadow-slate-400/20";
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
          50% { transform: translateY(-13px) rotate(-1.2deg); }
        }
        @keyframes float-y-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.8deg); }
        }
        .anim-float-1 { animation: float-y-1 7s ease-in-out infinite; }
        .anim-float-2 { animation: float-y-2 9s ease-in-out infinite; }
        .anim-float-3 { animation: float-y-3 6s ease-in-out infinite; }
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
          className="scroll-fade-up flex flex-col mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-2">
            Keahlian
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Senjata &amp; Teknologi
          </h2>
          <div className="section-line w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* Unified Tech Canvas */}
        <div
          ref={gridRef}
          data-visible={gridVisible ? "true" : undefined}
          className="scroll-fade-up glass-effect rounded-3xl border border-slate-200 dark:border-slate-800/40 p-8 md:p-12 overflow-hidden relative group hover:border-indigo-500/20 transition-all duration-300"
        >
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 grid-bg-dot pointer-events-none opacity-80"></div>
          
          {/* Ambient inner glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all duration-300"></div>

          <div className="relative z-10 max-w-2xl mb-12 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary">
                Tech Stack Universe
              </h3>
            </div>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              Bahasa pemrograman, framework, basis data, dan perkakas pengembangan yang saya gunakan secara aktif untuk membangun aplikasi web performan, terdesentralisasi, dan berpusat pada pengguna.
            </p>
          </div>

          {/* Liquid Floating Grid of Logos */}
          <div className="relative z-10 flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
            {allTechStacks.map((tech, idx) => {
              // Alternate float animations for parallax-like floating effect
              const floatClass = idx % 3 === 0 ? "anim-float-1" : idx % 3 === 1 ? "anim-float-2" : "anim-float-3";
              const colorClass = getTechColorClass(tech.name);

              return (
                <div
                  key={idx}
                  title={tech.name}
                  className={`flex items-center justify-center p-4 sm:p-5 rounded-2xl border bg-white/70 dark:bg-slate-900/60 shadow-lg backdrop-blur-md cursor-help transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:bg-white dark:hover:bg-slate-900 hover:[animation-play-state:paused] ${floatClass} ${colorClass}`}
                >
                  <StackIcon name={tech.icon as any} className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
