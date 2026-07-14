"use client";

import React from "react";
import { experienceTimeline } from "../data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Sub-component so each timeline item has its own hook call (valid React rules)
function TimelineItem({
  item,
  delay,
}: {
  item: (typeof experienceTimeline)[number];
  delay: number;
}) {
  const itemRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  });
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <div
      ref={itemRef}
      className="scroll-fade-left relative pl-8 md:pl-10 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Timeline Dot Indicator */}
      <div className="absolute -left-3.5 top-1.5 flex items-center justify-center w-7 h-7 rounded-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-indigo-500 dark:text-indigo-400 group-hover:border-indigo-500 group-hover:text-white transition-all duration-300 shadow-md">
        <Icon className="w-3.5 h-3.5" />
      </div>

      {/* Date / Location Panel for Desktop */}
      <div className="hidden md:block absolute -left-[140px] top-1.5 w-[120px] text-right">
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block tracking-wider">
          {item.period}
        </span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium block mt-1 uppercase tracking-wide">
          {item.location.split(",")[0]}
        </span>
      </div>

      {/* Timeline Content Card */}
      <div className="glass-effect p-6 rounded-2xl border border-slate-200 dark:border-slate-800/40 hover:border-indigo-500/20 hover:bg-slate-200/20 dark:hover:bg-slate-900/20 transition-all duration-300">
        {/* Header info (mobile only) */}
        <div className="md:hidden flex flex-wrap gap-x-4 gap-y-1 items-center mb-3">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {item.period}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
        </div>

        {/* Role Title & Company */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-text-primary tracking-wide">
            {item.role}
          </h3>
          <span className="text-sm font-semibold text-text-secondary bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-900 px-3 py-1 rounded-xl self-start sm:self-auto">
            {item.company}
          </span>
        </div>

        {/* Bullet description points */}
        <ul className="space-y-2 text-text-secondary text-sm leading-relaxed list-disc list-inside pl-1">
          {item.description.map((bullet, i) => (
            <li key={i} className="marker:text-indigo-500">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const titleRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="experience"
      className="relative py-24 px-4 md:px-12 border-b border-slate-200 dark:border-slate-900/40"
    >
      <div className="glow-bg glow-blue bottom-10 left-1/3"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="scroll-fade-up flex flex-col mb-16">
          <span className="text-xs uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-semibold mb-2">
            Riwayat
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Pengalaman &amp; Pendidikan
          </h2>
          <div className="section-line w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-300 dark:border-slate-800/80 ml-4 md:ml-32 space-y-12">
          {experienceTimeline.map((item, idx) => (
            <TimelineItem key={item.id} item={item} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
