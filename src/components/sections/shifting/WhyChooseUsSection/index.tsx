import React from 'react';
import { VALUE_PROPS } from './content';
import { ScaleIn } from './animation';

export const WhyChooseUsSection = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-soft -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-24">
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">Our Strength</h2>
                        <h3 className="text-6xl font-black text-primary tracking-tighter leading-[0.9]">
                            Why We Are The <span className="text-secondary italic">Best.</span>
                        </h3>
                        <p className="text-xl text-gray-text font-medium leading-relaxed">
                            Decades of experience combined with modern logistics tech makes your shifting worry-free.
                        </p>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {VALUE_PROPS.map((prop, i) => (
                            <ScaleIn key={i} delay={i * 0.1}>
                                <div className="p-10 rounded-[40px] bg-soft border border-primary/5 hover:border-accent group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                    <div className={`w-16 h-16 ${prop.bg} ${prop.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <prop.icon size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors">
                                        {prop.title}
                                    </h4>
                                    <p className="text-gray-text font-bold leading-relaxed">
                                        {prop.desc}
                                    </p>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
