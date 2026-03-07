'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const EntryAnimation = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);
