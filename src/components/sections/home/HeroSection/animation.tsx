"use client";

import React from "react";
import { motion } from "framer-motion";

export const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export const ScaleIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export const Floating = ({ children, duration = 4, y = [-10, 10, -10] }: { children: React.ReactNode; duration?: number; y?: number[] }) => (
    <motion.div
        animate={{ y }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
);

export const PulseScale = ({ children, duration = 3 }: { children: React.ReactNode; duration?: number }) => (
    <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
);

export const MarqueeTruck = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
        {children}
    </motion.div>
);
