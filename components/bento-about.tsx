"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export function BentoAbout() {
  const { personal, stats, highlights, certifications } = PORTFOLIO_DATA;
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Icons.sparkles size={14} />
              <span>BACKGROUND &amp; PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Architecting Resilient Distributed Backends
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              A battle-tested track record spanning microservices, high-throughput asynchronous pipelines, and cloud-native workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Core Bio & Summary (Span 2 cols on md/lg) */}
          <ScrollReveal delay={100} className="md:col-span-2 lg:col-span-2">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Icons.server size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Engineering Philosophy</h3>
                  <p className="text-xs text-zinc-400 font-mono">Platform-Agnostic &bull; Cloud &amp; Distributed Systems</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                {personal.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>NestJS &amp; Laravel Monorepos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>PostgreSQL &amp; MySQL (Prisma/Eloquent)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Docker &amp; AWS Infrastructure</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Queues, WebSockets &amp; OpenAI LLMs</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Metrics Bento (Span 2 cols on md/lg) */}
          <ScrollReveal delay={200} className="md:col-span-1 lg:col-span-2">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Icons.zap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Production Milestones</h3>
                  <p className="text-xs text-zinc-400 font-mono">Measurable Impact</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight bg-gradient-to-r from-purple-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Education & Academic Pedigree (Span 2 cols on lg) */}
          <ScrollReveal delay={150} className="md:col-span-1 lg:col-span-2">
            <div className="h-full p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Icons.code size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Academic Pedigree</h4>
                  <p className="text-xs text-zinc-400 font-mono">Master of Computer Applications</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    {personal.education.institution}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                    {personal.education.period}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-zinc-300">
                    {personal.education.degree} &bull; {personal.education.field}
                  </p>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {personal.education.score}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Rigorous grounding in Data Structures, Algorithms, Object-Oriented Programming (Java), and System Design applied across production software ecosystems.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4: Professional Certifications & Honors (Span 2 cols on lg) */}
          <ScrollReveal delay={250} className="md:col-span-2 lg:col-span-2">
            <div className="h-full p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Icons.sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Professional Certifications</h4>
                    <p className="text-xs text-zinc-400 font-mono">Verified Credentials</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/20">
                  Cloud &bull; AI &bull; Full-Stack
                </span>
              </div>

              <div className="space-y-2.5 mb-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 hover:border-emerald-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-xs font-medium text-zinc-200">
                        {cert.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                      {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 pt-2 border-t border-white/5">
                <span>Current Base: {personal.location}</span>
                <span className="text-cyan-400">Live IST Clock: {currentTime || "IST"}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5: GeeksforGeeks POTD & T-Shirt Recognition (Span full width 4 cols) */}
          <ScrollReveal delay={300} className="md:col-span-3 lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-500/[0.05] via-cyan-500/[0.04] to-transparent border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xl flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-bold text-white">GeeksforGeeks Coding Milestone</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium">
                        Official GFG T-Shirt
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">Daily Problem Solving &bull; Points Redemption</p>
                  </div>
                </div>

                {/* T-Shirt Quote Pill */}
                <div className="px-3.5 py-1.5 rounded-xl bg-black/60 border border-emerald-500/30 text-[11px] sm:text-xs font-mono text-emerald-300 shadow-inner max-w-full text-center sm:text-left">
                  &ldquo;Programmers prefer Dark Mode because Light Mode Attracts Bugs&rdquo;
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {PORTFOLIO_DATA.gfgAchievement.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                {PORTFOLIO_DATA.gfgAchievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
