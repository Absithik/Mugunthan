import { ClipboardCheck, PackageCheck, Truck, CheckCircle2 } from "lucide-react";

export const HOW_IT_WORKS_CONTENT = {
    tagline: "Our Process",
    title: {
        main: "HOW WE ",
        highlight: "SIMPLIFY",
        suffix: " YOUR MOVE"
    },
    steps: [
        {
            title: "Free Quote",
            desc: "Instant assessment of your shifting needs in Salem and beyond.",
            icon: ClipboardCheck,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Expert Packing",
            desc: "Professional packing at your doorstep in Salem using premium materials.",
            icon: PackageCheck,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            title: "Secure Transit",
            desc: "Safe transportation from Salem to Namakkal, Erode, or any destination.",
            icon: Truck,
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        },
        {
            title: "On-Time Home Setup",
            desc: "Timely delivery and unpacking at your new home for a smooth start.",
            icon: CheckCircle2,
            color: "text-teal-500",
            bg: "bg-teal-500/10"
        }
    ],
    trustBanner: {
        title: "TRUSTED PACKERS IN SALEM.",
        description: "1000+ shifts completed with 5+ years of excellence in Salem logistics.",
        // avatars: [
        //     "https://i.pravatar.cc/100?img=20",
        //     "https://i.pravatar.cc/100?img=21",
        //     "https://i.pravatar.cc/100?img=22",
        //     "https://i.pravatar.cc/100?img=23",
        //     "https://i.pravatar.cc/100?img=24"
        // ]
    }
};
