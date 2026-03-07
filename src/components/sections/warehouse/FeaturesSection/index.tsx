import React from 'react';
import { FEATURES_CONTENT } from './content';
import { FadeIn } from './animation';

export const FeaturesSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {FEATURES_CONTENT.map((feature, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="space-y-8 p-12 bg-soft rounded-[60px] border border-primary/5 h-full">
                                <feature.icon className="text-accent" size={48} />
                                <h2 className="text-4xl font-black text-primary">{feature.title}</h2>
                                <p className="text-lg text-gray-text font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
