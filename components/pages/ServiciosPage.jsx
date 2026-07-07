"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import ServiceIcon from "@/components/ServiceIcon";
import Divider from "@/components/Divider";
import { SERVICES, SITE } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ServiciosPage() {
  return (
    <main className="pt-32">
      <section className="bg-background pb-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-4 tracking-wide">
            NUESTROS SERVICIOS
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-white/70 text-lg">
            Tecnología de diagnóstico computarizado y 30 años de experiencia
            comprobada.
          </p>
        </motion.div>
      </section>

      <section className="bg-background pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.08)}
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="bg-surface border border-primary p-8"
            >
              <ServiceIcon name={service.icon} className="w-12 h-12 text-primary mb-5" />
              <h3 className="font-heading text-3xl text-white mb-3 tracking-wide">
                {service.name}
              </h3>
              <p className="text-white/70 mb-5">{service.description}</p>
              <p className="font-heading text-primary tracking-widest text-sm">
                LLÁMANOS PARA COTIZACIÓN
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Divider />

      <section
        className="py-24"
        style={{ background: "linear-gradient(to bottom, #0A0A0A, #1a0000)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.08)}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl text-white mb-4 tracking-wide"
          >
            ¿NO ENCUENTRAS LO QUE BUSCAS?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8">
            Llámanos — tenemos más de 10 servicios disponibles.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href={SITE.phoneHref} variant="primary">
              {SITE.phone}
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
