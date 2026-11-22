"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Cloud & DevOps",
    "Microservices & Distributed",
    "Real-Time & APIs",
    "AI & Data Pipelines",
    "Full Stack & RBAC",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Icons.layout size={14} />
              <span>ARCHITECTURE &amp; SYSTEMS SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Engineered Systems &amp; Blueprints
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              Decoupled microservice architectures, Infrastructure as Code with Terraform, asynchronous AI data pipelines, and real-time event engines.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills (Swipeable on mobile, Centered wrap on desktop) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-none mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-zinc-950 font-semibold shadow-lg shadow-white/10 scale-105"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5 active:scale-95"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, pIdx: number) => (
            <ScrollReveal key={project.id} delay={pIdx * 60}>
              <div
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/15 overflow-hidden h-full"
              >
                {/* Top ambient highlight gradient */}
                <div
                  className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${project.accentColor} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity pointer-events-none`}
                />

                <div>
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                        <Icons.sparkles size={11} />
                        Featured Architecture
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-3.5">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Key Metric pill */}
                  {project.metrics && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-zinc-300 font-mono mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-400 bg-white/[0.02] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Links */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
                    >
                      <span className="hidden sm:inline">View Repository &bull; Code Architecture</span>
                      <span className="sm:hidden">View Repository</span>
                      <Icons.arrowUpRight size={14} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 active:scale-95 transition-all"
                      aria-label="GitHub Profile / Repository"
                    >
                      <Icons.github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
