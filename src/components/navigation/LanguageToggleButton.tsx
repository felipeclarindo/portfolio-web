"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggleButton() {
  const { locale, setLocale } = useLanguage();
  const isPT = locale === "pt";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => setLocale(isPT ? "en" : "pt")}
      className="
        relative
        flex items-center
        gap-1
        px-3 py-1.5
        text-xs font-mono
        rounded-md
        border border-[var(--border-primary)]
        bg-[var(--bg-tertiary)]
        text-[var(--text-secondary)]
        hover:bg-[var(--brand-primary)]
        hover:text-white
        transition-all duration-300
      "
      aria-label="Toggle language"
    >
      <span className={isPT ? "opacity-50" : "font-semibold"}>
        EN
      </span>

      <span className="opacity-30">/</span>

      <span className={isPT ? "font-semibold" : "opacity-50"}>
        PT
      </span>
    </motion.button>
  );
}
