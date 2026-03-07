import React from 'react';
import { WHY_CHOOSE_CONTENT } from './content';
import { FeatureBox } from './animation';

export const WhyChooseSection = () => {
    const { title, description, features } = WHY_CHOOSE_CONTENT;

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-10">
                        <h2 className="text-6xl md:text-8xl font-black text-primary leading-tight italic">
                            {title.main}
                            <span className="text-accent underline decoration-primary/5">{title.highlight}</span>
                        </h2>
                        <p className="text-xl text-primary/60 font-black italic lowercase max-w-lg">
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <FeatureBox key={index} index={index}>
                                <div className="p-10 border-2 border-primary/5 rounded-[50px] hover:border-accent transition-all duration-500 group flex flex-col h-full overflow-hidden relative">
                                    {/* Subtle background icon */}
                                    <feature.icon size={120} className="absolute -bottom-10 -right-10 text-primary/5 transform rotate-12 group-hover:text-accent/5 transition-colors" />

                                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                        <feature.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-3 italic tracking-tight uppercase">
                                        {feature.title}
                                    </h3>
                                    <p className="text-primary/40 font-bold leading-relaxed lowercase text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            </FeatureBox>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
