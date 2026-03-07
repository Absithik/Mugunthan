import React from 'react';
import { PROCESS_CONTENT } from './content';
import { TimelineAnimation, LineAnimation } from './animation';
import { Shield, Box, Layers, Maximize, Lock } from 'lucide-react';

const icons: Record<string, any> = {
    Shield, Box, Layers, Maximize, Lock
};

export const ProcessSection = () => {
    const { title, description, steps } = PROCESS_CONTENT;

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-8">
                        {title.main}
                        <span className="text-accent italic">{title.highlight}</span>
                    </h2>
                    <p className="text-xl text-primary/60 font-medium italic lowercase">
                        {description}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <LineAnimation />

                    <div className="space-y-20">
                        {steps.map((step, index) => {
                            const Icon = icons[step.icon];
                            const isEven = index % 2 === 0;

                            return (
                                <TimelineAnimation key={index} index={index}>
                                    <div className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        {/* Content Area */}
                                        <div className={`flex-1 w-full ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                            <div className="space-y-4">
                                                <span className="text-6xl font-black text-accent/20 italic">{step.number}</span>
                                                <h3 className="text-3xl font-black text-primary italic lowercase tracking-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-lg text-primary/60 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Central Node */}
                                        <div className="relative z-20 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent shadow-2xl border-4 border-white">
                                            <Icon size={32} />
                                        </div>

                                        {/* Spacer for alignment */}
                                        <div className="flex-1 hidden lg:block" />
                                    </div>
                                </TimelineAnimation>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
