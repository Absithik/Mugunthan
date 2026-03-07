import React from 'react';
import { TOOLS_CONTENT } from './content';
import { ScaleIn } from './animation';

export const EquipmentSection = () => {
    return (
        <section className="py-32 bg-soft overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-20">
                    <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4">Precision Tools</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-8">
                        Modern <span className="text-secondary italic">Equipment.</span>
                    </h3>
                    <p className="text-xl text-gray-text font-medium leading-relaxed">
                        We use the latest industrial grade tools to ensure every item is handled with mechanical precision and absolute safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TOOLS_CONTENT.map((tool, i) => (
                        <ScaleIn key={i} delay={i * 0.1}>
                            <div className="p-10 rounded-[40px] bg-white border border-primary/5 hover:border-accent group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                <div className="w-16 h-16 bg-soft text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                    <tool.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors">
                                    {tool.title}
                                </h4>
                                <p className="text-gray-text font-bold leading-relaxed">
                                    {tool.desc}
                                </p>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
