

// "use client";
// import React, { useEffect, useState } from "react";

// type Logo = {
//   name: string;
//   src: string;
//   alt: string;
// };

// const logos: Logo[] = [
//   { name: "GitHub", src: "/image/github.svg", alt: "GitHub logo" },
//   { name: "Notion", src: "/image/notion.svg", alt: "Notion logo" },
//   { name: "npm", src: "/image/npm.svg", alt: "npm logo" },
//   { name: "Vercel", src: "/image/vercel.svg", alt: "Vercel logo" },
//   { name: "VS Code", src: "/image/vscode.svg", alt: "Visual Studio Code logo" },
//   { name: "Open AI", src: "/image/openai.svg", alt: "OpenAI logo" },
//   { name: "Figma", src: "/image/figma.svg", alt: "Figma logo" },
//   { name: "Photoshop", src: "/image/ps.svg", alt: "Photoshop logo" },
//   { name: "Lightroom", src: "/image/lightroom.svg", alt: "Lightroom logo" },
// ];

// const getRepeatedLogos = (repeatCount: number): Logo[] => {
//   let repeated: Logo[] = [];
//   for (let i = 0; i < repeatCount; i++) {
//     repeated = repeated.concat(logos);
//   }
//   return repeated;
// };

// export default function LogoMarquee() {
//   const repeatedLogos = getRepeatedLogos(4);
//   const [animationDuration, setAnimationDuration] = useState(10);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setAnimationDuration(20);
//       } else if (window.innerWidth < 1024) {
//         setAnimationDuration(25);
//       } else {
//         setAnimationDuration(30);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="w-full py-6  overflow-hidden">
//       <div className="max-w-7xl mx-auto 0.2ms">
//         {/* Top scrolling line - left to right */}
//         <div className="overflow-hidden relative h-12">
//           <div
//             className="flex w-max gap-8 animate-marquee"
//             style={{ minWidth: "100%", animationDuration: `${animationDuration}s` }}
//           >
//             {repeatedLogos.map((logo, index) => (
//               <div
//                 key={`top-${logo.name}-${index}`}
//                 className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-pointer min-w-[120px]"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="h-10 object-contain opacity-30 hover:opacity-80 transition-opacity duration-300 dark:filter dark:invert dark:brightness-150"
//                   draggable={false}
//                 />
//                 <span className="text-gray-300 font-semibold select-none whitespace-nowrap">
//                   {logo.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom scrolling line - right to left */}
//         <div className="overflow-hidden relative h-20 mt-1">
//           <div
//             className="flex w-max gap-8 animate-marquee-reverse"
//             style={{ minWidth: "200%", animationDuration: `${animationDuration}s` }}
//           >
//             {repeatedLogos.map((logo, index) => (
//               <div
//                 key={`bottom-${logo.name}-${index}`}
//                 className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-pointer min-w-[120px]"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="h-10 object-contain opacity-30 hover:opacity-80 transition-opacity duration-300 dark:filter dark:invert dark:brightness-150"
//                   draggable={false}
//                 />
//                 <span className="text-gray-300 font-semibold select-none whitespace-nowrap">
//                   {logo.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes marquee-reverse {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee linear infinite;
//         }
//         .animate-marquee-reverse {
//           animation: marquee-reverse linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



'use client';
import React, { useEffect, useState } from 'react';

type Logo = {
  name: string;
  src: string;
  alt: string;
};

const logos: Logo[] = [
  { name: 'GitHub', src: '/image/github.svg', alt: 'GitHub logo' },
  { name: 'Notion', src: '/image/notion.svg', alt: 'Notion logo' },
  { name: 'npm', src: '/image/npm.svg', alt: 'npm logo' },
  { name: 'Vercel', src: '/image/vercel.svg', alt: 'Vercel logo' },
  { name: 'VS Code', src: '/image/vscode.svg', alt: 'VS Code logo' },
  { name: 'Open AI', src: '/image/openai.svg', alt: 'OpenAI logo' },
  { name: 'Figma', src: '/image/figma.svg', alt: 'Figma logo' },
  { name: 'Photoshop', src: '/image/ps.svg', alt: 'Photoshop logo' },
  { name: 'Lightroom', src: '/image/lightroom.svg', alt: 'Lightroom logo' },
];

// repeat logos for continuous effect
const getRepeatedLogos = (repeatCount: number): Logo[] => {
  let repeated: Logo[] = [];
  for (let i = 0; i < repeatCount; i++) repeated = repeated.concat(logos);
  return repeated;
};

export default function LogoMarquee() {
  const [animationDuration, setAnimationDuration] = useState(30);
  const repeatedLogos = getRepeatedLogos(4);

  // Responsive animation speed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setAnimationDuration(55); // slower on tiny screens
      } else if (window.innerWidth < 768) {
        setAnimationDuration(45);
      } else if (window.innerWidth < 1024) {
        setAnimationDuration(35);
      } else {
        setAnimationDuration(25);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        {/* Top line: left → right */}
        <div className="overflow-hidden relative h-14 sm:h-16">
          <div
            className="flex w-max gap-6 sm:gap-10 animate-marquee-right"
            style={{ animationDuration: `${animationDuration}s` }}
          >
            {repeatedLogos.map((logo, i) => (
              <div
                key={`top-${logo.name}-${i}`}
                className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 dark:invert dark:brightness-150"
                  draggable={false}
                />
                <span className="text-xs sm:text-sm md:text-base text-gray-400 dark:text-gray-300 font-medium select-none whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line: right → left */}
        <div className="overflow-hidden relative h-14 sm:h-16 mt-3 sm:mt-4">
          <div
            className="flex w-max gap-6 sm:gap-10 animate-marquee-left"
            style={{ animationDuration: `${animationDuration}s` }}
          >
            {repeatedLogos.map((logo, i) => (
              <div
                key={`bottom-${logo.name}-${i}`}
                className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 dark:invert dark:brightness-150"
                  draggable={false}
                />
                <span className="text-xs sm:text-sm md:text-base text-gray-400 dark:text-gray-300 font-medium select-none whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style >{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  );
}
