import React from "react";
import { STATS_CONTENT } from "./content";
import { Counter } from "./animation";

export const StatsCounterSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
                    {STATS_CONTENT.map((stat, idx) => (
                        <div key={idx} className="text-center space-y-2">
                            <div className="text-6xl md:text-8xl font-black font-heading text-primary flex items-center justify-center tracking-tighter">
                                <Counter value={stat.value} />
                                <span className="text-accent">{stat.suffix}</span>
                            </div>
                            <p className="text-primary/40 text-sm font-black uppercase tracking-[0.4em]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Anime Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/5 -z-0" />
            <div className="absolute top-1/2 left-1/4 w-[1px] h-full bg-primary/5 -z-0" />
            <div className="absolute top-1/2 left-3/4 w-[1px] h-full bg-primary/5 -z-0" />
        </section>
    );
};
