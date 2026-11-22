"use client";

import React from "react";
import { PORTFOLIO_DATA, Experience } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ExperienceSection() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Icons.layers size={14} />
              <span>JOURNEY &amp; MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              A chronological timeline of roles where I contributed to high-impact production codebases and agile teams.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 sm:space-y-12">
          {experience.map((item: Experience, idx: number) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="relative group">
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07080e] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Card Container */}
                <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-xl transition-all duration-300">
                  {/* Period & Location header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.location}
                    </span>
                  </div>

                  {/* Role and Company */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">
                    {item.company}
                  </h4>
                  {item.architectureFocus && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>Focus: {item.architectureFocus}</span>
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {item.description.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-400 bg-white/[0.02] border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
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
