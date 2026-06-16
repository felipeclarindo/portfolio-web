import { motion } from "framer-motion";
import { container } from "@/lib/motion/motion";
import { useServices } from "@/mock/servicesData";
import { ServiceProps } from "@/types/pages";

export default function ServiceRequestForm() {

    const services: ServiceProps[] = useServices();
    return (
        <motion.section variants={container}>
          <h2 className="font-mono text-2xl text-(--brand-primary) mb-10 text-center">
            Request a service
          </h2>

          <form
            className="
              max-w-3xl mx-auto
              border border-(--border-primary)
              bg-(--bg-secondary)
              rounded-xl p-8
              space-y-6
            "
          >
            <input
              type="text"
              placeholder="Your name"
              className="
                w-full
                bg-(--bg-tertiary)
                border border-(--border-primary)
                rounded-md px-4 py-3
                text-(--text-primary)
                font-mono
                focus:outline-none
                focus:border-(--brand-primary)
                transition
              "
            />

            <input
              type="email"
              placeholder="Your email"
              className="
                w-full
                bg-(--bg-tertiary)
                border border-(--border-primary)
                rounded-md px-4 py-3
                text-(--text-primary)
                font-mono
                focus:outline-none
                focus:border-(--brand-primary)
                transition
              "
            />

            <select
              className="
                w-full
                bg-(--bg-tertiary)
                border border-(--border-primary)
                rounded-md px-4 py-3
                text-(--text-primary)
                font-mono
                focus:outline-none
                focus:border-(--brand-primary)
                transition
              "
            >
              <option>Select a service</option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>

            <textarea
              placeholder="Describe your project"
              rows={4}
              className="
                w-full
                bg-(--bg-tertiary)
                border border-(--border-primary)
                rounded-md px-4 py-3
                text-(--text-primary)
                font-mono
                focus:outline-none
                focus:border-(--brand-primary)
                transition
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-md
                bg-(--brand-primary)
                text-white
                hover:bg-(--brand-primary-hover)
                transition-all duration-300
                font-mono
              "
            >
              Send request →
            </button>
          </form>
        </motion.section>
    )
}