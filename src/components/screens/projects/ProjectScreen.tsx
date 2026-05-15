import { notFound } from "next/navigation";

async function getProject(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  if (!project) {
    notFound();
  }

  const video = project.projects_demos?.[0]?.url;

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 text-[var(--text-primary)]">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-mono text-[var(--brand-primary)] mb-6">
          {project.title_en}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
          {project.description_en}
        </p>

        {/* VIDEO DEMO */}
        {video && (
          <div className="rounded-xl overflow-hidden border border-[var(--border-primary)] mb-10">
            <video
              controls
              className="w-full"
              src={video}
            />
          </div>
        )}

        {/* STACKS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.stacks?.map((stack: any) => (
            <span
              key={stack.id}
              className="px-3 py-1 text-xs font-mono border border-[var(--border-primary)] rounded-md"
            >
              {stack.name}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-6">

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              className="border border-[var(--brand-primary)] px-6 py-3 rounded-md font-mono hover:bg-[var(--brand-primary)] hover:text-white transition"
            >
              GitHub
            </a>
          )}

          {project.host_url && (
            <a
              href={project.host_url}
              target="_blank"
              className="border border-[var(--border-primary)] px-6 py-3 rounded-md font-mono hover:border-[var(--brand-primary)] transition"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </section>
  );
}