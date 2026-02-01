"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button onClick={() => setLocale(locale === "pt" ? "en" : "pt")}>
      {locale.toUpperCase()}
    </button>
  );
}
