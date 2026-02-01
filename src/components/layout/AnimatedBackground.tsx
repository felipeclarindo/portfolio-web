"use client";

import { Bubble } from "@/types/animation";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const bubbleCount = window.innerWidth < 768 ? 30 : 60;

    const bubbles: Bubble[] = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 14,
      speedY: 0.6, // 👈 velocidade corrigida
      alpha: Math.random() * 0.5 + 0.4,
      currentDigit: Math.floor(Math.random() * 10).toString(),
      frameCounter: 0,
    }));
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.textBaseline = "top";
      ctx.textAlign = "left";

      for (const b of bubbles) {
        const fontSize = b.radius * 1.6;

        ctx.font = `${fontSize}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(0, 255, 120, ${Math.min(b.alpha + 0.2, 1)})`;

        ctx.fillText(b.currentDigit, b.x, b.y);

        b.frameCounter++;
        if (b.frameCounter >= 18) {
          b.currentDigit = Math.floor(Math.random() * 10).toString();
          b.frameCounter = 0;
        }

        b.y -= b.speedY;
        b.x += Math.sin(b.y * 0.01) * 0.3;

        if (b.y < -fontSize) {
          b.y = canvas.height + fontSize;
          b.x = Math.random() * canvas.width;
        }
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
      } else {
        draw();
      }
    };

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setCanvasSize();
      }, 150);
    };

    draw();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      tabIndex={-1}
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
