"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggleButton({
  isVisible = true,
}: {
  readonly isVisible?: boolean;
}) {
  const { language, setLanguage } = useLanguage();

  const isPT = language === "pt";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => setLanguage(isPT ? "en" : "pt")}
      className={`${isVisible ? "flex" : "hidden"}
        relative
        items-center
        gap-1
        px-3 py-2.5
        text-xs font-mono
        rounded-md
        bg-(--bg-tertiary)
        text-(--text-secondary)
        hover:bg-(--brand-primary)
        hover:text-white
        transition-all duration-300
      `}
      aria-label="Toggle language"
    >
      <span className={isPT ? "opacity-50" : "font-semibold"}>EN</span>

      <span className="opacity-30">/</span>

      <span className={isPT ? "font-semibold" : "opacity-50"}>PT</span>
    </motion.button>
  );
}
