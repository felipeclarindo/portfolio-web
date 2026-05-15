import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project {x}  | Felipe Clarindo",
  description: "Specific project of Felipe Clarindo",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
