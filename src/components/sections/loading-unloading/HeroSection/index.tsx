import React from 'react';
import { HERO_CONTENT } from './content';
import { EntryAnimation } from './animation';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
// import { PencilTruck, PencilBox } from '@/components/ui/PencilArt';
import { FloatAnimation } from '@/components/animations/FloatAnimation';
// import { HeroImage } from './HeroImage';

export const HeroSection = () => {
    const { title, description, ctas } = HERO_CONTENT;

    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-primary min-h-[90vh] flex items-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 right-10 w-64 opacity-20 transform rotate-12 pointer-events-none hidden lg:block">
                    {/* <PencilBox className="text-white w-full h-auto" /> */}
                </div>
                <div className="absolute bottom-10 left-10 w-80 opacity-20 transform -rotate-6 pointer-events-none hidden lg:block">
                    {/* <FloatAnimation delay={1} duration={5}>
                        <PencilTruck className="text-white w-full h-auto" />
                    </FloatAnimation> */}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-10 text-center lg:text-left">
                        <EntryAnimation>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full border border-white/20 text-accent font-black text-sm uppercase tracking-widest mb-6">
                                <ShieldCheck size={20} />
                                Safe & Secure Handling
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                                {title.main} <br />
                                <span className="text-accent italic">{title.highlight}</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-10">
                                <Link
                                    href={ctas.primary.href}
                                    className="w-full sm:w-auto px-12 py-6 bg-accent text-white rounded-[30px] font-black text-xl shadow-2xl shadow-accent/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                                >
                                    {ctas.primary.label}
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                                </Link>

                                <a
                                    href={ctas.secondary.href}
                                    className="w-full sm:w-auto px-12 py-6 bg-white/10 text-white rounded-[30px] font-black text-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Phone size={24} className="text-accent" />
                                    {ctas.secondary.label}
                                </a>
                            </div>
                        </EntryAnimation>
                    </div>

                    {/* Right: Visual Area */}
                    <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
                        <FloatAnimation>
                            <div className="relative aspect-[4/3] rounded-[80px] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-xl group">
                                {/* <HeroImage /> */}

                                {/* Static floating decorative cards that stay regardless of image */}
                                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-[40px] rotate-12 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 space-y-4 z-40 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        <ArrowRight size={24} />
                                    </div>
                                    <span className="text-white font-black text-sm">Efficient Loading</span>
                                </div>

                                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-[40px] -rotate-12 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 space-y-4 z-40 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        <Phone size={24} />
                                    </div>
                                    <span className="text-white font-black text-sm">Expert Support</span>
                                </div>
                            </div>
                        </FloatAnimation>

                        {/* Glow effects */}
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    );
};
