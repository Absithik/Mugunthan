import React from 'react';
import { HERO_CONTENT } from './content';
import { EntryAnimation, FloatingArt } from './animation';
import Link from 'next/link';
// import { PencilBox, PencilTruck, PencilArrow } from '@/components/ui/PencilArt';

export const HeroSection = () => {
    const { badge, title, description, ctas } = HERO_CONTENT;

    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-primary min-h-[85vh] flex items-center">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Content */}
                    <div className="flex-1 space-y-10 text-center lg:text-left">
                        <EntryAnimation>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full border border-white/20 text-accent font-black text-sm uppercase tracking-widest mb-6">
                                <badge.icon size={18} />
                                {badge.text}
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
                                    <ctas.primary.icon className="group-hover:translate-x-2 transition-transform" size={24} />
                                </Link>

                                <a
                                    href={ctas.secondary.href}
                                    className="w-full sm:w-auto px-12 py-6 bg-white/10 text-white rounded-[30px] font-black text-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <ctas.secondary.icon size={24} className="text-accent" />
                                    {ctas.secondary.label}
                                </a>
                            </div>
                        </EntryAnimation>
                    </div>

                    {/* Right: Visual Area */}
                    <div className="flex-1 relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full h-full max-w-lg">
                            {/* Central Hero Art */}
                            <FloatingArt delay={0.2}>
                                <div className="p-12 bg-white/5 rounded-[60px] border border-white/10 backdrop-blur-xl">
                                    {/* <PencilBox className="w-full h-auto text-white/20" /> */}
                                </div>
                            </FloatingArt>

                            {/* Supplementary Floating Elements */}
                            <div className="absolute -top-10 right-0 w-48">
                                {/* <FloatingArt delay={1.5}>
                                    <PencilArrow className="w-full h-auto text-accent" />
                                </FloatingArt> */}
                            </div>

                            <div className="absolute -bottom-10 left-0 w-64">
                                {/* <FloatingArt delay={2.5}>
                                    <PencilTruck className="w-full h-auto text-white/10" />
                                </FloatingArt> */}
                            </div>
                        </div>

                        {/* Glow effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
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
