"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Icons } from "@/components/icons";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showPulse, setShowPulse] = useState(false);

  const developerQuotes = [
    "Systems operational. Zero downtime, high throughput. ⚡",
    "Let's architect scalable distributed backends together. 🚀",
    "Terraform, Docker & AWS pipelines ready to deploy. ☁️",
    "Microservices benchmarked at sub-80ms response. 💻",
    "Clean architecture, robust code. Ready for production! 🤝",
  ];

  const handleDevClick = () => {
    setShowPulse(true);
    setQuoteIndex((prev) => (prev + 1) % developerQuotes.length);
    setTimeout(() => setShowPulse(false), 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-12 border-t border-white/10 bg-[#06070b] relative z-20 overflow-visible">
      {/* Interactive Cyber Engineer Mascot Resting on the Footer Border */}
      <div className="absolute -top-[76px] left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer select-none">
        {/* Floating Speech Bubble */}
        <div
          onClick={handleDevClick}
          className="relative mb-2 px-3.5 sm:px-4 py-1.5 rounded-2xl bg-[#0d1222] border border-cyan-400/40 text-[10px] sm:text-[11px] font-mono text-cyan-200 shadow-xl shadow-cyan-500/10 hover:border-cyan-300 transition-all active:scale-95 flex items-center gap-1.5 sm:gap-2 max-w-[90vw] text-center"
        >
          <span className="truncate sm:overflow-visible">{developerQuotes[quoteIndex]}</span>
          {showPulse && (
            <span className="text-xs animate-ping text-cyan-400 shrink-0">⚡</span>
          )}
          {/* Speech bubble beak */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0d1222] border-r border-b border-cyan-400/40 rotate-45" />
        </div>

        {/* The Cyber Engineer Avatar (Masculine / Tech Developer Aesthetic) */}
        <div
          onClick={handleDevClick}
          className="relative w-16 h-14 hover:scale-105 active:scale-95 transition-transform duration-200"
          title="Click to interact with the engineer!"
        >
          <svg
            viewBox="0 0 64 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
          >
            {/* Developer Hair / Head Silhouette */}
            <path
              d="M20 20C20 12 25 8 32 8C39 8 44 12 44 20C44 23 43 28 43 28L21 28C21 28 20 23 20 20Z"
              fill="#181c2e"
            />
            {/* Hair strands */}
            <path
              d="M22 14L28 8L34 11L40 7L43 14"
              stroke="#22283d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Over-Ear Headset Band */}
            <path
              d="M16 25C16 14 23 8 32 8C41 8 48 14 48 25"
              stroke="#38bdf8"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Left Earphone with glowing cyan ring */}
            <rect x="13" y="21" width="5" height="12" rx="2.5" fill="#0b0e1a" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="15.5" cy="27" r="1.5" fill="#38bdf8" />

            {/* Right Earphone with glowing cyan ring */}
            <rect x="46" y="21" width="5" height="12" rx="2.5" fill="#0b0e1a" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="48.5" cy="27" r="1.5" fill="#38bdf8" />

            {/* Face / Jaw */}
            <path
              d="M22 23C22 30 26 34 32 34C38 34 42 30 42 23V21H22V23Z"
              fill="#1a1e30"
              stroke="#2e3752"
              strokeWidth="1.5"
            />

            {/* Futuristic Tech Shades / Visor */}
            <path
              d="M24 23H40V26C40 27.5 38.5 28.5 37 28.5H27C25.5 28.5 24 27.5 24 26V23Z"
              fill="#080c16"
              stroke="#38bdf8"
              strokeWidth="1.2"
            />
            {/* Visor Glint Line */}
            <line x1="26" y1="24.5" x2="33" y2="24.5" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />

            {/* Focused mouth line */}
            <line x1="30" y1="31" x2="34" y2="31" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

            {/* Hoodie Collar & Shoulders */}
            <path
              d="M14 46C14 38 22 36 32 36C42 36 50 38 50 46V50H14V46Z"
              fill="#0f1322"
              stroke="#26314d"
              strokeWidth="1.5"
            />
            {/* Cyan Collar Trim */}
            <path
              d="M26 36L30 42L32 45L34 42L38 36"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Terminal Deck / Keyboard resting on border */}
            <rect x="18" y="46" width="28" height="6" rx="2" fill="#080b14" stroke="#38bdf8" strokeWidth="1.2" />
            {/* LED Status Dots on Console */}
            <circle cx="22" cy="49" r="1" fill="#38bdf8" />
            <circle cx="26" cy="49" r="1" fill="#38bdf8" />
            <circle cx="30" cy="49" r="1" fill="#818cf8" />
            <circle cx="38" cy="49" r="1" fill="#34d399" />
            <circle cx="42" cy="49" r="1" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left side brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center font-mono text-cyan-400 text-xs font-bold">
            AT
          </div>
          <div>
            <p className="text-xs text-zinc-300 font-semibold">
              {personal.name} &bull; {personal.role}
            </p>
            <p className="text-[11px] text-zinc-400 font-mono">
              Software &bull; Distributed Systems &bull; Cloud Infrastructure
            </p>
          </div>
        </div>

        {/* Center / Social icons */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <Icons.github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <Icons.linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <Icons.mail size={16} />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          <span>Back to top</span>
          <Icons.chevronUp size={14} />
        </button>
      </div>
    </footer>
  );
}
