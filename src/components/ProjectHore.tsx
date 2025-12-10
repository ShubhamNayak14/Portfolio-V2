"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskContainer } from "./ui/svg-mask-effect";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    // Animate foreground text
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".animate-text"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate background scale
    gsap.to(bgRef.current, {
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Text */}
      <h1
        ref={bgRef}
        style={{ fontFamily: "'Noto Sans', cursive" }}
        className="absolute md:text-[16vw] text-5xl font-extrabold text-black dark:text-white opacity-10 leading-none select-none"
      >
        PROJECT
      </h1>


      {/* Masked Foreground Section (fills full hero) */}
      <MaskContainer
        size={30}
        revealSize={280}
        revealText={
          <h2 className="text-5xl font-bold text-black dark:text-white">
            Project Zone
          </h2>
        }
        className="w-full h-full flex flex-col items-center justify-center "
      >
        <div style={{ fontFamily: "'Reaktif', sans-serif" }} className="text-center">
          <h2 className="animate-text text-white dark:text-black text-xl md:text-7xl font-bold mb-2">
            From Code To Chaos And Back
          </h2>
          <h3 className="animate-text text-white  dark:text-black text-xl md:text-5xl font-semibold">
            Explore my <span className="text-orange-500 font-bold">Projects!</span>
          </h3>
        </div>
      </MaskContainer>
    </div>
  );
}
