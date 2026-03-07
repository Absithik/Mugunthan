import React from 'react';
import { JOURNEY_CONTENT } from './content';
import { FadeIn } from './animation';

export const JourneySection = () => {
    const { tagline, title, milestones } = JOURNEY_CONTENT;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center mb-16">
                <FadeIn>
                    <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">{tagline}</h2>
                    <h3 className="text-5xl font-black text-primary">{title}</h3>
                </FadeIn>
            </div>
            <div className="container mx-auto px-6 relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/5 -translate-x-1/2 hidden lg:block" />
                <div className="space-y-20 relative">
                    {milestones.map((milestone, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 text-center lg:text-right p-8 bg-soft rounded-[40px] border border-primary/5">
                                    <span className="text-4xl font-black text-accent">{milestone.year}</span>
                                    <h5 className="text-2xl font-black text-primary mt-2">{milestone.title}</h5>
                                    <p className="text-gray-text font-medium mt-4">{milestone.desc}</p>
                                </div>
                                <div className="w-6 h-6 bg-primary rounded-full relative z-10 border-4 border-white shadow-xl hidden lg:block" />
                                <div className="flex-1 hidden lg:block" />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
