"use client";

import React from "react";
import { motion } from "framer-motion";

export const FadeInScale = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export const CityHover = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.div>
);

export const FadeInRight = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
    >
        {children}
    </motion.div>
);

export const PulseCircle = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
    >
        {children}
    </motion.div>
);
