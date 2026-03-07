"use client";

import { motion } from "framer-motion";

export const TimelineAnimation = ({ children, index }: { children: React.ReactNode, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        {children}
    </motion.div>
);

export const LineAnimation = () => (
    <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block"
    />
);
