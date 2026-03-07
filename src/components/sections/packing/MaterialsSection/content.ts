import { Box, Layers, Shield, Anchor } from 'lucide-react';

export const MATERIALS_CONTENT = {
    title: {
        main: "Best-in-Class ",
        highlight: "Materials."
    },
    description: "We never compromise on quality. Our multi-layer protection ensures zero damage.",
    materials: [
        {
            icon: Box,
            title: "5-Ply Corrugated Boxes",
            desc: "Heavy-duty boxes designed to withstand compression and protect contents from external impact."
        },
        {
            icon: Layers,
            title: "High-Tensile Bubble Wrap",
            desc: "Industrial grade air-cushioning for maximum shock absorption for fragile items."
        },
        {
            icon: Shield,
            title: "Edge Guards",
            desc: "Reinforced corner protectors for furniture and appliances to prevent chipping or scratching."
        },
        {
            icon: Anchor,
            title: "Industrial Shrink Wrap",
            desc: "Moisture-proof sealing to prevent dust, humidity, and movement durante transit."
        }
    ]
};
