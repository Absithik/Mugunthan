import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/shifting/HeroSection';
import { CategoriesSection } from '@/components/sections/shifting/CategoriesSection';
import { GuaranteeSection } from '@/components/sections/shifting/GuaranteeSection';

export const metadata: Metadata = {
    title: "Best House Shifting in Salem | Office Relocation Services",
    description: "Reliable house shifting and office relocation services in Salem. We offer safe, efficient, and affordable moving across Salem, Namakkal, and Erode.",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Shifting and Office Relocation in Salem",
    "description": "Expert house shifting and office relocation services in Salem. Safe, efficient, and professional moving across Tamil Nadu.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

import { ProcessSection } from '@/components/sections/shifting/ProcessSection';
import { WhyChooseUsSection } from '@/components/sections/shifting/WhyChooseUsSection';
import { QuoteFormSection } from '@/components/sections/shifting/QuoteFormSection';
import { MaterialsSection } from '@/components/sections/shifting/MaterialsSection';
import { SocialSection } from '@/components/sections/shifting/social';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

export default function ShiftingPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <div className="relative z-10 -mt-20">
                <CategoriesSection />
            </div>
            <ProcessSection />
            <WhyChooseUsSection />
            <QuoteFormSection />
            <MaterialsSection />
            <SocialSection />

            {/* Final CTA Banner */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-accent/10 -rotate-12 translate-x-1/2 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
                        Moving? Let's Make It <span className="text-accent underline decoration-white/10 italic">Seamless.</span>
                    </h2>
                    <div className="flex flex-col sm:row items-center justify-center gap-6">
                        <a href="#quote-form" className="w-full sm:w-auto px-12 py-6 bg-accent text-white rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                            Book Your Move Now
                            <ArrowRight size={28} />
                        </a>
                        <a href="tel:+919876543210" className="w-full sm:w-auto px-12 py-6 bg-white/10 text-white rounded-3xl font-black text-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                            <Phone size={28} />
                            Get Free Callback
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
