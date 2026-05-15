import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Admin | Felipe Clarindo",
  description: "Login no Painel Administrativo para gerenciamento",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
