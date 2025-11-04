"use client";

import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import { FaGithub, FaCode, FaPalette, FaTimes } from "react-icons/fa";
// import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BadgeButton from "@/components/ui/badge-button";
import { Gemini } from "@/components/Gemini";
gsap.registerPlugin(ScrollTrigger);

type SectionType = "Tech Projects" | "UI Designs";

// --- SECTION FILTERS ---
const techFilters = ["All", "Next Js", "React Js", "HTML", "CSS"];
const uiFilters = ["All", "Landing Pages", "Dashboards", "Mobile UI", "Web UI"];

// --- PROJECTS DATA ---
const techProjects = [
  {
    id: 1,
    title: "Next.js Dashboard",
    desc: "Responsive admin dashboard built with Next.js and TailwindCSS.",
    image: "/images/profile.jpg",
    category: "Next Js",
    github: "#",
    demo: "#",
    span: "md:col-span-2",
  },
  {
    id: 2,
    title: "React UI Kit",
    desc: "Reusable UI components for React apps.",
    image: "/images/p.jpg",
    category: "React Js",
    github: "#",
    demo: "#",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Personal portfolio built with HTML, CSS, and JavaScript.",
    image: "/images/portfolio.png",
    category: "HTML",
    github: "#",
    demo: "#",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "CSS Animations",
    desc: "Collection of reusable CSS animations.",
    image: "/images/css-anim.png",
    category: "CSS",
    github: "#",
    demo: "#",
    span: "md:col-span-2",
  },
];

const uiProjects = [
  {
    id: 5,
    title: "Modern Landing Page",
    desc: "Landing page concept for startups.",
    image: "/images/landing.png",
    category: "Landing Pages",
    github: "#",
    demo: "#",
    span: "md:col-span-2",
  },
  {
    id: 6,
    title: "E-commerce Dashboard",
    desc: "UI concept for e-commerce analytics.",
    image: "/images/dashboard-ui.png",
    category: "Dashboards",
    github: "#",
    demo: "#",
    span: "col-span-1",
  },
  {
    id: 7,
    title: "Mobile Banking App",
    desc: "UI design for banking app on mobile.",
    image: "/images/mobile-ui.png",
    category: "Mobile UI",
    github: "#",
    demo: "#",
    span: "col-span-1",
  },
  {
    id: 8,
    title: "Web UI Concept",
    desc: "Creative web UI for SaaS apps.",
    image: "/images/web-ui.png",
    category: "Web UI",
    github: "#",
    demo: "#",
    span: "md:col-span-2",
  },
];

export default function ProjectZone() {
  const [activeSection, setActiveSection] =
    useState<SectionType>("Tech Projects");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects =
    activeSection === "Tech Projects" ? techProjects : uiProjects;
  const filters = activeSection === "Tech Projects" ? techFilters : uiFilters;

  const filteredProjects = projects
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((p) => activeFilter === "All" || p.category === activeFilter);

  // --- Refs for animations ---
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement | null>(null);

  // --- Screen resize handler ---
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- GSAP Animations ---
  useEffect(() => {
    if (toggleRef.current) {
      gsap.fromTo(
        toggleRef.current.querySelectorAll("button"),
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }

    if (searchRef.current) {
      gsap.fromTo(
        searchRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
      );
    }
    // if (filterRef.current) {
    //   gsap.fromTo(
    //     filterRef.current.querySelectorAll("button"),
    //     { y: 20, opacity: 0 },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       stagger: 0.1,
    //       duration: 0.6,
    //       ease: "power3.out",
    //       delay: 0.3,
    //     }
    //   );
    // }

    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current.querySelectorAll("button"),
        {
          y: 50,
          opacity: 0,
          scale: 0.85, // tiny shrink for subtle pop
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power4.out", // smoother & more natural than power3
          stagger: 0.15, // buttons flow one after another
          delay: 0.2,
        }
      );
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const rowIndex = Math.floor(i / 2);
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: rowIndex * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            end: "bottom 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, [activeSection, activeFilter]);

  return (
    <section className="w-full min-h-screen text-white py-12 px-4 sm:px-6 md:px-10 flex flex-col items-center">
      {/* Header */}
      <h1
        className="text-2xl sm:text-3xl md:text-6xl font-bold mb-8 text-center"
        style={{ fontFamily: "'Reaktif', sans-serif" }}
      >
        {/* Optional header */}
      </h1>

      {/* Toggle Buttons */}
      <div
        className="w-full max-w-2xl mb-8 flex justify-center"
        ref={toggleRef}
      >
        <div className="flex items-center dark:bg-[#1a1a1a] bg-accent border border-gray-300 dark:border-gray-700 rounded-full px-2 py-1 shadow-lg">
          {[
            { label: "Tech Projects", icon: <FaCode /> },
            { label: "UI Designs", icon: <FaPalette /> },
          ].map((section) => (
            <button
              key={section.label}
              onClick={() => {
                setActiveSection(section.label as SectionType);
                setActiveFilter("All");
                setSearchQuery("");
                setSelectedProject(null);
              }}
              className={`flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                activeSection === section.label
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-100"
                  : "text-gray-900 dark:text-gray-400 hover:text-orange-300"
              }`}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mb-8" ref={searchRef}>
        {/* <PlaceholdersAndVanishInput
          placeholders={[
            `Search in ${activeSection}`,
            "Type project name...",
            "Hit Enter to search",
          ]}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSubmit={(e) => e.preventDefault()}
        /> */}
      </div>

      {/* Filter Buttons */}
      <div
        className="flex gap-2 sm:gap-3 mb-8 w-full overflow-x-auto scrollbar-hide justify-center"
        ref={filterRef}
      >
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveFilter(cat);
              setSelectedProject(null);
            }}
            className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeFilter === cat
                ? "bg-orange-500 text-white shadow-md scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.length === 0 ? (
          <p className="col-span-full text-center text-gray-400">
            No such project is present
          </p>
        ) : (
          filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => setSelectedProject(project)}
              className={`relative bg-[#111] border-[10px] dark:border-[#222] border-gray-100 rounded-4xl overflow-hidden shadow-lg flex flex-col cursor-pointer ${project.span}`}
            >
              <div className="relative h-60 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 relative z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg z-20">
                  {project.title}
                </h3>
                <div className="absolute bottom-4 right-4 flex items-center gap-3 z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white transition-transform hover:scale-125 hover:text-orange-400"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-md hover:bg-orange-500 hover:text-white"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Expanded Card Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Card Content */}
          <div className="relative bg-[#111] max-w-lg w-full mx-4 rounded-2xl animate-in fade-in zoom-in duration-300 z-60 border-[10px] border-gray-100 dark:border-[#222] shadow-2xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-400 z-70"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes className="text-2xl" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />

            {/* Description and Title */}
            <div className="p-6 pb-20">
              <h2 className="text-2xl font-bold mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300">{selectedProject.desc}</p>
            </div>

            {/* Buttons */}
            <div className="absolute bottom-4 right-4 flex items-center gap-3 px-4 py-1 bg-[#111] rounded-full border border-gray-400">
              <a
                href={selectedProject.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-white transition-transform hover:scale-125 hover:text-orange-400"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-md hover:bg-orange-500 hover:text-white"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Render Gemini and BadgeButton on large screens */}
      {isLargeScreen ? (
        <>
          <Gemini />
          <div ref={footerRef} className="py-8">
            <BadgeButton />
          </div>
        </>
      ) : (
        <div ref={footerRef} className="py-8">
          <BadgeButton />
        </div>
      )}
    </section>
  );
}
