import { Package, Truck, Home, Warehouse } from "lucide-react";

export const SERVICES_OVERVIEW_CONTENT = {
    tagline: "Professional Moving Services",
    title: {
        main: "SALEM'S MOST ",
        highlight: "RELIABLE MOVERS"
    },
    description: "Top-rated house shifting and office relocation services in Salem. We ensure a safe, stress-free move every time.",
    services: [
        {
            title: "Shifting Solutions",
            desc: "Expert home and office relocation services across Salem and beyond.",
            icon: Home,
            color: "bg-blue-500/10 text-blue-500",
            link: "/services/shifting"
        },
        {
            title: "Premium Packing",
            desc: "High-quality packing materials to safeguard your belongings during transit.",
            icon: Package,
            color: "bg-teal-500/10 text-teal-500",
            link: "/services/packing"
        },
        {
            title: "Loading & Unloading",
            desc: "Careful handling of your goods by trained professionals during the move.",
            icon: Truck,
            color: "bg-purple-500/10 text-purple-500",
            link: "/services/shifting"
        },
        {
            title: "Safe Transport",
            desc: "Secure transport for your goods from Salem to anywhere in India.",
            icon: Truck,
            color: "bg-orange-500/10 text-orange-500",
            link: "/services/transport"
        }
    ]
};
