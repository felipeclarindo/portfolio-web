"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isDark ? 0.18 : 0.12,
          scale: [1, 1.05, 1],
        }}
        transition={{
          opacity: { duration: 1.4 },
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[900px] h-[900px]
          rounded-full blur-[220px]
          bg-[var(--brand-primary)]
        "
      />

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? 0.15 : 0.08,
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.3 },
          backgroundPosition: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,var(--border-secondary)_1px,transparent_1px),
              linear-gradient(to_bottom,var(--border-secondary)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Vertical Data Flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? 0.1 : 0.05,
          backgroundPositionY: ["0%", "100%"],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.6 },
          backgroundPositionY: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(
            to_bottom,
            transparent 0%,
            var(--brand-soft) 20%,
            transparent 45%,
            var(--brand-soft) 70%,
            transparent 100%
          )]
          bg-[size:100%_220%]
        "
      />

      {/* Diagonal Flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? 0.08 : 0.04,
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.9 },
          backgroundPositionX: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(
            120deg,
            transparent 0%,
            var(--brand-soft) 30%,
            transparent 55%,
            var(--brand-soft) 80%,
            transparent 100%
          )]
          bg-[size:220%_100%]
        "
      />

      {/* Noise Texture */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[url('/images/noise.gif')]
          opacity-[0.2]
        "
      />
    </div>
  );
}
