import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/shifting/HeroSection';
import { CategoriesSection } from '@/components/sections/shifting/CategoriesSection';
import { GuaranteeSection } from '@/components/sections/shifting/GuaranteeSection';

export const metadata: Metadata = {
    title: "Best House Shifting in Salem | Safe Home Relocation",
    description: "Reliable house shifting services in Salem. We handle your home relocation with care, ensuring damage-free transport of furniture and electronics in Salem.",
    keywords: ["House Shifting in Salem", "Home Relocation Salem", "Best Shifting Service Salem", "Residential Moving Salem"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/services/house-shifting-salem',
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Shifting Services in Salem",
    "description": "Expert house shifting services in Salem. Professional home relocation with safe transport of furniture and electronics.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function HouseShiftingPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <CategoriesSection />
            <GuaranteeSection />
        </div>
    );
}
