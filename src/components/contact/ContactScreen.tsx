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
        pt-28 pb-24
        flex flex-col items-center
        text-[var(--text-primary)]
        transition-colors
      "
    >
      {/* Decorative Grid */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(to_right,var(--border-primary)_1px,transparent_1px)]
          bg-[size:48px_48px]
          opacity-10
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
            border border-[var(--border-primary)]
            bg-[var(--bg-secondary)]
            rounded-xl
            p-8
            font-mono
            text-left
            transition-all duration-300
            hover:border-[var(--brand-primary)]
          "
        >
          <p className="text-[var(--text-secondary)] mb-6">
            <span className="text-[var(--brand-primary)]">$</span>{" "}
            {translate("contact.prompt")}
          </p>

          <ul className="space-y-4 text-[var(--text-secondary)]">
            <li>
              <span className="text-[var(--brand-primary)]">email:</span>{" "}
              <a
                href="mailto:contato.felipeclarindo@gmail.com"
                className="hover:text-[var(--brand-primary)] transition-colors"
              >
                contato.felipeclarindo@gmail.com
              </a>
            </li>

            <li>
              <span className="text-[var(--brand-primary)]">github:</span>{" "}
              <Link
                target="_blank"
                href="https://github.com/felipeclarindo"
                className="hover:text-[var(--brand-primary)] transition-colors"
              >
                github.com/felipeclarindo
              </Link>
            </li>

            <li>
              <span className="text-[var(--brand-primary)]">linkedin:</span>{" "}
              <Link
                target="_blank"
                href="https://linkedin.com/in/felipeclarindo"
                className="hover:text-[var(--brand-primary)] transition-colors"
              >
                linkedin.com/in/felipeclarindo
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="
                inline-flex items-center gap-2
                px-8 py-3
                rounded-md
                border border-[var(--brand-primary)]
                text-[var(--brand-primary)]
                hover:bg-[var(--brand-primary)]
                hover:text-white
                transition-all duration-300
              "
            >
              View my services →
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
