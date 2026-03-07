import React from 'react';
import { FEATURES_CONTENT } from './content';
import { FadeIn } from './animation';

export const FeaturesSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES_CONTENT.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="p-10 rounded-[40px] bg-soft border border-primary/5 space-y-4 h-full flex flex-col">
                                <div className="text-accent">
                                    <item.icon />
                                </div>
                                <h4 className="text-2xl font-black text-primary">{item.title}</h4>
                                <p className="text-gray-text font-medium flex-grow">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
