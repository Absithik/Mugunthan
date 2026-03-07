import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "./content";
import { FadeInScale, HoverY, FadeInUp } from "./animation";

export const TestimonialsSection = () => {
    const { tagline, title, testimonials } = TESTIMONIALS_CONTENT;

    return (
        <section className="py-24 relative overflow-hidden bg-primary">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <FadeInUp>
                        <div className="max-w-2xl space-y-4 text-left">
                            <h2 className="text-accent font-black uppercase tracking-[0.4em] text-sm">{tagline}</h2>
                            <h3 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic text-white">
                                {title.main}
                                <span className="text-accent underline decoration-white/20">{title.highlight}</span>
                            </h3>
                        </div>
                    </FadeInUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <FadeInScale key={idx} delay={idx * 0.1}>
                            <HoverY>
                                <div className="bg-white p-10 rounded-[50px] space-y-8 shadow-2xl relative group h-full text-left">
                                    <Quote className="text-accent size-12 absolute -top-6 -left-2 rotate-180 bg-white rounded-full p-2 border-4 border-primary/5" />
                                    <p className="text-xl font-bold text-primary leading-relaxed italic">"{t.content}"</p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-primary/5">
                                        <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-4 border-accent/20" />
                                        <div>
                                            <h4 className="font-black text-primary text-xl leading-none">{t.name}</h4>
                                            <p className="text-primary/40 text-xs font-black uppercase tracking-widest mt-1">{t.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 group-hover:scale-110 transition-transform origin-left">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-accent text-accent" />)}
                                    </div>
                                </div>
                            </HoverY>
                        </FadeInScale>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5 pointer-events-none">
                <Quote size={300} className="text-white" />
            </div>
        </section>
    );
};
