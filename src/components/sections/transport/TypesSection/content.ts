import { Truck, Navigation, Factory, Car } from 'lucide-react';

export const TRANSPORT_TYPES_CONTENT = {
    title: {
        main: "Tailored ",
        highlight: "Transport."
    },
    description: "Whether it's across the street or across the nation, we have the right vehicle for you.",
    types: [
        {
            icon: Truck,
            title: "Local Transport",
            desc: "Expert drivers with deep local network for same-day delivery within the city."
        },
        {
            icon: Navigation,
            title: "Inter-City Hauling",
            desc: "Dedicated containers for long-distance moves with GPS tracking and sealed locks."
        },
        {
            icon: Factory,
            title: "Industrial Logistics",
            desc: "Heavy-duty machinery transport with specialized loading equipment and flatbeds."
        },
        {
            icon: Car,
            title: "Car Carry Services",
            desc: "Specialized open and closed car carriers for scratch-free vehicle relocation."
        }
    ]
};
