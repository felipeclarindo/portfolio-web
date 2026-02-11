"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Introduction from "../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    title: "Energy Analytics Platform",
    description:
      "Plataforma para análise de consumo energético com dashboards interativos e modelos preditivos.",
    stack: ["Next.js", "TypeScript", "Python", "Machine Learning"],
    link: "#",
  },
  {
    title: "Automotive Damage Detection",
    description:
      "Sistema de visão computacional para identificar e classificar danos em veículos a partir de imagens.",
    stack: ["Python", "OpenCV", "Deep Learning"],
    link: "#",
  },
  {
    title: "Smart Portfolio System",
    description:
      "Portfólio técnico com animações performáticas, foco em UX, SEO e engenharia de software.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
];

export default function ProjectsScreen() {
  const { translate } = useLanguage();

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-[var(--text-primary)] transition-colors">

      <Introduction
        text={translate("projects.title")}
        description={translate("projects.description")}
      />

      {/* Project List */}
      <div className="max-w-5xl mx-auto space-y-10 mt-16">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
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
                {project.title}
              </h2>
            </header>

            {/* Description */}
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Stack */}
            <ul className="flex flex-wrap gap-3 mb-6">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="
                    px-3 py-1
                    text-xs font-mono
                    border border-[var(--border-primary)]
                    rounded-md
                    bg-[var(--bg-tertiary)]
                    text-[var(--text-secondary)]
                    transition
                  "
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={project.link}
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
        ))}
      </div>

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
