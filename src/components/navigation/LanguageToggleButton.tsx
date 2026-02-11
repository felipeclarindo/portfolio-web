"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggleButton() {
  const { locale, setLocale } = useLanguage();

  const isPT = locale === "pt";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setLocale(isPT ? "en" : "pt")}
      className="
        relative
        flex items-center
        px-3 py-1.5
        font-mono text-xs
        border border-green-500/30
        rounded-sm
        text-green-400
        hover:text-green-300
        hover:border-green-400
        transition-all
      "
      aria-label="Toggle language"
    >
      <span className="opacity-60">{isPT ? "PT" : "EN"}</span>
      <span className="mx-1 opacity-30">|</span>
      <span className="font-semibold">{isPT ? "EN" : "PT"}</span>
    </motion.button>
  );
}
