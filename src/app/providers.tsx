"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
