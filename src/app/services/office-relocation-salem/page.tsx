import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/shifting/HeroSection';
import { CategoriesSection } from '@/components/sections/shifting/CategoriesSection';
import { GuaranteeSection } from '@/components/sections/shifting/GuaranteeSection';

export const metadata: Metadata = {
    title: "Office Relocation Services in Salem | Expert Business Moving",
    description: "Professional office relocation services in Salem. Mugunthan Packers offers seamless business shifting with minimal downtime. Safe transport of IT equipment.",
    keywords: ["Office Relocation Salem", "Business Shifting Salem", "Corporate Moving Services Salem", "Office Shifting Experts Salem"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/services/office-relocation-salem',
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office Relocation Services in Salem",
    "description": "Expert office relocation and business shifting services in Salem. Minimum downtime and safe handling of all office equipment.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function OfficeRelocationPage() {
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
