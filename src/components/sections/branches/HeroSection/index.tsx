import React from 'react';
import { HERO_CONTENT } from './content';
import { EntryAnimation } from './animation';

export const HeroSection = () => {
    const { title, highlight, description } = HERO_CONTENT;

    return (
        <section className="pt-40 pb-20 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="relative z-10">
                    <EntryAnimation>
                        <h1 className="text-6xl md:text-8xl font-black mb-8">
                            {title}
                            <span className="text-accent">{highlight}</span>
                        </h1>
                        <p className="text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
                            {description}
                        </p>
                    </EntryAnimation>
                </div>
            </div>
        </section>
    );
};
