"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export const ServicesHero = () => {
    return (
        <section className="relative w-full h-[70vh] min-h-[600px] rounded-b-[40px] md:rounded-b-[80px] overflow-hidden flex flex-col justify-end bg-primary">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/services_hero_bg.png"
                    alt="Highway Logistics"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center mb-auto pt-40 md:pt-48">
                <h1 className="text-5xl md:text-8xl font-black mb-6 text-white drop-shadow-xl">Our <span className="text-accent">Solutions.</span></h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium drop-shadow-md">Comprehensive logistics and relocation services designed for modern reliability.</p>
            </div>

            {/* Marquee Text */}
            <div className="relative z-10 w-full overflow-hidden flex pb-4 md:pb-8">
                <div className="animate-marquee flex whitespace-nowrap opacity-95">
                    <span className="text-[120px] md:text-[200px] lg:text-[250px] font-bold tracking-tighter text-white leading-none pr-8 pb-4">
                        News News News News News News News News News News News
                    </span>
                    <span className="text-[120px] md:text-[200px] lg:text-[250px] font-bold tracking-tighter text-white leading-none pr-8 pb-4">
                        News News News News News News News News News News News
                    </span>
                </div>
            </div>

            {/* Bottom Target/Cutout */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] md:w-[240px] h-[50px] md:h-[80px] bg-white rounded-t-[100px] flex items-end justify-center pb-3 md:pb-6 z-20">
                <ArrowDown size={28} className="text-primary animate-bounce opacity-70" />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    width: max-content;
                }
            `}} />
        </section>
    );
};
