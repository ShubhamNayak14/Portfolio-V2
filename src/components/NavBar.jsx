"use client";

import React from "react";
import ThemeToggleButton from "./ui/theme-toggle-button";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const leftItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  const rightItems = [
    { name: "About", href: "/about" },
    { name: "Resume", href: "https://drive.google.com/file/d/1b0pMtw63tgCdAn5v5HG-l2gpiuGUQcQg/view?usp=sharing", target: "_blank" },
  ];

  return (
    <nav
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        flex items-center justify-center gap-3 sm:gap-6
        px-4 sm:px-6 py-1.5 sm:py-2 rounded-full
        backdrop-blur-lg bg-white/30 dark:bg-black/30
        border border-black/10 dark:border-white/10
        text-black dark:text-gray-300 shadow-md
      "
    >
      {/* Left links */}
      <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
        {leftItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className={`transition-colors cursor-pointer ${
              pathname === item.href
                ? "font-semibold text-black dark:text-white"
                : "hover:text-black dark:hover:text-white"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Theme toggle in center */}
    <div className="">
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdkZjliNW4yZG9oa2MzcXRzNG96czBjaXNrZG90bWh1ZHV5dzMyMyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/PxVxsAQANefDUNvgbV/giphy.gif"
          className="hover:scale-100 hover:bg-transparent transition-none" 
        />
      </div>

      {/* Right links */}
      <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
        {rightItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className={`transition-colors cursor-pointer ${
              pathname === item.href
                ? "font-semibold text-black dark:text-white"
                : "hover:text-black dark:hover:text-white"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

















// "use client";

// import React from "react";
// import ThemeToggleButton from "./ui/theme-toggle-button";
// import { usePathname } from "next/navigation";

// const NavBar = () => {
//   const pathname = usePathname();

//   const leftItems = [
//     { name: "Home", href: "/" },
//     { name: "Projects", href: "/projects" },
//   ];

//   const rightItems = [
//     { name: "About", href: "/about" },
//     { name: "Resume", href: "/SHUBHAMNAYAK.pdf", target: "_blank" },
//   ];

//   return (
//     <nav
//       className="
//         fixed bottom-4 left-1/2 -translate-x-1/2 z-50
//         flex items-center justify-center gap-3 sm:gap-6
//         px-4 sm:px-6 py-1.5 sm:py-2 rounded-full
//         backdrop-blur-lg bg-white/30 dark:bg-black/30
//         border border-black/10 dark:border-white/10
//         text-black dark:text-gray-300 shadow-md"
//     >
//       {/* Left links */}
//       <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
//         {leftItems.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className={`transition-colors cursor-pointer ${
//               pathname === item.href
//                 ? "font-semibold text-black dark:text-white"
//                 : "hover:text-black dark:hover:text-white"
//             }`}
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>

//       {/* Theme toggle in center */}
//       <div className="cursor-pointer">
//         <ThemeToggleButton
//           variant="gif"
//           url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdkZjliNW4yZG9oa2MzcXRzNG96czBjaXNrZG90bWh1ZHV5dzMyMyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/PxVxsAQANefDUNvgbV/giphy.gif"
//         />
//       </div>

//       {/* Right links */}
//       <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
//         {rightItems.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className={`transition-colors cursor-pointer ${
//               pathname === item.href
//                 ? "font-semibold text-black dark:text-white"
//                 : "hover:text-black dark:hover:text-white"
//             }`}
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
