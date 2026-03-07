import React from 'react';
import { PROCESS_STEPS } from './content';
import { FadeInUp } from '../../shifting/ProcessSection/animation'; // Reusing animation wrapper

export const ProcessSection = () => {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto mb-24">
                    <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4">The Methodology</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-8">
                        Streamlined <span className="text-secondary italic underline decoration-primary/5">Workflow.</span>
                    </h3>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[40%] left-0 w-full h-[2px] bg-primary/5 -translate-y-1/2 pointer-events-none" />

                    {PROCESS_STEPS.map((step, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="relative flex flex-col items-center group">
                                {/* Step Number */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-2xl rotate-12 group-hover:rotate-0 group-hover:bg-accent transition-all duration-500 z-20 shadow-xl">
                                    0{i + 1}
                                </div>

                                <div className="w-36 h-36 bg-soft rounded-[45px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 relative z-10 overflow-hidden">
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <step.icon size={56} strokeWidth={1.5} className="relative z-10" />
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
