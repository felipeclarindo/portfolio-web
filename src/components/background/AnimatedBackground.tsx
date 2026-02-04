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
      {/* INITIAL DARK OVERLAY (impact start) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-black"
      />

      {/* GLOW */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: isDark ? 0.12 : 0.18,
          scale: [1, 1.05, 1],
        }}
        transition={{
          opacity: { duration: 1.4, ease: "easeOut" },
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className={`
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[900px] h-[900px]
          rounded-full blur-[220px]
          ${isDark ? "bg-[var(--primary-color)]" : "bg-emerald-400"}
        `}
      />

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? 0.25 : 0.15,
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.3 },
          backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,255,140,0.06)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,255,140,0.06)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* DATA STREAMS – vertical flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? 0.2 : 0.1,
          backgroundPositionY: ["0%", "100%"],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.6 },
          backgroundPositionY: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(
            to_bottom,
            transparent 0%,
            rgba(0,255,140,0.1) 20%,
            transparent 45%,
            rgba(0,255,140,0.1) 70%,
            transparent 100%
          )]
          bg-[size:100%_220%]
        "
      />

      {/* DATA STREAMS – diagonal flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDark ? 0.14 : 0.08,
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.9 },
          backgroundPositionX: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          absolute inset-0
          bg-[linear-gradient(
            120deg,
            transparent 0%,
            rgba(0,255,140,0.08) 30%,
            transparent 55%,
            rgba(0,255,140,0.08) 80%,
            transparent 100%
          )]
          bg-[size:220%_100%]
        "
      />

      {/* NOISE */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[url('/noise.png')]
          opacity-[0.035]
        "
      />
    </div>
  );
}
