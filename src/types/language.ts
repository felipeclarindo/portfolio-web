import { ReactNode } from "react";

export type Locale = "pt" | "en";

export type LanguageContextType = {
  language: Locale;
  translate: (key: string) => string;
  setLanguage: React.Dispatch<React.SetStateAction<Locale>>;
};

export type LanguageProviderProps = Readonly<{
  children: ReactNode;
}>;
