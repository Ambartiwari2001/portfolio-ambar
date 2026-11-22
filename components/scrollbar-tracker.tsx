"use client";

import React, { useEffect, useState } from "react";

export function ScrollbarTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(Number(scrolled.toFixed(1)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(59,130,246,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
