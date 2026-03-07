import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/warehouse/HeroSection';
import { FeaturesSection } from '@/components/sections/warehouse/FeaturesSection';
import { InventorySection } from '@/components/sections/warehouse/InventorySection';

export const metadata: Metadata = {
    title: "Secure Warehouse Storage Salem | Household Goods Storage",
    description: "Safe and secure warehouse storage services in Salem. Short-term and long-term storage solutions for your household items and office goods in Salem.",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Secure Warehouse Storage Salem",
    "description": "Safe and secure warehouse storage services in Salem for household items and office goods.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Mugunthan Packers & Movers"
    },
    "areaServed": {
        "@type": "State",
        "name": "Tamil Nadu"
    }
};

export default function WarehousePage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <HeroSection />
            <FeaturesSection />
            <InventorySection />
        </div>
    );
}
