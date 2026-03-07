import React from 'react';
import { WHY_CHOOSE_CONTENT } from './content';
import { FeatureAnimation } from './animation';

export const WhyChooseSection = () => {
    const { title, description, features } = WHY_CHOOSE_CONTENT;

    return (
        <section className="py-32 bg-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            {title.main}
                            <span className="text-accent italic">{title.highlight}</span>
                        </h2>
                        <p className="text-xl text-white/60 font-medium italic lowercase">
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <FeatureAnimation key={index} index={index}>
                                <div className="p-8 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all duration-500 h-full group">
                                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl shadow-accent/10">
                                        <feature.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-white italic mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/40 font-bold text-sm leading-relaxed lowercase">
                                        {feature.desc}
                                    </p>
                                </div>
                            </FeatureAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
