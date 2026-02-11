import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resumer | Felipe Clarindo",
  description: "Resumer of Felipe Clarindo",
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
