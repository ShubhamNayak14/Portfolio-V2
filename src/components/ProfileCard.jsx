"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedDiv from "@/components/ui/masked-div";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

gsap.registerPlugin(ScrollTrigger);

// Define the mobile breakpoint (consistent with your CSS/Tailwind utilities, where 'sm' is often 640px)
const MOBILE_BREAKPOINT = 640;

export default function ProfileCard() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const glowRef = useRef(null);
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  //  1. New state to store the MaskedDiv size
  const [maskedDivSize, setMaskedDivSize] = useState(1);

  //  2. Effect to detect screen size and set the size prop
  useEffect(() => {
    // Function to calculate and set the size
    const calculateSize = () => {
      // Check if window is defined (to avoid Next.js Server-Side Rendering errors)
      const newSize = window.innerWidth < MOBILE_BREAKPOINT ? 0.8 : 1;
      setMaskedDivSize(newSize);
    };

    // Set initial size
    calculateSize();

    // Add event listener for window resize
    window.addEventListener("resize", calculateSize);

    // Cleanup: remove the event listener
    return () => window.removeEventListener("resize", calculateSize);
  }, []); // Empty dependency array ensures it runs only once on mount

  useEffect(() => {
    if (!leftRef.current || !rightRef.current || !glowRef.current) return;

    //  Delay GSAP init slightly to ensure DOM + transitions are ready
    const init = setTimeout(() => {
      const leftTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      leftTimeline.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });
      leftTimeline.from(
        leftRef.current.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        },
        "<"
      );

      const rightAnimation = gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      const glowAnim = gsap.to(glowRef.current, {
        y: -12,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      //   Refresh ScrollTrigger once the layout stabilizes
      ScrollTrigger.refresh();

      // Hover zoom
      const rightImage = rightRef.current.querySelector("img");
      const handleMouseEnter = () =>
        rightImage && (rightImage.style.transform = "scale(1.05)");
      const handleMouseLeave = () =>
        rightImage && (rightImage.style.transform = "scale(1)");
      rightRef.current.addEventListener("mouseenter", handleMouseEnter);
      rightRef.current.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        leftTimeline.scrollTrigger?.kill();
        rightAnimation.scrollTrigger?.kill();
        leftTimeline.kill();
        rightAnimation.kill();
        glowAnim.kill();
        rightRef.current?.removeEventListener("mouseenter", handleMouseEnter);
        rightRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, 800); // small delay ensures it runs after transition/preloader

    return () => clearTimeout(init);
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    const cursor = cursorRef.current;
    let mouseX = 0,
      mouseY = 0,
      currentX = 0,
      currentY = 0,
      animationFrameId;

    const handleMouseMove = (e) => {
      if (!isHovering) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      if (cursor && isHovering)
        gsap.set(cursor, { x: currentX - 50, y: currentY - 50 });
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
      animateCursor();
    } else {
      gsap.set(cursor, { x: -9999, y: -9999 });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  return (
    <div
      className="flex items-center justify-center px-4 sm:px-6 md:px-8 min-h-screen relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
 {/* Custom Circular Text Cursor */}
      {isHovering && (
        <div
          ref={cursorRef}
          // Added 'hidden md:block' here
          className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        >
          <div className="relative w-[100px] h-[100px] flex items-center justify-center">
            <div className="absolute inset-0 border border-white/70 rounded-full animate-spin-slow" />
            <div className="absolute text-white text-[10px] uppercase tracking-[4px] font-light">
              <svg viewBox="0 0 100 100" className="w-[100px] h-[100px]">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                  />
                </defs>
                <text fill="white" fontSize="8" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    DEVELOP ✦ CREATE ✦ DESIGN ✦ BUILD ✦
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex flex-col md:pb-20 md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl mx-auto mt-16 w-full relative">
        {/* Left Section */}
        <div
          ref={leftRef}
          className="relative w-[310px] mx-auto md:mx-0 md:w-full md:flex-[0.65] rounded-3xl p-5 sm:p-10 md:p-12 lg:p-16 shadow-xl flex flex-col gap-6 order-2 md:order-1 bg-white/10 dark:bg-black/20 border border-white/20 backdrop-blur-md transition-colors duration-500"
        >
          <span className="text-4xl sm:text-5xl dark:text-white text-black font-light  leading-none">
            *
          </span>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl uppercase lg:text-5xl font-medium dark:text-white text-black leading-tight flex flex-wrap items-baseline "
            style={{ fontFamily: "Reaktif, sans-serif" }}
          >
            <p>
              I'm your{" "}
              <Highlighter action="highlight" color="#ff9800">
                Developer
              </Highlighter>{" "}
              &{" "}
              <Highlighter action="underline" color="#FF9800">
                UI/UX Designer
              </Highlighter>
            </p>
          </h1>

          <p className="dark:text-gray-300 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
            From designing beautiful interfaces to making sure everything runs
            smoothly behind the scenes, I’ve got you covered. Let’s turn your
            ideas into interactive wonders that make waves online. With me by
            your side, your website will be more than just pixels.
          </p>
          <span
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent"
            style={{ fontFamily: "monospace" }}
          >
            {"{ Simplicity for the Future }"}
          </span>
        </div>

        {/* Right Section */}
        <div
          ref={rightRef}
          className="relative w-full md:flex-[0.35] flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative inline-block w-full max-w-[500px]">
            <div
              ref={glowRef}
              className="absolute -top-0 -right-0 w-20 h-20 md:w-20 md:h-20 rounded-full bg-orange-500 shadow-[0_0_20px_6px_rgba(255,69,0,0.7)] z-20 flex justify-center items-center"
            >
              <span
                className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] select-none"
                style={{ fontFamily: "'Qualy', serif" }}
              >
                {/* &amp; */}
                H!
              </span>
            </div>

            {/*  3. The MaskedDiv component with the dynamic size prop */}
            <MaskedDiv maskType="type-1" size={maskedDivSize}>
              <Image
                width={600}
                height={600}
                src="/image/card.jpg"
                alt="Profile"
                className="rounded-3xl object-cover shadow-2xl w-full h-auto"
                priority
              />
            </MaskedDiv>
          </div>
        </div>
      </div>
    </div>
  );
}



















// "use client";
// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MaskedDiv from "@/components/ui/masked-div";
// import Image from "next/image";
// import { Highlighter } from "@/components/ui/highlighter";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProfileCard() {
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const glowRef = useRef(null);
//   const cursorRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     if (!leftRef.current || !rightRef.current || !glowRef.current) return;

//     //  Delay GSAP init slightly to ensure DOM + transitions are ready
//     const init = setTimeout(() => {
//       const leftTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: leftRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       leftTimeline.from(leftRef.current, {
//         opacity: 0,
//         x: -50,
//         duration: 1,
//         ease: "power3.out",
//       });
//       leftTimeline.from(
//         leftRef.current.children,
//         {
//           y: 20,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           delay: 0.2,
//           ease: "power3.out",
//         },
//         "<"
//       );

//       const rightAnimation = gsap.from(rightRef.current, {
//         scrollTrigger: {
//           trigger: rightRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//         opacity: 0,
//         x: 50,
//         duration: 1.2,
//         ease: "power3.out",
//         delay: 0.3,
//       });

//       const glowAnim = gsap.to(glowRef.current, {
//         y: -12,
//         duration: 1.5,
//         ease: "power1.inOut",
//         yoyo: true,
//         repeat: -1,
//       });

//       //   Refresh ScrollTrigger once the layout stabilizes
//       ScrollTrigger.refresh();

//       // Hover zoom
//       const rightImage = rightRef.current.querySelector("img");
//       const handleMouseEnter = () =>
//         rightImage && (rightImage.style.transform = "scale(1.05)");
//       const handleMouseLeave = () =>
//         rightImage && (rightImage.style.transform = "scale(1)");
//       rightRef.current.addEventListener("mouseenter", handleMouseEnter);
//       rightRef.current.addEventListener("mouseleave", handleMouseLeave);

//       // Cleanup
//       return () => {
//         leftTimeline.scrollTrigger?.kill();
//         rightAnimation.scrollTrigger?.kill();
//         leftTimeline.kill();
//         rightAnimation.kill();
//         glowAnim.kill();
//         rightRef.current?.removeEventListener("mouseenter", handleMouseEnter);
//         rightRef.current?.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }, 800); // small delay ensures it runs after transition/preloader

//     return () => clearTimeout(init);
//   }, []);

//   useEffect(() => {
//     if (!cursorRef.current) return;
//     const cursor = cursorRef.current;
//     let mouseX = 0,
//       mouseY = 0,
//       currentX = 0,
//       currentY = 0,
//       animationFrameId;

//     const handleMouseMove = (e) => {
//       if (!isHovering) return;
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const animateCursor = () => {
//       currentX += (mouseX - currentX) * 0.12;
//       currentY += (mouseY - currentY) * 0.12;
//       if (cursor && isHovering)
//         gsap.set(cursor, { x: currentX - 50, y: currentY - 50 });
//       animationFrameId = requestAnimationFrame(animateCursor);
//     };

//     if (isHovering) {
//       window.addEventListener("mousemove", handleMouseMove);
//       animateCursor();
//     } else {
//       gsap.set(cursor, { x: -9999, y: -9999 });
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isHovering]);

//   return (
//     <div
//       className="flex items-center justify-center px-4 sm:px-6 md:px-8 min-h-screen relative"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Custom Circular Text Cursor */}
//       {isHovering && (
//         <div
//           ref={cursorRef}
//           className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
//         >
//           <div className="relative w-[100px] h-[100px] flex items-center justify-center">
//             <div className="absolute inset-0 border border-white/70 rounded-full animate-spin-slow" />
//             <div className="absolute text-white text-[10px] uppercase tracking-[4px] font-light">
//               <svg viewBox="0 0 100 100" className="w-[100px] h-[100px]">
//                 <defs>
//                   <path
//                     id="circlePath"
//                     d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
//                   />
//                 </defs>
//                 <text fill="white" fontSize="8" letterSpacing="2">
//                   <textPath href="#circlePath" startOffset="0%">
//                     DEVELOP ✦ CREATE ✦ DESIGN ✦ BUILD ✦
//                   </textPath>
//                 </text>
//               </svg>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Layout */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl mx-auto mt-16 w-full relative">
//         {/* Left Section */}
//         <div
//           ref={leftRef}
//           className="w-full md:flex-[0.65] rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-xl flex flex-col gap-6 order-2 md:order-1 bg-white/10 dark:bg-black/20 border border-white/20 backdrop-blur-md transition-colors duration-500"
//         >
//           <span className="text-4xl sm:text-5xl dark:text-white text-black font-light  leading-none">
//             *
//           </span>
//           <h1
//             className="text-2xl sm:text-3xl md:text-4xl uppercase lg:text-5xl font-medium dark:text-white text-black leading-tight flex flex-wrap items-baseline "
//             style={{ fontFamily: "Reaktif, sans-serif" }}
//           ><p>

//             I'm your{" "}
//             <Highlighter action="highlight" color="#ff9800">
//               Developer
//             </Highlighter>{" "}
//             &{" "}
//             <Highlighter action="underline" color="#FF9800">
//               UI/UX Designer
//             </Highlighter>
//           </p>
//           </h1>

//           <p className="dark:text-gray-300 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
//             From designing beautiful interfaces to making sure everything runs
//             smoothly behind the scenes, I’ve got you covered. Let’s turn your
//             ideas into interactive wonders that make waves online. With me by
//             your side, your website will be more than just pixels.
//           </p>
//           <span
//             className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent"
//             style={{ fontFamily: "monospace" }}
//           >
//             {"{ Simplicity for the Future }"}
//           </span>
//         </div>

//         {/* Right Section */}
//         <div
//           ref={rightRef}
//           className="relative w-full md:flex-[0.35] flex justify-center items-center order-1 md:order-2"
//         >
//           <div className="relative inline-block w-full max-w-[500px]">
//             <div
//               ref={glowRef}
//               className="absolute -top-0 -right-0 w-20 h-20 md:w-20 md:h-20 rounded-full bg-orange-500 shadow-[0_0_20px_6px_rgba(255,69,0,0.7)] z-20 flex justify-center items-center"
//             >
//               <span
//                 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] select-none"
//                 style={{ fontFamily: "'Qualy', serif" }}
//               >
//                 {/* &amp; */}
//                 H!
//               </span>
//             </div>

//             <MaskedDiv maskType="type-1" size={1}>
//               <Image
//                 width={500}
//                 height={500}
//                 src="/image/card.jpg"
//                 alt="Profile"
//                 className="rounded-3xl object-cover shadow-2xl w-full h-auto"
//                 priority
//               />
//             </MaskedDiv>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
