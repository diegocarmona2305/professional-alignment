import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import CTASection from "@/components/CTASection";
import Divider from "@/components/Divider";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Divider />
      <Metrics />
      <Divider />
      <ServicesPreview />
      <Divider />
      <AboutPreview />
      <Divider />
      <CTASection />
    </main>
  );
}
