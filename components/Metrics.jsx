"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { METRICS } from "@/lib/site";
import { staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Metrics() {
  return (
    <section className="bg-surface py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
      >
        {METRICS.map((metric) => (
          <motion.div key={metric.label} variants={item}>
            <div className="font-heading text-primary text-7xl sm:text-8xl">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={1.5} />
            </div>
            <p className="text-white mt-2 font-body tracking-wide uppercase text-sm sm:text-base">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
