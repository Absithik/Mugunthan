import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/transport/HeroSection';
import { FeaturesSection } from '@/components/sections/transport/FeaturesSection';
import { VehicleSection } from '@/components/sections/transport/VehicleSection';

export const metadata: Metadata = {
    title: "Safe Bike Transport Service in Salem | Two-Wheeler Shifting",
    description: "Secure bike transport service in Salem. We provide door-to-door two-wheeler shifting from Salem to anywhere in India. Insured car and bike moving services.",
    keywords: ["Bike Transport Salem", "Two Wheeler Shifting Salem", "Bike Relocation Services Salem", "Safe Bike Shifting Salem"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/services/bike-transport-salem',
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bike Transport Services in Salem",
    "description": "Safe and professional bike transport services in Salem. Door-to-door two-wheeler shifting with insurance coverage.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function BikeTransportPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <FeaturesSection />
            <VehicleSection />
        </div>
    );
}
