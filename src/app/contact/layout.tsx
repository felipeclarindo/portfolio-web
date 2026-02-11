import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Felipe Clarindo",
  description: "Contact of Felipe Clarindo",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
