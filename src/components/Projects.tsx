"use client";

import React, { useState } from "react";
import { projectsData, Project } from "../data/portfolioData";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


// Interactive React mockups to replace static images and show off Frontend coding skill!
function ProjectMockup({ id }: { id: string }) {
  if (id === "proj-1") {
    // Amali Admin Dashboard
    return (
      <div className="w-full h-full bg-[#030014] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[200px] h-[130px] bg-[#0c0a24] rounded-xl border border-indigo-500/20 p-2.5 shadow-xl flex flex-col justify-between">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center border-b border-indigo-500/10 pb-1.5">
            <span className="text-[7px] font-black text-slate-200 uppercase tracking-wider">Amali Admin</span>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
          </div>
          {/* Stats widgets */}
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-[#050415] rounded p-1 border border-indigo-500/10">
              <span className="text-[4px] text-slate-500 block uppercase font-bold">Penjualan</span>
              <span className="text-[7px] text-emerald-400 font-bold block">Rp 45.2M</span>
            </div>
            <div className="bg-[#050415] rounded p-1 border border-indigo-500/10">
              <span className="text-[4px] text-slate-500 block uppercase font-bold">Produk Baru</span>
              <span className="text-[7px] text-indigo-400 font-bold block">+12 Item</span>
            </div>
          </div>
          {/* User management list */}
          <div className="space-y-1">
            <div className="h-3 w-full bg-[#050415] rounded flex items-center justify-between px-1 text-[5px] text-slate-400">
              <span>Admin Utama</span>
              <span className="text-emerald-400 font-semibold">Online</span>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-indigo-500/5 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  if (id === "proj-2") {
    // Crypto AI Studio Website
    return (
      <div className="w-full h-full bg-[#070212] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[190px] h-[130px] bg-[#12052b] rounded-xl border border-purple-500/20 p-2.5 shadow-xl flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="text-[7px] font-black text-purple-400 tracking-wider">CRYPTO.AI</span>
            <span className="text-[5px] bg-purple-500/20 text-purple-300 px-1 py-0.5 rounded font-bold uppercase">NFT Live</span>
          </div>
          {/* Crypto Tickers */}
          <div className="space-y-1 my-1.5">
            <div className="flex justify-between text-[6px] border-b border-purple-500/10 pb-0.5">
              <span className="text-slate-300">BTC/USDT</span>
              <span className="text-emerald-400 font-bold">$92,420 (+4.2%)</span>
            </div>
            <div className="flex justify-between text-[6px]">
              <span className="text-slate-300">ETH/USDT</span>
              <span className="text-emerald-400 font-bold">$3,150 (+2.8%)</span>
            </div>
          </div>
          {/* Action Button */}
          <div className="w-full py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded text-center text-[6px] font-black text-white shadow-md shadow-purple-900/50 cursor-pointer">
            MINT NFT NOW
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-purple-500/10 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  if (id === "proj-3") {
    // Event Exposure Media Website
    return (
      <div className="w-full h-full bg-[#030708] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[190px] h-[130px] bg-[#071316] rounded-xl border border-emerald-500/20 p-2.5 shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[7px] font-bold text-slate-300">Event Portal</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          {/* Event items */}
          <div className="space-y-1.5 my-2">
            <div className="bg-[#030809] border border-emerald-500/10 rounded p-1 flex justify-between items-center">
              <div>
                <span className="text-[6px] text-white font-bold block">Developer Hackathon</span>
                <span className="text-[4px] text-slate-400 block mt-0.5">14 Juli 2026</span>
              </div>
              <span className="text-[4px] bg-emerald-500/20 text-emerald-300 px-1 rounded uppercase font-bold">Tech</span>
            </div>
            <div className="bg-[#030809] border border-emerald-500/10 rounded p-1 flex justify-between items-center">
              <div>
                <span className="text-[6px] text-white font-bold block">Music Night Festival</span>
                <span className="text-[4px] text-slate-400 block mt-0.5">25 Agustus 2026</span>
              </div>
              <span className="text-[4px] bg-amber-500/20 text-amber-300 px-1 rounded uppercase font-bold">Music</span>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-emerald-500/5 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  if (id === "proj-4") {
    // Amali POS System
    return (
      <div className="w-full h-full bg-[#040909] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[190px] h-[130px] bg-[#0c1a1a] rounded-xl border border-teal-500/20 p-2.5 shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-teal-500/10 pb-1">
            <span className="text-[7px] font-bold text-slate-300">Amali POS Screen</span>
            <span className="text-[5px] text-teal-400 font-bold">Checkout</span>
          </div>
          {/* Checkout items */}
          <div className="space-y-1 my-1">
            <div className="flex justify-between text-[5px] text-slate-400">
              <span>1x Produk Retail A</span>
              <span>Rp 25.000</span>
            </div>
            <div className="flex justify-between text-[5px] text-slate-400 border-b border-teal-500/5 pb-1">
              <span>2x Produk Retail B</span>
              <span>Rp 40.000</span>
            </div>
            <div className="flex justify-between text-[6px] text-white font-bold">
              <span>TOTAL</span>
              <span>Rp 65.000</span>
            </div>
          </div>
          <button className="w-full py-1 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[6px] rounded text-center cursor-pointer">
            BAYAR SEKARANG
          </button>
        </div>
      </div>
    );
  }

  if (id === "proj-5") {
    // Kalkulator Kredit Amali Mobile
    return (
      <div className="w-full h-full bg-[#090503] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[110px] h-[190px] bg-[#1a0f0a] rounded-2xl border-2 border-orange-500/20 p-2 shadow-lg flex flex-col justify-between relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-[5px] text-orange-400 mb-1 px-1">
            <span>12:00</span>
            <span>100%</span>
          </div>
          {/* Title */}
          <div className="text-center">
            <span className="text-[6px] font-bold text-white uppercase tracking-wider block">Kalkulator Kredit</span>
            <div className="w-6 h-0.5 bg-orange-500 mx-auto mt-0.5 rounded"></div>
          </div>
          {/* Sliders mockup */}
          <div className="space-y-2 my-2 flex-1 flex flex-col justify-center">
            <div className="space-y-0.5">
              <div className="flex justify-between text-[4px] text-slate-400">
                <span>Jumlah Pinjaman</span>
                <span className="text-orange-400">Rp 10jt</span>
              </div>
              <div className="h-1 w-full bg-slate-900 rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-2/3 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between text-[4px] text-slate-400">
                <span>Tenor (Bulan)</span>
                <span className="text-orange-400">12 Bln</span>
              </div>
              <div className="h-1 w-full bg-slate-900 rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Output */}
          <div className="bg-black/60 rounded p-1 text-center border border-orange-500/10">
            <span className="text-[4px] text-slate-500 block uppercase">Angsuran / Bln</span>
            <span className="text-[7px] text-orange-400 font-extrabold block">Rp 983.333</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] bg-orange-500/5 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  if (id === "proj-6") {
    // Andi Preview: Image Previewer drag and drop mockup
    return (
      <div className="w-full h-full bg-[#040815] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[190px] h-[130px] bg-[#0c1228] rounded-xl border border-sky-500/20 p-2.5 shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[7px] font-bold text-slate-200">Andi Image Preview</span>
            <span className="text-[5px] bg-sky-500/20 text-sky-300 px-1 py-0.5 rounded font-bold">PWA</span>
          </div>
          {/* Dashed upload box */}
          <div className="flex-1 my-2 border border-dashed border-sky-500/30 rounded-lg flex flex-col items-center justify-center bg-[#070b1a] p-1">
            <svg className="w-4 h-4 text-sky-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[5px] text-slate-400 text-center font-medium">Seret foto Anda ke sini</span>
          </div>
          {/* Action button */}
          <div className="h-4 w-full bg-sky-500 rounded text-[5px] text-black font-extrabold flex items-center justify-center cursor-pointer">
            Copy Temporary Link
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-sky-500/5 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  if (id === "proj-7") {
    // Premium QR Code Generator mockup
    return (
      <div className="w-full h-full bg-[#050f0e] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-[190px] h-[130px] bg-[#0c1e1c] rounded-xl border border-emerald-500/20 p-2.5 shadow-xl flex gap-3 items-center">
          {/* Settings pane */}
          <div className="flex-1 space-y-2">
            <div className="space-y-0.5">
              <div className="h-1 w-10 bg-emerald-500/20 rounded"></div>
              <div className="h-2 w-full bg-[#050f0e] border border-emerald-500/10 rounded"></div>
            </div>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            </div>
          </div>
          {/* QR Code pane */}
          <div className="w-16 h-16 bg-[#030a09] border border-emerald-500/30 rounded p-1 flex items-center justify-center relative">
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
            <div className="absolute w-3 h-3 rounded-full bg-[#030a09] border border-emerald-400 flex items-center justify-center text-[4px] font-black text-white">QR</div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-emerald-500/5 rounded-full filter blur-xl pointer-events-none"></div>
      </div>
    );
  }

  // default fallback
  return (
    <div className="w-full h-full bg-[#0a0a14] relative overflow-hidden flex items-center justify-center p-4">
      <div className="text-[7px] text-slate-500">Preview Mockup</div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Project["category"] | "All">("All");
  const [titleRef, titleVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-12 border-b border-slate-200 dark:border-slate-900/40"
    >
      <div className="glow-bg glow-purple top-1/3 -right-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div
            ref={titleRef}
            data-visible={titleVisible ? "true" : undefined}
            className="scroll-fade-up flex flex-col"
          >
            <span className="text-xs uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-semibold mb-2">Portofolio</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
              Projek Pilihan Saya
            </h2>
            <div className="section-line w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-slate-200/60 dark:bg-slate-950/80 p-1.5 rounded-xl border border-slate-300 dark:border-slate-800/50 self-start md:self-auto">
            {(["All", "Web App", "Design"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
              >
                {filter === "All" ? "Semua" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          data-visible={cardsVisible ? "true" : undefined}
          className="scroll-fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-visible={cardsVisible ? "true" : undefined}
              className="scroll-zoom-in glass-effect rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/40 flex flex-col hover:border-indigo-500/30 group transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Interactive Mockup Container */}
              <div className="h-56 relative w-full border-b border-slate-200 dark:border-slate-800/40 overflow-hidden">
                <ProjectMockup id={project.id} />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:scale-110 transition-all cursor-pointer"
                    title="View Source Code"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:scale-110 transition-all cursor-pointer"
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
                  <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    {project.category}
                  </span>
                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-text-primary mt-3 mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-900/60">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-text-secondary bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 px-2 py-1 rounded-md"
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
