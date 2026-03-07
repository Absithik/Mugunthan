import React from "react";
import { WHY_CHOOSE_US_CONTENT } from "./content";
import { FadeInUp, StickerHover } from "./animation";

export const WhyChooseUsSection = () => {
    const { tagline, title, description, features } = WHY_CHOOSE_US_CONTENT;

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <FadeInUp>
                        <div className="max-w-2xl space-y-4 text-left">
                            <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">{tagline}</h2>
                            <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic">
                                {title.main}
                                <span className="text-accent underline decoration-primary">{title.highlight}</span>
                                {title.suffix}
                            </h3>
                        </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <div className="space-y-6">
                            <p className="text-lg font-medium text-primary/60 max-w-sm text-left">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {WHY_CHOOSE_US_CONTENT.highlights.map((item: string, id: number) => (
                                    <span key={id} className="px-4 py-2 bg-secondary/5 border border-secondary/10 rounded-full text-xs font-black text-secondary uppercase tracking-widest whitespace-nowrap">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeInUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <FadeInUp key={idx} delay={idx * 0.1}>
                            <StickerHover>
                                <div className="glass-card p-10 rounded-[40px] group transition-all anime-sticker h-full">
                                    <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-8 border-2 border-white shadow-lg`}>
                                        <feature.icon size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black font-heading mb-4 tracking-tighter text-left">{feature.title}</h4>
                                    <p className="text-primary/60 font-medium leading-relaxed text-left">
                                        {feature.desc}
                                    </p>
                                </div>
                            </StickerHover>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};
