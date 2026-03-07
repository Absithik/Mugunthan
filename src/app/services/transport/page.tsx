import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/transport/HeroSection';
import { TypesSection } from '@/components/sections/transport/TypesSection';
import { FleetSection } from '@/components/sections/transport/FleetSection';
import { SafetySection } from '@/components/sections/transport/SafetySection';
import { ProcessSection } from '@/components/sections/transport/ProcessSection';
import { WhyChooseSection } from '@/components/sections/transport/WhyChooseSection';
import { QuoteFormSection } from '@/components/sections/transport/QuoteFormSection';
import { FAQSection } from '@/components/sections/transport/FAQSection';
import { CTASection } from '@/components/sections/transport/CTASection';

export const metadata: Metadata = {
    title: 'Safe & Reliable Transport Services | GPS Tracked | Mugundhan Packers',
    description: 'Tech-enabled transport services with real-time GPS tracking. Specialized fleet for local and inter-city relocation. 100% on-time delivery guarantee.',
};

export default function TransportServicesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Transport Services",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Mugundhan Packers & Movers"
        },
        "description": "Premium tech-enabled transport solutions with GPS tracking for local and long-distance moves.",
        "areaServed": "India",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Transport Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inter-City Hauling" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Transport" } }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <TypesSection />
            <FleetSection />
            <SafetySection />
            <ProcessSection />
            <WhyChooseSection />
            <QuoteFormSection />
            <FAQSection />
            <CTASection />
        </main>
    );
}
