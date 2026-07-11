import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
        <Image
          src="/logo-footer.png"
          alt={SITE.name}
          width={80}
          height={80}
          className="h-20 w-auto"
        />
        <div className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm tracking-widest text-white/80 hover:text-primary transition-colors"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="text-sm text-white/70 space-y-1">
          <p>{SITE.address}</p>
          <p>
            <a href={SITE.phoneHref} className="hover:text-primary">
              {SITE.phone}
            </a>
          </p>
          <p>Lun-Vie 8:00am–5:00pm | Sáb 8:00am–1:00pm | Dom: Cerrado</p>
          <p>
            <a href={SITE.instagramUrl} className="hover:text-primary">
              {SITE.instagram}
            </a>{" "}
            · <a href={SITE.facebookUrl} className="hover:text-primary">{SITE.facebook}</a>
          </p>
        </div>
        <p className="text-xs text-white/40">
          © 2026 {SITE.name}. Todos los derechos reservados.
        </p>

        <a
          href="https://fortekpr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 text-[11px] text-white/40 hover:text-primary transition-colors"
        >
          <Image
            src="/fortek-logo-mini.png"
            alt="ForTek PR"
            width={20}
            height={20}
            className="h-4 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
          />
          Diseñado por ForTek PR
        </a>
      </div>
    </footer>
  );
}
