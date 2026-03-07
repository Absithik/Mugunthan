import React from 'react';
import { QUOTE_CONTENT } from './content';
import { InfoSide, FormSide } from './animation';
import { Send } from 'lucide-react';

export const QuoteFormSection = () => {
    const { title, description, trust } = QUOTE_CONTENT;

    return (
        <section id="quote" className="py-32 bg-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Info */}
                    <InfoSide>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter italic uppercase">
                                    {title.main} <br />
                                    <span className="text-accent underline decoration-white/10">{title.highlight}</span>
                                </h3>
                                <p className="text-xl text-white/50 font-medium leading-relaxed max-w-lg italic lowercase">
                                    {description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {trust.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-[30px] border border-white/10">
                                        <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-lg italic tracking-tight">{item.title}</h4>
                                            <p className="text-white/40 font-bold text-xs uppercase tracking-widest leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </InfoSide>

                    {/* Right: Form */}
                    <FormSide>
                        <div className="bg-white p-10 md:p-16 rounded-[60px] shadow-2xl relative group">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2 italic">Route Origin</label>
                                        <input type="text" placeholder="Moving From" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2 italic">Destination</label>
                                        <input type="text" placeholder="Moving To" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2 italic">Vehicle Type</label>
                                        <select className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                                            <option>Tata Ace / MT (1 Ton)</option>
                                            <option>14ft Container (5 Ton)</option>
                                            <option>20ft Container (9 Ton)</option>
                                            <option>32ft MX Container</option>
                                            <option>Closed Car Carrier</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2 italic">Phone</label>
                                        <input type="tel" placeholder="+91" className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/40 px-2 italic">Cargo Description</label>
                                    <textarea rows={3} placeholder="Household, Industrial, or Vehicle..." className="w-full bg-soft border-2 border-transparent px-8 py-5 rounded-2xl font-bold focus:border-accent focus:bg-white outline-none transition-all resize-none" />
                                </div>

                                <button type="submit" className="w-full py-8 bg-accent text-white rounded-[30px] font-black text-xl shadow-xl shadow-accent/30 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group mt-8">
                                    Generate Quote
                                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </FormSide>
                </div>
            </div>
        </section>
    );
};
