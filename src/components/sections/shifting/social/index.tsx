import React from 'react';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
import { REVIEWS, FAQS } from './content';
import { FadeInUp } from '../ProcessSection/animation';

export const SocialSection = () => {
    return (
        <section className="py-32 bg-soft overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Testimonials */}
                <div className="mb-32">
                    <FadeInUp>
                        <div className="text-center mb-24">
                            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4">Client Feedback</h2>
                            <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter">
                                Real Stories, <span className="text-secondary italic underline decoration-primary/5">Real Trusts.</span>
                            </h3>
                        </div>
                    </FadeInUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REVIEWS.map((r, i) => (
                            <FadeInUp key={i} delay={i * 0.1}>
                                <div className="p-12 rounded-[50px] bg-white shadow-xl shadow-primary/5 space-y-8 relative group hover:-translate-y-2 transition-transform duration-500">
                                    <div className="flex gap-1 text-accent">
                                        {[...Array(r.rating)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                                    </div>
                                    <p className="text-xl font-medium text-primary italic leading-relaxed">
                                        "{r.text}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary font-black uppercase text-xl">
                                            {r.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-primary">{r.name}</h4>
                                            <p className="text-sm font-bold text-accent">{r.city}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto">
                    <FadeInUp>
                        <div className="text-center mb-20">
                            <h2 className="text-primary font-black text-5xl tracking-tighter mb-4">Safety & Precision FAQ</h2>
                            <p className="text-xl text-gray-text font-medium">Clear answers to your most common shifting concerns.</p>
                        </div>
                    </FadeInUp>

                    <div className="space-y-4">
                        {FAQS.map((f, i) => (
                            <FadeInUp key={i} delay={i * 0.05}>
                                <div className="group bg-white rounded-3xl border border-primary/5 overflow-hidden transition-all duration-300">
                                    <div className="p-8 flex items-center justify-between cursor-pointer">
                                        <h4 className="text-xl font-black text-primary group-hover:text-accent transition-colors">{f.q}</h4>
                                        <ArrowRight size={20} className="text-primary opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <div className="px-8 pb-8">
                                        <p className="text-gray-text font-medium leading-relaxed">
                                            {f.a}
                                        </p>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
