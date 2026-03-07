import React from 'react';
import { PROCESS_CONTENT } from './content';
import { TimelineItem, ProgressLine } from './animation';

export const ProcessSection = () => {
    const { title, description, steps } = PROCESS_CONTENT;

    return (
        <section className="py-32 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight italic">
                        {title.main}
                        <span className="text-accent underline decoration-white/10">{title.highlight}</span>
                    </h2>
                    <p className="text-xl text-white/50 font-medium italic lowercase">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    <ProgressLine />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {steps.map((step, index) => (
                            <TimelineItem key={index} index={index}>
                                <div className="space-y-6 group">
                                    <div className="relative">
                                        <span className="text-7xl font-black text-accent/10 italic leading-none group-hover:text-accent/20 transition-colors">
                                            {step.num}
                                        </span>
                                        <div className="absolute top-1/2 left-0 w-12 h-1 bg-accent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black text-white italic tracking-tight">{step.title}</h3>
                                        <p className="text-white/40 font-bold leading-relaxed lowercase max-w-xs">{step.desc}</p>
                                    </div>
                                </div>
                            </TimelineItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
