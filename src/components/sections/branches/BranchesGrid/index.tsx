import React from 'react';
import { MapPin, Phone, Mail, Navigation, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRANCHES_GRID_CONTENT } from './content';
import { FadeIn } from './animation';

export const BranchesGrid = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BRANCHES_GRID_CONTENT.map((b, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="p-6 md:p-8 lg:p-10 rounded-[30px] md:rounded-[40px] lg:rounded-[50px] bg-soft border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mb-6 md:mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                                    <MapPin size={28} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 md:mb-6">{b.city}</h3>
                                <div className="space-y-4 flex-grow">
                                    <div className="flex gap-3 text-gray-text font-medium">
                                        <Navigation className="text-accent shrink-0 mt-1" size={18} />
                                        <span className="leading-relaxed">{b.address}</span>
                                    </div>
                                    <div className="flex gap-3 text-gray-text font-medium">
                                        <Phone className="text-accent shrink-0 mt-1" size={18} />
                                        <span>{b.phone}</span>
                                    </div>
                                    <div className="flex gap-3 text-gray-text font-medium overflow-hidden">
                                        <Mail className="text-accent shrink-0 mt-1" size={18} />
                                        <span className="break-all">{b.email}</span>
                                    </div>
                                    {b.web && (
                                        <div className="flex gap-3 text-gray-text font-medium overflow-hidden">
                                            <Globe className="text-accent shrink-0 mt-1" size={18} />
                                            <a href={b.web} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors break-all">
                                                {b.web.replace(/^https?:\/\//, '')}
                                            </a>
                                        </div>
                                    )}
                                </div>
                                {/* <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-primary/5">
                                    <Button variant="outline" className="w-full border-primary/10 text-primary font-black py-4 rounded-2xl hover:bg-primary hover:text-white">
                                        View On Map
                                    </Button>
                                </div> */}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
