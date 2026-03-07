import React from "react";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { SERVICE_AREA_CONTENT } from "./content";
import { FadeInScale, CityHover, FadeInRight, PulseCircle } from "./animation";
import Link from "next/link";

export const ServiceAreaSection = () => {
    const { tagline, title, description, cities, mapImage } = SERVICE_AREA_CONTENT;

    return (
        <section id="coverage" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <FadeInScale>
                                <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">{tagline}</h2>
                                <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic">
                                    {title.main}
                                    <span className="text-accent underline decoration-primary">{title.highlight}</span>
                                    {title.suffix}
                                </h3>
                            </FadeInScale>
                        </div>

                        <FadeInScale delay={0.2}>
                            <p className="text-xl font-medium text-primary/60 leading-relaxed">
                                {description}
                            </p>
                        </FadeInScale>

                        <div className="flex flex-wrap gap-3">
                            {cities.map((city, idx) => (
                                <FadeInScale key={city} delay={idx * 0.05}>
                                    <CityHover>
                                        <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border-2 border-primary/5 shadow-sm font-black text-primary hover:border-accent hover:text-accent transition-all cursor-default">
                                            <MapPin size={16} />
                                            {city}
                                        </div>
                                    </CityHover>
                                </FadeInScale>
                            ))}
                        </div>

                        <FadeInScale delay={0.4}>
                            <Link href="/branches" className="inline-flex bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-primary/20 group uppercase">
                                Explore Branch Network <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </FadeInScale>
                    </div>

                    <FadeInRight>
                        <div className="relative">
                            <div className="rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white relative group">
                                <img
                                    src={mapImage.url}
                                    alt={mapImage.alt}
                                    className="w-full h-[600px] object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />

                                {/* Anime Sticker Over Map */}
                                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <PulseCircle>
                                        <div className="w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
                                    </PulseCircle>
                                    <div className="bg-accent text-white p-6 rounded-[30px] shadow-2xl relative z-10 anime-sticker">
                                        <Globe size={40} className="animate-spin-slow" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </FadeInRight>
                </div>
            </div>
        </section>
    );
};
