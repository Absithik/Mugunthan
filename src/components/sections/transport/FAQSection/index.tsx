import React from 'react';
import { FAQ_CONTENT } from './content';
import { AccordionItem } from './animation';

export const FAQSection = () => {
    const { title, description, items } = FAQ_CONTENT;

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight italic">
                        {title.main}
                        <span className="text-accent underline decoration-primary/5">{title.highlight}</span>
                    </h2>
                    <p className="text-xl text-primary/60 font-medium italic lowercase">
                        {description}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {items.map((item, index) => (
                        <AccordionItem key={index} index={index}>
                            <details className="group border-2 border-primary/5 rounded-[30px] overflow-hidden transition-all bg-white hover:border-accent">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <h4 className="text-xl font-black text-primary group-hover:text-accent transition-colors italic tracking-tight tracking-tighter">
                                        {item.q}
                                    </h4>
                                    <span className="w-10 h-10 bg-primary shadow-xl rounded-2xl flex items-center justify-center text-white group-open:rotate-45 transition-transform duration-500">
                                        <div className="w-4 h-1 bg-white absolute" />
                                        <div className="w-1 h-4 bg-white absolute" />
                                    </span>
                                </summary>
                                <div className="px-8 pb-8">
                                    <p className="text-lg text-primary/60 font-medium leading-relaxed italic lowercase">
                                        {item.a}
                                    </p>
                                </div>
                            </details>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};
