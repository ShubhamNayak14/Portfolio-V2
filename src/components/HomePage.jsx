"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timer from "./Timer";
import ScheduleButton from "./ui/ScheduleButton";
import { Highlighter } from "@/components/ui/highlighter";

gsap.registerPlugin(ScrollTrigger);

const HomePage = ({ isLoaded = false }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const layers = {
    scheduleBtn: useRef(null),
    im: useRef(null),
    photo: useRef(null),
    shubham: useRef(null),
    backgroundText: useRef(null),
    navbar: useRef(null),
  };

  const taglineRefs = useRef([]);
  const hoverAnim = useRef(null);

  /** Hover Animation */
  const handleMouseEnter = () => {
    hoverAnim.current = gsap.to(layers.photo.current, {
      scale: 1,
      y: -10,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  };

  const handleMouseLeave = () => {
    if (hoverAnim.current) hoverAnim.current.kill();
    gsap.to(layers.photo.current, {
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  /** 📱 Detect screen size */
  useEffect(() => {
    const handleResize = () => setIsSmallDevice(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**  GSAP Animation after Preloader */
  useEffect(() => {
    if (!isLoaded) return;

    // Add small delay for layout stabilization
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        window.scrollTo(0, 0);

        // Tagline Animation
        gsap.from(taglineRefs.current, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        });

        //  Main Timeline
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1 },
          onComplete: () => setIsSticky(true),
        });

        tl.from(layers.scheduleBtn.current, { x: -100, opacity: 0 })
          .from(layers.im.current, { y: -50, opacity: 0 }, "-=0.5")
          .from(
            layers.photo.current,
            { y: -100, opacity: 0, ease: "bounce.out", duration: 1.2 },
            "-=0.8"
          )
          .from(layers.shubham.current, { x: 100, opacity: 0 }, "-=0.8")
          .from(layers.navbar.current, { y: -50, opacity: 0 }, "-=0.8");

        // ScrollTrigger Background Animation
        gsap.to(layers.backgroundText.current, {
          scale: 1.5,
          opacity: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: layers.backgroundText.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => ctx.revert();
    }, 200);

    return () => clearTimeout(timeout);
  }, [isLoaded]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center px-5 font-poppins">
      {/* Schedule Button */}
      <ScheduleButton ref={layers.scheduleBtn} />

      {/* Timer */}
      <div className="mt-[-50px] mb-4 z-30 text-[clamp(14px,2vw,22px)] font-normal text-black">
        <Timer />
      </div>

      {/* Main Text */}
      {isSmallDevice ? (
        <div className="flex flex-col items-center gap-2 z-30 w-full max-w-xs mx-auto">
          <span
            ref={layers.im}
            className="text-[clamp(30px,6vw,38px)] font-light leading-tight dark:text-white"
            style={{ fontFamily: "'Reaktif', sans-serif" }}
          >
            i&apos;m shubham
          </span>
          <img
            ref={layers.photo}
            src="image/profilesm.jpg"
            alt="Shubham"
            className="w-[150px] h-[55px] object-cover rounded-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:items-center md:gap-2 gap-2 z-30 w-full justify-center">
          <div
            className="flex flex-row items-center justify-center gap-1 md:gap-2 flex-wrap md:flex-nowrap"
            style={{ fontFamily: "'Reaktif', sans-serif" }}
          >
            <span
              ref={layers.im}
              className="text-[clamp(50px,10vw,70px)] font-light md:text-[70px]"
            >
              i&apos;m
            </span>
            <img
              ref={layers.photo}
              src="image/profile.jpg"
              alt="Shubham"
              className="w-[clamp(120px,16vw,160px)] h-[clamp(40px,6vw,80px)] rounded-4xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <span
            ref={layers.shubham}
            className="text-[clamp(60px,6vw,70px)] font-light font-reaktif mt-0 md:mt-0"
                style={{ fontFamily: "'Reaktif', sans-serif" }}
          >
            shubham
          </span>
        </div>
      )}

      {/* Tagline */}
      <h1
        style={{ fontFamily: "'Reaktif', sans-serif" }}
        className="flex flex-wrap justify-center items-center gap-2 mt-4 md:mt-6 z-30 text-[clamp(30px,6vw,90px)] font-semibold select-none font-reaktif"
      >
        <p ref={(el) => (taglineRefs.current[0] = el)}>
          Where{" "}
          <Highlighter action="highlight" color="#FF9800">
            <span className="px-6">
    Ideas
  </span>
          </Highlighter>{" "}
          Meet{" "}
          <Highlighter action="underline" color="#ff9800">
            Innovation
          </Highlighter>
        </p>
      </h1>

      {/* Background Text */}
      <h1
        style={{ fontFamily: "'Qualy', cursive" }}
        ref={layers.backgroundText}
        className="absolute w-full text-[clamp(80px,20vw,250px)] font-light opacity-10 select-none z-10"
      >
        CREATIFY
      </h1>
    </div>
  );
};

export default HomePage;
