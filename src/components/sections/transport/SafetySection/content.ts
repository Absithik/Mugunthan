import { MapPin, ShieldCheck, Lock, Activity } from 'lucide-react';

export const SAFETY_CONTENT = {
    title: {
        main: "Advanced ",
        highlight: "Safety."
    },
    description: "Protection beyond boundaries with elite tech integration.",
    features: [
        {
            icon: MapPin,
            title: "GPS Tracking",
            desc: "Real-time location updates for your cargo via specialized customer link."
        },
        {
            icon: ShieldCheck,
            title: "Full Insurance",
            desc: "Comprehensive transit insurance covering all types of unforeseen incidents."
        },
        {
            icon: Lock,
            title: "Seal Locking",
            desc: "One-time industrial seals strictly removed only at the destination."
        },
        {
            icon: Activity,
            title: "Condition Monitoring",
            desc: "Strict protocols to ensure items remain in loaded state during journey."
        }
    ]
};
