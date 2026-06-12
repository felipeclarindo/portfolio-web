"use client";

import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
} from "react";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";
import { LanguageContextType, LanguageProviderProps, Locale } from "@/types/language";

type Messages = typeof pt;

const messages: Record<Locale, Messages> = {
  pt,
  en,
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Locale>("pt");

  const translate = useCallback(
    (path: string): string => {
      const value = path.split(".").reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object") {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, messages[language] as unknown);

      return typeof value === "string" ? value : path;
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, translate, setLanguage }),
    [language, translate, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}