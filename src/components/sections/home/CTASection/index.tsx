import React from "react";
import { CTA_CONTENT } from "./content";
import { FadeInUp, HoverScale } from "./animation";

export const CTASection = () => {
    const { badge, title, description, button, footerText } = CTA_CONTENT;

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="bg-primary relative p-12 lg:p-24 rounded-[60px] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left group border-white/10 shadow-3xl text-white">
                    <FadeInUp>
                        <div className="relative space-y-8 max-w-2xl text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border-white/20">
                                <span className="flex h-2 w-2 rounded-full bg-accent animate-bounce" />
                                <span className="text-xs font-black uppercase tracking-widest text-accent">{badge}</span>
                            </div>
                            <h4 className="text-5xl lg:text-7xl font-black font-heading tracking-tighter italic uppercase">
                                {title.main}
                                <span className="text-accent underline decoration-white/20">{title.highlight}</span>
                                {title.suffix}
                            </h4>
                            <p className="text-xl text-white/60 font-medium text-left">
                                {description}
                            </p>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.2}>
                        <div className="relative flex flex-col gap-4 items-center lg:items-end">
                            <HoverScale>
                                <button className="bg-accent text-primary px-12 py-8 text-2xl font-black rounded-3xl shadow-2xl transition-all uppercase">
                                    {button.text}
                                </button>
                            </HoverScale>
                            <p className="text-white/40 text-sm font-black uppercase tracking-[0.4em]">{footerText}</p>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};
