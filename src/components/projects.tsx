// "use client";

// import React, { useEffect } from "react"; //  Added React import

// // import "@/styles/normalize.css";
// // import "";
// // import "prismjs/themes/prism-okaidia.css";
// // import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// import Script from "next/script";
// import { GetServerSidePropsContext } from "next";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// //  Shared components
// import ProjectModal from "@/shared/modal/project-modal";
// import Layout from "@/shared/layout";
// import Projects from "@/shared/projects";
// import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
// import ProjectsFilterModal from "@/shared/modal/projects-filter-modal";
// import ScrollTxt from '@/components/ScrollTxt';

// // Custom hooks
// import {
//   useSelectProjectAnimation,
//   useWindowSize,
//   useIsomorphicLayoutEffect,
//   useProjectsPageInit,
//   useProjectsCurrentView,
//   useRegisterGsapScrollTrigger,
//   useSmoothScroll,
// } from "@/hooks";

// //  Constants
// import { METADATA, PROJECTS, TECH_STACKS, PROJECT_NATURE } from "@/constants";

// //  Utils
// import { events, registerEvent } from "@/utils/analytics/events";
// import { projectAnimations } from "@/utils/animations";

// //  Icons
// import { FilterIcon } from "@/components/icons";

// //  Types
// import { TFilterBy, TProjectType } from "@/types";

// import styles from "@/styles/_pages/projects.module.scss";

// const { scrollToProjectsSection } = projectAnimations;

// type ProjectsPageProps = {
//   initFilterBy: TFilterBy;
//   initFilterKey: keyof typeof TECH_STACKS | TProjectType | "all";
// };

// export default function Page({ initFilterBy, initFilterKey }: ProjectsPageProps) {
//   // --- mimic _app hooks ---
//   useRegisterGsapScrollTrigger();
//   useSmoothScroll();

//   // --- main logic from project.tsx ---
//   const [initialPageLoad, setInitialPageLoad] = React.useState(true);
//   const [showFilter, setShowFilter] = React.useState(false);

//   const onOpenFilter = () => {
//     if (showFilter) return;
//     setShowFilter(true);
//     registerEvent(events.pages.projects.openProjectsFilter());
//   };

//   const onCloseFilter = () => {
//     setShowFilter(false);
//     registerEvent(events.pages.projects.closeProjectsFilter());
//   };

//   const darkSectionRef = React.useRef<HTMLDivElement | null>(null);
//   const contentRef = React.useRef<HTMLDivElement | null>(null);
//   const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

//   const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } =
//     useProjectsPageInit({
//       windowInnerHeight,
//       windowInnerWidth,
//       darkSectionRef,
//       onOpenFilter,
//     });

//   const {
//     selectedProjectId,
//     onSelectProject,
//     onDeselectProject,
//     modalImgRef,
//     modalRef,
//     onGoToProject,
//     isOpen,
//   } = useSelectProjectAnimation({});

//   const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

//   useIsomorphicLayoutEffect(() => {
//     if (windowInnerWidth < 768) {
//       handleSetCurrentView("grid");
//     }
//   }, [windowInnerWidth]);

//   const [filterKey, setFilterKey] = React.useState<typeof initFilterKey>(initFilterKey);
//   const [filterBy, setFilterBy] = React.useState<TFilterBy>(initFilterBy);

//   const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selected = e.target.value as TFilterBy;
//     setFilterBy(selected);
//     registerEvent(events.pages.projects.toggleProjectsFilterBy({ filter_by: selected }));
//   };

//   let filterList: { key: string; label: string }[] = [];
//   let currProjects = "All";

//   if (filterBy === "project-nature") {
//     filterList = [{ key: "all", label: "All" }, ...PROJECT_NATURE];
//     currProjects = PROJECT_NATURE.find((item) => item.key === filterKey)?.label || "All";
//   } else {
//     filterList = [{ key: "all", label: "All" }, ...Object.values(TECH_STACKS)];
//     currProjects = TECH_STACKS[filterKey as keyof typeof TECH_STACKS]?.label || "All";
//   }

//   const onFilterProjects = ({ key }: { key: string }) => {
//     registerEvent(events.pages.projects.filterProjectsByKey({ filter_key: key }));
//     setFilterKey(key as keyof typeof TECH_STACKS | TProjectType | "all");
//   };

//   let displayedProjects = PROJECTS;

//   if (filterBy === "tech-stack") {
//     displayedProjects =
//       filterKey === "all"
//         ? PROJECTS
//         : PROJECTS.filter((project) =>
//             project.tech.includes(filterKey as keyof typeof TECH_STACKS)
//           );
//   }

//   if (filterBy === "project-nature") {
//     displayedProjects =
//       filterKey === "all"
//         ? PROJECTS
//         : PROJECTS.filter((project) => project.type === filterKey);
//   }

//   if (filterBy === "open-source") {
//     displayedProjects =
//       filterKey === "all"
//         ? PROJECTS.filter((p) => p.githublink && p.githublink.length > 0)
//         : PROJECTS.filter(
//             (p) =>
//               p.githublink &&
//               p.githublink.length > 0 &&
//               p.tech.includes(filterKey as keyof typeof TECH_STACKS)
//           );
//   }

//   if (filterBy === "closed-source") {
//     displayedProjects =
//       filterKey === "all"
//         ? PROJECTS.filter((p) => !p.githublink || p.githublink.length === 0)
//         : PROJECTS.filter(
//             (p) =>
//               (!p.githublink || p.githublink.length === 0) &&
//               p.tech.includes(filterKey as keyof typeof TECH_STACKS)
//           );
//   }

//   useIsomorphicLayoutEffect(() => {
//     if (!initialPageLoad) {
//       ScrollTrigger.refresh();
//       scrollToProjectsSection();
//     } else {
//       setInitialPageLoad(false);
//     }
//   }, [displayedProjects.length, initialPageLoad]);

//   // --- meta (optional)
//   const { title, description } = METADATA["projects"];

//   return (
//     <>
//       <Script
//         id="smooth-scroll-polyfill"
//         strategy="afterInteractive"
//         src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"
//       />
//       <div id="modal-root"></div>

//       <Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
//         <div className={styles.content} id="projects-list">
//           <div className={styles.filterWrapper}>
//             <button onClick={onOpenFilter} data-key="open-filter-btn" aria-label="Open Filter">
//               <FilterIcon />
//             </button>
//           </div>
//               <ScrollTxt text="Projects" className="mt-10 lg:mt-0" />
//           <p className={styles.note}>
//             Note: Projects listed here are mainly freelance/personal projects
//           </p>

//           <div className={styles.header}>
//             <h2 ref={contentRef}>
//               Viewing <span>{currProjects}</span> projects
//             </h2>
//             <ProjectsViewSelector
//               currentView={currentView}
//               handleSetCurrentView={handleSetCurrentView}
//             />
//           </div>

//         <div className="max-w-8xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
//   <Projects
//     onViewProject={onSelectProject}
//     displayedProjects={displayedProjects}
//     currentView={currentView}
//   />
// </div>

//         </div>
//       </Layout.DarkSection>

//       <ProjectModal
//         selectedProjectId={selectedProjectId}
//         modalRef={modalRef}
//         onDeselectProject={onDeselectProject}
//         modalImgRef={modalImgRef}
//         onGoToProject={onGoToProject}
//         isOpen={isOpen}
//       />

//       <ProjectsFilterModal
//         isOpen={showFilter}
//         onFilterProjects={onFilterProjects}
//         onCloseFilter={onCloseFilter}
//         filterKey={filterKey}
//         filterList={filterList}
//         filterBy={filterBy}
//         onSelectFilterBy={onSelectFilterBy}
//       />
//     </>
//   );
// }

// //  For SSR if you’re still using Pages Router
// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const { query } = ctx;
//   return {
//     props: {
//       initFilterBy: (query.filter_by as TFilterBy) || "tech-stack",
//       initFilterKey:
//         (query.filter_key as keyof typeof TECH_STACKS | TProjectType | "all") || "all",
//     },
//   };
// }


"use client";

import React from "react";
import Script from "next/script";
import { GetServerSidePropsContext } from "next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Shared Components
import ProjectModal from "@/shared/modal/project-modal";
import Layout from "@/shared/layout";
import Projects from "@/shared/projects";
import ProjectsViewSelector from "@/shared/projects/projects-view-selector";
import ProjectsFilterModal from "@/shared/modal/projects-filter-modal";
import ScrollTxt from "@/components/ScrollTxt";

// Custom Hooks
import {
  useSelectProjectAnimation,
  useWindowSize,
  useIsomorphicLayoutEffect,
  useProjectsPageInit,
  useProjectsCurrentView,
  useRegisterGsapScrollTrigger,
  useSmoothScroll,
} from "@/hooks";

// Constants
import { METADATA, PROJECTS, TECH_STACKS, PROJECT_NATURE } from "@/constants";

// Utils
import { events, registerEvent } from "@/utils/analytics/events";
import { projectAnimations } from "@/utils/animations";

// Icons
import { FilterIcon } from "@/components/icons";

// Types
import { TFilterBy, TProjectType } from "@/types";

import styles from "@/styles/_pages/projects.module.scss";

const { scrollToProjectsSection } = projectAnimations;

type ProjectsPageProps = {
  initFilterBy: TFilterBy;
  initFilterKey: keyof typeof TECH_STACKS | TProjectType | "all";
};

export default function Page({ initFilterBy, initFilterKey }: ProjectsPageProps) {
  // --- mimic _app hooks ---
  useRegisterGsapScrollTrigger();
  useSmoothScroll();

  // --- main logic from project.tsx ---
  const [initialPageLoad, setInitialPageLoad] = React.useState(true);
  const [showFilter, setShowFilter] = React.useState(false);

  const onOpenFilter = () => {
    if (showFilter) return;
    setShowFilter(true);
    registerEvent(events.pages.projects.openProjectsFilter());
  };

  const onCloseFilter = () => {
    setShowFilter(false);
    registerEvent(events.pages.projects.closeProjectsFilter());
  };

  const darkSectionRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

  const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } =
    useProjectsPageInit({
      windowInnerHeight,
      windowInnerWidth,
      darkSectionRef,
      onOpenFilter,
    });

  const {
    selectedProjectId,
    onSelectProject,
    onDeselectProject,
    modalImgRef,
    modalRef,
    onGoToProject,
    isOpen,
  } = useSelectProjectAnimation({});

  const { currentView, handleSetCurrentView } = useProjectsCurrentView({});

  useIsomorphicLayoutEffect(() => {
    if (windowInnerWidth < 768) {
      handleSetCurrentView("grid");
    }
  }, [windowInnerWidth]);

  const [filterKey, setFilterKey] = React.useState<typeof initFilterKey>(initFilterKey);
  const [filterBy, setFilterBy] = React.useState<TFilterBy>(initFilterBy);

  const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value as TFilterBy;
    setFilterBy(selected);
    registerEvent(events.pages.projects.toggleProjectsFilterBy({ filter_by: selected }));
  };

  let filterList: { key: string; label: string }[] = [];
  let currProjects = "All";

  if (filterBy === "project-nature") {
    filterList = [{ key: "all", label: "All" }, ...PROJECT_NATURE];
    currProjects = PROJECT_NATURE.find((item) => item.key === filterKey)?.label || "All";
  } else {
    filterList = [{ key: "all", label: "All" }, ...Object.values(TECH_STACKS)];
    currProjects = TECH_STACKS[filterKey as keyof typeof TECH_STACKS]?.label || "All";
  }

  const onFilterProjects = ({ key }: { key: string }) => {
    registerEvent(events.pages.projects.filterProjectsByKey({ filter_key: key }));
    setFilterKey(key as keyof typeof TECH_STACKS | TProjectType | "all");
  };

  let displayedProjects = PROJECTS;

  if (filterBy === "tech-stack") {
    displayedProjects =
      filterKey === "all"
        ? PROJECTS
        : PROJECTS.filter((project) =>
            project.tech.includes(filterKey as keyof typeof TECH_STACKS)
          );
  }

  if (filterBy === "project-nature") {
    displayedProjects =
      filterKey === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.type === filterKey);
  }

  if (filterBy === "open-source") {
    displayedProjects =
      filterKey === "all"
        ? PROJECTS.filter((p) => p.githublink && p.githublink.length > 0)
        : PROJECTS.filter(
            (p) =>
              p.githublink &&
              p.githublink.length > 0 &&
              p.tech.includes(filterKey as keyof typeof TECH_STACKS)
          );
  }

  if (filterBy === "closed-source") {
    displayedProjects =
      filterKey === "all"
        ? PROJECTS.filter((p) => !p.githublink || p.githublink.length === 0)
        : PROJECTS.filter(
            (p) =>
              (!p.githublink || p.githublink.length === 0) &&
              p.tech.includes(filterKey as keyof typeof TECH_STACKS)
          );
  }

  useIsomorphicLayoutEffect(() => {
    if (!initialPageLoad) {
      ScrollTrigger.refresh();
      scrollToProjectsSection();
    } else {
      setInitialPageLoad(false);
    }
  }, [displayedProjects.length, initialPageLoad]);

  const { title, description } = METADATA["projects"];

  return (
    <>
      <Script
        id="smooth-scroll-polyfill"
        strategy="afterInteractive"
        src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"
      />
      <div id="modal-root"></div>

      <Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
        <div className={styles.content} id="projects-list">
          <div className={styles.filterWrapper}>
            <button onClick={onOpenFilter} data-key="open-filter-btn" aria-label="Open Filter">
              <FilterIcon />
            </button>
          </div>

          <ScrollTxt text="Projects" className="mt-10 lg:mt-0" />

          <p className={styles.note } >
            Note: Projects listed here are mainly my personal projects 
          </p>

          <div className={styles.header}>
            <h2 ref={contentRef} className="text-gray-800 dark:text-gray-200">
              Viewing{" "}
<strong className="text-orange-600 dark:text-orange-400 font-bold mx-1">
    {currProjects}
  </strong>{" "}
              projects
            </h2>
            <ProjectsViewSelector
              currentView={currentView}
              handleSetCurrentView={handleSetCurrentView}
            />
          </div>

          <div className="max-w-8xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
            <Projects
              onViewProject={onSelectProject}
              displayedProjects={displayedProjects}
              currentView={currentView}
            />
          </div>
        </div>
      </Layout.DarkSection>

      <ProjectModal
        selectedProjectId={selectedProjectId}
        modalRef={modalRef}
        onDeselectProject={onDeselectProject}
        modalImgRef={modalImgRef}
        onGoToProject={onGoToProject}
        isOpen={isOpen}
      />

      <ProjectsFilterModal
        isOpen={showFilter}
        onFilterProjects={onFilterProjects}
        onCloseFilter={onCloseFilter}
        filterKey={filterKey}
        filterList={filterList}
        filterBy={filterBy}
        onSelectFilterBy={onSelectFilterBy}
      />
    </>
  );
}

// SSR Support (optional)
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;
  return {
    props: {
      initFilterBy: (query.filter_by as TFilterBy) || "tech-stack",
      initFilterKey:
        (query.filter_key as keyof typeof TECH_STACKS | TProjectType | "all") || "all",
    },
  };
}
