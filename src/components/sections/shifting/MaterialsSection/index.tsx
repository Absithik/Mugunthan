import React from 'react';
import { MATERIALS } from './content';
import { FadeInUp } from '../ProcessSection/animation'; // Reusing animation

export const MaterialsSection = () => {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:row items-end justify-between gap-8 mb-24">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-sm">Industrial Grade</h2>
                        <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none">
                            Premium <span className="text-accent italic">Materials.</span>
                        </h3>
                    </div>
                    <p className="text-xl text-gray-text font-medium max-w-sm">
                        Absolute safety begins with world-class packing supplies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MATERIALS.map((item, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="flex items-center gap-8 p-10 rounded-[40px] bg-soft border border-primary/5 hover:bg-primary group transition-all duration-700">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary group-hover:text-accent group-hover:scale-110 shadow-lg transition-all duration-500 shrink-0">
                                    <item.icon size={36} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black text-primary group-hover:text-white transition-colors leading-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-text group-hover:text-white/60 font-medium transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};
