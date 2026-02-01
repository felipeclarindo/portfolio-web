import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculo | Felipe Clarindo",
  description: "Curriculo do Felipe Clarindo",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function ResumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
