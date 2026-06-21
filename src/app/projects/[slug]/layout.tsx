import type { Metadata } from "next";
import { projectsData } from "@/mock/projectsData";
import { cookies } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectsData.find((project) => project.slug === slug);

  const locale = (await cookies()).get("locale")?.value === "en" ? "en" : "pt";

  return {
    title: `${project?.title[locale]} | Felipe Clarindo`,
    description: project?.description[locale],
  };
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
