import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Felipe Clarindo",
  description: "Painel Administrativo para gerenciar solicitações de serviço",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
