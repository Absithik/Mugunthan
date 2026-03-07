import React from 'react';
import { SPECIALIZED_CONTENT } from './content';
import { RevealAnimation } from './animation';

export const SpecializedSection = () => {
    const { title, description, services } = SPECIALIZED_CONTENT;

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <RevealAnimation key={index} index={index}>
                            <div className="group p-12 bg-primary text-white rounded-[60px] border border-primary hover:bg-white hover:text-primary hover:border-primary transition-all duration-700 h-full flex flex-col md:flex-row items-center gap-10">
                                <div className="w-24 h-24 shrink-0 bg-accent rounded-[35px] flex items-center justify-center text-white group-hover:scale-110 shadow-2xl shadow-accent/20 transition-all duration-700">
                                    <service.icon size={44} />
                                </div>
                                <div className="flex-1 text-center md:text-left space-y-4">
                                    <h3 className="text-3xl font-black italic tracking-tight uppercase">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 group-hover:text-primary/60 font-bold lowercase leading-relaxed transition-colors">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};
