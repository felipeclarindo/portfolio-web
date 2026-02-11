"use client";

import { container } from "@/lib/motion/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import Introduction from "../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "2021 — Present",
    description:
      "Development of web and automation solutions focusing on performance, scalability and UX.",
  },
  {
    role: "Systems Analysis & Data Science Student",
    company: "FIAP & Mackenzie",
    period: "2023 — Present",
    description:
      "Graduating with focus on software engineering, data analysis and real-world problem solving.",
  },
];

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Python", "PostgreSQL", "Supabase"],
  Other: ["Git", "Docker", "Automation", "Clean Code"],
};

export default function ResumeScreen() {
  const { translate } = useLanguage();

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-[var(--text-primary)] transition-colors">

      <Introduction
        text={translate("resume.title")}
        description={translate("resume.description")}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-20 mt-16"
      >
        {/* EXPERIENCE */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-[var(--brand-primary)] mb-8">
            {translate("resume.experience")}
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:border-[var(--brand-primary)]
                "
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-3">
                  <h3 className="text-lg font-mono text-[var(--brand-primary)]">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-[var(--text-muted)]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-[var(--brand-primary)] mb-8">
            {translate("resume.skills")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:border-[var(--brand-primary)]
                "
              >
                <h3 className="mb-4 text-[var(--brand-primary)] font-mono">
                  {category}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="
                        px-3 py-1
                        text-xs font-mono
                        border border-[var(--border-primary)]
                        rounded-md
                        bg-[var(--bg-tertiary)]
                        text-[var(--text-secondary)]
                      "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div variants={container} className="text-center">
          <Link
            href="/contact"
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
            {translate("resume.discoverMyServices")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
