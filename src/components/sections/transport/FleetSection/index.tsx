import React from 'react';
import { FLEET_CONTENT } from './content';
import { FleetGridAnimation } from './animation';

export const FleetSection = () => {
    const { title, description, vehicles } = FLEET_CONTENT;

    return (
        <section className="py-32 bg-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
                            {title.main}
                            <span className="text-accent">{title.highlight}</span>
                        </h2>
                        <p className="text-xl text-white/60 font-medium">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {vehicles.map((vehicle, index) => (
                        <FleetGridAnimation key={index} index={index}>
                            <div className="group p-12 bg-white/5 rounded-[50px] border border-white/10 hover:bg-white/10 transition-all duration-500 h-full flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-3xl font-black text-white italic tracking-tight">{vehicle.title}</h3>
                                        <div className="w-12 h-1 bg-accent rounded-full mt-4" />
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {vehicle.specs.map((spec, i) => (
                                            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-black text-accent uppercase tracking-widest">{spec}</span>
                                        ))}
                                    </div>

                                    <p className="text-white/40 font-bold leading-relaxed lowercase text-lg">
                                        {vehicle.desc}
                                    </p>
                                </div>
                            </div>
                        </FleetGridAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};
