"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import Introduction from "../../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectProps } from "@/types/pages";
import { projectsData } from "@/mock/projectsData";

export default function ProjectsScreen() {
  const { language, translate } = useLanguage();

  const projects: ProjectProps[] = projectsData;

  const [search, setSearch] = useState("");
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const toggleStack = (stack: string) => {
    setSelectedStacks((prev) =>
      prev.includes(stack)
        ? prev.filter((item) => item !== stack)
        : [...prev, stack],
    );
  };

  const stacks = useMemo(() => {
    const allStacks = projects.flatMap(
      (project) => project.stacks?.map((stack) => stack.name) ?? [],
    );

    return ["all", ...new Set(allStacks)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title[language].toLowerCase().includes(search.toLowerCase()) ||
        project.description[language]
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStack =
        selectedStacks.length === 0 ||
        selectedStacks.every((selectedStack) =>
          project.stacks?.some(
            (stack) => stack.name.toLowerCase() === selectedStack.toLowerCase(),
          ),
        );
      return matchesSearch && matchesStack;
    });
  }, [projects, search, selectedStacks]);

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-(--text-primary) transition-colors">
      <Introduction
        text={translate("projects.title")}
        description={translate("projects.description")}
      />

      {/* Filters */}
      <div className="max-w-5xl mx-auto mt-12">
        <div
          className="
      rounded-2xl
      border border-(--border-primary)
      bg-(--bg-secondary)
      p-6
      space-y-6
      backdrop-blur-sm
    "
        >
          {/* Search */}
          <div className="relative">
            <svg
              className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          w-5
          h-5
          text-(--text-secondary)
        "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>

            <input
              type="text"
              placeholder={translate("projects.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
          w-full
          rounded-xl
          border border-(--border-primary)
          bg-(--bg-primary)
          py-3
          pl-12
          pr-4
          text-(--text-primary)
          transition-all
          focus:border-(--brand-primary)
          focus:ring-2
          focus:ring-(--brand-primary)
          outline-none
        "
            />
          </div>

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-mono text-lg">
                {translate("projects.filterHeader")}
              </h3>

              <p className="text-sm text-(--text-secondary)">
                {translate("projects.filterDescription")}
              </p>
            </div>

            {(selectedStacks.length > 0 || search) && (
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedStacks([]);
                }}
                className="
            text-sm
            px-4
            py-2
            rounded-lg
            border border-red-500/30
            text-red-400
            hover:bg-red-500/10
            transition
          "
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Stack Pills */}
          <div className="flex flex-wrap gap-3">
            {stacks
              .filter((stack) => stack !== "all")
              .map((stack) => {
                const active = selectedStacks.includes(stack);

                return (
                  <button
                    key={stack}
                    onClick={() => toggleStack(stack)}
                    className={`
                px-4 py-2
                rounded-full
                border
                text-sm
                transition-all duration-300
                ${
                  active
                    ? `
                      border-(--brand-primary)
                      bg-(--brand-primary)
                      text-white
                      shadow-lg
                      shadow-(--brand-primary)/20
                    `
                    : `
                      border-(--border-primary)
                      bg-(--bg-primary)
                      text-(--text-secondary)
                      hover:border-(--brand-primary)
                      hover:text-(--brand-primary)
                    `
                }
              `}
                  >
                    {stack}
                  </button>
                );
              })}
          </div>

          {/* Footer */}
          <div
            className="
        flex
        flex-wrap
        items-center
        justify-between
        gap-3
        border-t
        border-(--border-primary)
        pt-4
      "
          >
            <span className="text-sm text-(--text-secondary)">
              {filteredProjects.length} {translate("projects.filterProject")}
              {filteredProjects.length !== 1 ? "s" : ""}{" "}
              {translate("projects.filterFound")}
            </span>

            {selectedStacks.length > 0 && (
              <div className="flex flex-wrap gap-2 cursor-pointer transition-all duration-300 ease-in-out">
                {selectedStacks.map((stack) => (
                  <span
                    key={stack}
                    className="
                rounded-full
                bg-(--brand-primary)/15
                px-3
                py-1
                text-xs
                text-(--brand-primary)
              "
                  >
                    {stack}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project List */}
      {filteredProjects.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-10 mt-16">
          {filteredProjects.map((project, index) => {
            const link = `/projects/${project.slug}`;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  rounded-xl
                  border border-(--border-primary)
                  bg-(--bg-secondary)
                  p-8
                  transition-all duration-300
                  hover:border-(--brand-primary)
                "
              >
                {/* Header */}
                <header className="mb-4">
                  <h2 className="font-mono text-2xl text-(--brand-primary)">
                    {project.title[language]}
                  </h2>
                </header>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-(--text-secondary)">
                  {project.description[language]}
                </p>

                {/* Stacks */}
                <ul className="mb-6 flex flex-wrap gap-3">
                  {project.stacks?.map((tech) => (
                    <li
                      key={tech.id}
                      className="
                        rounded-md
                        border border-(--border-primary)
                        bg-(--bg-tertiary)
                        px-3 py-1
                        text-xs
                        font-mono
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
                    inline-flex
                    items-center
                    gap-2
                    font-mono
                    text-(--brand-primary)
                    transition-colors
                    hover:text-(--brand-primary-hover)
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
                    bg-[radial-gradient(circle_at_top_left,var(--brand-primary),transparent_70%)]
                    blur-3xl
                  "
                  style={{
                    opacity: 0.05,
                  }}
                />
              </motion.article>
            );
          })}
        </div>
      ) : (
        <div className="max-w-5xl mx-auto mt-16">
          <p
            className="
              text-center
              text-(--text-secondary)
              border border-(--border-primary)
              rounded-xl
              py-8
              px-6
            "
          >
            {translate("projects.noProjects")}
          </p>
        </div>
      )}

      {/* Final CTA */}
      <div className="mt-24 text-center">
        <Link
          href="/services"
          className="
            inline-flex
            items-center
            gap-2
            rounded-md
            border border-(--brand-primary)
            px-10 py-4
            font-mono
            text-(--brand-primary)
            transition-all duration-300
            hover:bg-(--brand-primary)
            hover:text-white
          "
        >
          {translate("projects.seeMyServices")} →
        </Link>
      </div>
    </section>
  );
}
