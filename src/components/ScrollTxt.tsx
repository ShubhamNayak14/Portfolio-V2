'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface ScrollTextProps {
  text?: string;
  className?: string;
}

/**
 * ScrollText Component
 * Text moves left-to-right when scrolling down,
 * and right-to-left when scrolling up.
 * Top and bottom lines move opposite to each other.
 */
export default function ScrollText({
  text = 'SHUBHAM NAYAK • DEVELOPER • DESIGNER • CREATOR',
  className = '',
}: ScrollTextProps) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const textX = useMotionValue(0);
  const topLineX = useMotionValue(0);
  const bottomLineX = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const speed = Math.min(Math.abs(delta) * 0.5, 80);

      if (delta > 0) {
        // 🟢 Scrolling DOWN → text moves LEFT ➜ RIGHT
        textX.set(textX.get() + speed);
        topLineX.set(topLineX.get() - speed); // top line opposite
        bottomLineX.set(bottomLineX.get() + speed); // bottom line same
      } else if (delta < 0) {
        // 🔵 Scrolling UP → text moves RIGHT ➜ LEFT
        textX.set(textX.get() - speed);
        topLineX.set(topLineX.get() + speed);
        bottomLineX.set(bottomLineX.get() - speed);
      }

      // Looping wrap-around
      const wrapLimit = 1000;
      [textX, topLineX, bottomLineX].forEach((mv) => {
        const val = mv.get();
        if (val > wrapLimit) mv.set(val - 2 * wrapLimit);
        if (val < -wrapLimit) mv.set(val + 2 * wrapLimit);
      });

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, textX, topLineX, bottomLineX]);

  const smoothTextX = useTransform(textX, (v) => `${v}px`);
  const smoothTopLineX = useTransform(topLineX, (v) => `${v}px`);
  const smoothBottomLineX = useTransform(bottomLineX, (v) => `${v}px`);

  return (
    <div
      className={`relative w-full overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ${className}`}
    >
      {/* Top line */}
      <motion.div
        // style={{ x: smoothTopLineX }}
        className="absolute top-[5%] w-[200%] h-[2px] bg-gray-900/20 dark:bg-white/20"
      />

      {/* Moving text */}
      <motion.div style={{ x: smoothTextX }} className="flex whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <motion.h1
            key={i}
            style={{ fontFamily: "'Qualy', sans-serif" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem]
              font-extrabold uppercase 
              text-gray-900 dark:text-white select-none opacity-20 mx-1"
            whileHover={{ color: '#f97316', opacity: 0.7 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>

      {/* Bottom line */}
      <motion.div
        // style={{ x: smoothBottomLineX }}
        className="absolute bottom-[5%] w-[200%] h-[2px] bg-gray-900/20 dark:bg-white/20"
      />
    </div>
  );
}
