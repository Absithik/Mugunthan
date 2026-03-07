import type { Metadata } from 'next';
import { HeroSection } from "../components/sections/home/HeroSection";

export const metadata: Metadata = {
  title: "Best Packers and Movers in Salem | Mugunthan Packers",
  description: "Top packers and movers in Salem. Reliable house shifting, office moving, and vehicle transport. Get a free quote today for safe and fast relocation!",
  keywords: ["Packers and Movers in Salem", "Best Packers and Movers in Salem", "Movers and Packers Salem", "Mugunthan Packers"],
  alternates: {
    canonical: 'https://mugunthanpackers.com',
  },
};
import dynamic from 'next/dynamic';

const WhyChooseUsSection = dynamic(() => import("../components/sections/home/WhyChooseUsSection").then(mod => mod.WhyChooseUsSection), { ssr: true });
const ServicesOverviewSection = dynamic(() => import("../components/sections/home/ServicesOverviewSection").then(mod => mod.ServicesOverviewSection), { ssr: true });
const HowItWorksSection = dynamic(() => import("../components/sections/home/HowItWorksSection").then(mod => mod.HowItWorksSection), { ssr: true });
const StatsCounterSection = dynamic(() => import("../components/sections/home/StatsCounterSection").then(mod => mod.StatsCounterSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("../components/sections/home/TestimonialsSection").then(mod => mod.TestimonialsSection), { ssr: true });
const ServiceAreaSection = dynamic(() => import("../components/sections/home/ServiceAreaSection").then(mod => mod.ServiceAreaSection), { ssr: true });
const FAQSection = dynamic(() => import("../components/sections/home/FAQSection").then(mod => mod.FAQSection), { ssr: true });
const CTASection = dynamic(() => import("../components/sections/home/CTASection").then(mod => mod.CTASection), { ssr: true });
const FloatingActions = dynamic(() => import("@/components/ui/FloatingActions").then(mod => mod.FloatingActions));

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverviewSection />
      <HowItWorksSection />
      <StatsCounterSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <FAQSection />
      <CTASection />
      <FloatingActions />
    </div>
  );
}
