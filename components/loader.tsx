"use client";

import React, { useEffect, useState } from "react";

export function PortfolioLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState("Initializing experience...");
  const [isDone, setIsDone] = useState(false);
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    // Check if user already saw the loader in this session
    const seen = sessionStorage.getItem("portfolio_loader_seen");
    if (seen) {
      setHasExited(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setPhaseText("Welcome to Ambar's Universe");
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              setHasExited(true);
              sessionStorage.setItem("portfolio_loader_seen", "true");
              if (onComplete) onComplete();
            }, 600);
          }, 350);
          return 100;
        }

        if (next > 75) {
          setPhaseText("Mounting motion & visual layers...");
        } else if (next > 40) {
          setPhaseText("Compiling project showcases...");
        } else if (next > 15) {
          setPhaseText("Loading design tokens & typography...");
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => {
      setHasExited(true);
      sessionStorage.setItem("portfolio_loader_seen", "true");
      if (onComplete) onComplete();
    }, 300);
  };

  if (hasExited) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080e] transition-opacity duration-700 ${
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      {/* Center Branding & Progress */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Monogram emblem */}
        <div className="relative mb-8 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse" />
          <span className="font-mono text-2xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            &lt;AT /&gt;
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold tracking-tight text-white mb-1">
          Ambar Tiwari
        </h2>
        <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-6">
          Portfolio &bull; 2026 Edition
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-zinc-800/80 rounded-full overflow-hidden border border-white/5 p-0.5 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic status info */}
        <div className="flex items-center justify-between w-64 text-[11px] font-mono text-zinc-400 mb-6">
          <span className="truncate pr-2">{phaseText}</span>
          <span className="text-cyan-400 font-semibold">{progress}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors cursor-pointer"
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}
