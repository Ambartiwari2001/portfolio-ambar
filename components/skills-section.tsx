"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Icons, DynamicIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export function SkillsSection() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
              <Icons.terminal size={14} />
              <span>ARSENAL &amp; CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Engineered with Modern Technologies
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              A battle-tested stack spanning frontend smoothness, scalable server architectures, robust databases, and cloud platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Filters (Swipeable on mobile, Centered wrap on desktop) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-none mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium shrink-0 transition-all cursor-pointer ${
                activeCategory === idx
                  ? "bg-white text-zinc-950 shadow-lg shadow-white/10 font-semibold scale-105"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5 active:scale-95"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {skillCategories[activeCategory].skills.map((skill, sIdx) => (
            <ScrollReveal key={skill.name} delay={sIdx * 40}>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-lg hover:border-cyan-500/40 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-98 transition-all duration-300 group flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all">
                    <DynamicIcon name={skill.iconKey} size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-400">
                      Proficiency
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                  {skill.level}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* All Skill Categories at a glance footer */}
        <ScrollReveal delay={200}>
          <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Icons.check size={16} className="text-cyan-400 shrink-0" />
              <span>Continuous learning: Staying ahead with Next.js 16, React 19 Compiler, and AI tooling.</span>
            </div>
            <a
              href="#projects"
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors shrink-0"
            >
              <span>See stack in action</span>
              <Icons.arrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
