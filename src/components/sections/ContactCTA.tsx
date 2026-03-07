import React from 'react';
import { Button } from '@/components/ui/Button';

export const ContactCTA = () => {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="relative overflow-hidden bg-blue-800 rounded-3xl p-12 md:p-20 text-center space-y-8">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Ready to Plan Your Next Move?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Contact our advisors today for a detailed breakdown and a personalized quote. Our experts are ready to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button size="lg" variant="secondary" className="shadow-xl">
                            Get an Instant Quote
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                            Call +1 (800) 123-4567
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
