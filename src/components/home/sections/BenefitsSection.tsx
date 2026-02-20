import { motion } from "framer-motion";

export default function BenefitsSection() {
    return (
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-24 space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Work With Me?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Business-Oriented Development",
                desc: "Every line of code is written to generate measurable business results.",
              },
              {
                title: "Scalable & Clean Architecture",
                desc: "Built to grow with your company without technical debt.",
              },
              {
                title: "Performance & Optimization",
                desc: "High-speed applications focused on user experience and conversion.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="
                  border border-[var(--border-primary)]
                  bg-[var(--bg-secondary)]
                  rounded-2xl
                  p-8
                  hover:border-[var(--brand-primary)]
                  transition-all duration-300
                "
              >
                <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


    )
}