"use client";

import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Award, FolderCheck, Users, Code2, GraduationCap } from "lucide-react";

export default function About() {
  const getIcon = (label: string) => {
    if (label.includes("Tahun")) return Award;
    if (label.includes("Projek")) return FolderCheck;
    return Users;
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 md:px-12 border-b border-slate-900/40"
    >
      <div className="glow-bg glow-purple -bottom-20 -left-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Tentang Saya</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Siapa Andi Arzatwan?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Narrative Story (Left) */}
          <div className="md:col-span-7 space-y-6 text-slate-400 leading-relaxed text-sm sm:text-base">
            <p>
              Halo! Saya adalah seorang <strong className="text-white">Frontend Engineer</strong> yang memiliki kecintaan mendalam pada pembuatan desain antarmuka web interaktif yang modern dan fungsional. Perjalanan saya di dunia pemrograman dimulai dari ketertarikan sederhana bagaimana baris kode bisa menjelma menjadi karya visual yang interaktif di internet.
            </p>
            <p>
              Dengan bekal pendidikan Informatika dan pengalaman praktis selama lebih dari <strong className="text-white">3 tahun</strong>, saya mengkhususkan diri dalam pengembangan SPA/PWA menggunakan ekosistem <strong className="text-indigo-400">Next.js, React, TypeScript, dan Tailwind CSS</strong>.
            </p>
            <p>
              Bagi saya, menulis kode bukan sekadar tentang fungsionalitas, tetapi juga tentang seni menyusun arsitektur kode yang bersih, mudah dirawat, dan dioptimasi agar memuat secepat mungkin demi kepuasan pengguna akhir.
            </p>
            
            {/* Short quick bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-semibold">Kode Piksel-Presisi</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-semibold">Lulusan Terbaik Informatika</span>
              </div>
            </div>
          </div>

          {/* Stats Cards (Right) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {personalInfo.stats.map((stat, i) => {
              const Icon = getIcon(stat.label);
              return (
                <div
                  key={i}
                  className="glass-effect p-6 rounded-2xl border border-slate-800/40 flex items-center gap-6 hover:border-indigo-500/40 hover:bg-slate-900/40 transition-all duration-300 group transform hover:-translate-y-1"
                >
                  <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                      {stat.label}
                    </p>
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
