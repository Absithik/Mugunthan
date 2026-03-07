import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/branches/HeroSection';
import { BranchesGrid } from '@/components/sections/branches/BranchesGrid';
import { ExpansionStats } from '@/components/sections/branches/ExpansionStats';

export const metadata: Metadata = {
    title: "Our Branches | Best Packers and Movers in Salem, Erode, Namakkal",
    description: "Wide network of packers and movers across Salem, Erode, Namakkal, Dharmapuri, and Krishnagiri. Find your nearest Mugunthan Packers branch for local and domestic shifting.",
};

export default function BranchesPage() {
    return (
        <div className="bg-white">
            <HeroSection />
            <BranchesGrid />
            <ExpansionStats />
        </div>
    );
}
