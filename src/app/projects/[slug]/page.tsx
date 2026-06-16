import ProjectScreen from "@/components/screens/projects/ProjectScreen";

interface Props {
  readonly params: Promise<{
    readonly slug: string;
  }>;
}

export default async function Page({ params }: Readonly<Props>) {
  const { slug } = await params;

  return <ProjectScreen slug={slug} />;
}
