"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Introduction from "../../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Project } from "@/types/pages";

export default function ProjectsScreen() {
  const { translate, language } = useLanguage();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao carregar projetos", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-sm opacity-60">
          Loading projects...
        </p>
      </section>
    );
  }

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-[var(--text-primary)] transition-colors">
      <Introduction
        text={translate("projects.title")}
        description={translate("projects.description")}
      />

      {/* Project List */}
      {projects.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-10 mt-16">
          {projects.map((project, index) => {
            const title =
              language === "pt" ? project.title_pt : project.title_en;

            const description =
              language === "pt"
                ? project.description_pt
                : project.description_en;

            const link =
              project.host_url ||
              project.github_url ||
              "#";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="
                  group relative
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-xl
                  p-8
                  transition-all duration-300
                  hover:border-[var(--brand-primary)]
                "
              >
                {/* Header */}
                <header className="mb-4">
                  <h2 className="font-mono text-2xl text-[var(--brand-primary)]">
                    {title}
                  </h2>
                </header>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
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
                        border border-[var(--border-primary)]
                        rounded-md
                        bg-[var(--bg-tertiary)]
                        text-[var(--text-secondary)]
                      "
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={link}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2
                    text-[var(--brand-primary)]
                    font-mono
                    hover:text-[var(--brand-primary-hover)]
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
       ):  (
          <p className="text-center text-[var(--text-secondary)]/65 mt-16 border-2 border-white/20 py-6 px-4 m-auto max-w-fit">
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
            border border-[var(--brand-primary)]
            text-[var(--brand-primary)]
            font-mono
            hover:bg-[var(--brand-primary)]
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