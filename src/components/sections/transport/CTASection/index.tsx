import React from 'react';
import { CTA_CONTENT } from './content';
import { FinalReveal } from './animation';
import Link from 'next/link';

export const CTASection = () => {
    const { title, description, ctas } = CTA_CONTENT;

    return (
        <section className="py-24 bg-white px-6">
            <FinalReveal>
                <div className="container mx-auto">
                    <div className="bg-primary rounded-[60px] p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/4 pointer-events-none" />

                        <div className="relative z-10 space-y-10 max-w-4xl">
                            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter italic uppercase">
                                {title.main} <br />
                                <span className="text-accent underline decoration-white/10">{title.highlight}</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto italic lowercase">
                                {description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                                <Link
                                    href={ctas.primary.href}
                                    className="w-full sm:w-auto px-12 py-6 bg-accent text-white rounded-[30px] font-black text-xl shadow-2xl shadow-accent/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                                >
                                    {ctas.primary.label}
                                    <ctas.primary.icon size={24} className="group-hover:translate-x-2 transition-transform" />
                                </Link>

                                <a
                                    href={ctas.secondary.href}
                                    className="w-full sm:w-auto px-12 py-6 bg-white/10 text-white rounded-[30px] font-black text-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <ctas.secondary.icon size={24} className="text-accent" />
                                    {ctas.secondary.label}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </FinalReveal>
        </section>
    );
};
