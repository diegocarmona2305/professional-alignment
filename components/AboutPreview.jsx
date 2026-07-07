"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { fadeLeft, fadeRight } from "@/lib/motion";

export default function AboutPreview() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 tracking-wide">
            30 AÑOS HABLANDO POR SÍ SOLOS
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            Con más de 30 años en la industria automotriz, Professional
            Alignment & Repair Center es sinónimo de calidad y confianza en
            Carolina, Puerto Rico. Nuestro compromiso es brindarte un
            servicio profesional, honesto y de calidad.
          </p>
          <Button href="/nosotros" variant="primary">
            CONÓCENOS
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeRight}
          className="relative w-full h-80 sm:h-[26rem] overflow-hidden border border-primary/40"
        >
          <Image
            src="/taller-foto.png"
            alt="Taller Professional Alignment & Repair Center"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
