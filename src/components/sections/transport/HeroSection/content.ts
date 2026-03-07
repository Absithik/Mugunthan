import { MapPin, Phone, ArrowRight } from 'lucide-react';

export const HERO_CONTENT = {
    badge: {
        icon: MapPin,
        text: "Real-Time GPS Tracking Enabled"
    },
    title: {
        main: "Safe & Reliable ",
        highlight: "Transport."
    },
    description: "Premium fleet of tech-enabled vehicles for seamless inter-city and local relocation with 100% on-time delivery guarantee.",
    ctas: {
        primary: {
            label: "Get Quick Quote",
            href: "#quote",
            icon: ArrowRight
        },
        secondary: {
            label: "Call Operations",
            href: "tel:+919842735706",
            icon: Phone
        }
    }
};
