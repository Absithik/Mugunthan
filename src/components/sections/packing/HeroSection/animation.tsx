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

export const FloatingArt = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0]
        }}
        transition={{
            opacity: { duration: 1, delay },
            scale: { duration: 1, delay },
            y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }
        }}
    >
        {children}
    </motion.div>
);
