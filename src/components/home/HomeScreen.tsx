"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";
import DevConsole from "@/components/home/DevConsole";
import { container } from "@/lib/motion/motion";
import Introduction from "../ui/Introdution";

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
        {/* Introduction */}
        <motion.div variants={container}>
          <Introduction
            text="Hello, World"
            description={
              <>
                {translate("home.apresentation")}{" "}
                <span className="text-[var(--primary-color)] font-semibold">
                  {translate("home.name")}
                </span>
                , {translate("home.description")}
              </>
            }
          />
        </motion.div>

        {/* Console */}
        <motion.div variants={container} className="mt-12 flex justify-center">
          <DevConsole />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={container}
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
            {translate("home.seeMyWork")}
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
            {translate("home.contact")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
