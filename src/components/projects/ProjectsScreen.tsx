"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Introduction from "../ui/Introdution";

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
  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24">
      {/* Introduction */}
      <Introduction
        text={"Projects"}
        description={
          "Projetos desenvolvidos com foco em engenharia, performance e experiência do usuário. Cada projeto resolve um problema real."
        }
      />

      {/* Project List */}
      <div className="max-w-5xl mx-auto space-y-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="
              group
              relative
              border border-green-500/20
              bg-black/70 backdrop-blur-md
              rounded-lg
              p-8
              transition-all
              hover:border-green-400
            "
          >
            {/* Header */}
            <header className="mb-4">
              <h2 className="font-mono text-2xl text-green-400">
                {project.title}
              </h2>
            </header>

            {/* Description */}
            <p className="text-gray-300 mb-6">{project.description}</p>

            {/* Stack */}
            <ul className="flex flex-wrap gap-3 mb-6">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="
                    px-3 py-1
                    text-xs font-mono
                    border border-green-500/30
                    rounded
                    text-green-300
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
                text-green-400 font-mono
                hover:text-green-300
                transition
              "
            >
              View project →
            </Link>

            {/* Hover glow */}
            <span
              aria-hidden
              className="
                pointer-events-none
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition
                bg-[radial-gradient(circle_at_top_left,rgba(0,255,140,0.08),transparent_60%)]
              "
            />
          </motion.article>
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="mt-24 text-center">
        <Link
          href="/contact"
          className="
            inline-flex items-center gap-2
            px-10 py-4
            border border-[var(--primary-color)]
            text-[var(--primary-color)] font-mono
            hover:bg-[var(--primary-color)]
            hover:text-black
            transition-all duration-300
          "
        >
          Let’s build something →
        </Link>
      </div>
    </section>
  );
}
