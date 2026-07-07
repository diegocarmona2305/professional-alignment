"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function CTASection() {
  return (
    <section
      className="relative py-24"
      style={{ background: "linear-gradient(to bottom, #0A0A0A, #1a0000)" }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer(0.08)}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-4xl sm:text-5xl text-white mb-4 tracking-wide"
        >
          ¿LISTO PARA LLEVAR TU CARRO A MANOS EXPERTAS?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
          Llámanos o escríbenos hoy — te atendemos de lunes a sábado.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Button href={SITE.phoneHref} variant="primary">
            LLÁMANOS — {SITE.phone}
          </Button>
          <Button href={SITE.whatsapp} variant="secondary">
            WHATSAPP
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
