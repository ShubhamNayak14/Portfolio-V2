"use client";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center pb-32">
      <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-500 flex items-center">
        More Projects Coming Soon
        <span className="ml-2 flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="text-gray-800 dark:text-gray-100"
            >
              .
            </motion.span>
          ))}
        </span>
      </h1>

      <p className="text-base sm:text-base md:text-xl text-gray-900 dark:text-gray-400 transition-colors duration-500">
         Work in Progress — Stay Tuned!
      </p>
    </div>
  );
}
