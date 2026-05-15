import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Felipe Clarindo",
  description: "Serviços oferecidos por Felipe Clarindo",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
