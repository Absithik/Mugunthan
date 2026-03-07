import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MISSION_CONTENT } from './content';
import { FadeIn } from './animation';

export const MissionSection = () => {
    return (
        <section className="py-24 bg-soft">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {MISSION_CONTENT.map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-white p-12 rounded-[50px] shadow-xl h-full space-y-6 border border-primary/5">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.theme === 'primary' ? 'bg-primary/5 text-primary' :
                                    item.theme === 'accent' ? 'bg-accent/10 text-accent' :
                                        'bg-green-50 text-green-600'
                                    }`}>
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-3xl font-black text-primary">{item.title}</h4>
                                {item.description && (
                                    <p className="text-gray-text font-medium leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                                {item.values && (
                                    <ul className="space-y-3">
                                        {item.values.map(val => (
                                            <li key={val} className="flex items-center gap-3 font-bold text-gray-text">
                                                <CheckCircle2 size={18} className="text-green-500" />
                                                {val}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
