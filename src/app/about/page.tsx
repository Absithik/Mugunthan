import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/about/HeroSection';

export const metadata: Metadata = {
    title: "About Mugunthan Packers & Movers | Salem Moving Experts",
    description: "Learn about Mugunthan Packers & Movers in Salem. 5+ years of excellence in house shifting and relocation services with 1000+ happy customers in Tamil Nadu.",
    keywords: ["About Packers and Movers Salem", "Mugunthan Packers Story", "Professional Movers Salem", "Tamil Nadu Relocation"],
    alternates: {
        canonical: 'https://mugunthanpackers.com/about',
    },
};
import { StorySection } from '@/components/sections/about/StorySection';
import { MissionSection } from '@/components/sections/about/MissionSection';
import { JourneySection } from '@/components/sections/about/JourneySection';

export default function AboutPage() {
    return (
        <div className="bg-white">
            <HeroSection />
            <StorySection />
            <MissionSection />
            <JourneySection />
        </div>
    );
}
