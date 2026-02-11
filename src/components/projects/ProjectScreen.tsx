"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = {
  "energy-analytics": {
    title: "Energy Analytics Platform",
    description:
      "Plataforma para análise de consumo energético com dashboards interativos e modelos preditivos.",
    problem:
      "Empresas tinham dificuldade em visualizar padrões de consumo energético e prever custos futuros.",
    solution:
      "Desenvolvimento de dashboards interativos com modelos de Machine Learning para previsão de consumo.",
    result:
      "Melhoria na tomada de decisão baseada em dados e redução de custos operacionais.",
    stack: ["Next.js", "TypeScript", "Python", "Machine Learning"],
    github: "#",
    demo: "#",
  },
  "automotive-damage": {
    title: "Automotive Damage Detection",
    description:
      "Sistema de visão computacional para identificar e classificar danos em veículos.",
    problem:
      "Processos manuais de inspeção eram lentos e imprecisos.",
    solution:
      "Modelo de Deep Learning para identificar e classificar danos automaticamente.",
    result:
      "Redução de tempo de inspeção e maior precisão nas análises.",
    stack: ["Python", "OpenCV", "Deep Learning"],
    github: "#",
    demo: "#",
  },
  "smart-portfolio": {
    title: "Smart Portfolio System",
    description:
      "Portfólio técnico com foco em performance, UX e arquitetura escalável.",
    problem:
      "Portfólios tradicionais não demonstram engenharia real de software.",
    solution:
      "Desenvolvimento com foco em performance, SEO, animações suaves e design system.",
    result:
      "Maior impacto visual e melhor posicionamento profissional.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
};

export default function ProjectScreen() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 pt-32 pb-24 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors">

      <div className="max-w-4xl mx-auto space-y-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--brand-primary)]">
              {project.title}
            </span>
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* STACK */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[var(--brand-primary)]">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2
                  text-sm font-mono
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-md
                  text-[var(--text-secondary)]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* PROBLEM / SOLUTION / RESULT */}
        <div className="space-y-10">
          <InfoBlock title="Problem" content={project.problem} />
          <InfoBlock title="Solution" content={project.solution} />
          <InfoBlock title="Result" content={project.result} />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 pt-6">
          <Link
            href={project.demo}
            className="
              px-8 py-3
              bg-[var(--brand-primary)]
              text-white
              rounded-md
              hover:bg-[var(--brand-primary-hover)]
              transition-all duration-300
            "
          >
            Live Demo
          </Link>

          <Link
            href={project.github}
            className="
              px-8 py-3
              border border-[var(--border-primary)]
              bg-[var(--bg-secondary)]
              text-[var(--text-primary)]
              rounded-md
              hover:bg-[var(--bg-tertiary)]
              transition-all duration-300
            "
          >
            View Code
          </Link>
        </div>

        {/* CTA FINAL */}
        <div className="pt-16 text-center">
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-10 py-4
              border border-[var(--brand-primary)]
              text-[var(--brand-primary)]
              rounded-md
              hover:bg-[var(--brand-primary)]
              hover:text-white
              transition-all duration-300
            "
          >
            Let's Build Something Together →
          </Link>
        </div>

      </div>
    </section>
  );
}
