import ProjectScreen from "@/components/screens/projects/ProjectScreen";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <ProjectScreen slug={slug} />;
}
