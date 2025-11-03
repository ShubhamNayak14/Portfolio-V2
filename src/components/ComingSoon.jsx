"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/90 text-white z-[9999] backdrop-blur-sm">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-bold tracking-wide"
      >
        Coming Soon<span className="animate-pulse">...</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-4 text-lg sm:text-xl text-gray-400 font-medium tracking-tight"
      >
        Working under project 🚧
      </motion.p>
    </div>
  );
}
