"use client";

import { itemResume } from "@/lib/motion/motion";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

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

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

export default function ResumeScreen() {
  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24">
      {/* HERO */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h1 className="font-mono text-4xl md:text-6xl text-[var(--primary-color)] mb-6">
          <span className="opacity-50">&gt;_</span> Resume
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional experience, skills and technical background focused on
          building reliable and scalable systems.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-20"
      >
        {/* EXPERIENCE */}
        <motion.section variants={itemResume}>
          <h2 className="font-mono text-2xl text-green-400 mb-8">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="
                  border border-green-500/20
                  bg-black/70 backdrop-blur-md
                  rounded-lg p-6
                "
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-lg font-mono text-green-300">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>

                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section variants={itemResume}>
          <h2 className="font-mono text-2xl text-green-400 mb-8">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="
                  border border-green-500/20
                  bg-black/70 backdrop-blur-md
                  rounded-lg p-6
                "
              >
                <h3 className="mb-4 text-green-300 font-mono">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="
                        px-3 py-1
                        text-xs font-mono
                        border border-green-500/30
                        rounded
                        text-green-300
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
        <motion.div variants={itemResume} className="text-center">
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
            Let’s work together →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
