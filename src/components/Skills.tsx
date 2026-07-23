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

  const getTechGlowGradient = (techName: string) => {
    const n = techName.toLowerCase();
    if (n.includes("react") || n.includes("next")) return "from-sky-400 to-blue-600";
    if (n.includes("typescript")) return "from-blue-500 to-indigo-600";
    if (n.includes("tailwind")) return "from-teal-400 to-emerald-500";
    if (n.includes("html") || n.includes("css")) return "from-orange-400 to-rose-500";
    if (n.includes("js") && !n.includes("next") && !n.includes("express")) return "from-yellow-400 to-amber-500";
    if (n.includes("zustand") || n.includes("redux")) return "from-purple-500 to-violet-600";
    if (n.includes("node") || n.includes("express")) return "from-green-400 to-emerald-600";
    if (n.includes("postgres") || n.includes("mongo") || n.includes("database") || n.includes("db")) return "from-cyan-500 to-emerald-500";
    if (n.includes("graphql")) return "from-pink-500 to-rose-600";
    if (n.includes("git")) return "from-orange-600 to-red-500";
    if (n.includes("docker")) return "from-blue-600 to-sky-400";
    if (n.includes("figma")) return "from-rose-500 to-pink-600";
    if (n.includes("storybook")) return "from-pink-500 to-purple-500";
    if (n.includes("sanity")) return "from-red-500 to-rose-600";
    if (n.includes("solidity")) return "from-indigo-500 to-purple-600";
    if (n.includes("supabase")) return "from-emerald-500 to-green-600";
    if (n.includes("python")) return "from-yellow-500 to-blue-500";
    return "from-slate-400 to-slate-600";
  };

  const getTechBgColor = (techName: string) => {
    const n = techName.toLowerCase();
    if (n.includes("react") || n.includes("next")) return "bg-sky-50 dark:bg-sky-950/15";
    if (n.includes("typescript")) return "bg-blue-50 dark:bg-blue-950/15";
    if (n.includes("tailwind")) return "bg-teal-50 dark:bg-teal-950/15";
    if (n.includes("html") || n.includes("css")) return "bg-orange-50 dark:bg-orange-950/15";
    if (n.includes("js") && !n.includes("next") && !n.includes("express")) return "bg-yellow-50 dark:bg-yellow-950/15";
    if (n.includes("zustand") || n.includes("redux")) return "bg-purple-50 dark:bg-purple-950/15";
    if (n.includes("node") || n.includes("express")) return "bg-green-50 dark:bg-green-950/15";
    if (n.includes("postgres") || n.includes("mongo") || n.includes("database") || n.includes("db")) return "bg-cyan-50 dark:bg-cyan-950/15";
    if (n.includes("graphql")) return "bg-pink-50 dark:bg-pink-950/15";
    if (n.includes("git")) return "bg-orange-50 dark:bg-orange-950/15";
    if (n.includes("docker")) return "bg-blue-50 dark:bg-blue-950/15";
    if (n.includes("figma")) return "bg-rose-50 dark:bg-rose-950/15";
    if (n.includes("storybook")) return "bg-pink-50 dark:bg-pink-950/15";
    if (n.includes("sanity")) return "bg-red-50 dark:bg-rose-950/15";
    if (n.includes("solidity")) return "bg-indigo-50 dark:bg-indigo-950/15";
    if (n.includes("supabase")) return "bg-emerald-50 dark:bg-emerald-950/15";
    if (n.includes("python")) return "bg-yellow-50 dark:bg-yellow-950/15";
    return "bg-slate-50 dark:bg-slate-950/15";
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

          {/* Liquid Floating Grid of Honeycomb Hexagon Logos */}
          <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-8 justify-center items-center">
            {allTechStacks.map((tech, idx) => {
              // Alternate float animations for parallax-like floating effect
              const floatClass = idx % 3 === 0 ? "anim-float-1" : idx % 3 === 1 ? "anim-float-2" : "anim-float-3";
              const gradient = getTechGlowGradient(tech.name);

              return (
                <div
                  key={idx}
                  title={tech.name}
                  className={`relative group cursor-help transition-all duration-300 hover:scale-115 hover:-translate-y-1.5 hover:[animation-play-state:paused] ${floatClass}`}
                >
                  {/* Hexagon Background Glow */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  ></div>

                  {/* Outer Hexagon (serving as border gradient) */}
                  <div 
                    className={`w-[72px] h-[80px] flex items-center justify-center transition-all duration-300 bg-slate-200 dark:bg-slate-800/80 group-hover:bg-gradient-to-br group-hover:${gradient}`}
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    {/* Inner Hexagon (body card background with brand color) */}
                    <div 
                      className={`w-[68px] h-[76px] ${getTechBgColor(tech.name)} flex items-center justify-center transition-colors duration-300 group-hover:bg-white dark:group-hover:bg-[#0c0b24]`}
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                      <StackIcon name={tech.icon as any} className="w-8 h-8 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
