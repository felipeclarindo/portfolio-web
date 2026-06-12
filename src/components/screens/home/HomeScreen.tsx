"use client";

import BenefitsSection from "./sections/BenefitsSection";
import StatsSection from "./sections/StatsAndBadgesSection";
import HeadlineSection from "./sections/HeadlineSection";

export default function HomeScreen() {
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

        <HeadlineSection />

        <BenefitsSection />

        <StatsSection />
      </div>
    </section>
  );
}