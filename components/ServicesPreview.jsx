"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ServicesPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4 tracking-wide">
            NUESTROS SERVICIOS
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((service) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="bg-surface border border-primary hover:border-primary hover:brightness-110 p-6"
            >
              <ServiceIcon name={service.icon} className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-2xl text-white mb-2 tracking-wide">
                {service.name}
              </h3>
              <p className="text-white/70 text-sm">{service.short}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <Button href="/servicios" variant="primary">
            VER TODOS LOS SERVICIOS
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
