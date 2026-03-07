import React from 'react';
import { STANDARDS_CONTENT } from './content';
import { FadeIn } from './animation';

export const StandardsSection = () => {
    const { tagline, title, description, features, image } = STANDARDS_CONTENT;

    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn>
                        <div className="space-y-8">
                            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">{tagline}</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                {title}
                            </h3>
                            <p className="text-lg text-gray-text font-medium leading-relaxed">
                                {description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {features.map((feature, i) => (
                                    <div key={i} className="p-8 bg-soft rounded-[40px] border border-primary/5 space-y-4 h-full">
                                        <feature.icon className="text-accent" />
                                        <h4 className="text-xl font-black text-primary">{feature.title}</h4>
                                        <p className="text-gray-text text-sm font-medium">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="rounded-[60px] overflow-hidden shadow-3xl">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-auto"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
