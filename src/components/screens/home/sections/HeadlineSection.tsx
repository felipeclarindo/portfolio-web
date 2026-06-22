"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeadlineSection() {
  const { translate } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
        {translate("home.headline.whiteOne")}{" "}
        <span className="relative">
          <span className="text-(--brand-primary)">
            {translate("home.headline.blueOne")}{" "}
          </span>
        </span>
        {translate("home.headline.whiteTwo")}{" "}
        <span className="relative">
          <span className="text-(--brand-primary)">
            {translate("home.headline.blueTwo")}
          </span>
        </span>       
        <br />
        {translate("home.headline.whiteThree")}
      </h1>

      <p className="text-lg md:text-xl text-(--text-secondary) max-w-3xl mx-auto leading-relaxed">
        {translate("home.description")}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
        <Link
          href="/projects"
          className="px-10 py-4 bg-(--brand-primary) hover:bg-(--brand-primary-hover) text-white rounded-xl font-semibold transition-all duration-300 shadow-xl hover:scale-105"
        >
          {translate("home.buttonOne")}
        </Link>

        <Link
          href="https://wa.me/5511978590137?text=Olá,%20vi%20seu%20portfolio%20e%20tenho%20interesse%20nos%20seus%20serviços!"
          target="_blank"
          className="px-10 py-4 border border-(--border-primary) bg-(--bg-secondary) rounded-xl font-semibold hover:bg-(--bg-tertiary) transition-all duration-300"
        >
          {translate("home.buttonTwo")}
        </Link>
      </div>
    </motion.div>
  )
}