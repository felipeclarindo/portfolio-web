import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Admin | Felipe Clarindo",
  description: "Dashboard Administrativo para gerenciamento.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
