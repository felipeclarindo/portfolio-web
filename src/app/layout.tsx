import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import AnimatedBackground from "@/components/layout/AnimatedBackground";

export const metadata: Metadata = {
  title: "Portfolio | Felipe Clarindo",
  description: "Felipe Clarindo's portfolio",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <AnimatedBackground />

        <Providers>
          <Header />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
