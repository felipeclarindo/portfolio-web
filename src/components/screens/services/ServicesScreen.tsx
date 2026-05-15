"use client";

import { motion } from "framer-motion";
import Introduction from "../../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";
import { container } from "@/lib/motion/motion";
import { ServiceProps } from "@/types/pages";

export default function ServicesScreen() {
  const { translate } = useLanguage();

  const services: ServiceProps[] = [
    {
      title: translate("services.serviceOneTitle"),
      description: translate("services.serviceOneDescription"),
      stacks: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
    {
      title: "APIs & Backend",
      description: translate("services.serviceTwoDescription"),
      stacks: ["Node.js", "Python", "PostgreSQL", "Supabase", "Firebase"],
    },
    {
      title: translate("services.serviceThreeTitle"),
      description: translate("services.serviceThreeDescription"),
      stacks: ["Python", "Selenium", "APIs", "Scrapping"],
    },
    {
      title: translate("services.serviceFourTitle"),
      description: translate("services.serviceFourDescription"),
      stacks: ["Python", "Pandas", "Scikit-learn", "OpenCV", "yolo", "PyTorch"],
    },
  ];

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-[var(--text-primary)] transition-colors">
      <Introduction
        text={translate("services.title")}
        description={translate("services.description")}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-24 mt-16"
      >
        {/* SERVICES */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-[var(--brand-primary)] mb-10">
            {translate("services.subtitleOne")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -4 }}
                className="
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-xl p-8
                  transition-all duration-300
                  hover:border-[var(--brand-primary)]
                "
              >
                <h3 className="font-mono text-xl text-[var(--brand-primary)] mb-4">
                  {service.title}
                </h3>

                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {service.stacks.map((tech) => (
                    <li
                      key={tech}
                      className="
                        px-3 py-1
                        text-xs font-mono
                        border border-[var(--border-primary)]
                        rounded-md
                        bg-[var(--bg-tertiary)]
                        text-[var(--text-secondary)]
                      "
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROCESS */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-[var(--brand-primary)] mb-10">
            {translate("services.subtitleTwo")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              translate("services.stepOneDescription"),
              translate("services.stepTwoDescription"),
              translate("services.stepThreeDescription"),
              translate("services.stepFourDescription"),
            ].map((step, index) => (
              <div
                key={step}
                className="
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-xl p-6
                  text-center
                  transition-all duration-300
                  hover:border-[var(--brand-primary)]
                "
              >
                <span className="block mb-3 text-[var(--brand-primary)] font-mono">
                  {translate("services.stepsTitle")} {index + 1}
                </span>

                <p className="text-[var(--text-secondary)]">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* REQUEST FORM */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-[var(--brand-primary)] mb-10 text-center">
            Request a service
          </h2>

          <form
            className="
              max-w-3xl mx-auto
              border border-[var(--border-primary)]
              bg-[var(--bg-secondary)]
              rounded-xl p-8
              space-y-6
            "
          >
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full
                bg-[var(--bg-tertiary)]
                border border-[var(--border-primary)]
                rounded-md px-4 py-3
                text-[var(--text-primary)]
                font-mono
                focus:outline-none
                focus:border-[var(--brand-primary)]
                transition
              "
            />

            <input
              type="email"
              placeholder="Your email"
              className="
                w-full
                bg-[var(--bg-tertiary)]
                border border-[var(--border-primary)]
                rounded-md px-4 py-3
                text-[var(--text-primary)]
                font-mono
                focus:outline-none
                focus:border-[var(--brand-primary)]
                transition
              "
            />

            <select
              className="
                w-full
                bg-[var(--bg-tertiary)]
                border border-[var(--border-primary)]
                rounded-md px-4 py-3
                text-[var(--text-primary)]
                font-mono
                focus:outline-none
                focus:border-[var(--brand-primary)]
                transition
              "
            >
              <option>Select a service</option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>

            <textarea
              placeholder="Describe your project"
              rows={4}
              className="
                w-full
                bg-[var(--bg-tertiary)]
                border border-[var(--border-primary)]
                rounded-md px-4 py-3
                text-[var(--text-primary)]
                font-mono
                focus:outline-none
                focus:border-[var(--brand-primary)]
                transition
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-md
                bg-[var(--brand-primary)]
                text-white
                hover:bg-[var(--brand-primary-hover)]
                transition-all duration-300
                font-mono
              "
            >
              Send request →
            </button>
          </form>
        </motion.section>
      </motion.div>
    </section>
  );
}
