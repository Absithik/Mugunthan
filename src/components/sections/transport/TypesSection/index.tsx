import React from 'react';
import { TRANSPORT_TYPES_CONTENT } from './content';
import { CardAnimation } from './animation';

export const TypesSection = () => {
    const { title, description, types } = TRANSPORT_TYPES_CONTENT;

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-8 italic">
                        {title.main}
                        <span className="text-accent underline decoration-primary/5">{title.highlight}</span>
                    </h2>
                    <p className="text-xl text-primary/60 font-medium">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {types.map((type, index) => (
                        <CardAnimation key={index} index={index}>
                            <div className="group p-10 bg-primary/5 rounded-[40px] border border-primary/5 hover:border-accent transition-all duration-500 h-full flex flex-col">
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-primary transition-all duration-500 shadow-xl shadow-accent/20">
                                    <type.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-primary mb-4 tracking-tight">
                                    {type.title}
                                </h3>
                                <p className="text-primary/60 font-bold leading-relaxed lowercase">
                                    {type.desc}
                                </p>
                            </div>
                        </CardAnimation>
                    ))}
                </div>
            </div>

            {/* Background art */}
            <div className="absolute bottom-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
                <span className="text-[20rem] font-black rotate-12 inline-block">ROAD</span>
            </div>
        </section>
    );
};
