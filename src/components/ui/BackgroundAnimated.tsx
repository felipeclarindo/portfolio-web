"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10 + 10,
      speedY: 0.1,
      alpha: Math.random() * 0.5 + 0.5,
      currentDigit: Math.floor(Math.random() * 10).toString(),
      frameCounter: 0,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const b of bubbles) {
        const fontSize = b.radius * 1.5;
        ctx.font = `${fontSize}px 'Courier New'`;

        const green = Math.floor(Math.random() * 155 + 100);
        ctx.fillStyle = `rgba(0, ${green}, 0, ${b.alpha})`;

        ctx.fillText(b.currentDigit, b.x, b.y);

        b.frameCounter++;
        if (b.frameCounter >= 20) {
          b.currentDigit = Math.floor(Math.random() * 10).toString();
          b.frameCounter = 0;
        }

        b.y -= b.speedY;
        if (b.y < -fontSize) {
          b.y = canvas.height + fontSize;
          b.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(draw);
    };

    draw();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 bg-black"
    />
  );
}
