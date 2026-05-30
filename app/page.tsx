import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Services } from "@/components/Services";
import { Mission } from "@/components/Mission";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Services />
      <Mission />
      <Testimonials />
      <CTA />
    </>
  );
}
