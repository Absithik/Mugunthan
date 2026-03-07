import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/transport/HeroSection';
import { FeaturesSection } from '@/components/sections/transport/FeaturesSection';
import { VehicleSection } from '@/components/sections/transport/VehicleSection';

export const metadata: Metadata = {
    title: "Reliable Car Transport Service in Salem | Auto Relocation",
    description: "Trustworthy car transport service in Salem. Our specialized car carriers ensure safe and scratch-free vehicle shifting from Salem to major cities in India.",
    keywords: ["Car Transport Salem", "Auto Relocation Salem", "Car Shifting Services Salem", "Safe Car Transport Salem"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/services/car-transport-salem',
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Transport Services in Salem",
    "description": "Professional car transport services in Salem using specialized carriers for safe and scratch-free vehicle shifting.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function CarTransportPage() {
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
