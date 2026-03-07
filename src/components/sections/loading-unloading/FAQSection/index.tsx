import React from 'react';
import { FAQS } from './content';
import { FadeInUp } from '../../shifting/ProcessSection/animation';
import { ArrowRight } from 'lucide-react';

export const FAQSection = () => {
    return (
        <section className="py-32 bg-soft overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeInUp>
                        <div className="text-center mb-20">
                            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4">Common Questions</h2>
                            <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-4">Handling <span className="text-secondary italic">FAQs.</span></h3>
                            <p className="text-xl text-gray-text font-medium">Expert answers for your loading and unloading concerns.</p>
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
