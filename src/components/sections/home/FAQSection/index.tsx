"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { FAQ_CONTENT } from "./content";
import { FadeInUp } from "./animation";

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_CONTENT.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 bg-soft/30 relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <FadeInUp>
                        <div className="text-center mb-16">
                            <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">
                                {FAQ_CONTENT.tagline}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                {FAQ_CONTENT.title.main}
                                <span className="text-accent">{FAQ_CONTENT.title.highlight}</span>
                            </h3>
                        </div>
                    </FadeInUp>

                    <div className="space-y-4">
                        {FAQ_CONTENT.faqs.map((faq, index) => (
                            <FadeInUp key={index} delay={index * 0.1}>
                                <div
                                    className={`group rounded-2xl border-2 transition-all duration-300 ${openIndex === index
                                            ? "border-accent bg-white shadow-xl shadow-accent/5"
                                            : "border-primary/5 bg-white/50 hover:border-primary/20"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                                    >
                                        <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-primary" : "text-primary/70"
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`p-2 rounded-xl transition-all duration-300 ${openIndex === index ? "bg-accent text-white rotate-180" : "bg-primary/5 text-primary"
                                            }`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-8 pb-8 text-gray-text font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
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
