'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FormEntry = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export const InfoEntry = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);
