import React from 'react';
import { WHAT_WE_PACK_CONTENT } from './content';
import { GridAnimation } from './animation';

export const WhatWePackSection = () => {
    const { title, description, items } = WHAT_WE_PACK_CONTENT;

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-8">
                        {title.main}
                        <span className="text-accent italic">{title.highlight}</span>
                    </h2>
                    <p className="text-xl text-primary/60 font-medium">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <GridAnimation key={index} index={index}>
                            <div className="group p-10 bg-primary/5 rounded-[40px] border border-primary/5 hover:bg-primary transition-all duration-500 h-full flex flex-col">
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-accent/20">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-primary group-hover:text-white mb-4 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-primary/60 group-hover:text-white/60 font-medium leading-relaxed transition-colors italic">
                                    {item.desc}
                                </p>
                            </div>
                        </GridAnimation>
                    ))}
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-10 right-10 text-[20rem] font-black transform rotate-12">PACK</div>
            </div>
        </section>
    );
};
