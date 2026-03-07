import React from 'react';
import { Package, Truck, Home, Warehouse, Shield, Clock, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { LatestInsights } from '@/components/sections/services/LatestInsights';

const services = [
    {
        title: "Shifting Solutions",
        slug: "shifting",
        desc: "Tailored relocation plans with dedicated moving managers to ensure zero downtime and maximum care for home and office moves.",
        icon: <Home size={40} />,
        features: ["Local & Domestic Shifting", "Furniture Dismantling", "IT Equipment Moving", "Post-Move Setup"]
    },
    {
        title: "Premium Packing",
        slug: "packing",
        desc: "Scientific packing using multi-layered honey-comb materials and reinforced crates for absolute safety during transit.",
        icon: <Package size={40} />,
        features: ["Fragile Item Handling", "Waterproof Packing", "Wooden Crating", "Custom Box Sizing"]
    },
    {
        title: "Loading & Unloading",
        slug: "loading-unloading",
        desc: "Professional handling of your belongings with specialized equipment to ensure safe loading and unloading processes.",
        icon: <MapPin size={40} />,
        features: ["Expert Handling", "Safety Equipment", "Trained Professionals", "Damage-Free Promise"]
    },
    {
        title: "National Transport",
        slug: "transport",
        desc: "Specialized fleet of closed-containers equipped with GPS and air-suspension for smooth transport across India.",
        icon: <Truck size={40} />,
        features: ["Bikes & Car Transport", "Real-time Tracking", "ISO Certified Fleet", "Insurance Included"]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHero />

            {/* Latest Insights Smooth Scroll Section */}
            <LatestInsights />

            {/* Trust Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    <div className="space-y-4">
                        <Shield className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">ISO Certified</h4>
                    </div>
                    <div className="space-y-4">
                        <Clock className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">On-Time Delivery</h4>
                    </div>
                    <div className="space-y-4">
                        <MapPin className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">Pan-India Network</h4>
                    </div>
                    <div className="space-y-4">
                        <Headphones className="mx-auto text-accent" size={48} />
                        <h4 className="text-xl font-black uppercase">Dedicated Manager</h4>
                    </div>
                </div>
            </section>
        </div >
    );
}
