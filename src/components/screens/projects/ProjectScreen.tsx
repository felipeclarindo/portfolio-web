import { projectsData } from "@/mock/projectsData";
import { StackProps } from "@/types/pages";
import { notFound } from "next/navigation";

interface Props {
  slug: string;
}

export default function ProjectScreen({ slug }: Props) {
  const project = projectsData.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const video = project.demonstration_url;

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 text-(--text-primary)">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-mono text-(--brand-primary) mb-6">
          {project.title}
        </h1>

        <p className="text-(--text-secondary) leading-relaxed mb-10">
          {project.description}
        </p>

        {video && (
          <div className="rounded-xl overflow-hidden border border-(--border-primary) mb-10">
            <video controls className="w-full" src={video} />
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-10">
          {project.stacks?.map((stack: StackProps) => (
            <span
              key={stack.id}
              className="px-3 py-1 text-xs font-mono border border-(--border-primary) rounded-md"
            >
              {stack.name}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="border border-(--brand-primary) px-6 py-3 rounded-md font-mono hover:bg-(--brand-primary) hover:text-white transition"
            >
              GitHub
            </a>
          )}

          {project.host_url && (
            <a
              href={project.host_url}
              target="_blank"
              rel="noreferrer"
              className="border border-(--border-primary) px-6 py-3 rounded-md font-mono hover:border-(--brand-primary) transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
