"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  imageSrc: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Abstract Dimensions",
    category: "Experimental Media",
    date: "01 Sep",
    imageSrc: "/image/profile.jpg",
  },
  {
    id: "2",
    title: "Silent Stories",
    category: "Photography",
    date: "01 Sep",
    imageSrc: "/image/profile1.jpg",
  },
  {
    id: "3",
    title: "Fading Memories",
    category: "Editorial Design",
    date: "01 Sep",
    imageSrc: "/image/profile.jpg",
  },
  {
    id: "4",
    title: "Weekend",
    category: "Sound Design",
    date: "01 Sep",
    imageSrc: "/image/profile1.jpg",
  },
  {
    id: "5",
    title: "Shattered Glass",
    category: "Art Installations",
    date: "01 Sep",
    imageSrc: "/image/profile.jpg",
  },
  {
    id: "6",
    title: "Timeless Essence",
    category: "Brand Strategy",
    date: "01 Sep",
    imageSrc: "/image/profile.jpg",
  },
];

export default function ProjectList() {
  const defaultActiveIndex = projects.findIndex((p) => p.id === "3");
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex >= 0 ? defaultActiveIndex : 0
  );

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const tickSoundRef = useRef<HTMLAudioElement | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const hasScrolledToDefault = useRef(false);
  const lastScrollTop = useRef<number | null>(null);

  // Load tick sound
  useEffect(() => {
    tickSoundRef.current = new Audio("/sounds/tick.mp3");
    tickSoundRef.current.volume = 0.4;
  }, []);

  // Enable audio on user interaction
  useEffect(() => {
    const enableAudio = () => {
      setAudioEnabled(true);
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("scroll", enableAudio);
    };
    window.addEventListener("click", enableAudio);
    window.addEventListener("scroll", enableAudio);
    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("scroll", enableAudio);
    };
  }, []);

  // Intersection Observer logic with scroll container as root
  useEffect(() => {
    lastScrollTop.current = window.pageYOffset || 0;
    const container = scrollContainerRef.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];
    const options = {
      root: container,
      threshold: 0.9, // Trigger when 90% visible
      rootMargin: "0px 0px -10% 0px", // Offset to improve visibility trigger
    };

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex((prev) => {
              if (prev !== idx && audioEnabled && tickSoundRef.current) {
                tickSoundRef.current.currentTime = 0;
                tickSoundRef.current.play().catch(() => {});
              }
              return idx;
            });
          }
        });
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [audioEnabled]);

  // Smooth scroll to default active item on mount
  useEffect(() => {
    if (!hasScrolledToDefault.current && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      hasScrolledToDefault.current = true;
    }
  }, [activeIndex]);

  return (
    <div className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden">
      <div className="max-w-9xl mx-auto flex flex-col-reverse lg:flex-row px-6 lg:px-12 py-24 gap-16">
        {/* LEFT SIDE - Scrollable Text Section */}
        <div
          ref={scrollContainerRef}
          className="w-full lg:w-1/2 flex flex-col space-y-24 overflow-y-scroll max-h-[80vh] pr-4 scroll-smooth snap-y snap-mandatory"
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={project.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`transition-all duration-500 ease-out snap-start ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <h2
                    className={`text-[clamp(32px,7vw,60px)] font-medium leading-none transition-colors duration-500 ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  >
                    {project.title}
                  </h2>
                  <div className="flex gap-4 items-center">
                    {isActive && (
                      <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm text-gray-900 dark:text-white transition-all duration-300 hover:bg-white/30 cursor-pointer">
                        {project.category}
                      </span>
                    )}
                    <span className="text-xs sm:text-sm opacity-60">
                      [{project.date}]
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE - Sticky Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="sticky top-80 flex lg:justify-end items-center justify-center">
            <div className="w-[70%] max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-[#0a0a0a] transition-transform duration-500">
              <AnimatePresence mode="wait">
                <div
                  key={projects[activeIndex].id}
                  className="relative aspect-square w-full"
                >
                  <Image
                    src={projects[activeIndex].imageSrc}
                    alt={projects[activeIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
