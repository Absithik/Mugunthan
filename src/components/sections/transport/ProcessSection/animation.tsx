"use client";

import { motion } from "framer-motion";

export const TimelineItem = ({ children, index }: { children: React.ReactNode, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        {children}
    </motion.div>
);

export const ProgressLine = () => (
    <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-accent via-accent/50 to-transparent origin-left hidden lg:block"
    />
);
