import React from 'react';
import { PROCESS_STEPS } from './content';
import { FadeInUp } from './animation';

export const ProcessSection = () => {
    return (
        <section className="py-32 bg-soft overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <FadeInUp>
                    <h2 className="text- accent font-black uppercase tracking-[0.3em] text-sm mb-4">Our Methodology</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-primary mb-24 tracking-tighter">
                        Simplified <span className="text-accent underline decoration-primary/5">Shifting Process.</span>
                    </h3>
                </FadeInUp>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary/5 -translate-y-1/2 pointer-events-none" />

                    {PROCESS_STEPS.map((step, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="relative flex flex-col items-center group">
                                {/* Step Number */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 group-hover:bg-accent transition-all duration-500 z-20">
                                    0{i + 1}
                                </div>

                                <div className="w-32 h-32 bg-white rounded-[40px] flex items-center justify-center text-primary group-hover:text-accent shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 relative z-10">
                                    <step.icon size={48} />
                                </div>

                                <div className="mt-8 space-y-4">
                                    <h4 className="text-3xl font-black text-primary group-hover:text-accent transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-lg text-gray-text font-medium max-w-[280px] mx-auto leading-relaxed">
                                        {step.desc}
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
