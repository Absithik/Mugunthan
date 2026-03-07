'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ScaleIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
        {children}
    </motion.div>
);
