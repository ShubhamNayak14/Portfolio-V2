"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import CodeTyping from "@/components/ui/CodeTyping";
import { gsap } from "gsap";
import {
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaUnsplash,
} from "react-icons/fa";
import {
  SiNotion,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiFigma,
  SiGooglechrome,
  SiDiscord,
} from "react-icons/si";

export default function About() {
  const [time, setTime] = useState("");
  const containerRef = useRef(null); // ✅ fixed

  // Clock updater
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const [hh = "", mm = "", ss = ""] = time.split(":");

  // GSAP animation
  useEffect(() => {
    if (!containerRef.current) return;
    const blocks = containerRef.current.querySelectorAll(".block-animate");

    gsap.set(blocks, { opacity: 0, y: 40 });
    gsap.to(blocks, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white flex justify-center items-center p-6 transition-colors duration-500">
      <NavBar />
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-12 grid-rows-[repeat(3,_auto)] gap-6 max-w-7xl w-full"
      >
        {/* Profile Image */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden md:col-span-4 md:row-span-2 flex items-center justify-center shadow-md dark:shadow-lg">
          <Image
            src="/image/p.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="object-cover h-full w-full "
          />
        </div>

        {/* Intro */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-8 md:row-span-1 flex flex-col justify-center shadow-md dark:shadow-lg">
          <h1
            className="text-[3.5rem] font-light leading-tight"
            style={{ fontFamily: "Reaktif, sans-serif" }}
          >
            I’m Shubham <span className="font-semibold">Nayak</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base leading-relaxed max-w-full">
            My journey in the world of design began 4 years ago with a
            fascination for the digital realm. From my early days of curiosity
            to today’s expertise, I’ve honed the art of transforming ideas into
            captivating designs, mastering the art of creating design solutions
            that bridge the gap between aesthetics and functionality.
          </p>
        </div>

        {/* Skills */}
        <div className="block-animate relative bg-purple-900 border-[10px] border-purple-200 rounded-4xl p-8 flex flex-col justify-center md:col-span-5 md:row-span-1 overflow-hidden">
          {/* Star in top-right corner */}
          <img
            src="/image/star.svg"
            alt="Star"
            className="absolute top-4 right-4 w-24 h-24 opacity-55"
          />
          <h2
            className="text-5xl text-white font-bold mb-6"
            style={{ fontFamily: "Reaktif, sans-serif" }}
          >
            SKILLS
          </h2>
          <ul className="space-y-1 text-white text-base font-medium max-w-xs">
            <li>Full Stack Developer</li>
            <li>UI/UX Designer</li>
            <li>Animator</li>
            <li>Logo Designer</li>
            <li>Versatile Programmer</li>
            <li>Creative Problem Solver</li>
            <li>Database Management (SQL, MongoDB)</li>
          </ul>
        </div>

        {/* Time Block */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl flex flex-col justify-center items-center text-center p-6 md:col-span-3 md:row-span-1 shadow-md dark:shadow-lg">
          <h2 className="text-5xl font-bold tracking-widest font-mono">
            {hh}:{mm}:<span className="text-orange-500">{ss}</span>
          </h2>
          <p className="text-gray-500 text-xs mt-3 uppercase tracking-widest">
            Current Local Time
          </p>
        </div>

        {/* AKA */}
        {/* <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-5 md:row-span-2 shadow-md dark:shadow-lg">
          <h2 className="text-3xl font-bold mb-3">AKA.</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Within the realm of designers, I’m recognised by the alias gxuri, a
            name I’ve been using ever since I embarked on my design journey.
          </p>
        </div> */}
        
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-5 md:row-span-2 shadow-md dark:shadow-lg transition-colors duration-500">
  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">AKA.</h2>
  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
    Within the realm of designers, I’m recognised by the alias{" "}
    <span className="font-semibold text-indigo-500 dark:text-indigo-400">gxuri</span>,
    a name I’ve been using ever since I embarked on my design journey.
  </p>

  {/* Timeline Section */}
  <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-10">
    {/* Item 1 */}
    <div className="relative pl-8">
      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        2020 — The Beginning
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">
        Started exploring design tools and experimenting with digital illustrations under the name gxuri.
      </p>
    </div>

    {/* Item 2 */}
    <div className="relative pl-8">
      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        2022 — Freelance Journey
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">
        Worked with multiple clients and projects, blending creativity with functionality in UI/UX design.
      </p>
    </div>

    {/* Item 3 */}
    <div className="relative pl-8">
      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        2024 — Design Evolution
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">
        Expanded into product design and UI systems, bringing depth and identity to the gxuri brand.
      </p>
    </div>
  </div>
</div>


        {/* Extra AKA */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-4 md:row-span-1 shadow-md dark:shadow-lg flex flex-col items-center text-center">
          {/* Typewriter H1 */}
          {/* <h2 className="text-3xl font-bold mb-3">⍨</h2> */}

          <h1 className="text-orange-500 text-[clamp(24px,5vw,58px)] font-mono font-bold mt-4 overflow-hidden border-r-4 border-white whitespace-nowrap animate-typewriter">
            Hello World! :)
          </h1>
        </div>
        {/* Social Links */}
        <div className="block-animate rounded-2xl p-8 md:col-span-3 flex flex-col justify-between gap-6 text-6xl">
          <div className="grid grid-cols-3 gap-5 text-black-700 dark:text-white">
            <FaLinkedin className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <FaBehance className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <FaGithub className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <FaDribbble className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <FaInstagram className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <FaUnsplash className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
          </div>
        </div>

        {/* Recent Works */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-4 md:row-span-1 flex flex-col gap-5 shadow-md dark:shadow-lg">
          <h2 className="text-3xl font-bold">RECENT WORKS.</h2>
          <ul className="space-y-6 text-base text-black-700 dark:text-gray-300">
            {[
              {
                title: "StackOverflow",
                desc: "created a clone for",
                year: "2023 - 2024",
              },
              {
                title: "Audacity",
                desc: "created a clone for",
                year: "2023 - 2024",
              },
              {
                title: "AirBnB",
                desc: "created a clone for",
                year: "2023 - 2024",
              },
            ].map(({ title, desc, year }) => (
              <li key={title} className="flex justify-between">
                <span>
                  <strong>{title}</strong> <br />
                  {desc}
                </span>
                <span className="text-gray-500">{year}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-3 md:row-span-1 shadow-md dark:shadow-lg flex flex-col items-center justify-center text-center">
          <CodeTyping />
        </div>

        {/* Stack */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-9  md:row-span-1 flex flex-col gap-6 shadow-md dark:shadow-lg">
          <h2 className="text-3xl font-bold">STACK.</h2>
          <div className="flex gap-6 flex-wrap text-6xl text-black-700 dark:text-white">
            <SiNotion className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiMongodb className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiNextdotjs className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiTailwindcss className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiPostman className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiFigma className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiGooglechrome className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiDiscord className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
           <div className="block-animate rounded-2xl p-8 md:col-span-3 md:row-span-1 shadow-md dark:shadow-lg flex flex-col items-center justify-center text-center">
          <span
            className="text-black dark:text-white font-semibold text-[clamp(48px,15vw,120px)] transition-transform duration-300 hover:scale-110"
            style={{ fontFamily: "'goodly', sans-serif" }}
          >
            g
          </span>
        </div>
      </div>
    </main>
  );
}
