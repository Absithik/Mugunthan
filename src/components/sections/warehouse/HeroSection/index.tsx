import React from 'react';
import { HERO_CONTENT } from './content';
import { EntryAnimation } from './animation';

export const HeroSection = () => {
    const { icon: Icon, title, description } = HERO_CONTENT;

    return (
        <section className="pt-40 pb-20 bg-primary text-white text-center">
            <div className="container mx-auto px-6">
                <EntryAnimation>
                    <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
                        <Icon size={40} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6">
                        {title.main}
                        <span className="text-accent">{title.highlight}</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
                        {description}
                    </p>
                </EntryAnimation>
            </div>
        </section>
    );
};
