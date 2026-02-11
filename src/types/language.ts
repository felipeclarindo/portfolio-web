import { ReactNode } from "react";

export type Locale = "pt" | "en";

export type LanguageContextType = {
  locale: Locale;
  translate: (key: string) => string;
  setLocale: (locale: Locale) => void;
};

export type LanguageProviderProps = Readonly<{
  children: ReactNode;
}>;
