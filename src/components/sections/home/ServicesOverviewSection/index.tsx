import React from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES_OVERVIEW_CONTENT } from "./content";
import { FadeInUp, HoverY } from "./animation";
import Link from "next/link";

export const ServicesOverviewSection = () => {
    const { tagline, title, description, services } = SERVICES_OVERVIEW_CONTENT;

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <FadeInUp>
                        <div className="max-w-2xl space-y-4 text-left">
                            <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-sm">{tagline}</h2>
                            <h3 className="text-5xl md:text-7xl font-black font-heading leading-tight italic">
                                {title.main}
                                <span className="text-accent underline decoration-primary">{title.highlight}</span>
                            </h3>
                        </div>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="text-lg font-medium text-primary/60 max-w-sm text-left">
                            {description}
                        </p>
                    </FadeInUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <FadeInUp key={idx} delay={idx * 0.1}>
                            <HoverY>
                                <div className="glass-card p-10 rounded-[40px] group transition-all h-full text-left">
                                    <div className={`w-20 h-20 ${service.color} rounded-[24px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <service.icon size={40} />
                                    </div>
                                    <h4 className="text-3xl font-black font-heading mb-4 tracking-tighter">{service.title}</h4>
                                    <p className="text-primary/60 font-medium mb-8 leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <Link href={service.link} className="flex items-center gap-2 font-black text-primary hover:text-accent transition-colors">
                                        Details <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </HoverY>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};
