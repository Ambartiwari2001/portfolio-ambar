"use client";

import React, { useEffect, useRef, useState } from "react";

export function StatementBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Short, punchy, high-impact statement (only 11 words)
  const statement =
    "I build resilient backends and automated cloud systems engineered for scale.";

  const words = statement.split(" ");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            if (total > 0) {
              const current = -rect.top;
              const p = Math.max(0, Math.min(1, current / total));
              setScrollProgress(Math.round(p * 100) / 100);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Compact scroll track (150vh - quick 1-2 scroll flicks, not long) */
    <section ref={containerRef} className="relative h-[155vh] bg-[#07080e]">
      {/* Sticky viewport frame pinned cleanly in center */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4">
        {/* Subtle radial glow behind the text */}
        <div
          className="absolute w-[450px] h-[250px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 80%)",
            opacity: 0.4 + scrollProgress * 0.6,
          }}
        />

        {/* Tightly constrained content box (max-w-2xl) so it never stretches wide */}
        <div className="relative max-w-2xl sm:max-w-3xl mx-auto flex flex-col items-center text-center z-10">
          {/* Punchy, Compact, Big Bold Typography */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2] select-none">
            {words.map((word, idx) => {
              const threshold = idx / (words.length - 1);
              const isRevealed = scrollProgress >= threshold;

              return (
                <span
                  key={idx}
                  className={`inline-block mr-2.5 sm:mr-3.5 mb-1 transition-all duration-200 ${
                    isRevealed
                      ? "text-white drop-shadow-[0_0_18px_rgba(56,189,248,0.5)]"
                      : "text-zinc-700/50"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>

          {/* Clean minimal indicator */}
          <p
            className="text-xs sm:text-sm text-zinc-400 font-mono mt-8 transition-opacity duration-300"
            style={{ opacity: scrollProgress > 0.85 ? 1 : 0.3 }}
          >
            Zero technology lock-in &bull; Microservices &bull; Terraform &bull; AWS
          </p>
        </div>
      </div>
    </section>
  );
}
