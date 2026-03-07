import React from 'react';
import { GUARANTEE_CONTENT } from './content';
import { FadeIn } from './animation';

export const GuaranteeSection = () => {
    const { title, description, features } = GUARANTEE_CONTENT;

    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full" />
            <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
                <FadeIn>
                    <h3 className="text-5xl md:text-7xl font-black">{title}</h3>
                    <p className="text-2xl text-white/60 max-w-3xl mx-auto font-medium">
                        {description}
                    </p>
                    <div className="flex justify-center gap-6 pt-8">
                        {features.map((feat, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center gap-2">
                                    <feat.icon className="text-accent" size={40} />
                                    <span className="font-bold uppercase tracking-widest text-sm">{feat.label}</span>
                                </div>
                                {idx < features.length - 1 && (
                                    <div className="w-px h-16 bg-white/10" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
