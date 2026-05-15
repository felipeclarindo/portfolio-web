import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Felipe Clarindo",
  description: "Terms of Service of Felipe Clarindo",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function TermsOfServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
