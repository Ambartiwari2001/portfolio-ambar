"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { CyberScrambleText } from "@/components/cyber-scramble-text";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;

  const corePills = [
    "NestJS",
    "TypeScript",
    "PHP/Laravel",
    "Java",
    "Terraform (IaC)",
    "Docker",
    "AWS",
    "Python",
    "PostgreSQL",
    "Prisma",
    "WebSockets",
    "Linux",
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background radial gradient spotlights with slow ambient pulse */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-28 right-4 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Cyber Terminal Scramble Greeting */}
            <div className="mb-4 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-full overflow-x-auto">
              <CyberScrambleText text="Hello World! I'm Ambar Tiwari" prefix="$> " />
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-cyan-500/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-zinc-300 tracking-wide">
                {personal.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Engineering High-Performance{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Backends &amp; Distributed Systems
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8 font-normal">
              Hi, I&apos;m <span className="text-white font-semibold">{personal.name}</span> — a{" "}
              <span className="text-cyan-300 font-medium">{personal.role}</span> at {personal.company}. Specializing in robust microservices, low-latency APIs with <span className="text-zinc-200">NestJS</span> and <span className="text-zinc-200">Laravel</span>, schema optimization on <span className="text-zinc-200">PostgreSQL</span>, and containerized <span className="text-zinc-200">Docker</span> workflows.
            </p>

            {/* CTAs (Responsive: Prominent Primary + Sleek Compact Action Dock on Mobile) */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 shadow-xl shadow-cyan-500/25 active:scale-95 transition-all"
              >
                <span>View Engineering Projects</span>
                <Icons.arrowRight size={16} />
              </a>

              <div className="grid grid-cols-3 gap-2 w-full sm:flex sm:w-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-3 sm:px-5 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 active:scale-95 transition-all"
                >
                  <Icons.mail size={15} />
                  <span className="hidden sm:inline">Get In Touch</span>
                  <span className="sm:hidden">Contact</span>
                </a>

                <a
                  href="/Ambar-CV.pdf"
                  download="Ambar-Tiwari-Resume.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-3 sm:px-5 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 active:scale-95 transition-all"
                >
                  <Icons.download size={15} />
                  <span className="hidden sm:inline">Download CV</span>
                  <span className="sm:hidden">Resume</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-3 sm:px-5 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 active:scale-95 transition-all"
                >
                  <Icons.linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Tech Badges Rail */}
            <div className="w-full pt-6 border-t border-white/10 text-center lg:text-left">
              <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3">
                Core Production Technologies
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2">
                {corePills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-500/10 hover:scale-105 active:scale-95 transition-all cursor-default"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Ambar's Profile Portrait Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full mb-6 lg:mb-0">
            <div className="relative w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[340px] lg:max-w-[370px] animate-float-slow">
              {/* Glowing Aura Behind Card with breathing effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 animate-border-glow" />

              {/* Main Profile Card */}
              <div className="relative rounded-3xl bg-[#090a12]/90 border border-white/15 p-3 sm:p-4 backdrop-blur-2xl shadow-2xl overflow-hidden hover:border-cyan-400/40 transition-colors">
                {/* Photo Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-zinc-900/60 border border-white/10">
                  <Image
                    src={personal.avatar}
                    alt={personal.name}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 370px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient bottom overlay for smooth blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a12] via-transparent to-transparent opacity-80" />

                  {/* Location badge on photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 font-medium">
                        {personal.location}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                      IST
                    </span>
                  </div>
                </div>

                {/* Profile Details Footer */}
                <div className="pt-3.5 sm:pt-4 px-1.5 sm:px-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {personal.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                        {personal.role}
                      </p>
                    </div>

                    <a
                      href={`tel:${personal.phone}`}
                      className="px-2 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-cyan-400/40 transition-colors"
                      title="Call Ambar"
                    >
                      {personal.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] sm:text-[11px] font-mono text-zinc-400">
                    <span className="truncate pr-1">Intelliworkz Business Solutions</span>
                    <span className="text-cyan-400 font-semibold shrink-0">MCA 8.06</span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Chip 1 */}
              <div className="absolute -top-2.5 right-0 sm:-right-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#0e1122]/95 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-1.5 animate-float">
                <span className="text-xs">⚡</span>
                <span className="text-[10px] sm:text-xs font-mono font-medium text-cyan-300">
                  Backend Specialist
                </span>
              </div>

              {/* Floating Highlight Chip 2 */}
              <div className="absolute -bottom-2.5 left-0 sm:-left-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#0e1122]/95 border border-purple-500/30 backdrop-blur-md shadow-lg flex items-center gap-1.5 animate-float [animation-delay:1.5s]">
                <span className="text-xs">🚀</span>
                <span className="text-[10px] sm:text-xs font-mono font-medium text-purple-300">
                  2.5+ Years Production
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
