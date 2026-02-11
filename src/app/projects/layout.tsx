import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Felipe Clarindo",
  description: "Projetos e trabalhos desenvolvidos por Felipe Clarindo",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
