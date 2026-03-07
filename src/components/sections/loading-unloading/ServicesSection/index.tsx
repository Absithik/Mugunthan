import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_CONTENT } from './content';
import { FadeIn } from './animation';

export const ServicesSection = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {SERVICES_CONTENT.map((service, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="relative p-12 lg:p-16 rounded-[60px] bg-soft border border-primary/5 space-y-10 group overflow-hidden h-full flex flex-col hover:bg-primary transition-all duration-700">
                                {/* Decorative Icon */}
                                <service.icon className="absolute -right-8 -bottom-8 w-48 h-48 text-primary/5 group-hover:text-white/5 transition-colors" />

                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-accent shadow-xl group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                    <service.icon size={40} />
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-5xl font-black text-primary group-hover:text-white transition-colors tracking-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl font-medium text-gray-text group-hover:text-white/70 transition-colors leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 flex-grow relative z-10">
                                    {service.features.map(feat => (
                                        <li key={feat} className="flex items-center gap-4 font-bold text-primary group-hover:text-white/90 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <CheckCircle2 className="text-accent" size={16} />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-5 rounded-2xl border-2 border-primary/10 text-primary font-black group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 flex items-center justify-center gap-2">
                                    {service.cta}
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
