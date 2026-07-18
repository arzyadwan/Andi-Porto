"use client";

import React from "react";
import { skillCategories } from "../data/portfolioData";
import { 
  Laptop, 
  Database, 
  Wrench, 
  Paintbrush, 
  Cpu, 
  FileCode, 
  Layout, 
  Network, 
  Server, 
  Workflow, 
  GitBranch, 
  Container, 
  Figma, 
  Layers, 
  FileText
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const getCategoryIcon = (title: string) => {
    const lowercaseTitle = title.toLowerCase();
    if (lowercaseTitle.includes("frontend")) return Laptop;
    if (lowercaseTitle.includes("backend")) return Database;
    if (lowercaseTitle.includes("tools")) return Wrench;
    return Paintbrush; // Design System
  };

  const getSkillConfig = (name: string) => {
    const lowercaseName = name.toLowerCase();
    
    if (lowercaseName.includes("react") || lowercaseName.includes("next")) {
      return { icon: Cpu, color: "text-sky-500", bg: "bg-sky-500/10", border: "hover:border-sky-500/30", glow: "shadow-sky-500/5" };
    }
    if (lowercaseName.includes("typescript")) {
      return { icon: FileCode, color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/30", glow: "shadow-blue-500/5" };
    }
    if (lowercaseName.includes("tailwind")) {
      return { icon: Paintbrush, color: "text-teal-500", bg: "bg-teal-500/10", border: "hover:border-teal-500/30", glow: "shadow-teal-500/5" };
    }
    if (lowercaseName.includes("html") || lowercaseName.includes("css")) {
      return { icon: Layout, color: "text-orange-500", bg: "bg-orange-500/10", border: "hover:border-orange-500/30", glow: "shadow-orange-500/5" };
    }
    if (lowercaseName.includes("state") || lowercaseName.includes("zustand") || lowercaseName.includes("redux")) {
      return { icon: Network, color: "text-purple-500", bg: "bg-purple-500/10", border: "hover:border-purple-500/30", glow: "shadow-purple-500/5" };
    }
    if (lowercaseName.includes("node") || lowercaseName.includes("express")) {
      return { icon: Server, color: "text-green-500", bg: "bg-green-500/10", border: "hover:border-green-500/30", glow: "shadow-green-500/5" };
    }
    if (lowercaseName.includes("api") || lowercaseName.includes("restful")) {
      return { icon: Workflow, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/30", glow: "shadow-emerald-500/5" };
    }
    if (lowercaseName.includes("postgresql") || lowercaseName.includes("mongodb") || lowercaseName.includes("database")) {
      return { icon: Database, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "hover:border-cyan-500/30", glow: "shadow-cyan-500/5" };
    }
    if (lowercaseName.includes("graphql")) {
      return { icon: GitBranch, color: "text-pink-500", bg: "bg-pink-500/10", border: "hover:border-pink-500/30", glow: "shadow-pink-500/5" };
    }
    if (lowercaseName.includes("git")) {
      return { icon: GitBranch, color: "text-orange-600", bg: "bg-orange-600/10", border: "hover:border-orange-600/30", glow: "shadow-orange-600/5" };
    }
    if (lowercaseName.includes("docker")) {
      return { icon: Container, color: "text-blue-600", bg: "bg-blue-600/10", border: "hover:border-blue-600/30", glow: "shadow-blue-600/5" };
    }
    if (lowercaseName.includes("vercel") || lowercaseName.includes("netlify")) {
      return { icon: Server, color: "text-slate-800 dark:text-slate-100", bg: "bg-slate-500/10", border: "hover:border-slate-500/30", glow: "shadow-slate-500/5" };
    }
    if (lowercaseName.includes("figma")) {
      return { icon: Figma, color: "text-rose-500", bg: "bg-rose-500/10", border: "hover:border-rose-500/30", glow: "shadow-rose-500/5" };
    }
    if (lowercaseName.includes("component") || lowercaseName.includes("story")) {
      return { icon: Layers, color: "text-violet-500", bg: "bg-violet-500/10", border: "hover:border-violet-500/30", glow: "shadow-violet-500/5" };
    }
    if (lowercaseName.includes("token") || lowercaseName.includes("style")) {
      return { icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10", border: "hover:border-amber-500/30", glow: "shadow-amber-500/5" };
    }

    return { icon: Cpu, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "hover:border-indigo-500/30", glow: "shadow-indigo-500/5" };
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Familiar";
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 md:px-12 border-b border-slate-200 dark:border-slate-900/40"
    >
      <div className="glow-bg glow-indigo top-20 right-20"></div>

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

        {/* Categories Grid - 2x2 layout */}
        <div
          ref={gridRef}
          data-visible={gridVisible ? "true" : undefined}
          className="scroll-fade-up grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children"
        >
          {skillCategories.map((category, index) => {
            const CatIcon = getCategoryIcon(category.title);
            return (
              <div
                key={index}
                data-visible={gridVisible ? "true" : undefined}
                className="scroll-zoom-in glass-effect p-8 rounded-2xl border border-slate-200 dark:border-slate-800/40 flex flex-col hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-text-primary">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-text-secondary uppercase tracking-wider mt-0.5">
                      {category.skills.length} Teknologi
                    </p>
                  </div>
                </div>

                {/* Skill List as Grid of Icons/Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {category.skills.map((skill, skillIndex) => {
                    const config = getSkillConfig(skill.name);
                    const SkillIcon = config.icon;
                    return (
                      <div 
                        key={skillIndex} 
                        className={`flex items-center gap-3.5 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 hover:bg-white dark:hover:bg-slate-900/40 transition-all duration-300 group shadow-sm hover:shadow-md ${config.border} ${config.glow}`}
                      >
                        {/* Technology Icon Wrapper */}
                        <div className={`p-2.5 rounded-lg transition-transform duration-300 group-hover:scale-110 ${config.bg} ${config.color}`}>
                          <SkillIcon className="w-5 h-5" />
                        </div>
                        
                        {/* Technology Label & Level */}
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold text-text-primary text-sm tracking-wide truncate group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-text-secondary font-medium mt-0.5">
                            {skill.level}% • {getProficiencyLabel(skill.level)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
