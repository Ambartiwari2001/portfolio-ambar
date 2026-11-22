"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

interface BoostRing {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

interface BoostSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
}

export function MouseSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Trail points for the smooth mouse line
    const points: Point[] = [];
    const maxTrailPoints = 24;

    // Click boost elements (Single color: #38bdf8)
    const rings: BoostRing[] = [];
    const sparks: BoostSpark[] = [];

    const THEME_COLOR = "#38bdf8"; // Single Electric Cyan color

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.length > maxTrailPoints) {
        points.shift();
      }
    };

    // Instant boost at given coordinates
    const triggerBoost = (x: number, y: number) => {
      // 1. Instant expanding shockwave ring
      rings.push({
        x,
        y,
        radius: 3,
        alpha: 0.95,
      });

      // 2. Instant radiating dashed rays / sparks ("- - -")
      const sparkCount = 14;
      for (let i = 0; i < sparkCount; i++) {
        const angle = (i * Math.PI * 2) / sparkCount + (Math.random() - 0.5) * 0.25;
        const speed = 2.8 + Math.random() * 2.5;

        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: 0.045 + Math.random() * 0.02,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      triggerBoost(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        triggerBoost(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw smooth mouse trailing line
      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }
      while (points.length > 0 && points[0].age > 18) {
        points.shift();
      }

      if (points.length > 2) {
        ctx.save();
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];
          const progress = i / points.length;
          const alpha = progress * 0.75;
          const lineWidth = progress * 3.2 + 0.8;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
          ctx.shadowBlur = 8;
          ctx.stroke();
        }

        // Mouse tip dot
        const head = points[points.length - 1];
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = THEME_COLOR;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw expanding shockwave rings at click spot
      for (let r = rings.length - 1; r >= 0; r--) {
        const ring = rings[r];
        ring.radius += 2.2;
        ring.alpha *= 0.88;

        if (ring.alpha <= 0.05) {
          rings.splice(r, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${ring.alpha})`;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = THEME_COLOR;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      // 3. Draw radiating dashed particles ("-") at click spot
      for (let s = sparks.length - 1; s >= 0; s--) {
        const sp = sparks[s];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.93; // smooth friction
        sp.vy *= 0.93;
        sp.alpha -= sp.decay;

        if (sp.alpha <= 0.02) {
          sparks.splice(s, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        // Draw a small line dash ("-") oriented in its flight direction
        ctx.moveTo(sp.x, sp.y);
        ctx.lineTo(sp.x - sp.vx * 2.8, sp.y - sp.vy * 2.8);
        ctx.strokeStyle = `rgba(56, 189, 248, ${Math.max(0, sp.alpha)})`;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.shadowColor = THEME_COLOR;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      style={{ display: "block" }}
    />
  );
}

export { MouseSpotlight as InteractiveCursor };
