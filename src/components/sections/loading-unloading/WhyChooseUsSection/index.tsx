import React from 'react';
import { TRUST_MARKERS } from './content';
import { ScaleIn } from '../EquipmentSection/animation'; // Reusing animation

export const WhyChooseUsSection = () => {
    return (
        <section className="py-32 bg-primary overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto mb-24">
                    <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">Trust Factors</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
                        Why Choose Our <span className="text-accent italic">Experts.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TRUST_MARKERS.map((marker, i) => (
                        <ScaleIn key={i} delay={i * 0.1}>
                            <div className="p-12 rounded-[50px] bg-white/5 border border-white/10 hover:bg-white/10 group transition-all duration-500 text-left h-full flex flex-col">
                                <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                    <marker.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-accent transition-colors">
                                    {marker.title}
                                </h4>
                                <p className="text-white/60 font-bold leading-relaxed flex-grow">
                                    {marker.desc}
                                </p>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
