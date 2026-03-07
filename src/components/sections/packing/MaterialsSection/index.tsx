import React from 'react';
import { MATERIALS_CONTENT } from './content';
import { CardAnimation } from './animation';

export const MaterialsSection = () => {
    const { title, description, materials } = MATERIALS_CONTENT;

    return (
        <section className="py-32 bg-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
                            {title.main}
                            <span className="text-accent italic">{title.highlight}</span>
                        </h2>
                        <p className="text-xl text-white/60 font-medium">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {materials.map((item, index) => (
                        <CardAnimation key={index} index={index}>
                            <div className="group p-12 bg-white/5 rounded-[50px] border border-white/10 flex flex-col sm:flex-row items-center gap-10 hover:bg-white/10 transition-all duration-500">
                                <div className="w-24 h-24 shrink-0 bg-accent/20 rounded-[35px] flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                    <item.icon size={40} />
                                </div>
                                <div className="text-center sm:text-left space-y-4">
                                    <h3 className="text-3xl font-black text-white italic">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 font-bold leading-relaxed max-w-sm lowercase">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </CardAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};
