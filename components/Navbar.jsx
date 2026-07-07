"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur-md border-b-2 border-primary"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-navbar.png"
            alt="Professional Alignment & Repair Center"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
            priority
          />
          <span className="hidden sm:block font-heading text-xl tracking-widest text-white leading-none">
            PROFESSIONAL ALIGNMENT
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-sm tracking-widest transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-white"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="bg-primary text-white font-heading text-sm tracking-widest px-5 py-2.5 hover:brightness-110 transition"
          >
            CONTÁCTANOS
          </Link>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b-2 border-primary overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-heading text-base tracking-widest ${
                    pathname === link.href ? "text-primary" : "text-white"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="bg-primary text-white font-heading text-sm tracking-widest px-5 py-3 text-center"
              >
                CONTÁCTANOS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
