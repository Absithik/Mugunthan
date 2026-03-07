import { Home, Laptop, GlassWater, Landmark } from 'lucide-react';

export const WHAT_WE_PACK_CONTENT = {
    title: {
        main: "What We ",
        highlight: "Pack."
    },
    description: "Expert packing solutions for every category of your belongings.",
    items: [
        {
            icon: Home,
            title: "Household Goods",
            desc: "From massive furniture to delicate upholstery, we pack it all with care."
        },
        {
            icon: GlassWater,
            title: "Fragile Glassware",
            desc: "Double-cushioned packing for crockery, crystal, and decorative glass."
        },
        {
            icon: Laptop,
            title: "IT & Electronics",
            desc: "Anti-static wrap and custom padding for computers and sensitive electronics."
        },
        {
            icon: Landmark,
            title: "Art & Antiques",
            desc: "Custom wooden crating and museum-grade protection for high-value items."
        }
    ]
};
