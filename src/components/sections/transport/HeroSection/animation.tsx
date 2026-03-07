"use client";

import { motion } from "framer-motion";

export const EntryAnimation = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export const TruckAnimation = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        animate={{
            x: [-20, 20, -20],
            y: [0, -5, 0]
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        {children}
    </motion.div>
);
