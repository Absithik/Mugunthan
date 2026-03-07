"use client";

import { motion } from "framer-motion";

export const SafetyReveal = ({ children, index }: { children: React.ReactNode, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        {children}
    </motion.div>
);
