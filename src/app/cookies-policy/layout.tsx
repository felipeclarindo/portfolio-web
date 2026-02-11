import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Felipe Clarindo",
  description: "Cookies Policy of Felipe Clarindo Website",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function CookiesPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
