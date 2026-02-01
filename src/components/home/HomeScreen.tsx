"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";
import DevConsole from "@/components/home/DevConsole";
import { container, itemHome } from "@/lib/motion/motion";

export default function HomeScreen() {
  const { translate } = useLanguage();

  return (
    <section
      className="
        relative z-10
        min-h-screen
        px-6
        pt-28
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
        className="relative w-full max-w-5xl text-center"
      >
        {/* Title */}
        <motion.h1
          variants={itemHome}
          className="
            font-mono
            text-[var(--primary-color)]
            text-4xl md:text-6xl
            mb-6
            tracking-tight
          "
        >
          <span className="opacity-50">&gt;_</span>{" "}
          <span className="relative">
            Hello, World
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

        {/* Description */}
        <motion.p
          variants={itemHome}
          className="
            text-gray-300
            text-base md:text-lg
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >
          {translate("home.apresentation")}{" "}
          <span className="text-[var(--primary-color)] font-semibold">
            {translate("home.name")}
          </span>
          , {translate("home.description")}
        </motion.p>

        {/* Console */}
        <motion.div variants={itemHome} className="mt-12 flex justify-center">
          <DevConsole />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemHome}
          className="my-16 flex flex-wrap justify-center gap-6"
        >
          <Link
            href="/projects"
            className="
              inline-flex items-center gap-2
              px-8 py-3
              border border-[var(--primary-color)]
              text-[var(--primary-color)] font-mono
              transition-all duration-300
              hover:bg-[var(--primary-color)] hover:text-black
            "
          >
            View Projects →
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-8 py-3
              text-gray-300 font-mono
              border border-gray-600
              hover:border-[var(--primary-color)]
              hover:text-[var(--primary-color)]
              transition-all duration-300
            "
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
