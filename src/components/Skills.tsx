"use client";

import React, { useEffect, useState, useRef } from "react";
import { skillCategories } from "../data/portfolioData";
import { Laptop, Database, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const getCategoryIcon = (title: string) => {
    if (title.includes("Frontend")) return Laptop;
    if (title.includes("Backend")) return Database;
    return PenTool;
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

        {/* Categories Grid */}
        <div
          ref={gridRef}
          data-visible={gridVisible ? "true" : undefined}
          className="scroll-fade-up grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children"
        >
          {skillCategories.map((category, index) => {
            const Icon = getCategoryIcon(category.title);
            return (
              <div
                key={index}
                data-visible={gridVisible ? "true" : undefined}
                className="scroll-zoom-in glass-effect p-8 rounded-2xl border border-slate-200 dark:border-slate-800/40 flex flex-col hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="space-y-6 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-text-secondary">
                          {skill.name}
                        </span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container — track bg is visible in both modes */}
                      <div className="h-2 w-full bg-slate-300 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: gridVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 80}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
