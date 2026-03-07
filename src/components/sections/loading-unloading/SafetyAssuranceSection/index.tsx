import React from 'react';
import { ShieldAlert, ShieldCheck, Gem } from 'lucide-react';
import { FloatAnimation } from '@/components/animations/FloatAnimation';

export const SafetyAssuranceSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-soft rounded-[80px] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex-1 space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 text-accent rounded-full font-black text-sm uppercase tracking-widest">
                            <ShieldCheck size={18} />
                            Safety Guaranteed
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black text-primary tracking-tighter leading-none">
                            Our Damage-Free <br />
                            <span className="text-secondary italic">Iron-Clad Promise.</span>
                        </h2>
                        <p className="text-xl text-gray-text font-medium leading-relaxed max-w-xl">
                            We don't just load boxes; we handle memories. Every item is insured, and every staff member is trained to handle your belongings like their own.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                                    <Gem size={24} />
                                </div>
                                <span className="font-bold text-primary">Fragile Specialty</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-lg">
                                    <ShieldAlert size={24} />
                                </div>
                                <span className="font-bold text-primary">Full Insurance</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative flex justify-center">
                        <FloatAnimation>
                            <div className="relative">
                                <div className="w-64 h-64 lg:w-96 lg:h-96 bg-primary rounded-[60px] rotate-6 flex items-center justify-center shadow-2xl overflow-hidden group">
                                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                                    <ShieldCheck size={120} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent rounded-[40px] -rotate-12 flex items-center justify-center shadow-xl">
                                    <ShieldAlert size={48} className="text-white" />
                                </div>
                            </div>
                        </FloatAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};
