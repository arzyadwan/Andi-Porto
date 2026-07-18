"use client";

import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/portfolioData";
import ProjectMockup from "@/components/Projects"; // We'll mock ProjectMockup inside or import the subcomponent
import { ArrowLeft, ExternalLink, Cpu, Settings, Database, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Re-defining GithubIcon locally to keep imports clean
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Helper to render the actual project image inside a browser frame showcase
function ProjectVisual({ id, title, image }: { id: string; title: string; image: string }) {
  return (
    <div className="w-full aspect-video md:h-80 lg:h-96 bg-slate-900 rounded-3xl border border-slate-200/10 overflow-hidden relative shadow-2xl flex items-center justify-center group">
      {/* Simulated Browser Frame */}
      <div className="absolute top-0 inset-x-0 h-10 bg-slate-950/80 border-b border-slate-800/40 px-4 flex items-center gap-2 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        <div className="bg-slate-900/80 rounded-md px-3 py-0.5 text-[10px] text-slate-500 ml-4 font-mono select-none">
          {id}.localhost
        </div>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-full pt-10 object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const project = projectsData.find((p) => p.id === id);

  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.05 });

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-6">
        <h2 className="font-heading font-bold text-3xl text-text-primary">Projek Tidak Ditemukan</h2>
        <p className="text-text-secondary text-sm max-w-md">
          Maaf, tautan projek yang Anda cari salah atau projek tersebut tidak terdaftar di database portofolio saya.
        </p>
        <button
          onClick={() => router.push("/projects")}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portofolio
        </button>
      </div>
    );
  }

  return (
    <section className="relative py-16 px-4 md:px-12 flex-1 flex flex-col justify-start">
      {/* Decorative Glow Elements */}
      <div className="glow-bg glow-indigo top-10 left-10"></div>
      <div className="glow-bg glow-purple bottom-20 right-10"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-12">
        {/* Navigation & Header */}
        <div
          ref={headerRef}
          data-visible={headerVisible ? "true" : undefined}
          className="scroll-fade-up flex flex-col gap-6"
        >
          <button
            onClick={() => router.push("/projects")}
            className="group self-start inline-flex items-center gap-2.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Portofolio
          </button>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
              {project.category}
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-4 mb-2 tracking-tight">
              {project.title}
            </h1>
            <div className="section-line w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
          </div>
        </div>

        {/* Browser Mockup / Showcase Visual */}
        <div
          ref={contentRef}
          data-visible={contentVisible ? "true" : undefined}
          className="scroll-zoom-in stagger-children space-y-12"
        >
          <div data-visible={contentVisible ? "true" : undefined} className="scroll-zoom-in">
            <ProjectVisual id={project.id} title={project.title} image={project.image} />
          </div>

          {/* Project Details Panel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Main Details (Left/8-col) */}
            <div className="md:col-span-8 space-y-8">
              <div className="glass-effect p-8 rounded-3xl border border-slate-200 dark:border-slate-800/40 space-y-6">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Deskripsi Projek
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {/* Features List */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800/30">
                    <h4 className="font-heading font-bold text-md text-text-primary">
                      Fitur Utama &amp; Fungsionalitas
                    </h4>
                    <ul className="space-y-3 pl-1">
                      {project.features.map((feature, i) => {
                        const [title, desc] = feature.split(":");
                        return (
                          <li key={i} className="text-sm text-text-secondary flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2"></span>
                            <span>
                              {desc ? (
                                <>
                                  <strong className="text-text-primary">{title}:</strong>
                                  {desc}
                                </>
                              ) : (
                                feature
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Specifications (Right/4-col) */}
            <div className="md:col-span-4 space-y-6">
              {/* CTAs */}
              <div className="flex flex-col gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wide transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                  >
                    Kunjungi Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white font-bold tracking-wide transition-all cursor-pointer"
                >
                  Lihat Kode Sumber
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Technologies list */}
              {project.fullTechStack && (
                <div className="glass-effect p-6 rounded-3xl border border-slate-200 dark:border-slate-800/40 space-y-6">
                  <h4 className="font-heading font-bold text-sm text-text-primary tracking-wide uppercase">
                    Teknologi
                  </h4>
                  
                  <div className="space-y-4">
                    {/* Frontend Stack */}
                    {project.fullTechStack.frontend && (
                      <div className="space-y-2">
                        <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                          Frontend
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.fullTechStack.frontend.map((t, idx) => (
                            <span key={idx} className="text-[10px] text-text-secondary bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 px-2 py-0.5 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Backend Stack */}
                    {project.fullTechStack.backend && (
                      <div className="space-y-2">
                        <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1.5">
                          <Settings className="w-3.5 h-3.5 text-purple-500" />
                          Backend
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.fullTechStack.backend.map((t, idx) => (
                            <span key={idx} className="text-[10px] text-text-secondary bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 px-2 py-0.5 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Database Stack */}
                    {project.fullTechStack.database && (
                      <div className="space-y-2">
                        <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-emerald-500" />
                          Database
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.fullTechStack.database.map((t, idx) => (
                            <span key={idx} className="text-[10px] text-text-secondary bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 px-2 py-0.5 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
