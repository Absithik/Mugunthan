"use client";

import { motion } from "framer-motion";

export const InfoEntry = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        {children}
    </motion.div>
);

export const FormEntry = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        {children}
    </motion.div>
);
