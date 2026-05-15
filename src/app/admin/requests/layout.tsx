import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requests - Admin | Felipe Clarindo",
  description: "Painel administrativo para gerenciamento de solicitações de serviços",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function AdminRequestsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
