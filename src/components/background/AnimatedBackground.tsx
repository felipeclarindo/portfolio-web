"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = useMemo(() => theme === "dark", [theme]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Initial Fade Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-black"
      />

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isDark ? 0.16 : 0.1,
          scale: prefersReducedMotion ? 1 : [1, 1.03, 1],
        }}
        transition={{
          opacity: { duration: 1.2 },
          scale: {
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-xl
          h-144
          blur-[120px]
          rounded-full
          bg-(--brand-primary)
          will-change-transform
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-10
          bg-[linear-gradient(to_right,var(--border-secondary)_1px,transparent_1px),
              linear-gradient(to_bottom,var(--border-secondary)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
        style={{
          opacity: isDark ? 0.12 : 0.06,
        }}
      />

      {/* Vertical Flow */}
      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        animate={
          prefersReducedMotion
            ? { opacity: isDark ? 0.08 : 0.04 }
            : {
                opacity: isDark ? 0.08 : 0.04,
                y: ["-10%", "10%", "-10%"],
              }
        }
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          y: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-[-20%]
          will-change-transform
          bg-[linear-gradient(
            to_bottom,
            transparent 0%,
            var(--brand-soft) 20%,
            transparent 45%,
            var(--brand-soft) 70%,
            transparent 100%
          )]
        "
      />

      {/* Diagonal Flow */}
      <motion.div
        initial={{ opacity: 0, x: "-10%" }}
        animate={
          prefersReducedMotion
            ? { opacity: isDark ? 0.06 : 0.03 }
            : {
                opacity: isDark ? 0.06 : 0.03,
                x: ["-5%", "5%", "-5%"],
              }
        }
        transition={{
          opacity: { duration: 1, delay: 0.8 },
          x: {
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-[-20%]
          will-change-transform
          bg-[linear-gradient(
            120deg,
            transparent 0%,
            var(--brand-soft) 30%,
            transparent 55%,
            var(--brand-soft) 80%,
            transparent 100%
          )]
        "
      />

      {/* Noise */}
      <motion.div
        aria-hidden
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -12, 12, 0],
                y: [0, 8, -8, 0],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute -inset-4
        bg-[url('/images/noise.webp')]
        bg-repeat
        opacity-[0.10]
        will-change-transform
      "
      />
    </div>
  );
}
