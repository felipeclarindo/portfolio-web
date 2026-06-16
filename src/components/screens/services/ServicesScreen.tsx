"use client";

import { motion } from "framer-motion";
import Introduction from "../../ui/Introdution";
import { useLanguage } from "@/contexts/LanguageContext";
import { container } from "@/lib/motion/motion";
import { useServices } from "@/mock/servicesData";

export default function ServicesScreen() {
  const { translate } = useLanguage();
  const services = useServices();

  return (
    <section className="relative z-10 min-h-screen px-6 pt-28 pb-24 text-(--text-primary) transition-colors">
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
          <h2 className="font-mono text-2xl text-(--brand-primary) mb-10">
            {translate("services.subtitleOne")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -4 }}
                className="
                  border border-(--border-primary)
                  bg-(--bg-secondary)
                  rounded-xl p-8
                  transition-all duration-300
                  hover:border-(--brand-primary)
                "
              >
                <h3 className="font-mono text-xl text-(--brand-primary) mb-4">
                  {service.title}
                </h3>

                <p className="text-(--text-secondary) mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {service.stacks.map((tech) => (
                    <li
                      key={tech}
                      className="
                        px-3 py-1
                        text-xs font-mono
                        border border-(--border-primary)
                        rounded-md
                        bg-(--bg-tertiary)
                        text-(--text-secondary)
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
          <h2 className="font-mono text-2xl text-(--brand-primary) mb-10">
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
                  border border-(--border-primary)
                  bg-(--bg-secondary)
                  rounded-xl p-6
                  text-center
                  transition-all duration-300
                  hover:border-(--brand-primary)
                "
              >
                <span className="block mb-3 text-(--brand-primary) font-mono">
                  {translate("services.stepsTitle")} {index + 1}
                </span>

                <p className="text-(--text-secondary)">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* REQUEST FORM */}
        {/* <ServiceRequestForm /> */}

        {/* Temp */}
        <button
          type="submit"
          className="
              block mx-auto
              px-6
              py-4
              rounded-md
              bg-(--brand-primary)
              text-white
              hover:bg-(--brand-primary-hover)
              transition-all duration-300
              font-mono
              cursor-pointer
            "
        >
          {translate("services.temp")}
        </button>
      </motion.div>
    </section>
  );
}
