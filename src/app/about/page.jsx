"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import CodeTyping from "@/components/ui/CodeTyping";
import { gsap } from "gsap";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiFigma,
  SiGooglechrome,
  SiDiscord,
  SiHtml5,
  SiCss3,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiMysql,
  SiJupyter,
  SiGithub,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiCplusplus,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaUnsplash,
} from "react-icons/fa";

export default function About() {
  const [time, setTime] = useState("");
  const containerRef = useRef(null); // fixed

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
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden md:col-span-4 md:row-span-2 flex items-center justify-center shadow-md dark:shadow-lg relative">
          {/* Badge */}
          <div className="absolute top-90 left-33 z-10 flex items-center gap-2 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-full px-3 py-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span className="text-white text-sm font-medium">Available for work</span>
          </div>

          <div className="relative h-full w-full">
            <Image
              src="/image/p.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover h-full w-full"
            />
            {/* Linear gradient overlay from bottom to top */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Intro */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-8 md:row-span-1 flex flex-col justify-center shadow-md dark:shadow-lg">
          <h1
            className="text-[3.5rem] font-light leading-tight"
            style={{ fontFamily: "Reaktif, sans-serif" }}
          >
            I’m Shubham{" "}
            <span className="font-semibold text-purple-900">Nayak</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">
            Hi! I'm Shubham Kumar Nayak. As an Electronics and Computer Science
            graduate from KIIT University, I specialize in creating
            user-friendly digital solutions. My toolkit bridges the gap between
            logic and design—utilizing Java, C++, SQL, and Git for
            functionality, and HTML, Tailwind CSS, and Figma for aesthetics. I
            am dedicated to solving real-world problems by blending engineering
            precision with creative UI design.
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
            {/* Core & Logic */}
            <li>Java, C++, DSA, OOP, Problem Solver</li>

            {/* Web & Design */}
            <li>HTML, CSS, UI/UX (Figma)</li>

            {/* Data & Cloud */}
            <li>SQL, DBMS, Cloud Fundamentals</li>

            {/* Analytics */}
            <li>GTM, GA4, Power BI</li>

            {/* Soft Skills */}
            <li>Analytical Thinking & Leadership</li>
            <li>Teamwork & Adaptability</li>
          </ul>
        </div>

        {/* Time Block */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl flex flex-col justify-center items-center text-center p-6 md:col-span-3 md:row-span-1 shadow-md dark:shadow-lg">
          {/* Location with Icon */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <FaMapMarkerAlt className="text-orange-500 text-lg" />
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
              Bengaluru, Karnataka
            </p>
          </div>
          <h2 className="text-5xl font-bold tracking-widest font-mono">
            {hh}:{mm}:<span className="text-orange-500">{ss}</span>
          </h2>



          <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
            My academic journey and milestones that laid the foundation for my
            technical expertise.
          </p>

          {/* Timeline Section */}
          <div className="max-w-2xl mx-auto p-4">
            {/* Main container with the left border line */}
            <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-10">
              {/* Item 1: KIIT */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  KIIT University
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mt-1">
                  B.Tech in Electronics and Computer Science Engineering
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mt-1">
                  CGPA: 8.05
                </p>
              </div>

              {/* Item 2: KV Higher Secondary */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Kendriya Vidyalaya, Jhagrakhand
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mt-1">
                  Higher Secondary (CBSE)
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mt-1">
                  Percentage: 86%
                </p>
              </div>

              {/* Item 3: KV Secondary */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-1.5 w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-md"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Kendriya Vidyalaya, Jhagrakhand
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mt-1">
                  Secondary School (CBSE)
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mt-1">
                  Percentage: 77.8%
                </p>
              </div>
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
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/shubhamn014"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net/shubhamnayak20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ShubhamNayak14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            </a>
            {/* Unsplash */}
            <a
              href="https://unsplash.com/@digilens"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUnsplash className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            </a>

            {/* Dribbble */}
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            </a>


          </div>
        </div>

        {/* Recent Works */}
        <div className="block-animate bg-white dark:bg-neutral-900 rounded-2xl p-8 md:col-span-4 md:row-span-1 flex flex-col gap-5 shadow-md dark:shadow-lg">
          <h2 className="text-3xl font-bold">RECENT WORKS.</h2>
          <ul className="space-y-6 text-base text-black-700 dark:text-gray-300">
            {[
              {
                title: "Digilens Portfolio",
                desc: "personal photography and creative portfolio website",
                year: "2025",
              },
              {
                title: "Classic Snake Game (Java)",
                desc: "built a nostalgic Snake game using core Java",
                year: "2025",
              },
              {
                title: "Restaurant Website",
                desc: "modern restaurant site with GTM and GA4 integration",
                year: "2025",
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
            {/* Existing Icons */}
            {/* Languages */}
            <FaJava className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiCplusplus className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />

            {/* HTML & CSS */}
            <SiHtml5 className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiCss3 className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />

            {/* Analytics */}
            <SiGoogletagmanager className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiGoogleanalytics className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />

            {/* Data */}
            <SiMysql
              className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110"
              title="SQL"
            />
            <FaDatabase
              className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110"
              title="DBMS"
            />

            <SiNextdotjs className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiTailwindcss className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiPostman className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiFigma className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiGooglechrome className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiDiscord className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />

            {/* New Additions */}

            {/* Coding & Tools */}
            <SiJupyter className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiGithub className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />

            {/* Creative */}
            <SiAdobephotoshop className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />
            <SiAdobelightroom className="cursor-pointer hover:text-orange-400 transition-transform duration-300 hover:scale-110" />


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
