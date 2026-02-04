"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { container } from "@/lib/motion/motion";
import Introduction from "../ui/Introdution";
import Link from "next/link";

export default function ContactScreen() {
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
        className="relative w-full"
      >
        <Introduction
          text={translate("contact.title")}
          description={translate("contact.description")}
        />

        {/* Contact Box */}
        <motion.div
          variants={container}
          className="
            mx-auto
            w-full max-w-xl
            border border-gray-700
            bg-black/40
            backdrop-blur
            p-8
            font-mono
            text-left
          "
        >
          <p className="text-gray-400 mb-4">
            <span className="text-[var(--primary-color)]">$</span>{" "}
            {translate("contact.prompt")}
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="text-[var(--primary-color)]">email:</span>{" "}
              contato.felipeclarindo@gmail.com
            </li>
            <li>
              <span className="text-[var(--primary-color)]">github:</span>{" "}
              <Link target="_blank" href="https://github.com/felipeclarindo">
                github.com/felipeclarindo
              </Link>
            </li>
            <li>
              <span className="text-[var(--primary-color)]">linkedin:</span>{" "}
              <Link
                target="_blank"
                href="https://linkedin.com/in/felipeclarindo"
              >
                linkedin.com/in/felipeclarindo
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
