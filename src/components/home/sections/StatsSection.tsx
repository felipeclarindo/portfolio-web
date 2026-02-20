import Counter from "@/components/ui/Counter";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function StatsSection() {
  const { translate } = useLanguage();

  const stats = [
    { number: 20, label:  "Projects Delivered", suffix: "+" },
    { number: 4, label: "Years of Experience", suffix: "+" },
    { number: 100, label: "Clean Architecture Focus", suffix: "%" },
  ];

  const badges = [
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      year: "2024",
      description: "Certification validating Git & GitHub fundamentals, workflows, and collaboration practices.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="pt-24 space-y-20"
    >
      {/* ===== STATS ===== */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {translate("home.stats.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                border border-[var(--border-primary)]
                bg-[var(--bg-secondary)]
                rounded-2xl
                p-8
                hover:border-[var(--brand-primary)]
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <h2 className="text-4xl font-bold text-[var(--brand-primary)] mb-2">
                <Counter to={stat.number} />
                {stat.suffix}
              </h2>
              <p className="text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BADGES ===== */}
      <div className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Certifications & Badges
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="
                relative
                border border-[var(--border-primary)]
                bg-[var(--bg-secondary)]
                rounded-2xl
                p-8
                overflow-hidden
                group
                transition-all duration-300
                hover:border-[var(--brand-primary)]
                hover:shadow-[0_0_30px_rgba(0,255,128,0.2)]
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-[var(--brand-primary)]/10 to-transparent blur-xl" />

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-semibold text-[var(--brand-primary)]">
                  {badge.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)]">
                  Issued by {badge.issuer} • {badge.year}
                </p>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}