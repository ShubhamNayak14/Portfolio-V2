// "use client";

// import { useRef } from "react";
// import { useSelectProjectAnimation, useHomePageInit, useWindowSize, useProjectsCurrentView } from "@/hooks";
// import Projects from "@/shared/projects";
// import Layout from "@/shared/layout";
// import ProjectModal from "@/shared/modal/project-modal";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import Link from "next/link";
// import styles from "@/styles/_pages/home.module.scss";
// import { PROJECTS } from "@/constants";
// import { ExternalLink } from "@/components/icons";
// import { events, registerEvent } from "@/utils/analytics/events";

// export default function HomeClient({ initSectionId }: { initSectionId: string }) {
//   const darkSectionRef = useRef<HTMLDivElement>(null);

//   const handleMoreProjectsGA = () => {
//     registerEvent(events.pages.home.viewMoreProjects());
//   };

//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

//   const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
//     windowInnerHeight,
//     windowInnerWidth,
//     darkSectionRef,
//     initSectionId,
//   });

//   const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, isOpen, onGoToProject } =
//     useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   return (
//     <>
//       <Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
//         <div className={styles.content}>
//           <div id="projects-list">
//             <div className={styles.viewSelectorWrapper}>
//               <div></div>
//               <ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
//             </div>

//             <Projects onViewProject={onSelectProject} displayedProjects={PROJECTS.slice(0, 4)} currentView={currentView} />
//           </div>

//           <div className={styles.projectsBtnWrapper}>
//             <Link href="/projects" scroll={false} onClick={handleMoreProjectsGA}>
//               More Projects <ExternalLink />
//             </Link>
//           </div>
//         </div>
//       </Layout.DarkSection>

//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         isOpen={isOpen}
//         onGoToProject={onGoToProject}
//       />

//       <div id="footer">{/* <Footer /> */}</div>
//     </>
//   );
// }

// HomeClient.withAnim = true;

// "use client";

// import * as React from "react";
// import { useRef } from "react";
// import { useSelectProjectAnimation, useHomePageInit, useWindowSize, useProjectsCurrentView } from "@/hooks";
// import Projects from "@/shared/projects";
// import Layout from "@/shared/layout";
// import ProjectModal from "@/shared/modal/project-modal";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import Link from "next/link";
// import styles from "@/styles/_pages/home.module.scss";
// import { PROJECTS } from "@/constants";
// import { ExternalLink } from "@/components/icons";
// import { events, registerEvent } from "@/utils/analytics/events";

// export default function HomeClient({ initSectionId }: { initSectionId: string }): React.JSX.Element {
//   const darkSectionRef = useRef<HTMLDivElement>(null);

//   const handleMoreProjectsGA = () => {
//     registerEvent(events.pages.home.viewMoreProjects());
//   };

//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

//   const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
//     windowInnerHeight,
//     windowInnerWidth,
//     darkSectionRef,
//     initSectionId,
//   });

//   const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, isOpen, onGoToProject } =
//     useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   return (
//     <>
//       <Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
//         <div className={styles.content}>
//           <div id="projects-list">
//             <div className={styles.viewSelectorWrapper}>
//               <div></div>
//               <ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
//             </div>

//             <Projects onViewProject={onSelectProject} displayedProjects={PROJECTS.slice(0, 4)} currentView={currentView} />
//           </div>

//           <div className={styles.projectsBtnWrapper}>
//             <Link href="/projects" scroll={false} onClick={handleMoreProjectsGA}>
//               More Projects <ExternalLink />
//             </Link>
//           </div>
//         </div>
//       </Layout.DarkSection>

//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         isOpen={isOpen}
//         onGoToProject={onGoToProject}
//       />

//       <div id="footer">{/* <Footer /> */}</div>
//     </>
//   );
// }

// HomeClient.withAnim = true;

// "use client";

// import * as React from "react";
// import { useRef } from "react";
// import {
//   useSelectProjectAnimation,
//   useHomePageInit,
//   useWindowSize,
//   useProjectsCurrentView,
// } from "@/hooks";
// import Projects from "@/shared/projects";
// import Layout from "@/shared/layout";
// import ProjectModal from "@/shared/modal/project-modal";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import Link from "next/link";
// import styles from "@/styles/_pages/home.module.scss";
// import { PROJECTS } from "@/constants";
// import { ExternalLink } from "@/components/icons";
// import { events, registerEvent } from "@/utils/analytics/events";

// export default function HomeClient({ initSectionId }: { initSectionId: string }): React.JSX.Element {
//   const darkSectionRef = useRef<HTMLDivElement>(null);

//   const handleMoreProjectsGA = () => {
//     registerEvent(events.pages.home.viewMoreProjects());
//   };

//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

//   const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
//     windowInnerHeight,
//     windowInnerWidth,
//     darkSectionRef,
//     initSectionId,
//   });

//   const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, isOpen, onGoToProject } =
//     useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   return (
//     <>
//       <Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
//         <div className={styles.content}>
//           <div id="projects-list">
//             <div className={styles.viewSelectorWrapper}>
//               <div></div>
//               <ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
//             </div>

//             <Projects onViewProject={onSelectProject} displayedProjects={PROJECTS.slice(0, 4)} currentView={currentView} />
//           </div>

//           <div className={styles.projectsBtnWrapper}>
//             <Link href="/projects" scroll={false} onClick={handleMoreProjectsGA}>
//               More Projects <ExternalLink />
//             </Link>
//           </div>
//         </div>
//       </Layout.DarkSection>

//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         isOpen={isOpen}
//         onGoToProject={onGoToProject}
//       />

//       <div id="footer">{/* Optional footer here */}</div>
//     </>
//   );
// }

// HomeClient.withAnim = true;

// "use client";

// import * as React from "react";
// import { useRef } from "react";
// import {
//   useSelectProjectAnimation,
//   useHomePageInit,
//   useWindowSize,
//   useProjectsCurrentView,
// } from "@/hooks";
// import Projects from "@/shared/projects";
// import Layout from "@/shared/layout";
// import ProjectModal from "@/shared/modal/project-modal";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import Link from "next/link";
// import styles from "@/styles/_pages/home.module.scss";
// import { PROJECTS } from "@/constants";
// import { ExternalLink } from "@/components/icons";
// import { events, registerEvent } from "@/utils/analytics/events";
// import type { RefObject } from "react";

// export default function HomeClient({ initSectionId }: { initSectionId: string }): React.JSX.Element {
//   // Ref typed as allowing null, which is the correct way for useRef
//   const darkSectionRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

//   const handleMoreProjectsGA = () => {
//     registerEvent(events.pages.home.viewMoreProjects());
//   };

//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

//   // useHomePageInit hook type must accept RefObject<HTMLDivElement | null> for darkSectionRef
//   const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
//     windowInnerHeight,
//     windowInnerWidth,
//     darkSectionRef,
//     initSectionId,
//   });

//   const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, isOpen, onGoToProject } =
//     useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   return (
//     <>
//       <Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
//         <div className={styles.content}>
//           <div id="projects-list">
//             <div className={styles.viewSelectorWrapper}>
//               <div></div>
//               <ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
//             </div>

//             <Projects onViewProject={onSelectProject} displayedProjects={PROJECTS.slice(0, 4)} currentView={currentView} />
//           </div>

//           <div className={styles.projectsBtnWrapper}>
//             <Link href="/projects" scroll={false} onClick={handleMoreProjectsGA}>
//               More Projects <ExternalLink />
//             </Link>
//           </div>
//         </div>
//       </Layout.DarkSection>

//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         isOpen={isOpen}
//         onGoToProject={onGoToProject}
//       />

//       <div id="footer">{/* Optional footer here */}</div>
//     </>
//   );
// }

// HomeClient.withAnim = true;

// "use client";

// import * as React from "react";
// import { useRef } from "react";
// import {
//   useSelectProjectAnimation,
//   useHomePageInit,
//   useWindowSize,
//   useProjectsCurrentView,
// } from "@/hooks";
// import Projects from "@/shared/projects";
// import Layout from "@/shared/layout";
// import ProjectModal from "@/shared/modal/project-modal";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import Link from "next/link";
// import { PROJECTS } from "@/constants";
// import { ExternalLink } from "@/components/icons";
// import { events, registerEvent } from "@/utils/analytics/events";
// import type { RefObject } from "react";

// export default function HomeClient({
//   initSectionId,
// }: {
//   initSectionId: string;
// }): React.JSX.Element {
//   const darkSectionRef: RefObject<HTMLDivElement | null> = useRef(null);

//   const handleMoreProjectsGA = () => {
//     registerEvent(events.pages.home.viewMoreProjects());
//   };

//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } =
//     useWindowSize();

//   const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
//     windowInnerHeight,
//     windowInnerWidth,
//     darkSectionRef,
//     initSectionId,
//   });

//   const {
//     selectedProjectId,
//     onSelectProject,
//     onDeselectProject,
//     modalImgRef,
//     modalRef,
//     isOpen,
//     onGoToProject,
//   } = useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   return (
//     <>
//     {/* <h1 className="text-3xl ml-96">Project</h1> */}
//       <Layout.DarkSection
//         darkSectionRef={darkSectionRef}
//         bannerHeight={bannerHeight}
//       >
//         <div className="relative pb-32 sm:pb-40">
//           {/* Project List */}
//           <div id="projects-list">
//             <div
//               className="
//                 mb-12 flex justify-between
//                 md:mx-auto md:max-w-[1100px]
//                 2xl:max-w-[1440px]
//               "
//             >
//               <div></div>
//               <ProjectsViewSelector
//                 currentView={currentView}
//                 handleSetCurrentView={handleSetCurrentView}
//               />
//             </div>

//             <Projects
//               onViewProject={onSelectProject}
//               displayedProjects={PROJECTS.slice(0, 4)}
//               currentView={currentView}
//             />
//           </div>

//           {/* Smaller More Projects Button */}
//           <div className="mt-24 flex justify-center">
//             <Link
//               href="/projects"
//               scroll={false}
//               onClick={handleMoreProjectsGA}
//               className="
//                 flex items-center justify-center
//                 border border-gray-400 text-gray-400
//                 text-sm md:text-base rounded-full
//                 px-5 py-1.5 transition-colors duration-300
//                 hover:bg-white/10 hover:text-white
//                 focus:outline-none focus:ring-2 focus:ring-white
//               "
//             >
//               More Projects
//               <ExternalLink  />
//             </Link>
//           </div>
//         </div>
//       </Layout.DarkSection>

//       {/* Modal */}
//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         isOpen={isOpen}
//         onGoToProject={onGoToProject}
//       />

//       <div id="footer" />
//     </>
//   );
// }

// HomeClient.withAnim = true;

// "use client";

// import * as React from "react";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   useSelectProjectAnimation,
//   useHomePageInit,
//   useWindowSize,
//   useProjectsCurrentView,
// } from "@/hooks";
// import Projects from "@/shared/projects";
// import Layout from "@/shared/layout";
// import ProjectModal from "@/shared/modal/project-modal";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import Link from "next/link";
// import { PROJECTS } from "@/constants";
// import { ExternalLink } from "@/components/icons";
// import { events, registerEvent } from "@/utils/analytics/events";
// import type { RefObject } from "react";

// export default function HomeClient({
//   initSectionId,
// }: {
//   initSectionId: string;
// }): React.JSX.Element {
//   const darkSectionRef: RefObject<HTMLDivElement | null> = useRef(null);

//   const handleMoreProjectsGA = () => {
//     registerEvent(events.pages.home.viewMoreProjects());
//   };

//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } =
//     useWindowSize();

//   const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
//     windowInnerHeight,
//     windowInnerWidth,
//     darkSectionRef,
//     initSectionId,
//   });

//   const {
//     selectedProjectId,
//     onSelectProject,
//     onDeselectProject,
//     modalImgRef,
//     modalRef,
//     isOpen,
//     onGoToProject,
//   } = useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   return (
//     <>
//       <Layout.DarkSection
//         darkSectionRef={darkSectionRef}
//         bannerHeight={bannerHeight}
//       >
//         <div className="relative  ">
//           {/* 🌟 Animated Heading (now aligned properly) */}
//           <div
//             className="
//               md:mx-auto md:max-w-[1100px]
//               2xl:max-w-[1440px]
//               px-4 md:px-8 text-left
//             "
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//               viewport={{ once: true }}
//               className="mb-16 ml-0 lg:ml-80"
//             >
//               <h2
//                 className="
//                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
//                   font-bold
//                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
//                   bg-clip-text text-transparent
//                   leading-tight tracking-tight
//                 "
//               >
//                 Featured Projects
//               </h2>
//               <p
//                 className="
//                   mt-3 text-gray-400
//                   text-sm sm:text-base md:text-lg lg:text-xl
//                   max-w-2xl
//                 "
//               >
//                 Explore a selection of my recent work showcasing creativity,
//                 design, and technical excellence.
//               </p>
//             </motion.div>
//           </div>

//           {/* Project List */}
//           <div id="projects-list">
//             <div
//               className="
//                 mb-12 flex justify-between
//                 md:mx-auto md:max-w-[1100px]
//                 2xl:max-w-[1440px]
//               "
//             >
//               <div></div>
//               <ProjectsViewSelector
//                 currentView={currentView}
//                 handleSetCurrentView={handleSetCurrentView}
//               />
//             </div>

//             <Projects
//               onViewProject={onSelectProject}
//               displayedProjects={PROJECTS.slice(0, 4)}
//               currentView={currentView}
//             />
//           </div>

//           {/* Smaller More Projects Button */}
//           <div className="mt-24 flex justify-center">
//             <Link
//               href="/projects"
//               scroll={false}
//               onClick={handleMoreProjectsGA}
//               className="
//                 flex items-center justify-center
//                 border border-gray-400 text-gray-400
//                 text-sm md:text-base rounded-full
//                 px-5 py-1.5 transition-colors duration-300
//                 hover:bg-white/10 hover:text-white
//                 focus:outline-none focus:ring-2 focus:ring-white
//               "
//             >
//               More Projects
//               <ExternalLink />
//             </Link>
//           </div>
//         </div>
//       </Layout.DarkSection>

//       {/* Modal */}
//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         isOpen={isOpen}
//         onGoToProject={onGoToProject}
//       />

//       <div id="footer" />
//     </>
//   );
// }

// HomeClient.withAnim = true;

"use client";

import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  useSelectProjectAnimation,
  useHomePageInit,
  useWindowSize,
  useProjectsCurrentView,
} from "@/hooks";
import Projects from "@/shared/projects";
import Layout from "@/shared/layout";
import ProjectModal from "@/shared/modal/project-modal";
import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import { ExternalLink } from "@/components/icons";
import { events, registerEvent } from "@/utils/analytics/events";
import type { RefObject } from "react";
import { Highlighter } from "@/components/ui/highlighter";

export default function HomeClient({
  initSectionId,
}: {
  initSectionId: string;
}): React.JSX.Element {
  const darkSectionRef: RefObject<HTMLDivElement | null> = useRef(null);

  const handleMoreProjectsGA = () => {
    registerEvent(events.pages.home.viewMoreProjects());
  };

  const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } =
    useWindowSize();

  const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
    windowInnerHeight,
    windowInnerWidth,
    darkSectionRef,
    initSectionId,
  });

  const {
    selectedProjectId,
    onSelectProject,
    onDeselectProject,
    modalImgRef,
    modalRef,
    isOpen,
    onGoToProject,
  } = useSelectProjectAnimation({});

  const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

  return (
    <>
      <Layout.DarkSection
        darkSectionRef={darkSectionRef}
        bannerHeight={bannerHeight}
      >
        <div className="relative">
          {/* 🌟 Animated Heading (aligned and padded) */}
          <div
            className="
              md:mx-auto md:max-w-[1100px] 
              2xl:max-w-[1440px] 
              px-4 md:px-8 text-left
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className=" ml-0 lg:ml-50 pt-10 sm:pt-12 md:pt-0"
            >
              <h2
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                  font-bold 
                  uppercase
                  leading-tight tracking-tight
                "
              >
                <p>
                  Featured{" "}
                  <Highlighter action="underline" color="#ff9800">
                    Projects
                  </Highlighter>
                </p>
              </h2>
              <p
                className="
                  mt-3 text-gray-400 
                  text-sm sm:text-base md:text-lg lg:text-xl 
                  max-w-2xl
                "
              >
                Explore a selection of my recent work showcasing creativity,
                design, and technical excellence.
              </p>
            </motion.div>
          </div>

          {/* Project List */}
          <div id="projects-list">
            <div
              className="
                mb-12 flex justify-between 
                md:mx-auto md:max-w-[1100px] 
                2xl:max-w-[1440px]
              "
            >
              <div></div>
              <ProjectsViewSelector
                currentView={currentView}
                handleSetCurrentView={handleSetCurrentView}
              />
            </div>

            <Projects
              onViewProject={onSelectProject}
              displayedProjects={PROJECTS.slice(0, 4)}
              currentView={currentView}
            />
          </div>

          {/* Smaller More Projects Button */}
          <div className="mt-20 mb-20 flex justify-center">
            <Link
              href="/projects"
              scroll={false}
              onClick={handleMoreProjectsGA}
              className="
                flex items-center justify-center 
                border border-gray-400 text-gray-400 
                text-sm md:text-base rounded-full 
                px-5 py-2 transition-colors duration-300 
                hover:bg-white/10 hover:text-white
                focus:outline-none focus:ring-2 focus:ring-white
              "
            >
              More Projects
              <ExternalLink />
            </Link>
          </div>
        </div>
      </Layout.DarkSection>

      {/* Modal */}
      <ProjectModal
        selectedProjectId={selectedProjectId}
        modalRef={modalRef}
        onDeselectProject={onDeselectProject}
        modalImgRef={modalImgRef}
        isOpen={isOpen}
        onGoToProject={onGoToProject}
      />

      <div id="footer" />
    </>
  );
}

HomeClient.withAnim = true;
