"use client";

import React, { useEffect, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

import HomePage from "@/components/HomePage";
import { Transition } from "@/app/transition";
import { TextScroll } from "@/components/ui/text-scroll";
import ContactCard from "@/components/ContactCard";
import LogoMarquee from "@/components/ui/LogoMarquee";
import SkiperUIComponent from "@/components/SkiperUIComponent";
import ProfileCard from "@/components/ProfileCard";
import HomeClient from "./HomeClient";
import ScrollText from "@/components/ScrollText";
import ScrollTxt from "@/components/ScrollTxt";

export default function Page(): React.JSX.Element {
  const [isMediumUp, setIsMediumUp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMediumUp(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMediumUp(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Detect dark mode
  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkQuery.addEventListener("change", listener);
    return () => darkQuery.removeEventListener("change", listener);
  }, []);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    isMediumUp ? [0, 0.5, 1] : [0, 1],
    isMediumUp ? [-50, 0, -50] : [-50, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    isMediumUp ? [0, 0.5, 1] : [0, 1],
    isMediumUp ? [0.5, 1, 0.5] : [0.5, 1]
  );

  return (
    <Transition>
      <HomePage />

      <div className="font-bold">
        <TextScroll
          text="CREATIFY"
          default_velocity={3}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl opacity-25 dark:opacity-15"
        />
      </div>

      <ProfileCard />

      <ScrollTxt text="Projects" className="mt-10 lg:mt-0 mb-0 lg:mb-20" />
      <HomeClient initSectionId="" />

      <ScrollText text="TechStack" className="mb-10 mt-0" />

      <SkiperUIComponent />
      <LogoMarquee />

      <ContactCard />
    </Transition>
  );
}
