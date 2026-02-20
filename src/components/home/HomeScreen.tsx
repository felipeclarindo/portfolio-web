"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import BenefitsSection from "./sections/BenefitsSection";
import StatsSection from "./sections/StatsSection";

export default function HomeScreen() {
  const { translate } = useLanguage();

  return (
    <section
      className="
        relative 
        py-40 
        flex flex-col items-center
        px-6 overflow-hidden
        text-[var(--text-primary)]
        transition-colors
      "
    >
      <div className="max-w-6xl text-center space-y-16">

        {/* HEADLINE PREMIUM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
            {translate("home.headline.engineering")}{" "}
            <span className="relative">
              <span className="text-[var(--brand-primary)]">
                {translate("home.headline.scalableDigitalSystems")}
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[var(--brand-primary)]/20 blur-xl rounded-full"></span>
            </span>
            <br />
            {translate("home.headline.thatDriveRealBusinessGrowth")}
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & Data Specialist building high-performance
            applications, intelligent APIs and data-driven platforms with
            clean architecture and measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link
              href="/projects"
              className="px-10 py-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white rounded-xl font-semibold transition-all duration-300 shadow-xl hover:scale-105"
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              className="px-10 py-4 border border-[var(--border-primary)] bg-[var(--bg-secondary)] rounded-xl font-semibold hover:bg-[var(--bg-tertiary)] transition-all duration-300"
            >
              Let’s Build Together
            </Link>
          </div>
        </motion.div>

        <BenefitsSection />

        <StatsSection />
      </div>
    </section>
  );
}