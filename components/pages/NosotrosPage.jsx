"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import AnimatedCounter from "@/components/AnimatedCounter";
import Divider from "@/components/Divider";
import { SITE, METRICS } from "@/lib/site";
import { VALUES } from "@/lib/values";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/motion";

export default function NosotrosPage() {
  return (
    <main className="pt-32">
      <section className="bg-background pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeLeft}>
            <h1 className="font-heading text-5xl sm:text-6xl text-white mb-6 tracking-wide">
              30 AÑOS HABLANDO POR SÍ SOLOS
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Professional Alignment & Repair Center nació con una misión
              clara — ofrecer servicios mecánicos de la más alta calidad en
              Carolina, Puerto Rico. Con más de 30 años en la industria,
              hemos ganado la confianza de miles de clientes que regresan
              porque saben que aquí el trabajo se hace bien desde la primera
              vez.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeRight}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="relative w-full h-80 sm:h-[26rem] overflow-hidden border border-primary/40">
              <Image
                src="/nosotros-1.jpg"
                alt="Taller Professional Alignment & Repair Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-80 sm:h-[26rem] overflow-hidden border border-primary/40">
              <Image
                src="/nosotros-2.jpg"
                alt="Taller Professional Alignment & Repair Center"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center border border-primary p-10"
        >
          <p className="text-white/90 text-xl italic leading-relaxed mb-6">
            "{SITE.owner.quote}"
          </p>
          <p className="font-heading text-primary tracking-widest text-lg">
            {SITE.owner.name.toUpperCase()}
          </p>
          <p className="text-white/60 text-sm tracking-wide uppercase">
            {SITE.owner.title}
          </p>
        </motion.div>
      </section>

      <Divider />

      <section className="bg-background py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.08)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="bg-surface border border-primary p-6"
              >
                <Icon name={value.icon} className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-xl text-white mb-2 tracking-wide">
                  {value.title.toUpperCase()}
                </h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      <section className="bg-surface py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.2)}
          className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
        >
          {METRICS.map((metric) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <div className="font-heading text-primary text-7xl sm:text-8xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={1.5} />
              </div>
              <p className="text-white mt-2 tracking-wide uppercase text-sm sm:text-base">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section
        className="py-24"
        style={{ background: "linear-gradient(to bottom, #0A0A0A, #1a0000)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <Button href="/contacto" variant="primary">
            CONTÁCTANOS HOY
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
