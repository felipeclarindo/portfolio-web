import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const hoverGlitch = {
  x: [0, -2, 2, -1, 1, 0],
  transition: {
    duration: 0.25,
    ease: "easeInOut" as const,
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
