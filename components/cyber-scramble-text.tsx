"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";

interface CyberScrambleTextProps {
  text: string;
  className?: string;
  prefix?: string;
}

export function CyberScrambleText({
  text,
  className = "",
  prefix = "$> ",
}: CyberScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  const glyphs = "!@#$%^&*()_+~|}{[]:;?><=0123456789ABCDEFabcdef";

  const triggerScramble = useCallback(() => {
    setIsComplete(false);
    let iteration = 0;
    const totalIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("")
      );

      if (iteration >= totalIterations) {
        clearInterval(interval);
        setIsComplete(true);
      }

      iteration += 1 / 2; // controls decode speed
    }, 32);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    // Initial scramble on load
    const timer = setTimeout(() => {
      triggerScramble();
    }, 400);

    return () => {
      clearTimeout(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [triggerScramble]);

  return (
    <div
      onClick={triggerScramble}
      className={`inline-flex items-center gap-2 cursor-pointer select-none group font-mono ${className}`}
      title="Click to re-scramble"
    >
      {prefix && (
        <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
          {prefix}
        </span>
      )}
      <span className="text-zinc-200 group-hover:text-white transition-colors tracking-wide font-semibold">
        {displayText || text}
      </span>
    </div>
  );
}
