"use client";

import { motion } from "framer-motion";
import Introduction from "../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";
import { container } from "@/lib/motion/motion";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, performant and scalable web applications using best engineering practices.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "APIs & Backend",
    description:
      "Secure and well-structured APIs with focus on scalability and clean architecture.",
    stack: ["Node.js", "Python", "PostgreSQL", "Supabase"],
  },
  {
    title: "Automation & Scripts",
    description:
      "Automation of repetitive tasks, bots and scripts to improve productivity.",
    stack: ["Python", "Selenium", "APIs"],
  },
  {
    title: "Data & Machine Learning",
    description:
      "Data analysis, dashboards and predictive models for real-world problems.",
    stack: ["Python", "Pandas", "Scikit-learn"],
  },
];

export default function ServicesScreen() {
  const { translate } = useLanguage();
  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24">
      <Introduction
        text={translate("services.title")}
        description={translate("services.description")}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-24"
      >
        {/* SERVICES */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-green-400 mb-10">
            What I offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -4 }}
                className="
                  border border-green-500/20
                  bg-black/70 backdrop-blur-md
                  rounded-lg p-8
                  transition-all
                "
              >
                <h3 className="font-mono text-xl text-green-300 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROCESS */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-green-400 mb-10">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Understanding the problem",
              "Technical planning",
              "Development & testing",
              "Delivery & support",
            ].map((step, index) => (
              <div
                key={step}
                className="
                  border border-green-500/20
                  bg-black/70 backdrop-blur-md
                  rounded-lg p-6
                  text-center
                "
              >
                <span className="block mb-2 text-green-400 font-mono">
                  Step {index + 1}
                </span>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* REQUEST FORM */}
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-green-400 mb-10 text-center">
            Request a service
          </h2>

          <form
            className="
              max-w-3xl mx-auto
              border border-green-500/20
              bg-black/70 backdrop-blur-md
              rounded-lg p-8
              space-y-6
            "
          >
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full bg-black border border-green-500/30
                rounded px-4 py-3
                text-green-300 font-mono
                focus:outline-none focus:border-green-400
              "
            />

            <input
              type="email"
              placeholder="Your email"
              className="
                w-full bg-black border border-green-500/30
                rounded px-4 py-3
                text-green-300 font-mono
                focus:outline-none focus:border-green-400
              "
            />

            <select
              className="
                w-full bg-black border border-green-500/30
                rounded px-4 py-3
                text-green-300 font-mono
                focus:outline-none focus:border-green-400
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
                w-full bg-black border border-green-500/30
                rounded px-4 py-3
                text-green-300 font-mono
                focus:outline-none focus:border-green-400
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                border border-[var(--primary-color)]
                text-[var(--primary-color)] font-mono
                hover:bg-[var(--primary-color)]
                hover:text-black
                transition-all duration-300
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
