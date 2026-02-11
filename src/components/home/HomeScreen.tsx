"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeScreen() {
  const { translate } = useLanguage();
  return (
    <section
      className="
        relative 
        py-40 
        flex 
        flex-col 
        justify-center 
        items-center 
        px-6 overflow-hidden 
        text-[var(--text-primary)]
      "
    >

      <div
        className="
          max-w-6xl 
          text-center space-y-10
        "
      >

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          text-4xl md:text-6xl font-bold leading-tight"
        >
          {translate("home.headline.engineering")} {" "}
          <span className="text-[var(--brand-primary)]">
            {translate("home.headline.scalableDigitalSystems")}
          </span>
          <br />
          {translate("home.headline.thatDriveRealBusinessGrowth")}
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto"
        >
          Full Stack Developer & Data Specialist building high-performance
          applications, intelligent APIs and data-driven platforms with
          clean architecture and measurable impact.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-8 py-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:scale-105"
          >
            View My Work
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border border-[var(--border-primary)] text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-2xl font-semibold hover:bg-[var(--bg-tertiary)] transition-all duration-300"
          >
            Let{`'`}s Build Together
          </Link>
        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[var(--brand-primary)]">
              +20
            </h2>
            <p className="text-[var(--text-muted)]">
              Projects Delivered
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[var(--brand-primary)]">
              100%
            </h2>
            <p className="text-[var(--text-muted)]">
              Clean Architecture Focus
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[var(--brand-primary)]">
              Full Stack
            </h2>
            <p className="text-[var(--text-muted)]">
              Web • API • Data • AI
            </p>
          </div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pt-16"
        >
          <p className="text-[var(--text-muted)] mb-6">
            Technologies I Work With
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "Django",
              "PostgreSQL",
              "Docker",
              "Machine Learning",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-full hover:bg-[var(--bg-tertiary)] transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
