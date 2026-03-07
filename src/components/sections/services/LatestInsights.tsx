"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

const insightsData = [
    {
        id: 1,
        title: "Shifting Solutions",
        image: "/assets/shifting.png",
        date: "Feb 9, 2025",
        readTime: "5min",
        link: "/services/shifting"
    },
    {
        id: 2,
        title: "Premium Packing",
        image: "/assets/packing.png",
        date: "Feb 9, 2025",
        readTime: "4min",
        link: "/services/packing"
    },
    {
        id: 3,
        title: "Loading & Unloading",
        image: "/assets/insight_airplane.png",
        date: "Feb 9, 2025",
        readTime: "6min",
        link: "/services/loading-unloading"
    },
    {
        id: 4,
        title: "National Transport",
        image: "/assets/insight_airplane.png",
        date: "Feb 9, 2025",
        readTime: "6min",
        link: "/services/transport"
    }
];

export const LatestInsights = () => {
    return (
        <section className="bg-[#f8f9fc] py-24 md:py-32 relative">
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

                    {/* Left Column (Sticky) */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-40 pt-10">
                        <span className="text-gray-500 font-semibold mb-4 block">Moving Resources</span>
                        <h2 className="text-5xl md:text-6xl font-black text-[#111] leading-[1.1] tracking-tight">
                            Latest insights in relocation & moving
                        </h2>
                    </div>

                    {/* Right Column (Scroll) */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-24">
                        {insightsData.map((insight) => (
                            <Link href={insight.link} key={insight.id} className="group cursor-pointer block">
                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                    <Image
                                        src={insight.image}
                                        alt={insight.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>

                                {/* Info Pills */}
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-100">
                                        <Calendar size={16} className="text-gray-500" />
                                        {insight.date}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-100">
                                        <Clock size={16} className="text-gray-500" />
                                        {insight.readTime}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl md:text-4xl font-black text-[#111] leading-tight group-hover:text-info transition-colors duration-300">
                                    {insight.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Optional bottom fade/cutout for aesthetic transition */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[40px] bg-white rounded-t-[100px] flex items-end justify-center pb-2 z-20">
                <div className="w-4 h-4 text-gray-400 rotate-45 border-b-2 border-r-2 mb-2"></div>
            </div>
        </section>
    );
};
