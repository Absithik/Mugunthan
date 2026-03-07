import React from 'react';
import { FormEntry, InfoEntry } from './animation';
import { Truck, Shield, Clock, Send } from 'lucide-react';

export const QuoteFormSection = () => {
    return (
        <section id="quote-form" className="py-32 bg-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none" />
            <div className="absolute -top-48 -right-48 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left side: Trust markers */}
                    <InfoEntry>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-sm italic">Get Started</h2>
                                <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                                    Instant Quote <br /> For Your <span className="text-accent underline decoration-white/10">Move.</span>
                                </h3>
                                <p className="text-xl text-white/60 font-medium leading-relaxed max-w-lg">
                                    Fill out the form and our relocation specialist will contact you with a customized estimate in under 15 minutes.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                                    <Shield className="text-accent w-8 h-8 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-black text-lg">Fully Insured</h4>
                                        <p className="text-white/40 font-bold text-sm leading-tight">Your valuables are protected.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                                    <Clock className="text-accent w-8 h-8 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-black text-lg">15 Min Callback</h4>
                                        <p className="text-white/40 font-bold text-sm leading-tight">Fastest expert response.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </InfoEntry>

                    {/* Right side: Form */}
                    <FormEntry>
                        <div className="bg-white p-10 md:p-16 rounded-[60px] shadow-2xl relative overflow-hidden group">
                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2">Phone No</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2">Moving From</label>
                                        <input type="text" placeholder="Salem" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2">Moving To</label>
                                        <input type="text" placeholder="Chennai" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all placeholder:text-gray-300" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2">Moving Date</label>
                                    <input type="date" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all" />
                                </div>

                                <button type="submit" className="w-full py-8 bg-accent text-white rounded-3xl font-black text-xl shadow-xl shadow-accent/30 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group/btn mt-8">
                                    Get Pricing Now
                                    <Send size={24} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </FormEntry>
                </div>
            </div>
        </section>
    );
};
