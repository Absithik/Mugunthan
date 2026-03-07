"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalWidth = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((window.scrollY / totalWidth) * 100);
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4 items-end">
            {/* Scroll Progress Indicator Circular */}
            <div className="relative w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                        cx="28" cy="28" r="24"
                        fill="none"
                        stroke="#0A254010"
                        strokeWidth="4"
                    />
                    <circle
                        cx="28" cy="28" r="24"
                        fill="none"
                        stroke="#FF7A00"
                        strokeWidth="4"
                        strokeDasharray="150"
                        strokeDashoffset={150 - (150 * scrollProgress) / 100}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="relative font-black text-xs text-primary">{Math.round(scrollProgress)}%</div>
            </div>

            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-accent transition-colors group"
                    >
                        <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* WhatsApp */}
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/919876543210"
                target="_blank"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D36640] transition-shadow"
            >
                <MessageCircle fill="white" />
            </motion.a>
        </div>
    );
};
