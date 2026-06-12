"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Introduction from "../../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectProps } from "@/types/pages";
import { projectsData } from "@/mock/projectsData";

export default function ProjectsScreen() {
  const { translate } = useLanguage();

  const projects: ProjectProps[] = projectsData;

  // if (loading) {
  //   return (
  //     <section className="min-h-screen flex items-center justify-center">
  //       <p className="font-mono text-sm opacity-60">Loading projects...</p>
  //     </section>
  //   );
  // }

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-(--text-primary) transition-colors">
      <Introduction
        text={translate("projects.title")}
        description={translate("projects.description")}
      />

      {/* Project List */}
      {projects.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-10 mt-16">
          {projects.map((project, index) => {
            const title = project.title;
            const description = project.description;
            const link = `/projects/${project.slug}`;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="
                  group relative
                  border border-(--border-primary)
                  bg-(--bg-secondary)
                  rounded-xl
                  p-8
                  transition-all duration-300
                  hover:border-(--brand-primary)
                "
              >
                {/* Header */}
                <header className="mb-4">
                  <h2 className="font-mono text-2xl text-(--brand-primary)">
                    {title}
                  </h2>
                </header>

                {/* Description */}
                <p className="text-(--text-secondary) mb-6 leading-relaxed">
                  {description}
                </p>

                {/* Stack */}
                <ul className="flex flex-wrap gap-3 mb-6">
                  {project.stacks?.map((tech) => (
                    <li
                      key={tech.id}
                      className="
                        px-3 py-1
                        text-xs font-mono
                        border border-(--border-primary)
                        rounded-md
                        bg-(--bg-tertiary)
                        text-(--text-secondary)
                      "
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={link}
                  className="
                    inline-flex items-center gap-2
                    text-(--brand-primary)
                    font-mono
                    hover:text-(--brand-primary-hover)
                    transition-colors
                  "
                >
                  View project →
                </Link>

                {/* Hover Glow */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    bg-[radial-gradient(circle_at_top_left,var(--brand-primary)/10,transparent_60%)]
                  "
                />
              </motion.article>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-(--text-secondary)/65 mt-16 border-2 border-white/20 py-6 px-4 m-auto max-w-fit">
          {translate("projects.noProjects")}
        </p>
      )}

      {/* CTA FINAL */}
      <div className="mt-24 text-center">
        <Link
          href="/services"
          className="
            inline-flex items-center gap-2
            px-10 py-4
            rounded-md
            border border-(--brand-primary)
            text-(--brand-primary)
            font-mono
            hover:bg-(--brand-primary)
            hover:text-white
            transition-all duration-300
          "
        >
          {translate("projects.seeMyServices")} →
        </Link>
      </div>
    </section>
  );
}
