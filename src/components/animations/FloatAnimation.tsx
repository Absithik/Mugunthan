'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FloatAnimation = ({ children, delay = 0, duration = 4 }: { children: React.ReactNode; delay?: number; duration?: number }) => (
    <motion.div
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay
        }}
    >
        {children}
    </motion.div>
);
