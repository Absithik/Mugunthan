import React from 'react';
import { HERO_CONTENT } from './content';
import { EntryAnimation } from './animation';

export const HeroSection = () => {
    const { title, description } = HERO_CONTENT;

    return (
        <section className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                <EntryAnimation>
                    <h1 className="text-6xl md:text-8xl font-black mb-8">
                        {title.main}
                        <span className="text-accent underline decoration-white/10">{title.highlight}</span>
                        {title.suffix}
                        {title.br && <br />}
                        {title.end}
                    </h1>
                    <p className="text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
                        {description}
                    </p>
                </EntryAnimation>
            </div>
        </section>
    );
};
