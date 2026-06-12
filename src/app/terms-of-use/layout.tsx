import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Felipe Clarindo",
  description: "Terms of Use of Felipe Clarindo",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function TermsOfServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
