"use client";

import { motion } from "framer-motion";

export const PulseAnimation = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        {children}
    </motion.div>
);
