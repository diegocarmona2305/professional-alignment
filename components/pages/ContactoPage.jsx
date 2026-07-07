"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const CONTACT_ITEMS = [
  { icon: "phone", label: SITE.phone, href: SITE.phoneHref, featured: true },
  { icon: "chat", label: "WhatsApp", href: SITE.whatsapp },
  { icon: "pin", label: SITE.address, href: null },
  { icon: "instagram", label: SITE.instagram, href: SITE.instagramUrl },
  { icon: "facebook", label: SITE.facebook, href: SITE.facebookUrl },
];

export default function ContactoPage() {
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
            ESTAMOS AQUÍ PARA TI
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-white/70 text-lg">
            Visítanos, llámanos o escríbenos — te respondemos de inmediato.
          </p>
        </motion.div>
      </section>

      <section className="bg-background pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.08)}
          className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {CONTACT_ITEMS.map((item) => {
            const content = item.featured ? (
              <div className="flex items-center gap-5 bg-primary p-7">
                <Icon name={item.icon} className="w-9 h-9 text-white shrink-0" />
                <span className="font-heading text-3xl text-white tracking-wide">
                  {item.label}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4 bg-surface border border-primary p-5">
                <Icon name={item.icon} className="w-7 h-7 text-primary shrink-0" />
                <span className="text-white/85">{item.label}</span>
              </div>
            );
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className={item.featured ? "sm:col-span-2" : undefined}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block hover:brightness-110 transition"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="bg-background pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-white text-center tracking-wide mb-8">
            HORARIO DE SERVICIO
          </h2>
          <div className="border border-primary divide-y divide-primary/30">
            {SITE.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between px-6 py-4">
                <span className="font-heading text-white tracking-wide text-lg">
                  {h.day.toUpperCase()}
                </span>
                <span
                  className={`font-heading tracking-wide text-lg ${
                    h.time === "Cerrado" ? "text-white/40" : "text-primary"
                  }`}
                >
                  {h.time.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="mapa" className="bg-background pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="border border-primary/40 h-[400px] overflow-hidden">
            <iframe
              src={SITE.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Professional Alignment & Repair Center"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
