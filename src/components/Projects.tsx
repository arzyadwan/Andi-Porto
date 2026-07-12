"use client";

import React, { useState } from "react";
import { projectsData, Project } from "../data/portfolioData";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


// Interactive React mockups to replace static images and show off Frontend coding skill!
function ProjectMockup({ id }: { id: string }) {
  if (id === "proj-1") {
    // Wargaku: Mobile-first citizen portal
    return (
      <div className="w-full h-full bg-[#050515] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[120px] h-[210px] bg-[#0c0c25] rounded-2xl border-2 border-indigo-500/30 p-2 shadow-lg shadow-indigo-500/20 flex flex-col relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-[6px] text-indigo-400 mb-1 px-1">
            <span>09:41</span>
            <div className="w-10 h-2 bg-indigo-500/10 rounded-full border border-indigo-500/20"></div>
          </div>
          {/* Header */}
          <div className="bg-indigo-600/20 rounded-md p-1.5 flex items-center gap-1 border border-indigo-500/20 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 flex items-center justify-center text-[5px] font-bold text-white">W</div>
            <span className="text-[7px] font-bold text-white">Wargaku</span>
          </div>
          {/* Feed Card */}
          <div className="bg-slate-900/60 rounded p-1 border border-slate-800/60 mb-1.5">
            <span className="text-[5px] text-emerald-400 font-semibold block uppercase">Pengumuman</span>
            <span className="text-[6px] text-white font-medium block mt-0.5 leading-tight">Gotong Royong Minggu</span>
          </div>
          <div className="bg-slate-900/60 rounded p-1 border border-slate-800/60 mb-1.5">
            <span className="text-[5px] text-purple-400 font-semibold block uppercase">Laporan</span>
            <span className="text-[6px] text-white font-medium block mt-0.5 leading-tight">Lampu Jalan Mati RT 02</span>
          </div>
          {/* Action Button */}
          <div className="mt-auto w-full py-1 bg-indigo-600 rounded text-center text-[6px] font-bold text-white border border-indigo-500/50">
            + Kirim Pengaduan
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-indigo-500/10 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  if (id === "proj-2") {
    // Winsip: Pharmacy cashier dashboard
    return (
      <div className="w-full h-full bg-[#03030c] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[200px] h-[130px] bg-[#090918] rounded-xl border border-slate-800 p-2 shadow-xl shadow-slate-950/80 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-1 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-[7px] font-bold text-slate-200">Winsip Kasir</span>
            </div>
            <span className="text-[6px] text-emerald-400 bg-emerald-950 px-1 rounded font-medium">Aktif</span>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-1.5 mb-1.5">
            <div className="bg-slate-900/80 border border-slate-800/40 rounded p-1">
              <span className="text-[4px] text-slate-500 block uppercase">Omset</span>
              <span className="text-[7px] text-white font-bold block mt-0.5">Rp 12.4M</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/40 rounded p-1">
              <span className="text-[4px] text-slate-500 block uppercase">Transaksi</span>
              <span className="text-[7px] text-white font-bold block mt-0.5">142 Item</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/40 rounded p-1">
              <span className="text-[4px] text-slate-500 block uppercase">Stok Menipis</span>
              <span className="text-[7px] text-rose-400 font-bold block mt-0.5">5 Obat</span>
            </div>
          </div>
          {/* Mini Bar Chart Mockup */}
          <div className="flex-1 flex gap-2 items-end justify-center px-2 pb-1 bg-slate-950/60 rounded border border-slate-800/30">
            <div className="w-3 h-8 bg-indigo-600/80 rounded-t"></div>
            <div className="w-3 h-12 bg-indigo-500/80 rounded-t"></div>
            <div className="w-3 h-6 bg-indigo-600/80 rounded-t"></div>
            <div className="w-3 h-16 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t"></div>
            <div className="w-3 h-10 bg-indigo-600/80 rounded-t"></div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "proj-3") {
    // Vibrance: Neon brutalism landing page
    return (
      <div className="w-full h-full bg-[#0b0416] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[180px] h-[130px] bg-black border-2 border-purple-500 p-2 shadow-[4px_4px_0px_#a855f7] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-black text-white bg-purple-500 px-1 py-0.5">VIBRANCE</span>
            <div className="w-3 h-3 bg-purple-500 rounded-full border border-black"></div>
          </div>
          <div className="my-2">
            <h4 className="text-[9px] font-extrabold text-white leading-none tracking-tight">
              WE SHAPE THE <span className="text-yellow-400">NEON</span> FUTURE.
            </h4>
            <p className="text-[5px] text-slate-400 mt-1 uppercase">Creative vector agency</p>
          </div>
          <div className="w-full py-1 bg-yellow-400 border border-black text-center text-[7px] font-black text-black">
            EXPLORE WORKS
          </div>
        </div>
      </div>
    );
  }

  if (id === "proj-4") {
    // QR Generator Pro Max
    return (
      <div className="w-full h-full bg-[#050e0e] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[180px] h-[130px] bg-[#0a1b1b] rounded-xl border border-emerald-500/30 p-2.5 flex gap-3 items-center">
          {/* Customize options */}
          <div className="flex-1 space-y-2">
            <div className="h-2 w-16 bg-emerald-500/10 rounded border border-emerald-500/20"></div>
            <div className="h-2 w-12 bg-emerald-500/10 rounded border border-emerald-500/20"></div>
            <div className="h-2.5 w-full bg-emerald-500 rounded text-[5px] text-black font-bold flex items-center justify-center">
              Generate QR
            </div>
          </div>
          {/* QR Code Container */}
          <div className="w-16 h-16 bg-[#030808] border border-emerald-500/40 rounded flex flex-col p-1 gap-1 items-center justify-center relative">
            {/* Mock QR Grid Pattern */}
            <div className="grid grid-cols-4 gap-0.5 w-12 h-12">
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-transparent"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
              
              <div className="bg-transparent"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-transparent"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
              
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-transparent"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-transparent"></div>
              
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
              <div className="bg-transparent"></div>
              <div className="bg-emerald-400 rounded-sm"></div>
            </div>
            {/* Center Logo Dot */}
            <div className="absolute w-3 h-3 rounded-full bg-emerald-950 border border-emerald-400 flex items-center justify-center text-[4px] font-bold text-white">Q</div>
          </div>
        </div>
      </div>
    );
  }

  // Default: NewsPoint Portal
  return (
    <div className="w-full h-full bg-[#100905] relative overflow-hidden flex items-center justify-center p-4">
      <div className="w-[120px] h-[210px] bg-[#22130c] rounded-2xl border-2 border-orange-500/30 p-2 shadow-lg flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-orange-500/20 pb-1 mb-2">
          <span className="text-[7px] font-black text-orange-400">NewsPoint</span>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
        </div>
        {/* Hero image mock */}
        <div className="w-full h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-md p-1.5 flex flex-col justify-end">
          <span className="text-[6px] text-white font-extrabold leading-none bg-black/40 p-0.5 rounded">Rilis Teknologi Baru</span>
        </div>
        {/* Feed lists */}
        <div className="mt-2 space-y-1.5">
          <div className="h-5 w-full bg-slate-900/60 rounded border border-slate-800/40 p-0.5 flex gap-1 items-center">
            <div className="w-4 h-4 bg-orange-500/20 rounded"></div>
            <div className="flex-1 h-1.5 bg-slate-700 rounded"></div>
          </div>
          <div className="h-5 w-full bg-slate-900/60 rounded border border-slate-800/40 p-0.5 flex gap-1 items-center">
            <div className="w-4 h-4 bg-orange-500/20 rounded"></div>
            <div className="flex-1 h-1.5 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Project["category"] | "All">("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-12 border-b border-slate-900/40"
    >
      <div className="glow-bg glow-purple top-1/3 -right-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Portofolio</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Projek Pilihan Saya
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800/50 self-start md:self-auto">
            {(["All", "Web App", "Design"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {filter === "All" ? "Semua" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-effect rounded-2xl overflow-hidden border border-slate-800/40 flex flex-col hover:border-indigo-500/30 group transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Interactive Mockup Container */}
              <div className="h-56 relative w-full border-b border-slate-800/40 overflow-hidden">
                <ProjectMockup id={project.id} />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white hover:scale-110 transition-all cursor-pointer"
                    title="View Source Code"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white hover:scale-110 transition-all cursor-pointer"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Tag */}
                  <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    {project.category}
                  </span>
                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white mt-3 mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900/60">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-slate-400 bg-slate-950 border border-slate-900 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
