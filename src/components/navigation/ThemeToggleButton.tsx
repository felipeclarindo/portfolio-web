"use client";

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
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex items-center gap-2
        rounded-full border
        px-4 py-2
        text-sm font-medium
        transition-all
        hover:scale-105
        dark:border-zinc-700
        dark:bg-zinc-900
      "
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
