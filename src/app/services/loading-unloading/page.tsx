import { HeroSection } from '@/components/sections/loading-unloading/HeroSection';
import { ServicesSection } from '@/components/sections/loading-unloading/ServicesSection';
import { EquipmentSection } from '@/components/sections/loading-unloading/EquipmentSection';
import { ProcessSection } from '@/components/sections/loading-unloading/ProcessSection';
import { WhyChooseUsSection } from '@/components/sections/loading-unloading/WhyChooseUsSection';
import { SafetyAssuranceSection } from '@/components/sections/loading-unloading/SafetyAssuranceSection';
import { QuoteFormSection } from '@/components/sections/loading-unloading/QuoteFormSection';
import { FAQSection } from '@/components/sections/loading-unloading/FAQSection';
import { Metadata } from 'next';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Professional Loading & Unloading Services | Safe Handling',
    description: 'Expert loading and unloading services for your home or office relocation. Trained staff, modern equipment, and damage-free guarantee.',
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Loading & Unloading Services",
    "description": "Professional loading and unloading services using modern equipment and trained staff for safe transport.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugundhan Packers & Movers"
    },
    // ... rest of schema
};

export default function LoadingUnloadingPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <div className="relative z-10 -mt-20">
                <ServicesSection />
            </div>
            <EquipmentSection />
            <ProcessSection />
            <WhyChooseUsSection />
            <SafetyAssuranceSection />
            <QuoteFormSection />
            <FAQSection />

            {/* Final CTA Banner */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-accent/10 -rotate-12 translate-x-1/2 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
                        Need Expert <br /> <span className="text-accent underline decoration-white/10 italic">Handling Crew?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#quote-form" className="w-full sm:w-auto px-12 py-6 bg-accent text-white rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                            Book Your Crew Now
                            <ArrowRight size={28} />
                        </a>
                        <a href="tel:+919876543210" className="w-full sm:w-auto px-12 py-6 bg-white/10 text-white rounded-3xl font-black text-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                            <Phone size={28} />
                            Contact Specialist
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
