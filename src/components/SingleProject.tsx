// "use client";


// import styles from "./styles.module.scss";
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Github,
//   ExternalLink,
// } from "@/components/icons";
// import Slider from "@/shared/slider";
// import { fetchProjects } from "@/utils";
// import { Ref } from "react";
// import TECH_STACKS from "@/constants/tech-stacks";
// import ROLES from "@/constants/others";
// import { events, registerEvent } from "@/utils/analytics/events";

// type Props = {
//   currProjectId: string;
//   onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   modalImgRef?: Ref<HTMLDivElement>;
//   onGoToProject: (id: string) => void;
// };

// type TPageGAEvents = "info_view" | "not_found" | "github" | "live_site";

// export default function SingleProject({
//   currProjectId,
//   onClose,
//   modalImgRef,
//   onGoToProject,
// }: Props) {
//   const { currProject, nextProject, prevProject } = fetchProjects(currProjectId);
//   const { viewProjectGithub, viewProjectSite } = events.shared.homeAndProjects;

//   const handlePageGAEvents = (key: TPageGAEvents) => {
//     if (currProject) {
//       switch (key) {
//         case "not_found":
//           registerEvent(
//             events.pages.projects.viewUnknownProject({
//               project_title: currProjectId,
//             })
//           );
//           return;
//         case "github":
//           if (currProject.githublink) {
//             registerEvent(
//               viewProjectGithub({
//                 project_title: currProject.title,
//                 link_url: currProject.githublink,
//               })
//             );
//           }
//           return;
//         case "live_site":
//           if (currProject.sitelink) {
//             registerEvent(
//               viewProjectSite({
//                 project_title: currProject.title,
//                 link_url: currProject.sitelink,
//               })
//             );
//           }
//           return;
//         default:
//           return;
//       }
//     }
//   };

//   if (!currProject) {
//     return (
//       <div className={styles.empty}>
//         <p>
//           Oops! Sorry I do not have any project by the name: <br />{" "}
//           <span>&nbsp;{currProjectId}&nbsp;</span>{" "}
//         </p>

//         <Link href="/projects" scroll={false}>
//           Go to Projects
//           <ExternalLink />
//         </Link>
//       </div>
//     );
//   }

//   const {
//     title,
//     details,
//     tech,
//     roles,
//     githublink,
//     sitelink,
//     media,
//     responsibilities,
//     bgColor,
//   } = currProject;

//   return (
//     <div className={styles.container} data-key="project-info">
//       {/* ----------------------------------------------- */}
//       {/* Prev Button Desktop */}
//       {/* ----------------------------------------------- */}
//       {prevProject && (
//         <button
//           value="previous"
//           className={`${styles.desktopNavigator} ${styles.btnPrevious}`}
//           aria-label="previous"
//           onClick={() => onGoToProject(prevProject.id)}
//         >
//           {/* <ChevronLeft /> */}
//         </button>
//       )}

//       <div className={styles.content}>
//         {/* ----------------------------------------------- */}
//         {/* Title */}
//         {/* ----------------------------------------------- */}
//         <section className={styles.title} data-key="title">
//           <h1>{title}</h1>

//           <button
//             onClick={onClose}
//             className={styles.btnClose}
//             data-key="close-button"
//           >
//             <span>
//               <strong>↙</strong>
//             </span>
//             <span>Close</span>
//           </button>
//         </section>

//         {/* ----------------------------------------------- */}
//         {/* Media Section */}
//         {/* ----------------------------------------------- */}
//         <div className={styles.media} ref={modalImgRef}>
//           {media.length > 1 ? (
//             <div>
//               <Slider
//                 items={media}
//                 id={currProjectId}
//                 bgColor={bgColor || "#86868b"}
//               />
//             </div>
//           ) : (
//             <SingleMediaFile
//               file={media[0]}
//               title={title}
//               bgColor={bgColor || "#86868b"}
//             />
//           )}
//         </div>

//         {/* ----------------------------------------------- */}
//         {/* About Project */}
//         {/* ----------------------------------------------- */}
//         <section className={styles.about} data-key="about">
//           <h2>About this project</h2>
//           <div
//             className={styles.details}
//             dangerouslySetInnerHTML={{ __html: details }}
//           />

//           {roles?.length > 0 && (
//             <div className={styles.roles}>
//               <h3>{roles.length === 1 ? "Role" : "Roles"} in Project</h3>
//               <ul>
//                 {roles.map((item, i) => {
//                   const roleInfo =
//                     ROLES.ROLES[item as keyof (typeof ROLES)["ROLES"]];
//                   return <li key={i}>{roleInfo?.label || item}</li>;
//                 })}
//               </ul>
//             </div>
//           )}

//           {responsibilities?.length > 0 && (
//             <div className={styles.responsibilities}>
//               <h3>My Responsibilities &#38; Features I Implemented</h3>
//               <div dangerouslySetInnerHTML={{ __html: responsibilities }} />
//             </div>
//           )}
//         </section>

//         {/* ----------------------------------------------- */}
//         {/* Tech Sheet */}
//         {/* ----------------------------------------------- */}
//         <section className={styles.tech} data-key="tech">
//           <h2>Technical Sheet</h2>
//           <p>
//             Some noteworthy technologies I got involved with while working on
//             this project:
//           </p>

//           <ul>
//             {tech.map((item) => {
//               const tool = TECH_STACKS[item];
//               if (!tool) return null;
//               return <li key={tool.key}>{tool?.label}</li>;
//             })}
//           </ul>
//         </section>

//         {/* ----------------------------------------------- */}
//         {/* Desktop Links */}
//         {/* ----------------------------------------------- */}
//         <div className={styles.links} data-key="buttons">
//           {sitelink && (
//             <a
//               href={sitelink}
//               target="_blank"
//               onClick={() => handlePageGAEvents("live_site")}
//               rel="noopener noreferrer"
//             >
//               Visit site <ExternalLink />
//             </a>
//           )}

//           {githublink && (
//             <a
//               href={githublink}
//               target="_blank"
//               onClick={() => handlePageGAEvents("github")}
//               rel="noopener noreferrer"
//             >
//               Github repo <Github />
//             </a>
//           )}
//         </div>
//       </div>

//       {/* ----------------------------------------------- */}
//       {/* Next Button Desktop */}
//       {/* ----------------------------------------------- */}
//       {/* {nextProject && (
//         <button
//           value="next"
//           className={`${styles.desktopNavigator} ${styles.btnNext}`}
//           aria-label="next"
//           onClick={() => onGoToProject(nextProject.id)}
//         >
//           <ChevronRight />
//         </button>
//       )} */}

//       {/* ----------------------------------------------- */}
//       {/* Prev and Next Buttons Mobile */}
//       {/* ----------------------------------------------- */}
//       {/* <div className={styles.mobileNavigator}>
//         {prevProject ? (
//           <button
//             value="previous"
//             aria-label="previous"
//             onClick={() => onGoToProject(prevProject.id)}
//           >
//             <ChevronLeft />
//           </button>
//         ) : (
//           <div></div>
//         )}

//         {nextProject ? (
//           <button
//             value="next"
//             aria-label="next"
//             onClick={() => onGoToProject(nextProject.id)}
//           >
//             <ChevronRight />
//           </button>
//         ) : (
//           <div></div>
//         )}
//       </div> */}
//     </div>
//   );
// }

// function SingleMediaFile({
//   file,
//   title,
//   bgColor,
// }: {
//   file: { type: "image" | "video" | "gif"; source: StaticImageData };
//   title: string;
//   bgColor: string;
// }) {
//   if (!file) {
//     return (
//       <div
//         className={styles.image}
//         style={{
//           paddingTop: "62.5%",
//           backgroundColor: bgColor,
//         }}
//       ></div>
//     );
//   }

//   //  Fixed image rendering (Next.js 13+)
//   if (file.type === "gif" || file.type === "image") {
//     return (
//       <div
//         className={styles.image}
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "0",
//           paddingTop: "62.5%",
//           backgroundColor: bgColor,
//           overflow: "hidden",
//           borderRadius: "12px",
//         }}
//       >
//         <Image
//           src={file.source}
//           alt={title}
//           fill
//           style={{
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//           sizes="(max-width: 768px) 100vw, 70vw"
//           priority
//         />
//       </div>
//     );
//   }

//   if (file.type === "video") {
//     return (
//       <div
//         className={styles.image}
//         style={{
//           backgroundColor: bgColor,
//           position: "relative",
//           width: "100%",
//           paddingTop: "56.25%",
//           overflow: "hidden",
//           borderRadius: "12px",
//         }}
//       >
//         <video
//           src={file.source as unknown as string}
//           controls
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       </div>
//     );
//   }

//   return null;
// }


// "use client";

// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Github,
//   ExternalLink,
// } from "@/components/icons";
// import Slider from "@/shared/slider";
// import { fetchProjects } from "@/utils";
// import { Ref } from "react";
// import TECH_STACKS from "@/constants/tech-stacks";
// import ROLES from "@/constants/others";
// import { events, registerEvent } from "@/utils/analytics/events";

// type Props = {
//   currProjectId: string;
//   onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   modalImgRef?: Ref<HTMLDivElement>;
//   onGoToProject: (id: string) => void;
// };

// type TPageGAEvents = "info_view" | "not_found" | "github" | "live_site";

// export default function SingleProject({
//   currProjectId,
//   onClose,
//   modalImgRef,
//   onGoToProject,
// }: Props) {
//   const { currProject, nextProject, prevProject } = fetchProjects(currProjectId);
//   const { viewProjectGithub, viewProjectSite } = events.shared.homeAndProjects;

//   const handlePageGAEvents = (key: TPageGAEvents) => {
//     if (currProject) {
//       switch (key) {
//         case "not_found":
//           registerEvent(
//             events.pages.projects.viewUnknownProject({
//               project_title: currProjectId,
//             })
//           );
//           return;
//         case "github":
//           if (currProject.githublink) {
//             registerEvent(
//               viewProjectGithub({
//                 project_title: currProject.title,
//                 link_url: currProject.githublink,
//               })
//             );
//           }
//           return;
//         case "live_site":
//           if (currProject.sitelink) {
//             registerEvent(
//               viewProjectSite({
//                 project_title: currProject.title,
//                 link_url: currProject.sitelink,
//               })
//             );
//           }
//           return;
//         default:
//           return;
//       }
//     }
//   };

//   if (!currProject) {
//     return (
//       <div className="flex flex-col items-center justify-center text-center p-10 text-gray-600 dark:text-gray-300">
//         <p className="text-lg">
//           Oops! Sorry, I do not have any project by the name: <br />
//           <span className="text-indigo-500">&nbsp;{currProjectId}&nbsp;</span>
//         </p>

//         <Link
//           href="/projects"
//           scroll={false}
//           className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
//         >
//           Go to Projects <ExternalLink />
//         </Link>
//       </div>
//     );
//   }

//   const {
//     title,
//     details,
//     tech,
//     roles,
//     githublink,
//     sitelink,
//     media,
//     responsibilities,
//     bgColor,
//   } = currProject;

//   return (
//     <div
//       className="relative w-full flex justify-center px-4 sm:px-8 lg:px-20 py-10"
//       data-key="project-info"
//     >
//       <div className="w-full max-w-5xl rounded-3xl  p-8 sm:p-10 space-y-10">
//         {/* Prev Button (Desktop) */}
//         {/* {prevProject && (
//           <button
//             value="previous"
//             className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:scale-110 transition"
//             aria-label="previous"
//             onClick={() => onGoToProject(prevProject.id)}
//           >
//             <ChevronLeft />
//           </button>
//         )} */}

//         {/* Title Section */}
//         <section className="flex justify-between items-center border-b pb-3 border-gray-200 dark:border-gray-700">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//             {title}
//           </h1>

//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="relative inline-flex items-center justify-center w-12 h-12 bg-indigo-500/80 dark:bg-indigo-600/80 text-white rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
//             aria-label="close"
//           >
//             <span className="absolute inset-0 bg-indigo-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
//             <span className="text-lg font-bold">×</span>
//           </button>
//         </section>

//         {/* Media Section */}
//         <div ref={modalImgRef}>
//           {media.length > 1 ? (
//             <Slider
//               items={media}
//               id={currProjectId}
//               bgColor={bgColor || "#86868b"}
//             />
//           ) : (
//             <SingleMediaFile
//               file={media[0]}
//               title={title}
//               bgColor={bgColor || "#86868b"}
//             />
//           )}
//         </div>

//         {/* About Project */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
//             About this project
//           </h2>
//           <div
//             className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
//             dangerouslySetInnerHTML={{ __html: details }}
//           />

//           {roles?.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//                 {roles.length === 1 ? "Role" : "Roles"} in Project
//               </h3>
//               <ul className="list-disc text-lg ml-6 mt-2 text-gray-600 dark:text-gray-400 space-y-1">
//                 {roles.map((item, i) => {
//                   const roleInfo =
//                     ROLES.ROLES[item as keyof (typeof ROLES)["ROLES"]];
//                   return <li key={i}>{roleInfo?.label || item}</li>;
//                 })}
//               </ul>
//             </div>
//           )}

//           {responsibilities?.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//                 My Responsibilities & Features I Implemented
//               </h3>
//               <div
//                 className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
//                 dangerouslySetInnerHTML={{ __html: responsibilities }}
//               />
//             </div>
//           )}
//         </section>

//         {/* Technical Sheet */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
//             Technical Sheet
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
//             Some noteworthy technologies I got involved with while working on
//             this project:
//           </p>
//           <ul className="flex flex-wrap gap-3">
//             {tech.map((item) => {
//               const tool = TECH_STACKS[item];
//               if (!tool) return null;
//               return (
//                 <li
//                   key={tool.key}
//                   className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-lg text-base"
//                 >
//                   {tool.label}
//                 </li>
//               );
//             })}
//           </ul>
//         </section>

//         {/* Links */}
//         <div className="flex flex-wrap gap-4 mt-6">
//           {sitelink && (
//             <a
//               href={sitelink}
//               target="_blank"
//               onClick={() => handlePageGAEvents("live_site")}
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-4xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium transition"
//             >
//               Visit Site <ExternalLink />
//             </a>
//           )}

//           {githublink && (
//             <a
//               href={githublink}
//               target="_blank"
//               onClick={() => handlePageGAEvents("github")}
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-4xl bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium transition"
//             >
//               GitHub Repo <Github />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// interface SingleMediaFileProps {
//   file: { type: "image" | "video" | "gif"; source: StaticImageData };
//   title: string;
//   bgColor: string;
//   className?: string;
// }

// function SingleMediaFile({
//   file,
//   title,
//   bgColor,
//   className,
// }: SingleMediaFileProps) {
//   if (!file) {
//     return (
//       <div
//         className={`w-full pt-[62.5%] rounded-xl ${className || ""}`}
//         style={{ backgroundColor: bgColor }}
//       />
//     );
//   }

//   if (file.type === "gif" || file.type === "image") {
//     return (
//       <div
//         className={`relative w-full pt-[62.5%] rounded-4xl overflow-hidden ${className || ""}`}
//         style={{ backgroundColor: bgColor }}
//       >
//         <Image
//           src={file.source}
//           alt={title}
//           fill
//           sizes="(max-width: 768px) 100vw, 70vw"
//           className="object-cover rounded-4xl"
//           priority
//         />
//       </div>
//     );
//   }

//   if (file.type === "video") {
//     return (
//       <div
//         className={`relative w-full pt-[56.25%] rounded-xl overflow-hidden ${className || ""}`}
//         style={{ backgroundColor: bgColor }}
//       >
//         <video
//           src={file.source as unknown as string}
//           controls
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//         />
//       </div>
//     );
//   }

//   return null;
// } 


"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import {  X } from "lucide-react";
import {
  Github,
  ExternalLink,
} from "@/components/icons";
import Slider from "@/shared/slider";
import { fetchProjects } from "@/utils";
import { Ref } from "react";
import TECH_STACKS from "@/constants/tech-stacks";
import ROLES from "@/constants/others";
import { events, registerEvent } from "@/utils/analytics/events";

type Props = {
  currProjectId: string;
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  modalImgRef?: Ref<HTMLDivElement>;
  onGoToProject: (id: string) => void;
};

type TPageGAEvents = "info_view" | "not_found" | "github" | "live_site";

export default function SingleProject({
  currProjectId,
  onClose,
  modalImgRef,
  onGoToProject,
}: Props) {
  const { currProject, nextProject, prevProject } =
    fetchProjects(currProjectId);
  const { viewProjectGithub, viewProjectSite } =
    events.shared.homeAndProjects;

  const handlePageGAEvents = (key: TPageGAEvents) => {
    if (!currProject) return;
    switch (key) {
      case "not_found":
        registerEvent(
          events.pages.projects.viewUnknownProject({
            project_title: currProjectId,
          })
        );
        return;
      case "github":
        if (currProject.githublink) {
          registerEvent(
            viewProjectGithub({
              project_title: currProject.title,
              link_url: currProject.githublink,
            })
          );
        }
        return;
      case "live_site":
        if (currProject.sitelink) {
          registerEvent(
            viewProjectSite({
              project_title: currProject.title,
              link_url: currProject.sitelink,
            })
          );
        }
        return;
    }
  };

  if (!currProject) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-10 text-gray-600 dark:text-gray-300">
        <p className="text-lg">
          Oops! Sorry, I do not have any project by the name:
          <br />
          <span className="text-indigo-500">&nbsp;{currProjectId}&nbsp;</span>
        </p>
        <Link
          href="/projects"
          scroll={false}
          className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Go to Projects <ExternalLink />
        </Link>
      </div>
    );
  }

  const {
    title,
    details,
    tech,
    roles,
    githublink,
    sitelink,
    media,
    responsibilities,
    bgColor,
  } = currProject;

  return (
    <div className="relative w-full flex justify-center items-center px-6 sm:px-10 lg:px-24 py-10">
      <div className="w-full max-w-5xl rounded-3xl  p-8 sm:p-10 space-y-10 ">
        {/* Title + Close Button */}
        <section className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>

      <button
        onClick={onClose}
        className="group/close relative right-0 flex items-center justify-start bg-orange-500 text-white  uppercase
          h-10 w-24 rounded-full pl-3 transition-all duration-300 overflow-hidden z-30
          [clip-path:inset(0_0_0_3.5rem_round_999px)]
          hover:[clip-path:inset(0_0_0_0_round_999px)]
          hover:bg-orange-600 focus:outline-none"
      >
        <span className="opacity-0 text-base font-medium group-hover/close:opacity-100 transition-opacity duration-300">
          Close
        </span>
        <X className="w-5 h-5 ml-1  transition-transform duration-300 group-hover/close:rotate-90" strokeWidth={3 }  />

      </button>
        </section>

        {/* 🖼️ Image/Video Section */}
        <div ref={modalImgRef}>
          {media.length > 1 ? (
            <Slider
              items={media}
              id={currProjectId}
              bgColor={bgColor || "#86868b"}
            />
          ) : (
            <SingleMediaFile
              file={media[0]}
              title={title}
              bgColor={bgColor || "#86868b"}
            />
          )}
        </div>

        {/* 🧾 About Project */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            About this project
          </h2>
          <div
            className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: details }}
          />

          {roles?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {roles.length === 1 ? "Role" : "Roles"} in Project
              </h3>
              <ul className="list-disc text-lg ml-6 mt-2 text-gray-600 dark:text-gray-400 space-y-1">
                {roles.map((item, i) => {
                  const roleInfo =
                    ROLES.ROLES[item as keyof (typeof ROLES)["ROLES"]];
                  return <li key={i}>{roleInfo?.label || item}</li>;
                })}
              </ul>
            </div>
          )}

          {responsibilities?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                My Responsibilities & Features I Implemented
              </h3>
              <div
                className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: responsibilities }}
              />
            </div>
          )}
        </section>

        {/*Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Technical Sheet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
            Technologies I used while building this project:
          </p>
          <ul className="flex flex-wrap gap-3">
            {tech.map((item) => {
              const tool = TECH_STACKS[item];
              if (!tool) return null;
              return (
                <li
                  key={tool.key}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-lg text-base"
                >
                  {tool.label}
                </li>
              );
            })}
          </ul>
        </section>

        {/* 🔗 Links */}
    

        <div className="flex flex-wrap gap-3 mt-5">
  {sitelink && (
    <a
      href={sitelink}
      target="_blank"
      onClick={() => handlePageGAEvents("live_site")}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-medium transition-all duration-300"
    >
      Visit Site <ExternalLink  />
    </a>
  )}

  {githublink && (
    <a
      href={githublink}
      target="_blank"
      onClick={() => handlePageGAEvents("github")}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-medium transition-all duration-300"
    >
      GitHub Repo <Github  />
    </a>
  )}
</div>

      </div>
    </div>
  );
}

/* 🖼️ Responsive Single Image/Video Component */
interface SingleMediaFileProps {
  file: { type: "image" | "video" | "gif"; source: StaticImageData };
  title: string;
  bgColor: string;
  className?: string;
}

function SingleMediaFile({
  file,
  title,
  bgColor,
  className,
}: SingleMediaFileProps) {
  if (!file) {
    return (
      <div
        className={`w-full pt-[62.5%] rounded-xl ${className || ""}`}
        style={{ backgroundColor: bgColor }}
      />
    );
  }

  if (file.type === "gif" || file.type === "image") {
    return (
      <div
        className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-4xl overflow-hidden ${className || ""}`}
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={file.source}
          alt={title}
          fill
          className="object-cover rounded-4xl transition-transform duration-700 ease-in-out hover:scale-[1.02]"
          priority
        />
      </div>
    );
  }

  if (file.type === "video") {
    return (
      <div
        className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-xl overflow-hidden ${className || ""}`}
        style={{ backgroundColor: bgColor }}
      >
        <video
          src={file.source as unknown as string}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        />
      </div>
    );
  }

  return null;
}
