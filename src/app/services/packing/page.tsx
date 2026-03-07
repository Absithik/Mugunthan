import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/packing/HeroSection';
import { WhatWePackSection } from '@/components/sections/packing/WhatWePackSection';
import { MaterialsSection } from '@/components/sections/packing/MaterialsSection';
import { ProcessSection } from '@/components/sections/packing/ProcessSection';
import { WhyChooseSection } from '@/components/sections/packing/WhyChooseSection';
import { SpecializedSection } from '@/components/sections/packing/SpecializedSection';
import { QuoteFormSection } from '@/components/sections/packing/QuoteFormSection';
import { FAQSection } from '@/components/sections/packing/FAQSection';
import { CTASection } from '@/components/sections/packing/CTASection';

export const metadata: Metadata = {
    title: 'Professional Packing Services | Mugundhan Packers',
    description: 'Expert 5-layer scientific packing services for household goods, fragile items, and IT infrastructure. Secure and damage-free relocation guaranteed.',
};

export default function PackingServicesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Packing Services",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Mugundhan Packers & Movers"
        },
        "description": "Premium industrial-grade packing solutions for household and commercial items.",
        "areaServed": "Tamil Nadu, India"
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <div className="relative z-10 -mt-20">
                <WhatWePackSection />
            </div>
            <MaterialsSection />
            <ProcessSection />
            <WhyChooseSection />
            <SpecializedSection />
            <QuoteFormSection />
            <FAQSection />
            <CTASection />
        </main>
    );
}
