import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Felipe Clarindo",
  description: "Terms of Use of Felipe Clarindo",
};

export default function TermsOfServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
