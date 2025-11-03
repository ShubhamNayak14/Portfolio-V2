// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";

// export const MaskContainer = ({
//   children,
//   revealText,
//   size = 10,
//   revealSize = 600,
//   className,
// }: {
//   children?: string | React.ReactNode;
//   revealText?: string | React.ReactNode;
//   size?: number;
//   revealSize?: number;
//   className?: string;
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
//   const containerRef = useRef<any>(null);
//   const updateMousePosition = (e: any) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   useEffect(() => {
//     containerRef.current.addEventListener("mousemove", updateMousePosition);
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener(
//           "mousemove",
//           updateMousePosition,
//         );
//       }
//     };
//   }, []);
//   let maskSize = isHovered ? revealSize : size;

//   return (
//     <motion.div
//       ref={containerRef}
//       className={cn("relative h-screen", className)}
//       animate={{
//         backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
//       }}
//       transition={{
//         backgroundColor: { duration: 0.3 },
//       }}
//     >
//       <motion.div
//         className="absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-white"
//         animate={{
//           maskPosition: `${mousePosition.x - maskSize / 2}px ${
//             mousePosition.y - maskSize / 2
//           }px`,
//           maskSize: `${maskSize}px`,
//         }}
//         transition={{
//           maskSize: { duration: 0.3, ease: "easeInOut" },
//           maskPosition: { duration: 0.15, ease: "linear" },
//         }}
//       >
//         <div className="absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white" />
//         <div
//           onMouseEnter={() => {
//             setIsHovered(true);
//           }}
//           onMouseLeave={() => {
//             setIsHovered(false);
//           }}
//           className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold"
//         >
//           {children}
//         </div>
//       </motion.div>

//       <div className="flex h-full w-full items-center justify-center">
//         {revealText}
//       </div>
//     </motion.div>
//   );
// };


"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  revealText?: React.ReactNode;
  size?: number; // collapsed mask size (px)
  revealSize?: number; // expanded mask size on hover (px)
  className?: string;
};

export const MaskContainer: React.FC<Props> = ({
  children,
  revealText,
  size = 40,
  revealSize = 450,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  // target and current (for smoothing)
  const targetX = useRef(0);
  const targetY = useRef(0);
  const targetSize = useRef(size);

  const curX = useRef(0);
  const curY = useRef(0);
  const curSize = useRef(size);

  const rafRef = useRef<number | null>(null);

  // set css variables on the mask element (called each frame)
  const writeVars = () => {
    if (!maskRef.current) return;
    maskRef.current.style.setProperty("--mx", `${curX.current}px`);
    maskRef.current.style.setProperty("--my", `${curY.current}px`);
    maskRef.current.style.setProperty("--msize", `${curSize.current}px`);
  };

  // initialize center position
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    targetSize.current = size;
    curSize.current = size;
    targetX.current = rect.width / 2 - size / 2;
    targetY.current = rect.height / 2 - size / 2;
    curX.current = targetX.current;
    curY.current = targetY.current;
    writeVars();

    const onResize = () => {
      const r = el.getBoundingClientRect();
      targetX.current = r.width / 2 - targetSize.current / 2;
      targetY.current = r.height / 2 - targetSize.current / 2;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [size]);

  // smoothing loop
  useEffect(() => {
    const ease = 0.16; // change for faster/slower
    const loop = () => {
      // lerp towards target
      curX.current += (targetX.current - curX.current) * ease;
      curY.current += (targetY.current - curY.current) * ease;
      curSize.current += (targetSize.current - curSize.current) * (ease * 1.2);

      writeVars();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // pointer handlers -> update target positions (centered)
  const pointerToTarget = (clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // center the mask on pointer using targetSize (so it smoothly recenters)
    const s = targetSize.current;
    targetX.current = clientX - rect.left - s / 2;
    targetY.current = clientY - rect.top - s / 2;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mouseMove = (e: MouseEvent) => pointerToTarget(e.clientX, e.clientY);
    const touchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;
      const t = e.touches[0];
      pointerToTarget(t.clientX, t.clientY);
    };

    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("touchstart", touchMove, { passive: true });
    el.addEventListener("touchmove", touchMove, { passive: true });

    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("touchstart", touchMove);
      el.removeEventListener("touchmove", touchMove);
    };
  }, []);

  // toggle target mask size when hover/touch changes
  useEffect(() => {
    targetSize.current = isHovered ? revealSize : size;
  }, [isHovered, revealSize, size]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-screen overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      // keep pointer events available for the entire container
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Masked Foreground (the thing that hides the revealText except where mask shows) */}
      <div
        ref={maskRef}
        className="absolute inset-0 flex items-center justify-center bg-black text-6xl dark:bg-white pointer-events-none"
        // IMPORTANT:
        // - place mask-position/size using CSS variables we update from JS
        // - provide -webkit- equivalents for better browser support
        style={
          {
            WebkitMaskImage: "url('/mask.svg')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "var(--mx) var(--my)",
            WebkitMaskSize: "var(--msize)",
            maskImage: "url('/mask.svg')",
            maskRepeat: "no-repeat",
            maskPosition: "var(--mx) var(--my)",
            maskSize: "var(--msize)",
          } as React.CSSProperties
        }
      >
        {/* content inside the masked foreground */}
        <div className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold">
          {children}
        </div>
      </div>

      {/* Background / reveal content (visible through the mask) */}
      <div className="flex h-full w-full items-center justify-center pointer-events-none">
        {revealText}
      </div>
    </div>
  );
};
