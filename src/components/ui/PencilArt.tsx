// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const defaultTransition = {
//     duration: 2,
//     ease: "easeInOut",
// } as const;

// interface PencilArtProps {
//     className?: string;
//     delay?: number;
// }

// export const PencilBox = ({ className, delay = 0 }: PencilArtProps) => (
//     <motion.svg
//         viewBox="0 0 100 100"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={className}
//     >
//         <motion.path
//             d="M20 30 L80 30 L90 50 L10 50 Z"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay }}
//         />
//         <motion.path
//             d="M10 50 L10 80 L90 80 L90 50"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 0.5 }}
//         />
//         <motion.path
//             d="M50 30 L50 80"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 1 }}
//         />
//     </motion.svg>
// );

// export const PencilTruck = ({ className, delay = 0 }: PencilArtProps) => (
//     <motion.svg
//         viewBox="0 0 200 100"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={className}
//     >
//         {/* Cabin */}
//         <motion.path
//             d="M140 80 L140 40 L170 40 L190 60 L190 80 Z"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay }}
//         />
//         {/* Container */}
//         <motion.path
//             d="M10 80 L10 30 L140 30 L140 80 Z"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 0.3 }}
//         />
//         {/* Wheels */}
//         <motion.circle
//             cx="40" cy="80" r="10"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 0.8 }}
//         />
//         <motion.circle
//             cx="110" cy="80" r="10"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 1 }}
//         />
//         <motion.circle
//             cx="170" cy="80" r="10"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 1.2 }}
//         />
//     </motion.svg>
// );

// export const PencilArrow = ({ className, delay = 0 }: PencilArtProps) => (
//     <motion.svg
//         viewBox="0 0 100 50"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={className}
//     >
//         <motion.path
//             d="M10 25 C 30 15, 60 40, 90 25"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay }}
//         />
//         <motion.path
//             d="M75 15 L90 25 L75 35"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ ...defaultTransition, delay: delay + 0.5 }}
//         />
//     </motion.svg>
// );
