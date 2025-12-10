import {
  TMediaFile,
  TMediaFormats,
  TProject,
  TRoles,
  TProjectType,
} from "@/types/index";
import { StaticImageData } from "next/image";
import TECH_STACKS from "@/constants/tech-stacks";

// ==========================================
// IMAGE IMPORTS
// ==========================================

// --- DEVELOPMENT PROJECTS ---
// import wormhole1 from "../../public/image/profile.jpg";
import wormhole1 from "../../public/image/Project/wormhole1.png";
import wormhole2 from "../../public/image/Project/wormhole2.png";
import wormhole3 from "../../public/image/Project/wormhole3.png";
import wormhole4 from "../../public/image/Project/wormhole4.png";
import wormhole5 from "../../public/image/Project/wormhole5.png";


import restaurant1 from "../../public/image/Project/restaurant1.png";
import restaurant2 from "../../public/image/Project/restaurant2.png";
import restaurant3 from "../../public/image/Project/restaurant3.png";
import restaurant4 from "../../public/image/Project/restaurant4.png";





import portfolio1 from "../../public/image/Project/portfolio1.png";
import portfolio2 from "../../public/image/Project/portfolio2.png";
import portfolio3 from "../../public/image/Project/portfolio3.png";
import portfolio4 from "../../public/image/Project/portfolio4.png";

import digilens1 from "../../public/image/Project/digilens1.png";
import digilens2 from "../../public/image/Project/digilens2.png";
import digilens3 from "../../public/image/Project/digilens3.png";
import digilens4 from "../../public/image/Project/digilens4.png";
import digilens5 from "../../public/image/Project/digilens5.png";
import digilens6 from "../../public/image/Project/digilens6.png";
import digilens7 from "../../public/image/Project/digilens7.png";


import snakeGame1 from "../../public/image/Project/snakeGame1.png";
import snakeGame2 from "../../public/image/Project/snakeGame2.png";

import weatherApp1 from "../../public/image/Project/weatherApp1.png";
import weatherApp2 from "../../public/image/Project/weatherApp2.png";
import weatherApp3 from "../../public/image/Project/weatherApp3.png";

import gsap1 from "../../public/image/Project/gsap1.png";
import gsap2 from "../../public/image/Project/gsap2.png";
import gsap3 from "../../public/image/Project/gsap3.png";

import todoList1 from "../../public/image/Project/todoList1.png";
import todoList2 from "../../public/image/Project/todoList2.png";

import calculator1 from "../../public/image/Project/calculator1.png";
import calculator2 from "../../public/image/Project/calculator2.png";
import calculator3 from "../../public/image/Project/calculator3.png";


// --- UI/UX DESIGN PROJECTS ---
import modernTech1 from "../../public/image/Project/modernTech1.png";
import modernTech2 from "../../public/image/Project/modernTech2.png";
import modernTech3 from "../../public/image/Project/modernTech3.png";
import modernTech4 from "../../public/image/Project/modernTech4.png";


import registration1 from "../../public/image/Project/registration1.png";
import registration2 from "../../public/image/Project/registration2.png";
import registration3 from "../../public/image/Project/registration3.png";

import spotlight1 from "../../public/image/Project/spotlight1.png";

import slider1 from "../../public/image/Project/slider1.png";
import slider2 from "../../public/image/Project/slider2.png";
import slider3 from "../../public/image/Project/slider3.png";
import slider4 from "../../public/image/Project/slider4.png";
import slider5 from "../../public/image/Project/slider5.png";


import modeToggle1 from "../../public/image/Project/modeToggle1.png";
import modeToggle2 from "../../public/image/Project/modeToggle2.png";


import gallery1 from "../../public/image/Project/gallery1.png";
import gallery2 from "../../public/image/Project/gallery2.png";


import effect1 from "../../public/image/Project/effect1.png";

import parallax1 from "../../public/image/Project/parallax1.png";
import parallax2 from "../../public/image/Project/parallax2.png";


import collab1 from "../../public/image/Project/collab1.png";
import collab2 from "../../public/image/Project/collab2.png";
import collab3 from "../../public/image/Project/collab3.png";
import collab4 from "../../public/image/Project/collab4.png";
import collab5 from "../../public/image/Project/collab5.png";
import collab6 from "../../public/image/Project/collab6.png";
import collab7 from "../../public/image/Project/collab7.png";
import collab8 from "../../public/image/Project/collab8.png";
import collab9 from "../../public/image/Project/collab9.png";












// ==========================================
// CLASS DEFINITION
// ==========================================

class Project {
  id = "";
  title = "";
  details = "";
  responsibilities = "";
  roles: TRoles[] = [];
  sitelink = "";
  githublink = "";
  tech: Array<keyof typeof TECH_STACKS> = [];
  type: TProjectType;
  bgColor = "";
  media: TMediaFile[] = [];

  constructor({
    id,
    title,
    details,
    responsibilities,
    roles,
    sitelink,
    githublink,
    tech,
    type,
    bgColor,
    media,
  }: TProject) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.responsibilities = responsibilities;
    this.roles = roles;
    this.sitelink = sitelink || "";
    this.githublink = githublink || "";
    this.tech = tech;
    this.type = type;
    this.bgColor = bgColor || "";
    this.media = media;
  }
}

function createMediaFile(type: TMediaFormats) {
  return function (source: StaticImageData) {
    return {
      type,
      source,
    };
  };
}

const createImageFile = createMediaFile("image");

// ==========================================
// PROJECTS ARRAY
// ==========================================

const PROJECTS: TProject[] = [
  // ----------------------------------------------------------------------
  // DEVELOPMENT PROJECTS
  // ----------------------------------------------------------------------
  new Project({
    id: "wormhole-web",
    title: "WormHole Web",
    details: `
        <p>File Sharing reimagined - secure and footprint free with <a href="https://magic-wormhole.readthedocs.io/en/latest/welcome.html#" target="_blank">Magic Wormhole</a>.</p>
        <p>Securely transfer files and folders between computers, like magic. No sign up, no setup, just instant secure sharing.</p>
        `,
    responsibilities: `
        <ul>
            <li>Experience seamless file transfers with <span>end-to-end encryption</span> and human-readable codes for maximum security.</li>
            <li>Implemented <span>Direct peer-to-peer transfer</span> ensuring files move at maximum speed (uploading 3Mbps and downloading at 500-600 Kbps).</li>
            <li>Integrated system for <span>human-readable codes</span> (e.g., 7-crossover-clock) to connect peers instead of complex passwords.</li>
            <li>Utilizes <span>Military-grade PAKE</span> (Password-Authenticated Key Exchange) protocol for security.</li>
            <li>Ensured <span>Privacy Guarantees</span> with no data retention—files are deleted immediately after transfer.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://worm-hole-web.vercel.app",
    githublink: "https://github.com/ShubhamNayak14/WormHole-Web",
    tech: [
      "html",
      "css",
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
      "git",
    ],
    type: "Web Application",
    bgColor: "#E3F2FD",
    media: [
      createImageFile(wormhole1),
      createImageFile(wormhole2),
      createImageFile(wormhole3),
      createImageFile(wormhole4),
      createImageFile(wormhole5),

    ],
  }),new Project({
    id: "snake-game",
    title: "Snake Game",
    details: `
        <p>A classic arcade-style <strong>Snake Game</strong> built using vanilla JavaScript and HTML5 Canvas.</p>
        <p>The goal is to control the snake to eat food, growing longer with each bite, while avoiding collisions with the walls or its own tail. It features smooth controls and score tracking.</p>
        `,
    responsibilities: `
        <ul>
            <li>Implemented the core <strong>Game Loop</strong> using JavaScript to handle continuous rendering and state updates.</li>
            <li>Utilized <strong>HTML5 Canvas</strong> for rendering the game grid, snake body, and food items dynamically.</li>
            <li>Built collision detection logic to handle <strong>Game Over</strong> scenarios (wall hits and self-collisions).</li>
            <li>Added a <strong>Score Tracking System</strong> that updates in real-time as the user collects food.</li>
            <li>Designed a clean and responsive UI suitable for desktop play with keyboard navigation.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://shubhamnayak14.github.io/Snake-Game/",
    githublink: "https://github.com/ShubhamNayak14/Snake-Game",
    tech: ["Game", "Java", "Swing", "git"],
    type: "Game",
    bgColor: "#E8F5E9",
    media: [
      createImageFile(snakeGame1),
      createImageFile(snakeGame2),
      
    ],
  }),
  new Project({
    id: "restaurant-website",
    title: "Restaurant web",
    details: `
        <p>A fully responsive restaurant landing page designed to showcase a variety of dishes including Sushi, Chicken, and Vegetarian options.</p>
        <p>The website features a modern UI with sections for a detailed menu, chef profiles, customer testimonials, and an FAQ section to assist visitors.</p>
        `,
    responsibilities: `
        <ul>
            <li>Designed a <span>Responsive Navigation</span> bar with links to Home, About, Menu, Gallery, Blog, and Contact pages.</li>
            <li>Implemented a <span>Menu Section</span> displaying items with images, ratings, calories, type (Veg/Non-Veg), and pricing.</li>
            <li>Created a <span>Table Booking</span> section highlighting opening hours for weekdays and weekends.</li>
            <li>Integrated a <span>Testimonials Slider</span> to display customer feedback and build trust.</li>
            <li>Developed an <span>FAQ Section</span> to answer common customer queries regarding delivery, refunds, and operating hours.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://restaurant-website-taupe-xi.vercel.app/",
    githublink: "https://github.com/ShubhamNayak14/restaurant-website",
    tech: ["html", "css", "javascript", "git", "gtm", "googleanalytics"],
    type: "Website",
    bgColor: "#F0EAD6",
    media: [
      createImageFile(restaurant1),
      createImageFile(restaurant2),
      createImageFile(restaurant3),
      createImageFile(restaurant4),
    ],
  }),
  new Project({
    id: "my-portfolio",
    title: "My Portfolio",
    details: `
        <p>A personal portfolio website built with React and Vite to showcase my skills, projects, and experience in web development and UI design.</p>
        <p>The site serves as a comprehensive digital resume, featuring a responsive single-page application design that is clean, modern, and user-friendly.</p>
        `,
    responsibilities: `
        <ul>
            <li>Developed an <span>Interactive Resume</span> section that displays education, experience, and animated skill bars.</li>
            <li>Implemented a <span>Project Showcase</span> with a filterable gallery for web development projects and live demos.</li>
            <li>Created a <span>UI Design Gallery</span> to display design work from Figma, categorized for easy navigation.</li>
            <li>Integrated a functional <span>Contact Form</span> using EmailJS to allow direct messaging from visitors.</li>
            <li>Ensured a fully <span>Responsive Design</span> for optimal viewing across mobile, tablet, and desktop devices.</li>
            <li>Designed a custom <span>404 Page</span> to handle invalid routes creatively.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://my-portfolio-eta-one-79.vercel.app/",
    githublink: "https://github.com/ShubhamNayak14/My-Portfolio",
    tech: ["react", "vite", "html", "css", "javascript", "materialui", "git"],
    type: "Web Application",
    bgColor: "#F8F9FA",
    media: [
      createImageFile(portfolio1),
      createImageFile(portfolio2),
      createImageFile(portfolio3),
      createImageFile(portfolio4),
    ],
  }),
  new Project({
    id: "digilens-portfolio",
    title: "Digilens Portfolio",
    details: `
        <p>A visually immersive photography portfolio for <strong>Shubham Nayak (@digilens)</strong>, an event, cultural, and street photographer.</p>
        <p>The site features a high-end, animated UI that transforms life’s moments into timeless visual stories, showcasing a journey from mobile photography to professional event coverage.</p>
        `,
    responsibilities: `
        <ul>
            <li>Implemented advanced <span>GSAP Animations</span> for smooth scrolling, text reveals, and image transitions.</li>
            <li>Created a custom <span>Interactive Gallery</span> showcasing best shots from events, fashion shoots, and street photography.</li>
            <li>Designed a unique <span>Horizontal Scroll</span> section to display the photographer's journey and milestones.</li>
            <li>Integrated a <span>Custom Preloader</span> and sound effects to enhance the user experience.</li>
            <li>Built a fully <span>Responsive Layout</span> ensuring a seamless viewing experience on all devices.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://digilens-portfolio.vercel.app/",
    githublink: "https://github.com/ShubhamNayak14/Digilens-Portfolio",
    tech: ["html", "css", "javascript", "gsap", "git"],
    type: "Website",
    bgColor: "#E8E6E1",
    media: [
      createImageFile(digilens1),
      createImageFile(digilens2),
      createImageFile(digilens3),
      createImageFile(digilens4),
      createImageFile(digilens5),
      createImageFile(digilens6),
      createImageFile(digilens7),


    ],
  }),
  
  new Project({
    id: "weather-app",
    title: "Weather App",
    details: `
        <p>A functional <strong>Weather Forecasting Application</strong> that provides real-time weather updates for any city worldwide.</p>
        <p>The app fetches live data including temperature, humidity, wind speed, and weather conditions using the <strong>OpenWeatherMap API</strong>, displaying it in a clean, user-friendly interface.</p>
        `,
    responsibilities: `
        <ul>
            <li>Integrated the <strong>OpenWeatherMap API</strong> to fetch and display real-time weather data asynchronously.</li>
            <li>Implemented a <strong>Search Functionality</strong> allowing users to look up weather conditions for specific cities.</li>
            <li>Designed a <strong>Dynamic UI</strong> that updates background images or icons based on the current weather status (e.g., sunny, rainy, cloudy).</li>
            <li>Ensured <strong>Error Handling</strong> for invalid city names or network issues to improve user experience.</li>
            <li>Built a <strong>Responsive Layout</strong> using CSS to ensure the app works seamlessly on mobile and desktop devices.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://shubhamnayak14.github.io/WeatherApp/",
    githublink: "https://github.com/ShubhamNayak14/WeatherApp",
    tech: ["react", "html", "css", "javascript", "git", "api"],
    type: "Web Application",
    bgColor: "#E8F1F5",
    media: [
      createImageFile(weatherApp1),
      createImageFile(weatherApp2),
      createImageFile(weatherApp3),
    ],
  }),
  new Project({
    id: "gsap-animation-1",
    title: "GSAP Animation",
    details: `
        <p>A creative frontend project exploring the power of <strong>GSAP (GreenSock Animation Platform)</strong> to build high-performance web animations.</p>
        <p>This project serves as a showcase of advanced motion graphics techniques, featuring scroll-driven interactions and complex timeline sequencing.</p>
        `,
    responsibilities: `
        <ul>
            <li>Implemented <strong>ScrollTrigger</strong> to create immersive, scroll-driven page interactions.</li>
            <li>Utilized <strong>GSAP Timelines</strong> for precise control over animation sequencing and delays.</li>
            <li>Created smooth <strong>Text Reveals</strong> and element transitions to enhance user engagement.</li>
            <li>Optimized animation performance to ensure <strong>60fps rendering</strong> across different devices.</li>
            <li>Built a fully responsive layout that maintains animation integrity on mobile and desktop.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://shubhamnayak14.github.io/GSAP-1/",
    githublink: "https://github.com/ShubhamNayak14/GSAP-1",
    tech: ["html", "css", "javascript", "gsap", "git"],
    type: "Experiment",
    bgColor: "#FFF9C4",
    media: [
      createImageFile(gsap1),
      createImageFile(gsap2),
      createImageFile(gsap3),
    ],
  }),
  new Project({
    id: "todo-list",
    title: "Todo List App",
    details: `
        <p>A functional and responsive <strong>Task Management Application</strong> designed to help users organize their daily activities efficiently.</p>
        <p>The app allows users to create, manage, and delete tasks with ease, utilizing <strong>Local Storage</strong> to ensure data persists even after the browser is refreshed.</p>
        `,
    responsibilities: `
        <ul>
            <li>Implemented full <strong>CRUD Operations</strong> (Create, Read, Update, Delete) for task management.</li>
            <li>Integrated <strong>Local Storage API</strong> to save user data persistently, ensuring tasks remain available across sessions.</li>
            <li>Designed a clean, <strong>Responsive User Interface</strong> that works seamlessly on both desktop and mobile devices.</li>
            <li>Added logic for <strong>Task Status Tracking</strong>, allowing users to mark items as completed or pending.</li>
            <li>Optimized DOM manipulation logic using vanilla JavaScript for fast and lightweight performance.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://shubhamnayak14.github.io/Todo-List/",
    githublink: "https://github.com/ShubhamNayak14/Todo-List",
    tech: ["react", "css", "git"],
    type: "Web Application",
    bgColor: "#DCE7D3",
    media: [
      createImageFile(todoList1),
      createImageFile(todoList2),
    ],
  }),
  new Project({
    id: "calculator",
    title: "Calculator App",
    details: `
        <p>A fully functional <strong>Digital Calculator</strong> built for the web, capable of performing standard arithmetic operations with precision.</p>
        <p>The application features a clean, user-friendly interface inspired by modern mobile designs, supporting addition, subtraction, multiplication, and division.</p>
        `,
    responsibilities: `
        <ul>
            <li>Developed the <strong>Core Calculation Logic</strong> using JavaScript to handle mathematical operations accurately.</li>
            <li>Implemented <strong>Event Listeners</strong> for keyboard support and mouse clicks to enhance accessibility.</li>
            <li>Designed a <strong>Grid-based Layout</strong> using CSS Grid/Flexbox for a responsive and organized button structure.</li>
            <li>Added <strong>Input Validation</strong> to handle edge cases like division by zero or multiple decimal points.</li>
            <li>Created a toggle for <strong>Theme Switching</strong> (if applicable, or simply "Optimized UI") for better visual appeal.</li>
        </ul>
        `,
    roles: ["fe", "design"],
    sitelink: "https://shubhamnayak14.github.io/Calculator/",
    githublink: "https://github.com/ShubhamNayak14/Calculator",
    tech: ["html", "css", "javascript", "git"],
    type: "Web Application",
    bgColor: "#D8D4CD",
    media: [
      createImageFile(calculator1),
      createImageFile(calculator2),
      createImageFile(calculator3),
    ],
  }),

  // ----------------------------------------------------------------------
  // UI/UX & INTERACTION DESIGN PROJECTS
  // ----------------------------------------------------------------------
  new Project({
    id: "collab-social-ui",
    title: "Collaborative Social Media Platform",
    details: `
    <p>A community-focused UI design prototype featuring clean feed layouts, user profiles, and components for interaction and collaboration.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed structured feed and user content cards.</li>
      <li>Created profile, follow buttons, and engagement elements.</li>
      <li>Built intuitive navigation flow for core social features.</li>
      <li>Maintained minimal modern styling with clear hierarchy.</li>
    </ul>
  `,
    roles: ["design"], // Fixed invalid role "uiux"
    tech: ["figma"],
    type: "UI/UX Design",
    bgColor: "#F8F9FA",
    sitelink: "https://www.behance.net/gallery/222261197/Collaborative-social-media-platform", // Added to fix error
    githublink: "",
    media: [createImageFile(collab1), createImageFile(collab2), createImageFile(collab3),createImageFile(collab4), createImageFile(collab5), createImageFile(collab6), createImageFile(collab7), createImageFile(collab8), createImageFile(collab9)],
  }),
  new Project({
    id: "modern-technology-ui",
    title: "Modern Technology",
    details: `
    <p>A clean and modern UI design showcasing technology-focused layout, bold typography, and structured sections. The design focuses on clarity, visual hierarchy, and smooth flow across content blocks.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed a modern, section-based layout with clear content grouping.</li>
      <li>Used bold typography and minimal spacing for a futuristic tech aesthetic.</li>
      <li>Created smooth UI flow with structured blocks and visual balance.</li>
      <li>Ensured consistent alignment and readability across the entire layout.</li>
    </ul>
  `,
    roles: ["design"],
    tech: ["figma"],
    type: "UI/UX Design",
    bgColor: "#F8F9FA",
    sitelink: "https://www.figma.com/proto/hDNeJb2y4a2blqxEdDWxpn/Project-1?node-id=84-754&starting-point-node-id=84%3A754", // Added to fix error
    githublink: "",
    media: [createImageFile(modernTech1), createImageFile(modernTech2), createImageFile(modernTech3), createImageFile(modernTech4)],
  }),

  new Project({
    id: "registration-page-ui",
    title: "Registration Page",
    details: `
    <p>A modern registration page UI focusing on simplicity, input clarity, and user-friendly form layout. The design emphasizes readability and smooth onboarding experience.</p>
  `,
    responsibilities: `
    <ul>
      <li>Created a clean form layout with well-spaced input fields.</li>
      <li>Applied modern UI elements for better readability and engagement.</li>
      <li>Designed visual hierarchy for field labels, inputs, and submit buttons.</li>
      <li>Ensured mobile-friendly responsive form structure.</li>
    </ul>
  `,
    roles: ["design"],
    tech: ["figma"],
    type: "UI/UX Design",
    bgColor: "#F0EAD6",
    sitelink: "https://www.figma.com/proto/fHiUNvnmJkqdOVjZq30YPN/Registration-Form?node-id=26-298&starting-point-node-id=26%3A298", // Added to fix error
    githublink: "",
    media: [createImageFile(registration1), createImageFile(registration2), createImageFile(registration3)],
  }),

  new Project({
    id: "spotlight-effect-ui",
    title: "Spotlight Effect",
    details: `
    <p>A creative UI concept featuring a spotlight hover interaction that highlights the user’s focal area. The design delivers a clean aesthetic supported by subtle motion.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed spotlight hover effect for interactive focus areas.</li>
      <li>Created minimal, dark-themed layout to enhance the glowing effect.</li>
      <li>Balanced animation timing for smooth transitions.</li>
      <li>Optimized composition to ensure the effect stands out visually.</li>
    </ul>
  `,
    roles: ["design"], // Removed "motion" as it might be invalid in TRoles
    tech: ["figma", "motion"],
    type: "UI Interaction Design",
    bgColor: "#E8F5E9",
    sitelink: "https://www.figma.com/proto/5POghKpVSRJJNtELFlAIJV/Spotlight-Effect--Community-?node-id=5-38", // Added to fix error
    githublink: "",
    media: [createImageFile(spotlight1)],
  }),

  new Project({
    id: "image-slider-ui",
    title: "Image Slider",
    details: `
    <p>A simple and elegant image slider interface designed to showcase full-width visuals with smooth navigation controls.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed clean slider frames and navigation arrows.</li>
      <li>Maintained high-contrast layout to highlight images.</li>
      <li>Used smooth transitions for slide animations.</li>
      <li>Created a responsive and minimalist image showcase design.</li>
    </ul>
  `,
    roles: ["design"],
    tech: ["figma"],
    type: "UI/UX Design",
    bgColor: "#E3F2FD",
    sitelink: "https://www.figma.com/proto/FJ8u2enOVDSu7MIKuDYJUo/Slider?node-id=0-3&starting-point-node-id=0%3A3", // Added to fix error
    githublink: "",
    media: [createImageFile(slider1), createImageFile(slider2), createImageFile(slider3), createImageFile(slider4), createImageFile(slider5)],
  }),

  new Project({
    id: "mode-toggle-ui",
    title: "Mode Toggle",
    details: `
    <p>A simple yet visually appealing light/dark mode toggle UI with smooth color transitions and minimalistic control styling.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed intuitive toggle switch with modern color changes.</li>
      <li>Applied light/dark palettes that remain visually balanced.</li>
      <li>Ensured smooth transition animation between themes.</li>
      <li>Maintained minimal aesthetic and clear visual cues.</li>
    </ul>
  `,
    roles: ["design"],
    tech: ["figma"],
    type: "UI Micro-interaction",
    bgColor: "#F0EAD6",
    sitelink: "https://www.figma.com/proto/DNgXpWukMm11MzNW1oQ74g/Mode-switch?node-id=1-2", // Added to fix error
    githublink: "",
    media: [createImageFile(modeToggle1),createImageFile(modeToggle2)],
  }),

  new Project({
    id: "modern-gallery-ui",
    title: "Modern Image Gallery Site",
    details: `
    <p>A modern gallery website UI that focuses on clean spacing, grid alignment, and a polished visual browsing experience.</p>
  `,
    responsibilities: `
    <ul>
      <li>Created grid-based gallery layout with consistent spacing.</li>
      <li>Used large visuals and minimal UI chrome to highlight content.</li>
      <li>Ensured a balanced modern aesthetic with clean typography.</li>
      <li>Designed a responsive structure suitable for portfolios.</li>
    </ul>
  `,
    roles: ["design"],
    tech: ["figma"],
    type: "UI/UX Design",
    bgColor: "#F8F9FA",
    sitelink: "https://www.figma.com/proto/kOW2xbM2tmZ5onzndOFZRM/Website-Desgin?node-id=36-2&scaling=contain&content-scaling=responsive", // Added to fix error
    githublink: "",
    media: [createImageFile(gallery1), createImageFile(gallery2)],
  }),

  new Project({
    id: "effect-animation-ui",
    title: "Effect & Animation",
    details: `
    <p>A motion-focused UI design showcasing smooth transitions, interaction effects, and a clean visual layout enhanced with subtle animations.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed smooth animations to enhance user flow.</li>
      <li>Integrated hover effects, motion cues, and transitions.</li>
      <li>Maintained clean layout with motion-balanced spacing.</li>
      <li>Focused on user-friendly animated interactions.</li>
    </ul>
  `,
    roles: ["design"], // Removed "motion" as it might be invalid in TRoles
    tech: ["figma"],
    type: "Motion UI Design",
    bgColor: "#E8F5E9",
    sitelink: "https://www.figma.com/proto/suJff09Re0rSUqohxf8DcI/ANIMATION?node-id=1-34&p=f&t=5641Ap3WJ7EeOkWJ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4", // Added to fix error
    githublink: "",
    media: [createImageFile(effect1)],
  }),

  new Project({
    id: "parallax-effect-ui",
    title: "Parallax Effect",
    details: `
    <p>A visually engaging parallax scrolling UI concept where foreground and background elements move at different speeds to create depth.</p>
  `,
    responsibilities: `
    <ul>
      <li>Designed layered visual structure for parallax motion.</li>
      <li>Created foreground and background depth separation.</li>
      <li>Used scroll-triggered animations for dynamic visuals.</li>
      <li>Maintained smooth flow while keeping layout minimal.</li>
    </ul>
  `,
    roles: ["design"], // Removed "motion" as it might be invalid in TRoles
    tech: ["figma"],
    type: "Scroll Interaction Design",
    bgColor: "#E3F2FD",
    sitelink: "https://www.figma.com/proto/IRDx4YuS62vuJMNdQG1bMM/parallex-effect?node-id=15-6955&starting-point-node-id=3%3A6862&scaling=scale-down&content-scaling=fixed", // Added to fix error
    githublink: "",
    media: [createImageFile(parallax1), createImageFile(parallax2)],
  }),

  
];

export default PROJECTS;

// import { TMediaFile, TMediaFormats, TProject, TRoles, TProjectType } from "@/types/index";
// import { StaticImageData } from "next/image";
// import TECH_STACKS from "@/constants/tech-stacks";

// import prodeus1 from "../../public/image/profile.jpg";
// import prodeus2 from "../../public/image/profile.jpg";
// import prodeus3 from "../../public/image/profile.jpg";
// import prodeus4 from "../../public/image/profile.jpg";
// import prodeus5 from "../../public/image/profile.jpg";
// import cadmils from "../../public/image/profile.jpg";
// import medic1 from "../../public/image/profile.jpg";
// import medic2 from "../../public/image/profile.jpg";
// import medic3 from "../../public/image/profile.jpg";
// import lattice1 from "../../public/image/profile.jpg";
// import lattice2 from "../../public/image/profile.jpg";
// import dprod from "../../public/image/profile.jpg";
// import weather1 from "../../public/image/profile.jpg";
// import weather2 from "../../public/image/profile.jpg";
// import dcom1 from "../../public/image/p3.jpg";
// import dcom2 from "../../public/image/p3.jpg";
// import dcom3 from "../../public/image/p3.jpg";
// import prodeusEditor from "../../public/image/p3.jpg";
// import dchat from "../../public/image/p3.jpg";
// import pv1 from "../../public/image/p3.jpg";
// import devofyear from "../../public/image/p3.jpg";
// import shortly from "../../public/image/p3.jpg";
// import pv2 from "../../public/image/p3.jpg";
// import pv3 from "../../public/image/p3.jpg";
// import bookmark from "../../public/image/p3.jpg";
// import drum from "../../public/image/p3.jpg";
// import freebies from "../../public/image/p3.jpg";
// import ozidi1 from "../../public/image/p3.jpg";
// import ozidi2 from "../../public/image/p3.jpg";
// import phintnftwhitelist1 from "../../public/image/p3.jpg";
// import phintnftwhitelist2 from "../../public/image/p3.jpg";
// import phitnft1 from "../../public/image/p3.jpg";
// import phitnft2 from "../../public/image/p3.jpg";
// import laptopPhone from "../../public/image/p3.jpg";
// import gamespeak1 from "../../public/image/profile.jpg";
// import gamespeak2 from "../../public/image/profile.jpg";
// import gamespeak3 from "../../public/image/profile.jpg";
// import gamespeak4 from "../../public/image/profile.jpg";
// import gamespeak5 from "../../public/image/profile.jpg";
// import gamespeak6 from "../../public/image/profile.jpg";

// class Project {
// 	id = "";
// 	title = "";
// 	details = "";
// 	responsibilities = "";
// 	roles: TRoles[] = [];
// 	sitelink = "";
// 	tech: Array<keyof typeof TECH_STACKS> = [];
// 	type: TProjectType;
// 	bgColor = "";
// 	media: TMediaFile[] = [];

// 	constructor({ id, title, details, responsibilities, roles, sitelink, tech, type, bgColor, media }: TProject) {
// 		this.id = id;
// 		this.title = title;
// 		this.details = details;
// 		this.responsibilities = responsibilities;
// 		this.roles = roles;
// 		this.sitelink = sitelink;
// 		this.tech = tech;
// 		this.type = type;
// 		this.bgColor = bgColor || "";
// 		this.media = media;
// 	}
// }

// function createMediaFile(type: TMediaFormats) {
// 	return function (source: StaticImageData) {
// 		return {
// 			type,
// 			source,
// 		};
// 	};
// }

// const createImageFile = createMediaFile("image");

// const PROJECTS: TProject[] = [
// 	new Project({
// 		id: "gamespeak",
// 		title: "Gamespeak",

// 		roles: ["fe"],
// 		sitelink: "https://beta-app.gamespeak.gg/",
// 		type: "Web Application",
// 		bgColor: "#1F032C",
// 		tech: [
// 			"html",
// 			"css",
// 			"javascript",
// 			"typescript",
// 			"nextjs",
// 			"git",
// 		],
// 		media: [
// 			createImageFile(gamespeak6),
// 			createImageFile(gamespeak4),
// 			createImageFile(gamespeak5),
// 			createImageFile(gamespeak1),
// 			createImageFile(gamespeak2),
// 			createImageFile(gamespeak3),
// 		],
// 		details: `
// 			<p>Social media platform for gamers. Having all the social media features you know and love, but streamlining it for the lovely community of gamers</p>
// 			<p>Visit <a href="https://beta-app.gamespeak.gg/" target="_blank">Gamespeak beta version</a> now to enjoy all the awesome features </p>
// 		`,
// 		responsibilities: `
// 		<ul>
// 		 <li>Converted over 20+ UI/UX designs into fully responsive (desktop, laptop, tablets), browser compatible web application pages</li>
// 		 <li>Connected over 70+ Restful APIs in order to make the application dynamic</li>
// 		 <li>Hooked up websocket connection, for realtime updates for messages and notifications</li>
// 		 <li>Created dark mode for all pages in the application</li>
// 		 <li>Added Progressive Web Application feature to the application</li>
// 		 <li>Wrote 50+ Unit and Integration tests to achieve over 80% coverage of the application using Jest and React Testing Library</li>
// 		 <li>Used effective caching strategies to improve performance of the application by 50%, due to reduction in frequency of API calls to the backend</li>
// 		 <li>Structured and architected the entire frontend codebase with over 1260+ files for maximum scalability and maintainability</li>
// 		</ul>
// 		`,
// 	}),
// 	{
// 		id: "prodeus",
// 		title: "Prodeus",
// 		details: `
// 		<p>Web application equivalent of the  <a href="https://chrome.google.com/webstore/detail/prodeus/aglakbhkijgpmoploegcpnbnedgiampn" target="_blank">Prodeus Chrome Extension</a> but with more features.
// 		This has to be one of my proudest projects because the feature list cuts across some very challenging and exciting frontend sectors. </p>
// 		`,
// 		responsibilities: `
// 		<ul>
// 			<li><span>Pixel perfect delivery</span> of around <span>59 pages</span> with 20 having 3 different unique views based on mode user views application (i.e standard mode, organization student mode, organization admin mode).
// 			In addition to
// 			that, the application has about <span>14 unique modals</span> and users can view the entire app in both <span>light and dark mode</span>.</li>
// 			<li>Intelligent cache usage and cache invalidation with <a href="https://react-query-v3.tanstack.com/" target="_blank">React Query</a></li>
// 			<li>Loading <span>infinite data</span> in both single column layouts (like instagram, facebook and twitter) as well as multi column layouts (like pinterest).

// 			<li>Responsible for about <span>98%</span> of the entire frontend architecture and codebase.</li>
// 		</ul>
// 		`,
// 		roles: ["fe"],
// 		sitelink: "https://www.prodeus.co/",
// 		tech: [
// 			"html",
// 			"css",
// 			"javascript",
// 			"typescript",
// 			"react",
// 			"styledcomponents",
// 			"googleanalytics",
// 		],
// 		type: "Web Application",
// 		bgColor: "#f4efe7",
// 		media: [
// 			{
// 				type: "image",
// 				source: prodeus1,
// 			},
// 			{
// 				type: "image",
// 				source: prodeus2,
// 			},
// 			{
// 				type: "image",
// 				source: prodeus3,
// 			},
// 			{
// 				type: "image",
// 				source: prodeus4,
// 			},
// 			{
// 				type: "image",
// 				source: prodeus5,
// 			},
// 		],
// 	},
// 	{
// 		id: "cadmils",
// 		title: "Cadmils Consulting",
// 		details: `
// 		<p>This was a freelance contract to setup the entire web presence for Cadmils Consulting Agency. Collaborated with
// 		<a href="https://www.linkedin.com/in/harmony-orakpoyovwuru-1716b117a/" target="_blank">Harmony Orakpoyovwuru</a> to achieve the entire design of the website.</p>
// 		`,
// 		responsibilities: `
// 		<ul>
// 			<li>Designed <span>3 out of the 6 pages</span> on the website using Figma.</li>
// 			<li>Converted all mockup designs into <span>pixel perfect pages</span> for all screen sizes.</li>
// 			<li>Set up the backend <span>mailing service</span> as well as company emails.</li>
// 		</ul>
// 		`,

// 		roles: ["design", "fe", "be"],
// 		sitelink: "https://www.cadmils.com/",
// 		tech: ["html", "css", "javascript", "nodejs", "expressjs"],
// 		type: "Website",
// 		bgColor: "#86868b",
// 		media: [
// 			{
// 				type: "image",
// 				source: cadmils,
// 			},
// 		],
// 	},
// 	{
// 		id: "medic-finder",
// 		title: "Medic finder",
// 		details: `
// 		<p>Easily find Hospitals, Clinics, Pharmacies and Health care centers around any place. This project was built as a requirement to get into the <a href="https://www.enye.tech/" target="_blank">enye</a> internship programme,
// 		however it's importance is far beyond just a requirement to get into the internship.
// 		</p>
// 		<p>This project has <span>two iterations</span>. Initial iteration was built with a full authentication process as well as a backend infrastructure to store users credentials and users search history.
// 		However, for easy accessibility, these have been removed in the current iteration.
// 		 </p>
// 		`,
// 		responsibilities: `
// 		<ul>
// 			<li>Designed the entire application using figma.</li>
// 			<li>Converted all mockup designs into <span>pixel perfect pages</span> for all screen sizes.</li>
// 			<li>Implemented an authentication process flow using Firebase (now deprecated in current iteration).</li>
// 			<li>Made use of Google's <a href="https://firebase.google.com" target="_blank">Cloud Firestore NoSQL database</a> to store users previous searches (now refactored in current iteration to use local storage).</li>
// 			<li>Integrated <a href="https://developers.google.com/maps" target="_blank">Google Maps Platform</a> to help give both autocomplete functionality when looking for places and to display the map with the needed results.</li>
// 			<li>Connected to database using GraphQL.</li>
// 		</ul>
// 		`,
// 		tech: [
// 			"figma",
// 			"html",
// 			"css",
// 			"react",
// 			"javascript",
// 			"typescript",
// 			"materialui",
// 			"nodejs",
// 			"expressjs",
// 			"googlemaps",
// 		],
// 		roles: ["design", "fe", "be"],
// 		type: "Web Application",
// 		bgColor: "#f0f6ff",
// 		githublink: "https://github.com/obododavid/Medic-Finder",
// 		sitelink: "https://medic-finder.netlify.app/",
// 		media: [
// 			{
// 				type: "image",
// 				source: medic1,
// 			},
// 			{
// 				type: "image",
// 				source: medic2,
// 			},
// 			{
// 				type: "image",
// 				source: medic3,
// 			},
// 		],
// 	},
// 	{
// 		id: "private-lattice",
// 		title: "Private Lattice",
// 		details: `<p>While working at <a href="https://www.upwork.com/ag/mpaccione/" target="_blank">M.Paccione Designs and Developement</a>,
// 		I had the opportunity to add value as the main frontend developer in quite a couple of projects, amongst which is Private Lattice.</p>`,
// 		githublink: "",
// 		roles: ["fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Converted Sketch Designs into a functional web application.</li>
// 			<li>Connected the frontend to the necessary backend API endpoints.</li>
// 		</ul>
// 		`,
// 		sitelink: "https://www.privatelattice.com/",
// 		tech: ["html", "css", "javascript", "react"],
// 		bgColor: "#FF7943",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: lattice1,
// 			},
// 			{
// 				type: "image",
// 				source: lattice2,
// 			},
// 		],
// 	},
// 	{
// 		id: "d-productivity",
// 		title: "d-productivity",
// 		details: `<p>Web-based Kanban-style list-making application, just like <a href="https://trello.com/" target="_blank">Trello</a> or any other drag and drop productivity app.
// 		The main purpose of embarking on this project was to have a better understanding of the <span>HTML5 drag and drop API.</span></p>
// 			<p>Last updated on the 25th of February, 2020.</p>
// 			`,
// 		responsibilities: `
// 		<ul>
// 			<li>Designed the home screen.</li>
// 			<li>Implemented the drag and drop feature in two different ways:</li>
// 				<ul>
// 					<li>Using the easy and wonderful <a href="https://www.npmjs.com/package/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a> (first iteration).</li>
// 					<li>Using the plain <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank">html5 dnd api</a> (second iteration).</li>
// 				</ul>
// 		</ul>
// 		`,
// 		roles: ["design", "fe"],
// 		sitelink: "https://d-productivity.vercel.app/",
// 		githublink: "https://github.com/obododavid/d-productivity",
// 		tech: ["html", "css", "react", "javascript", "typescript","styledcomponents"],
// 		type: "Web Application",
// 		bgColor: "#F6EEF9",
// 		media: [
// 			{
// 				type: "image",
// 				source: dprod,
// 			},
// 		],
// 	},
// 	{
// 		id: "weather",
// 		title: "Weather Application",
// 		details: `<p>I created this weather application from design to coding, as a test for a company.
// 		A user can check the weather of various places, after which they can bookmark certain places for easy access.</p>
// 		<p>In addition to that, it leverages local storage in order to give users the ability to store notes for various places they search. Furthermore, the application is fully a PWA (Progressive Web App), so even when users are offline, users can still see all their previous searches.</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/weather-app",
// 		roles: ["design", "fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Created the design for the web application.</li>
// 			<li>Converted designs into responsive web application.</li>
// 			<li>Made app a <span>Progressive Web App (PWA)</span>.</li>
// 		</ul>
// 		`,
// 		sitelink: "https://knowtheweatherdcs.netlify.app/",
// 		tech: ["html", "css",  "react", "javascript", "typescript", "styledcomponents"],
// 		bgColor: "#fff",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: weather1,
// 			},
// 			{
// 				type: "image",
// 				source: weather2,
// 			},
// 		],
// 	},

// 	{
// 		id: "d-commerce",
// 		title: "d-commerce",
// 		details: `<p>When getting acclimated with the features of a framework/technology or even a programming language, one of the applications one should try to build is an e-commerce platform.</p>
// 		<p>This is because, an e-commerce platform has features that cut across a great deal of <strong>what is possible</strong> in frontend. For this reason, I set out to build this application when mastering react.js.</p>
// 		<p>The UI was replicated from an online store. But as this project was done quite a while ago, I currently cannot remember the exact name of the online store, if not, I would have given them their due credit.</p>
// 		<p>Last updated on the 4th of July, 2020.</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/d-commerce",
// 		roles: ["fe", "be"],
// 		responsibilities: `
// 		<ul>
// 			<li>Created a pixel perfect replica of the UI.</li>
// 			<li>Implemented all the requirements of an ecommerce site (i.e viewing items, adding to cart, proceeding to checkout, authentication e.t.c).</li>
// 		</ul>
// 		`,
// 		sitelink: "https://d-commerce-99633.firebaseapp.com/",
// 		tech: [
// 			"html",
// 			"css",
// 			"styledcomponents",
// 			"javascript",
// 			"typescript",
// 			"react",
// 			"nodejs",
// 			"expressjs",
// 		],
// 		bgColor: "#2e5c87",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: dcom1,
// 			},
// 			{
// 				type: "image",
// 				source: dcom2,
// 			},
// 			{
// 				type: "image",
// 				source: dcom3,
// 			},
// 		],
// 	},

// 	{
// 		id: "pv-3",
// 		title: "Portfolio V3",
// 		details: `<p>Current portfolio website.</p>`,
// 		githublink: "",
// 		responsibilities: `
// 		<ul>
// 			<li>Designed entire site.</li>
// 			<li>Translated designs into high quality responsive code</li>
// 			<li>Made site a Progressice Web Application(PWA).</li>
// 			<li>Enabled google analytics</li>
// 			<li>Used Next.js api routes feature to implement the sendgrid backend for the mailing service.</li>
// 			<li>Configured Google recaptcha to prevent spamming of mail.</li>
// 		</ul>
// 		`,
// 		roles: ["design", "fe", "be"],
// 		sitelink: "https://www.davidobodo.com",
// 		tech: [
// 			"html",
// 			"css",
// 			"cssModules",
// 			"react",
// 			"nextjs",
// 			"javascript",
// 			"typescript",
// 			"gsap",
// 			"googleanalytics",
// 		],
// 		bgColor: "#000",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: pv3,
// 			},
// 		],
// 	},

// 	{
// 		id: "prodeus-editor",
// 		title: "Prodeus ckeditor",
// 		details: `<p>While I was building <a href="/projects/prodeus">Prodeus web app</a>, there was a need for me to create a text editor. Despite the fact that there are many around, the requirement for a pixel perfect
// 		designed editor brought up the need to build a customized solution from the famous  <a href="https://ckeditor.com" target="_blank">ckeditor</a>.
// 		</p>
// 		<p>The project was later published as an <a href="https://www.npmjs.com/package/prodeus-editor" target="_blank">npm package here.</a></p>
// 		`,
// 		githublink: "",
// 		responsibilities: `
// 		<ul>
// 			<li>Customized Ckeditor to suite the Prodeus desired design.</li>
// 			<li>Published project as an npm package.</li>
// 		</ul>
// 		`,
// 		roles: [],
// 		sitelink: "",
// 		tech: ["html", "css", "react", "javascript"],
// 		bgColor: "#000",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: prodeusEditor,
// 			},
// 		],
// 	},

// 	{
// 		id: "d-chat",
// 		title: "d-chat",
// 		details: `
// 		<p>It is no news that majority of applications these days have the <span>"chatting" functionality</span> embedded in them. So this project was an attempt to understand how the "open connection idea", upon which the functionality works is built.
// 		Due to my obliviousness of <a href="https://socket.io/" target="_blank">Socket.io</a> at the time of creation, I executed this project using only <a href="https://firebase.google.com/" target="_blank">Firebase</a>. Now Socket.io is my go-to for
// 		any "open connection" functionality (e.g chat and realtime notifications).
// 		</p>
// 		<p>The authentication screen design is a "not so pixel perfect clone" of <a href="https://dribbble.com/shots/5271131-Login-Sign-up-screen" target="_blank">Marcin Kohut's</a> design  on Dribbble.</p>
// 		<p>Last updated on the 5th of July, 2020.</p>
// 		`,
// 		responsibilities: `
// 		<ul>
// 			<li>Used skype chat UI has a reference for the design.</li>
// 			<li>Added the ability to chat realtime with anyone online.</li>
// 		</ul>
// 		`,
// 		roles: [],
// 		sitelink: "https://d-chat-98abe.firebaseapp.com/auth",
// 		githublink: "https://github.com/davidobodo/d-chat",
// 		tech: ["html", "css", "react", "javascript", "materialui"],
// 		bgColor: "#fff",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: dchat,
// 			},
// 		],
// 	},
// 	{
// 		id: "pv1",
// 		title: "Portfolio v1",
// 		details: `<p>My very own first ever portfolio website.</P>
// 		<p>Last updated on the 21st of September, 2019</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/portfolio",
// 		roles: ["design", "fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Created the design for website.</li>
// 			<li>Converted the design into a responsive web page.</li>
// 		</ul>
// 		`,
// 		sitelink: "https://davidobodo.github.io/portfolio/",
// 		tech: ["html", "css", "javascript"],
// 		bgColor: "#1c1d26",
// 		type: "Website",
// 		media: [
// 			{
// 				type: "image",
// 				source: pv1,
// 			},
// 		],
// 	},
// 	{
// 		id: "developer-of-the-year",
// 		title: "Developer of the year",
// 		details: `<p>A static desktop clone of <a href="https://www.awwwards.com/" target="_blank">awwwards</a> awards site for the year 2020.</p>
// 		<p>The motivation behind building this static clone was the desire to achieve the "VIEW NOMINEES CIRCULAR SECTION" at the bottom of the design with just css and javascript😅.</p>
// 		<p>Trust me, it wasn't an easy process because I encountered tricky mathematical problems, which were later solved with the help of my mentor <a href="https://www.linkedin.com/in/oluwaseunadedire/" target="_blank">Oluwaseun Adedire</a>.</p>
// 		<p>Note that this is a static site hence, none of the call to actions are working.</p>
// 		<p>Last updated on the 15th of February, 2020.</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/developer-of-the-year",
// 		roles: ["fe"],
// 		responsibilities: ``,
// 		sitelink: "https://davidobodo.github.io/developer-of-the-year/",
// 		tech: ["html", "css", "javascript"],
// 		bgColor: "#EACEA8",
// 		type: "Experiment",
// 		media: [
// 			{
// 				type: "image",
// 				source: devofyear,
// 			},
// 		],
// 	},
// 	{
// 		id: "shortly",
// 		title: "Shortly",
// 		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a> which was very helpful in building me up.</p>
// 		<p>This project involved building a static reponsive clone of a UI and plugging it to an API endpoint that helps shorten long url links. I cannot say for certain if the API ENDPOINT still returns a response as at the point you are reading this.</p>
// 		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub/url-shortening-api-landing-page-XxrpDIAz" target="_blank">here</a>.</p>
// 		<p>Last updated on the 19th of February, 2020.</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/FEM-shortly",
// 		roles: ["fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Converted mockup into web page</li>
// 			<li>Connected form to endpoint (Like I mentioned above, not certain if the API still works currently 😅)</li>
// 		</ul>
// 		`,
// 		sitelink: "https://davidobodo.github.io/FEM-shortly/",
// 		tech: ["html", "css", "javascript"],
// 		bgColor: "#000",
// 		type: "Website",
// 		media: [
// 			{
// 				type: "image",
// 				source: shortly,
// 			},
// 		],
// 	},

// 	{
// 		id: "pv2",
// 		title: "Portfolio v2",
// 		details: "<p>My second portfolio website</p>",
// 		githublink: "https://github.com/davidobodo/portfolio-v2",
// 		roles: ["design", "fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Created design for website</li>
// 			<li>Converted design into responsive web page</li>
// 		</ul>
// 		`,
// 		sitelink: "https://www.obododavid.com",
// 		tech: ["html", "css", "react", "javascript", "typescript", "styledcomponents", "googleanalytics"],
// 		bgColor: "",
// 		type: "Website",
// 		media: [
// 			{
// 				type: "image",
// 				source: pv2,
// 			},
// 		],
// 	},
// 	{
// 		id: "bookmark",
// 		title: "Bookmark",
// 		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a>, which was very helpful in building me up.</p>
// 		<p>This project involved building a static reponsive clone of a UI.</p>
// 		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158/hub/bookmark-landing-page-Xa4U_uHY" target="_blank">here</a>.</p>
// 		<p>Last updated on the 25th of February, 2020.</p>
// 		`,
// 		roles: ["fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Converted mockup into responsive web page</li>
// 		</ul>
// 		`,
// 		githublink: "https://github.com/davidobodo/FEM-bookmark-landing-page",
// 		sitelink: "https://davidobodo.github.io/FEM-bookmark-landing-page/",
// 		tech: ["html", "css"],
// 		bgColor: "#000",
// 		type: "Website",
// 		media: [
// 			{
// 				type: "image",
// 				source: bookmark,
// 			},
// 		],
// 	},
// 	{
// 		id: "drum-machine",
// 		title: "Drum Machine",
// 		details: `<p>Simple drum machine inspired by <a href="https://javascript30.com/" target="_blank">Wes Bos's Javascript 30.</a> </p>
// 		<p>Last updated on the 8th of September, 2019.</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/drumMachine",
// 		roles: ["fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Converted mockup into responsive web page.</li>
// 			<li>Connected respective clicks to their wav files.</li>
// 		</ul>
// 		`,
// 		sitelink: "https://davidobodo.github.io/drumMachine/",
// 		tech: ["html", "css", "javascript"],
// 		bgColor: "#fff",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: drum,
// 			},
// 		],
// 	},
// 	{
// 		id: "freebies",
// 		title: "Freebies",
// 		details: `<p>This is a static desktop clone of the <a href="https://freebies.bypeople.com/" target="_blank">Freebies</a> website. The motivation behind this was to achieve the ability to move items based on the mouse cursor position.</p>
// 		<p>Last updated on the 14th of February, 2020</p>
// 		`,
// 		githublink: "https://github.com/davidobodo/freebies",
// 		roles: ["fe"],
// 		responsibilities: `
// 		<ul>
// 			<li>Converted mockup into web page</li>
// 			<li>Connected mouse movement to svg positions</li>
// 		</ul>
// 		`,
// 		sitelink: "https://davidobodo.github.io/freebies/",
// 		tech: ["html", "css", "javascript"],
// 		bgColor: "#000",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: freebies,
// 			},
// 		],
// 	},
// 	{
// 		id: "ozidi",
// 		title: "Ozidi/Agricpay",
// 		details: `
// 		<p><span>Ozidi</span>, which later became <span>Agricpay</span>, was a promising startup which had a vision to <a>help small scale farmers in "Nigeria" get access to loans.</a> It is no news that in order for
// 		a business owner to apply for a loan from banks and other loan agencies, the owner must have <span>collateral to use</span>, in case the owner will not be able to pay the loan. Unfortunately, most small scale farmers
// 		do not have any collateral to give, hence the need for Agricpay to be built.
// 		</p>
// 		<p>
// 		Agricpay aimed at solving this problem, by inculcating in the farmers mindset, the <span>habit of saving</span>. Using this approach meant, in the long run the farmer will be borrowing his/her own money.
// 		</p>

// 		<p>I worked as the <span>"main" frontend developer responsible for the entire ui/ux as well as about 80% of the entire frontend </span>, together with <a href="https://www.linkedin.com/in/godinson/" target="_blank">Joseph Godwin (full stack developer)</a> and <a href="https://www.linkedin.com/in/oluwaferanmiadetunji/" target="_blank">Adetunji Oluwaferanmi (full stack developer)</a>, at the <a href="https://www.enye.tech/" target="_blank">Enye Cohort 4 internship</a>.
// 		We set out to build a fully functional dashboard to help with Agricpay's vision.
// 		</p>
// 		<div>
// 			<p>Some of the features included:</p>
// 			<ul>
// 				<li>Admin authentication.</li>
// 				<li>Ability to generate recharge card numbers. (i.e Farmers save by buying reacharge cards).</li>
// 				<li>History of all recharge cards generated.</li>
// 				<li>Farmers data.</li>
// 			</ul>
// 		</div>

// 		<p>Unfortunately, not all startups reach the "promise land", irrespective of a solid technology, because there are more things asides the tech involved in the success of a business. So the live links are currently down. However for curiousity sake,
// 		visit <a href="https://mobile.twitter.com/agricpay" target="_blank">Twitter</a> or <a href="https://www.instagram.com/agricpay/" target="_blank">Instagram</a>
// 		</p>

// 		<p><span>Project span: July 2020 - September 2020.</span></p>
// 		`,
// 		roles: ["design", "fe"],
// 		sitelink: "",
// 		responsibilities: `
// 		<ul>
// 			<li>Created entire app UI/UX using Figma.</li>
// 			<li>Converted about 80% of the design into functional responsive web app pages.</li>
// 			<Li>Connected pages to their respective backend endpoints.</li>
// 			<li>Used <span>Wordpress</span> to create a static publicly accessible web page for the company.</li>
// 		</ul>
// 		`,
// 		tech: [
// 			"html",
// 			"css",
// 			"react",
// 			"javascript",
// 			"typescript",
// 			"materialui",
// 		],
// 		bgColor: "#56D686",
// 		type: "Web Application",
// 		media: [
// 			{
// 				type: "image",
// 				source: ozidi1,
// 			},
// 			{
// 				type: "image",
// 				source: ozidi2,
// 			},
// 		],
// 	},
// 	{
// 		id: "phitnftswhitelist",
// 		title: "PhitNFTS Whitelist",
// 		details: `
// 		<p>Keeping abreast with latest technology advancements, I decided to learn web3 on the side. This has been really easy and straight forward with the help of <a href="https://learnweb3.io/" target="_blank">LearnWeb3</a>. This project
// 		is a modified version of the whitelist dapp taught in Learnweb3.</p>
// 		<p>In order to solidify some concepts taught, I decided to modify the project a little bit. Some of these modifications include:</p>
// 		<ul>
// 		<li>Refactoring of UI</li>
// 		<li>Displaying connected wallet address</li>
// 		</ul>
// 		<p>See contract details on <a href="https://rinkeby.etherscan.io/address/0xC62EEfe06F1f69C3010ab44F4581B1329F938D31" target="_blank">Rinkeby Etherscan</a></p>
// 		`,
// 		roles: ["design", "fe", "be"],
// 		sitelink: "https://learnweb3-phitnftwhitelist.vercel.app/",
// 		githublink: "https://github.com/davidobodo/learnweb3-phitnftwhitelist",
// 		responsibilities: ``,
// 		tech: ["html", "css", "react", "nextjs", "javascript", "tailwindcss", "web3"],
// 		bgColor: "#000",
// 		type: "Learn from Tutorial",
// 		media: [
// 			{
// 				type: "image",
// 				source: phintnftwhitelist1,
// 			},
// 			{
// 				type: "image",
// 				source: phintnftwhitelist2,
// 			},
// 		],
// 	},
// 	{
// 		id: "phitnfts",
// 		title: "PhitNFTS ",
// 		details: `
// 		<p>Keeping abreast with latest technology advancements, I decided to learn web3 on the side. This has been really easy and straight forward with the help of <a href="https://learnweb3.io/" target="_blank">LearnWeb3</a>. This project
// 		is a modified version of the whitelist dapp taught in Learnweb3.</p>
// 		<p>In order to solidify some concepts taught, I decided to modify the project a little bit. Some of these modifications include:</p>
// 		<ul>
// 		<li>Refactoring of UI</li>
// 		<li>Displaying connected wallet address</li>
// 		<li>Giving users a direct link to their minted NFT</li>
// 		</ul>
// 		<p>See contract details on <a href="https://rinkeby.etherscan.io/address/0x864EC287eF39A1DE0445EA1Fb441b5EE7c83626F" target="_blank">Rinkeby Etherscan</a></p>
// 		<p>See NFT Collection on <a href="https://testnets.opensea.io/collection/phit-nfts-xuwds2pvht" target="_blank">Testnet Opensea</a></p>
// 		`,
// 		roles: ["design", "fe", "be"],
// 		sitelink: "https://learnweb3-phitnfts.vercel.app/",
// 		githublink: "https://github.com/davidobodo/learnweb3-phitnfts",
// 		responsibilities: ``,
// 		tech: ["html", "css", "react", "nextjs", "javascript", "tailwindcss",  "web3"],
// 		bgColor: "#fff",
// 		type: "Learn from Tutorial",
// 		media: [
// 			{
// 				type: "image",
// 				source: phitnft1,
// 			},
// 			{
// 				type: "image",
// 				source: phitnft2,
// 			},
// 		],
// 	},
// 	{
// 		id: "three",
// 		title: "GSAP and Three.js Experiment",
// 		details: `
// 		<p>Just an experiment to hook up gsap with three.js. I Also needed to learn a couple of things about <a href="https://www.blender.org/" target="_blank">Blender</a> in order to modify the 3D models.</p>
// 		`,
// 		roles: [],
// 		sitelink: "https://laptop-phone-three-js.vercel.app/",
// 		githublink: "https://github.com/davidobodo/laptop-phone-three-js",
// 		responsibilities: ``,
// 		tech: ["html", "css", "javascript", "gsap"],
// 		bgColor: "#000",
// 		type: "Experiment",
// 		media: [
// 			{
// 				type: "gif",
// 				source: laptopPhone,
// 			},
// 		],
// 	},
// ];

// export default PROJECTS;
