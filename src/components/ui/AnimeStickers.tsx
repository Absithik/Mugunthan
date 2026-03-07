// "use client";

// import { motion } from "framer-motion";
// import { Package, Truck, MapPin, Heart, Star, Box } from "lucide-react";

// const stickers = [
//     { icon: Truck, color: "text-primary", size: 40, top: "15%", left: "5%", delay: 0 },
//     { icon: Package, color: "text-accent", size: 30, top: "25%", right: "8%", delay: 1 },
//     { icon: MapPin, color: "text-secondary", size: 35, bottom: "20%", left: "10%", delay: 2 },
//     { icon: Heart, color: "text-primary", size: 25, bottom: "30%", right: "15%", delay: 1.5 },
//     { icon: Star, color: "text-accent", size: 30, top: "45%", left: "3%", delay: 0.5 },
//     { icon: Box, color: "text-secondary", size: 45, top: "60%", right: "5%", delay: 2.5 },
// ];

// export const AnimeStickers = () => {
//     return (
//         <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//             {stickers.map((Sticker, index) => (
//                 <motion.div
//                     key={index}
//                     className={`absolute ${Sticker.color} opacity-20`}
//                     style={{
//                         top: Sticker.top,
//                         left: Sticker.left,
//                         right: Sticker.right,
//                         bottom: Sticker.bottom,
//                     }}
//                     animate={{
//                         y: [0, -20, 0],
//                         rotate: [0, 10, -10, 0],
//                         scale: [1, 1.1, 1],
//                     }}
//                     transition={{
//                         duration: 5 + index,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: Sticker.delay,
//                     }}
//                 >
//                     <Sticker.icon size={Sticker.size} strokeWidth={1.5} />
//                 </motion.div>
//             ))}

//             {/* Decorative Circles */}
//             <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
//             <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]" />
//         </div>
//     );
// };
