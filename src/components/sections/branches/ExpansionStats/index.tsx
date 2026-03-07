import React from 'react';
import { EXPANSION_STATS_CONTENT } from './content';
import { FadeIn } from './animation';

export const ExpansionStats = () => {
    const { title, description, items, mapImage } = EXPANSION_STATS_CONTENT;

    return (
        <section className="py-24 bg-primary text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn>
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black">{title}</h2>
                            <p className="text-xl text-white/60 font-medium">
                                {description}
                            </p>
                            <div className="flex gap-10">
                                {items.map((stat, idx) => (
                                    <React.Fragment key={idx}>
                                        <div>
                                            <p className="text-5xl font-black text-accent">{stat.value}</p>
                                            <p className="text-white/40 font-black uppercase tracking-widest text-xs mt-2">{stat.label}</p>
                                        </div>
                                        {idx < items.length - 1 && (
                                            <div className="w-px h-16 bg-white/10" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="relative">
                            <img
                                src={mapImage.url}
                                alt={mapImage.alt}
                                className="w-full opacity-20 grayscale"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
