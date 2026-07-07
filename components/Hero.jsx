"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt="Taller mecánico Professional Alignment & Repair Center"
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3))",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-primary rounded-full px-4 py-1.5 text-xs sm:text-sm font-heading tracking-widest text-white"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          CAROLINA, PUERTO RICO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="font-heading text-white leading-[0.95] text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] tracking-wide"
        >
          TU CARRO EN
          <br />
          MANOS EXPERTAS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-white/70 text-base sm:text-lg max-w-xl"
        >
          Donde la Experiencia Habla por Sí Sola. 30 años en la industria
          automotriz en Carolina, PR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Button href="/contacto" variant="primary">
            CONTÁCTANOS
          </Button>
          <Button href="/contacto#mapa" variant="secondary">
            CÓMO LLEGAR
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
