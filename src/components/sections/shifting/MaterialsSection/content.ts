import { Package, Box, Layers, ShieldCheck, Ruler, Scissors } from 'lucide-react';

export const MATERIALS = [
    {
        name: "Corrugated Boxes",
        desc: "High-strength, double-walled boxes for fragile items.",
        icon: Box
    },
    {
        name: "Bubble Wrap",
        desc: "Anti-shock cushioning for delicate electronics and decor.",
        icon: Layers
    },
    {
        name: "Stretch Wrap",
        desc: "Moisture and scratch protection for bulky furniture.",
        icon: Ruler
    },
    {
        name: "Crate Packing",
        desc: "Heavy-duty wooden crates for long-distance transit.",
        icon: Package
    },
    {
        name: "Edge Protectors",
        desc: "Reinforced corners to prevent chipping and dents.",
        icon: ShieldCheck
    },
    {
        name: "Custom Taping",
        desc: "Tamper-proof security taping for complete safety.",
        icon: Scissors
    }
];
