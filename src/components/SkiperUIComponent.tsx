"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profiles = [
  { alt: "HTML", src: "/icons/html.svg" },
  { alt: "CSS", src: "/icons/css.svg" },
  { alt: "React Js", src: "/icons/react.svg" },
  { alt: "Next Js", src: "/icons/nextjs.svg" },
  { alt: "Tailwind", src: "/icons/tailwind.svg" },
  { alt: "GA4", src: "/icons/ga.svg" },
  { alt: "GTM", src: "/icons/gtm.svg" },
  { alt: "Javascript", src: "/icons/js.svg" },
];

// Custom Hook for window size
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

const SkiperUIComponent: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { height } = useWindowSize();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverIndex(index);
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => setHoverIndex(null);
  const handleTouchStart = (index: number) => setHoverIndex(index);

  const displayedText =
    hoverIndex !== null ? profiles[hoverIndex].alt.toUpperCase() : "{USING STACK}";

  //  Dynamic height adjustment
  const sectionHeight = height > 900 ? "70vh" : height > 700 ? "65vh" : "60vh";

  return (
    <div className="relative w-full overflow-hidden">
      <section
        className={`relative flex flex-col items-center justify-center w-full select-none dark:text-white text-black`}
        style={{ minHeight: sectionHeight }}
      >
        {/* Profile Icons */}
        <div className="absolute top-[5%] lg:top-[15%] flex flex-wrap justify-center gap-4 max-w-[90%]">
          {profiles.map(({ alt, src }, index) => (
            <motion.div
              key={alt}
              className="relative cursor-pointer rounded-2xl"
              style={{ width: 45, height: 45 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart(index)}
              whileHover={{
                scale: 2,
                y: -12,
                zIndex: 50,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Hover indicator */}
              <AnimatePresence>
                {hoverIndex === index && (
                  <motion.div
                    key={`cursor-${index}`}
                    className="absolute rounded-full bg-red-600 pointer-events-none hidden sm:flex items-center justify-center"
                    style={{
                      width: 60,
                      height: 60,
                      top: cursorPos.y - 30,
                      left: cursorPos.x - 30,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 0.8,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-6 w-6"
                    >
                      <path
                        d="M6.52182 2.75026L12.8858 9.11422L15.253 0.38299L6.52182 2.75026Z"
                        fill="white"
                      />
                      <path
                        d="M0.333095 12.3331L3.30294 15.3029L10.3402 6.56864L9.0674 5.29585L0.333095 12.3331Z"
                        fill="white"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Animated Text */}
        <div className="relative h-[10vw] w-full flex items-center justify-center z-30 overflow-hidden px-2 mt-[-20px] lg:mt-[-60px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h1
              key={displayedText}
              className="font-extrabold uppercase whitespace-nowrap flex gap-[0.2em] leading-none text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                fontSize: "clamp(1.8rem, 10vw, 18rem)",
                color:
                  displayedText === "{USING STACK}" ? "var(--tw-prose-body)" : "#FF9800",
              }}
            >
              {displayedText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.04,
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

      
      </section>
    </div>
  );
};

export default SkiperUIComponent;


















// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LogoMarquee from "@/components/ui/LogoMarquee";

// const profiles = [
//   { alt: "HTML", src: "/icons/html.svg" },
//   { alt: "CSS", src: "/icons/css.svg" },
//   { alt: "React Js", src: "/icons/react.svg" },
//   { alt: "Next Js", src: "/icons/nextjs.svg" },
//   { alt: "Tailwind", src: "/icons/tailwind.svg" },
//   { alt: "GA4", src: "/icons/ga.svg" },
//   { alt: "GTM", src: "/icons/gtm.svg" },
//   { alt: "Javascript", src: "/icons/js.svg" },
// ];

// const SkiperUIComponent: React.FC = () => {
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLDivElement>,
//     index: number
//   ) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setHoverIndex(index);
//     setCursorPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const handleMouseLeave = () => setHoverIndex(null);
//   const handleTouchStart = (index: number) => setHoverIndex(index);

//   const displayedText =
//     hoverIndex !== null ? profiles[hoverIndex].alt.toUpperCase() : "{USING STACK}";

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <section className="relative flex flex-col items-center justify-center h-[80%] w-full select-none dark:text-white text-black">
//         {/* Profile icons */}
//         <div className="absolute top-[5%] lg:top-[5%] flex flex-wrap justify-center gap-4 max-w-[90%]">
//           {profiles.map(({ alt, src }, index) => (
//             <motion.div
//               key={alt}
//               className="relative cursor-pointer rounded-2xl"
//               style={{ width: 45, height: 45 }}
//               onMouseMove={(e) => handleMouseMove(e, index)}
//               onMouseLeave={handleMouseLeave}
//               onTouchStart={() => handleTouchStart(index)}
//               whileHover={{
//                 scale: 2,
//                 y: -12,
//                 zIndex: 50,
//               }}
//               transition={{ type: "spring", stiffness: 180, damping: 15 }}
//             >
//               <img
//                 src={src}
//                 alt={alt}
//                 className="w-full h-full object-cover rounded-xl"
//               />

//               {/* Hover indicator */}
//               <AnimatePresence>
//                 {hoverIndex === index && (
//                   <motion.div
//                     key={`cursor-${index}`}
//                     className="absolute rounded-full bg-red-600 pointer-events-none hidden sm:flex items-center justify-center"
//                     style={{
//                       width: 60,
//                       height: 60,
//                       top: cursorPos.y - 30,
//                       left: cursorPos.x - 30,
//                     }}
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0, opacity: 0 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 200,
//                       damping: 20,
//                       mass: 0.8,
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="36"
//                       height="36"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       className="h-6 w-6"
//                     >
//                       <path
//                         d="M6.52182 2.75026L12.8858 9.11422L15.253 0.38299L6.52182 2.75026Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M0.333095 12.3331L3.30294 15.3029L10.3402 6.56864L9.0674 5.29585L0.333095 12.3331Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>

//         {/* Animated text */}
//         <div className="relative h-[10vw] w-full flex items-center justify-center z-30 overflow-hidden px-2 mt-[6px] lg:mt-[-40px]">
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.h1
//               key={displayedText}
//               className="font-extrabold uppercase whitespace-nowrap flex gap-[0.2em] leading-none text-center  "
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -30, scale: 0.95 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               style={{
//                 fontSize: "clamp(1.8rem, 10vw, 18rem)",
//                 color:
//                   displayedText === "{USING STACK}" ? "dark:white" : "#f87171",
//               }}
//             >
//               {displayedText.split("").map((letter, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: i * 0.04,
//                     type: "spring",
//                     stiffness: 220,
//                     damping: 18,
//                   }}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </motion.h1>
//           </AnimatePresence>
//         </div>
//       <LogoMarquee />
//       </section>
//     </div>
//   );
// };

// export default SkiperUIComponent;


