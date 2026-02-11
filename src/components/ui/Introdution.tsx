"use client";

import { motion } from "framer-motion";
import { IntroductionProps } from "@/types/ui";
import { container, item,  } from "@/lib/motion/motion";

export default function Introduction({
  text,
  description,
}: Readonly<IntroductionProps>) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto mb-20 text-center"
    >
      <motion.h1
        variants={item}
        className="
          font-mono
          text-4xl md:text-6xl
          text-[var(--primary-color)]
          mb-6
        "
      >
        <span className="opacity-50">&gt;_</span>{" "}
        <span className="relative">
          {text}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="
              absolute -bottom-2 left-0
              h-[2px] w-full
              bg-[var(--primary-color)]
              opacity-30
              origin-left
            "
          />
        </span>
      </motion.h1>

      {description && (
        <motion.p variants={item} className="text-gray-300 max-w-2xl mx-auto">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
