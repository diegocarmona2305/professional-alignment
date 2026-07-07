import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Professional Alignment & Repair Center | Taller Mecánico en Carolina, PR",
    template: "%s | Professional Alignment & Repair Center",
  },
  description:
    "Taller mecánico profesional en Carolina, Puerto Rico. Más de 30 años de experiencia en alineamiento computarizado, frenos, tren delantero y más. Donde la Experiencia Habla por Sí Sola.",
  keywords: [
    "taller mecánico Carolina PR",
    "alineamiento computarizado Puerto Rico",
    "mecánico Carolina Puerto Rico",
    "frenos Carolina PR",
    "Professional Alignment",
  ],
  icons: {
    icon: "/logo-navbar.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${bebas.variable} ${inter.variable} font-body bg-background text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
