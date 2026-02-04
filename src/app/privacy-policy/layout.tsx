import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Felipe Clarindo",
  description: "Privacy Policy of Felipe Clarindo Website",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
