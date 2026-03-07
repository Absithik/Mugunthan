"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative h-[70vh] min-h-[500px] lg:h-[95vh] lg:min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-900 border-b-8 border-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                <Image
                    src="/assets/mugunthan.png"
                    alt="Massive modern container ship"
                    fill
                    sizes="100vw"
                    quality={80}
                    priority
                    className="object-cover object-[75%_center] md:object-center"
                />
            </div>

            {/* Content Container */}
            <div className="container mx-auto relative z-10 w-full h-full flex flex-col justify-end pb-8">

                {/* Floating Card - Left */}
                {/* <div className="absolute top-[35%] left-4 md:left-[10%] max-w-[380px] bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 flex gap-4 items-center shadow-2xl animate-fade-in-up border border-white/10 border-t-white/20 border-l-white/20">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/20">
                        <Image
                            src="/assets/eicher_hero.png"
                            alt="Aerial view"
                            fill
                            sizes="80px"
                            quality={60}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-white font-bold tracking-tight text-xl leading-snug">
                            Leaders in freight and<br />logistics transportation.
                        </p>
                    </div>
                </div> */}

                {/* Bottom Marquee Text */}
                <div className="w-full overflow-hidden whitespace-nowrap mt-auto relative z-10 select-none pb-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="animate-marquee">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-12 pr-12">
                                <span className="text-[12vw] xl:text-[200px] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
                                    Land Express
                                </span>
                                <span className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-white opacity-80 shrink-0"></span>
                                <span className="text-[12vw] xl:text-[200px] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
                                    Air Express
                                </span>
                                <span className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-white opacity-80 shrink-0"></span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 z-20">
                    <button className="w-20 h-20 md:w-32 md:h-32 rounded-full glass-card bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 transition-all shadow-2xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50">
                        <Play className="w-8 h-8 md:w-12 md:h-12 fill-white group-hover:scale-110 transition-transform ml-2" />
                    </button>
                    {/* Tiny scroll indicator below play button */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce flex flex-col items-center">
                        <span className="text-xl">↓</span>
                    </div>
                </div>


            </div>
        </section>
    );
};
