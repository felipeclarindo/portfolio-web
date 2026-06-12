"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { container } from "@/lib/motion/motion";

export default function CookiesPolicyScreen() {
  const { translate } = useLanguage();

  return (
    <section
      className="
        relative z-10
        min-h-screen
        px-6
        pt-28
        pb-20
        flex flex-col
        items-center
      "
    >
      {/* Decorative Grid */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,255,140,0.05)_1px,transparent_1px)]
          bg-[size:48px_48px]
          opacity-20
        "
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl"
      >
        {/* Title */}
        <motion.h1
          variants={container}
          className="
            font-mono
            text-[var(--primary-color)]
            text-3xl md:text-5xl
            mb-10
            tracking-tight
            text-center
          "
        >
          <span className="opacity-50">&gt;_</span>{" "}
          <span className="relative">
            {translate("cookies.title")}
            <span
              aria-hidden
              className="
                absolute -bottom-2 left-0
                h-[2px] w-full
                bg-[var(--primary-color)]
                opacity-30
              "
            />
          </span>
        </motion.h1>

        {/* Content */}
        <motion.div
          variants={container}
          className="
            space-y-8
            text-gray-300
            text-sm md:text-base
            leading-relaxed
            font-mono
          "
        >
          <p>{translate("cookies.introduction")}</p>

          <div>
            <h2 className="text-[var(--primary-color)] text-lg mb-2">
              1. {translate("cookies.section1.title")}
            </h2>
            <p>{translate("cookies.section1.content")}</p>
          </div>

          <div>
            <h2 className="text-[var(--primary-color)] text-lg mb-2">
              2. {translate("cookies.section2.title")}
            </h2>
            <p>{translate("cookies.section2.content")}</p>
          </div>

          <div>
            <h2 className="text-[var(--primary-color)] text-lg mb-2">
              3. {translate("cookies.section3.title")}
            </h2>
            <p>{translate("cookies.section3.content")}</p>
          </div>

          <div>
            <h2 className="text-[var(--primary-color)] text-lg mb-2">
              4. {translate("cookies.section4.title")}
            </h2>
            <p>{translate("cookies.section4.content")}</p>
          </div>

          <div>
            <h2 className="text-[var(--primary-color)] text-lg mb-2">
              5. {translate("cookies.section5.title")}
            </h2>
            <p>{translate("cookies.section5.content")}</p>
          </div>

          <p className="text-gray-400 text-xs pt-10 text-center">
            {translate("cookies.lastUpdate")}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
