import { ClipboardList, PackageCheck, Truck, ArrowUpCircle, MapPin, Handshake } from 'lucide-react';

export const PROCESS_STEPS = [
    {
        title: "Site Assessment",
        desc: "Evaluating item volume and planning the loading strategy.",
        icon: ClipboardList
    },
    {
        title: "Final Check",
        desc: "Verifying all items are properly packed for loading.",
        icon: PackageCheck
    },
    {
        title: "Scientific Loading",
        desc: "Careful placement using modern equipment and ramps.",
        icon: Truck
    },
    {
        title: "Secure Transit",
        desc: "Monitoring the load during safe transportation.",
        icon: MapPin
    },
    {
        title: "Safe Unloading",
        desc: "Careful removal and checking against inventory list.",
        icon: ArrowUpCircle
    },
    {
        title: "Item Placement",
        desc: "Placement and setup as per your instructions.",
        icon: Handshake
    }
];
