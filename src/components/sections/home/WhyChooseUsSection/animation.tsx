"use client";

import React from "react";
import { motion } from "framer-motion";

export const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export const StickerHover = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);
