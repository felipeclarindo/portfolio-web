"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex items-center justify-center
        w-9 h-9
        rounded-md
        border border-[var(--border-primary)]
        bg-[var(--bg-tertiary)]
        text-[var(--text-secondary)]
        hover:bg-[var(--brand-primary)]
        hover:text-white
        transition-all duration-300
      "
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  );
}
