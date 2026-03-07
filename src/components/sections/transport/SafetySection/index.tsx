import React from 'react';
import { SAFETY_CONTENT } from './content';
import { SafetyReveal } from './animation';

export const SafetySection = () => {
    const { title, description, features } = SAFETY_CONTENT;

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-10">
                        <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight italic">
                            {title.main}
                            <span className="text-accent underline decoration-primary/5">{title.highlight}</span>
                        </h2>
                        <p className="text-xl text-primary/60 font-medium italic lowercase max-w-lg">
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <SafetyReveal key={index} index={index}>
                                <div className="p-10 bg-primary/5 rounded-[45px] hover:bg-primary group transition-all duration-500 h-full">
                                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-accent transition-all duration-500">
                                        <feature.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary group-hover:text-white mb-4 lowercase tracking-tight italic">
                                        {feature.title}
                                    </h3>
                                    <p className="text-primary/60 group-hover:text-white/40 font-bold leading-relaxed lowercase text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            </SafetyReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
