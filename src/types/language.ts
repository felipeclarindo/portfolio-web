import { ReactNode } from "react";

export type Locale = "pt" | "en";

export type LanguageContextType = {
  locale: Locale;
  language: "pt" | "en";
  translate: (key: string) => string;
  setLanguage: (lang: "pt" | "en") => void;
  setLocale: (locale: Locale) => void;
};

export type LanguageProviderProps = Readonly<{
  children: ReactNode;
}>;
