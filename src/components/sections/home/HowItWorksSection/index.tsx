import React from "react";
import { ChevronRight } from "lucide-react";
import { HOW_IT_WORKS_CONTENT } from "./content";
import { FadeInScale, StickerShake, FadeInUp } from "./animation";

export const HowItWorksSection = () => {
    const { tagline, title, steps, trustBanner } = HOW_IT_WORKS_CONTENT;

    return (
        <section className="py-24 relative overflow-hidden bg-primary/5">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-20 space-y-4">
                    <FadeInUp>
                        <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">{tagline}</h2>
                        <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic">
                            {title.main}
                            <span className="text-accent underline decoration-primary">{title.highlight}</span>
                            {title.suffix}
                        </h3>
                    </FadeInUp>
                </div>

                <div className="relative">
                    {/* Animated Connective Path (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] z-0">
                        <svg width="100%" height="2" className="overflow-visible">
                            <path
                                d="M 0 1 L 1000 1"
                                className="delivery-path stroke-primary/10 stroke-2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <FadeInScale key={idx} delay={idx * 0.15}>
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <StickerShake>
                                        <div className={`w-32 h-32 ${step.bg} ${step.color} rounded-[40px] flex items-center justify-center border-4 border-white shadow-xl anime-sticker`}>
                                            <step.icon size={48} />
                                        </div>
                                    </StickerShake>
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-black font-heading tracking-tighter">{step.title}</h4>
                                        <p className="font-medium text-primary/60">{step.desc}</p>
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden">
                                            <ChevronRight size={32} className="text-primary/20 rotate-90" />
                                        </div>
                                    )}
                                </div>
                            </FadeInScale>
                        ))}
                    </div>
                </div>

                {/* Floating Trust Banner */}
                <FadeInUp delay={0.3}>
                    <div className="mt-32 glass-card p-12 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-8 border-primary/10">
                        <div className="space-y-2 text-left">
                            <h4 className="text-4xl font-black font-heading tracking-tight italic">{trustBanner.title}</h4>
                            <p className="text-lg font-medium text-primary/60">{trustBanner.description}</p>
                        </div>
                        <div className="flex -space-x-4">
                            {trustBanner.avatars.map((url, i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-accent overflow-hidden shadow-lg">
                                    <img src={url} alt={`avatar-${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInUp>
            </div>
        </section>
    );
};
