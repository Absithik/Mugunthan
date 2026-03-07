'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Truck } from 'lucide-react';

export const HeroImage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative w-full h-full overflow-hidden bg-white/5">
            {/* Shimmer / Skeleton Loader */}
            <AnimatePresence>
                {!isLoaded && !hasError && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 animate-shimmer z-10"
                    />
                )}
            </AnimatePresence>

            {/* Error / Fallback State */}
            {hasError && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/10 flex flex-col items-center justify-center p-12 text-center space-y-6 z-20">
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 bg-white/10 rounded-[32px] flex items-center justify-center text-accent backdrop-blur-md border border-white/20"
                    >
                        <Truck size={48} />
                    </motion.div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white italic">Premium Handling.</h3>
                        <p className="text-white/40 font-bold text-sm">Safe relocation experts at your service.</p>
                    </div>
                </div>
            )}

            {/* Main Image */}
            <Image
                src="/assets/loading_unloading_hero.png"
                alt="Professional Loading Services"
                fill
                className={`object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg'
                    }`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                priority
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none z-10" />

            {/* Quality Badge */}
            <AnimatePresence>
                {isLoaded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center gap-3 z-30"
                    >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/20">
                            <ShieldCheck size={18} />
                        </div>
                        <span className="text-white font-black text-sm tracking-tight">100% Secure Handling</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
