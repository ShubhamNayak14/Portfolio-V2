"use client";

import React, { useEffect, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

import HomePage from "@/components/HomePage";
import Loader from "@/components/Loading";
import { Transition } from "@/app/transition";
import { TextScroll } from "@/components/ui/text-scroll";
import ContactCard from "@/components/ContactCard";
import BadgeButton from "@/components/ui/badge-button";
import LogoMarquee from "@/components/ui/LogoMarquee";
import FeaturedProjects from "@/components/ProjectHome";
import SkiperUIComponent from "@/components/SkiperUIComponent";
import ProfileCard from "@/components/ProfileCard";

interface HomeClientProps {
  initSectionId?: string;
  initFilterBy?: string;
  initFilterKey?: string;
}

export default function HomeClient({
  initSectionId = "",
  initFilterBy = "tech-stack",
  initFilterKey = "all",
}: HomeClientProps): React.JSX.Element {
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

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({ offset: ["start end", "end start"] });

  const x: MotionValue<number> = useTransform(
    scrollYProgress,
    isMediumUp ? [0, 0.5, 1] : [0, 1],
    isMediumUp ? [-50, 0, -50] : [-50, 0]
  );

  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    isMediumUp ? [0, 0.5, 1] : [0, 1],
    isMediumUp ? [0.5, 1, 0.5] : [0.5, 1]
  );

  return (
    <>
      <Transition>
        <HomePage />
      </Transition>

      <div className="font-bold block">
        <TextScroll
          text="CREATIFY"
          default_velocity={3}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl opacity-25 dark:opacity-15"
        />
      </div>

      <ProfileCard />

      {/* You can pass initFilter props down here if FeaturedProjects or other components use them */}
      {/* Example: <FeaturedProjects filterBy={initFilterBy} filterKey={initFilterKey} /> */}
      {/* <IntroCard /> */}

      <LogoMarquee />
      <SkiperUIComponent />

      <ContactCard />

      <div className="w-full flex justify-center py-15 md:py-20">
        <BadgeButton />
      </div>
    </>
  );
}
