"use client";

import { motion } from "framer-motion";

export const AccordionItem = ({ children, index }: { children: React.ReactNode, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        {children}
    </motion.div>
);
