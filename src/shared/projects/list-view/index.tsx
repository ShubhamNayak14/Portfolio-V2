// import styles from "./styles.module.scss";
// import { useFloatingBoxAnimation } from "@/hooks";
// import Box from "../floating-box";
// import { TProject } from "@/types";

// export function ProjectListView({
// 	onViewProject,
// 	displayedProjects,
// }: {
// 	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
// 	displayedProjects: TProject[];
// }) {
// 	const { imgRef, btnRef, textRef, onMouseEnter, onMouseLeave, isActive, onEnterElement, listRef } =
// 		useFloatingBoxAnimation();

// 	return (
// 		<div className={styles.container}>
// 			<Box
// 				imgRef={imgRef}
// 				btnRef={btnRef}
// 				textRef={textRef}
// 				isActive={isActive}
// 				displayedProjects={displayedProjects}
// 			/>
// 			<ul className={styles.projectsList} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={listRef}>
// 				{displayedProjects.map((item, i) => {
// 					const { title, type, id } = item;

// 					return (
// 						<ProjectListItem
// 							key={i}
// 							onMouseEnter={onEnterElement}
// 							onClick={onViewProject}
// 							id={id}
// 							title={title}
// 							type={type}
// 							i={i}
// 						/>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }

// function ProjectListItem({
// 	onMouseEnter,
// 	onClick,
// 	id,
// 	title,
// 	type,
// 	i,
// }: {
// 	onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
// 	onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
// 	id: string;
// 	title: string;
// 	type: string;
// 	i: number;
// }) {
// 	return (
// 		<li onMouseEnter={onMouseEnter} onClick={onClick} data-id={id} data-type="list-item" tabIndex={0}>
// 			<div className={styles.row}>
// 				<h2>{title}</h2>
// 				<p>{type}</p>
// 			</div>

// 			<span className={styles.number}>{`${i + 1 < 10 ? "0" : ""}${i + 1}`}</span>
// 		</li>
// 	);
// }

// "use client";

// import { useFloatingBoxAnimation } from "@/hooks";
// import Box from "../floating-box";
// import { TProject } from "@/types";

// export function ProjectListView({
//   onViewProject,
//   displayedProjects,
// }: {
//   onViewProject: (
//     event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>
//   ) => void;
//   displayedProjects: TProject[];
// }) {
//   const {
//     imgRef,
//     btnRef,
//     textRef,
//     onMouseEnter,
//     onMouseLeave,
//     isActive,
//     onEnterElement,
//     listRef,
//   } = useFloatingBoxAnimation();

//   return (
//     <div
//       className="
//         w-full relative 
//         md:max-w-[var(--mini-desktop-max-width)] 
//         2xl:max-w-[var(--max-width)] 
//         mx-auto
//       "
//     >
//       <Box
//         imgRef={imgRef}
//         btnRef={btnRef}
//         textRef={textRef}
//         isActive={isActive}
//         displayedProjects={displayedProjects}
//       />

//       <ul
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//         ref={listRef}
//       >
//         {displayedProjects.map((item, i) => {
//           const { title, type, id } = item;
//           return (
//             <ProjectListItem
//               key={i}
//               onMouseEnter={onEnterElement}
//               onClick={onViewProject}
//               id={id}
//               title={title}
//               type={type}
//               i={i}
//             />
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// function ProjectListItem({
//   onMouseEnter,
//   onClick,
//   id,
//   title,
//   type,
//   i,
// }: {
//   onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
//   onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
//   id: string;
//   title: string;
//   type: string;
//   i: number;
// }) {
//   return (
//     <li
//       onMouseEnter={onMouseEnter}
//       onClick={onClick}
//       data-id={id}
//       data-type="list-item"
//       tabIndex={0}
//       className="
//         list-none cursor-pointer relative
//         border-b first:border-t border-[var(--ash)]
//         transition-all duration-300 ease-in-out
//         hover:opacity-60 focus:opacity-80
//         focus:outline-none focus:ring-2 focus:ring-[var(--white)]
//         focus:bg-[var(--white-alpha)]
//         overflow-hidden
//       "
//     >
//       <div
//         className="
//           flex justify-between items-center 
//           text-[var(--ash)] 
//           py-12 px-6 sm:py-16 sm:px-10 md:py-20 md:px-24 xl:py-28 xl:px-32
//           transition-all duration-300 group relative z-10
//         "
//       >
//         <h2
//           className="
//             relative block leading-none 
//             text-[2rem] sm:text-[3rem] md:text-[clamp(5rem,5.5vw,10rem)]
//             transform transition-transform duration-300
//             group-hover:-translate-x-3
//           "
//         >
//           {title}
//         </h2>
//         <p
//           className="
//             text-[1.6rem] transform transition-transform duration-300 
//             group-hover:translate-x-3
//           "
//         >
//           {type}
//         </p>
//       </div>

//       {/* Right-aligned background number */}
//       <span
//         className="
//           absolute top-1/2 right-[8%] 
//           -translate-y-1/2 
//           text-[clamp(5rem,16vw,26rem)] 
//           font-bold font-[sf-pro-bold]
//           text-[var(--white)] opacity-10 leading-[0.8em] select-none
//           pointer-events-none
//         "
//       >
//         {`${i + 1 < 10 ? "0" : ""}${i + 1}`}
//       </span>
//     </li>
//   );
// }



// "use client";

// import { useFloatingBoxAnimation } from "@/hooks";
// import Box from "../floating-box";
// import { TProject } from "@/types";

// export function ProjectListView({
//   onViewProject,
//   displayedProjects,
// }: {
//   onViewProject: (
//     event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>
//   ) => void;
//   displayedProjects: TProject[];
// }) {
//   const {
//     imgRef,
//     btnRef,
//     textRef,
//     onMouseEnter,
//     onMouseLeave,
//     isActive,
//     onEnterElement,
//     listRef,
//   } = useFloatingBoxAnimation();

//   return (
//     <div
//       className="
//         w-full relative 
//         flex justify-center 
//         px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40
//       "
//     >
//       <div
//         className="
//           w-full max-w-[1600px] relative 
//           md:max-w-[var(--mini-desktop-max-width)] 
//           2xl:max-w-[var(--max-width)]
//         "
//       >
//         <Box
//           imgRef={imgRef}
//           btnRef={btnRef}
//           textRef={textRef}
//           isActive={isActive}
//           displayedProjects={displayedProjects}
//         />

//         <ul
//           onMouseEnter={onMouseEnter}
//           onMouseLeave={onMouseLeave}
//           ref={listRef}
//           className="w-full"
//         >
//           {displayedProjects.map((item, i) => {
//             const { title, type, id } = item;
//             return (
//               <ProjectListItem
//                 key={i}
//                 onMouseEnter={onEnterElement}
//                 onClick={onViewProject}
//                 id={id}
//                 title={title}
//                 type={type}
//                 i={i}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function ProjectListItem({
//   onMouseEnter,
//   onClick,
//   id,
//   title,
//   type,
//   i,
// }: {
//   onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
//   onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
//   id: string;
//   title: string;
//   type: string;
//   i: number;
// }) {
//   return (

//     <li
//       onMouseEnter={onMouseEnter}
//       onClick={onClick}
//       data-id={id}
//       data-type="list-item"
//       tabIndex={0}
//       className="
//         list-none cursor-pointer relative
//         border-b first:border-t border-[var(--ash)]
//         transition-all duration-500 ease-in-out
//         hover:opacity-70 focus:opacity-80
//         focus:outline-none focus:ring-2 focus:ring-[var(--white)]
//         focus:bg-[var(--white-alpha)]
//         overflow-hidden
//         group
//       "
//     >
//       <div
//         className="
//           flex justify-between items-center 
//           text-[var(--ash)] 
//           py-12 px-6 sm:py-16 sm:px-12 md:py-20 md:px-24 xl:py-28 xl:px-32
//           transition-all duration-500 group relative z-10
//         "
//       >
//         <h2
//           className="
//             relative block leading-none 
//             text-[2rem] sm:text-[3rem] md:text-[clamp(5rem,5.5vw,10rem)]
//             transform transition-transform duration-500
//             group-hover:-translate-x-3
//           "
//         >
//           {title}
//         </h2>
//         <p
//           className="
//             text-[1.6rem] transform transition-transform duration-500 
//             group-hover:translate-x-3
//           "
//         >
//           {type}
//         </p>
//       </div>

//       {/* Right background number */}
//       <span
//         className="
//           absolute top-1/2 right-[8%] 
//           -translate-y-1/2 
//           text-[clamp(5rem,16vw,26rem)] 
//           font-bold font-[sf-pro-bold]
//           text-[var(--white)] opacity-10 leading-[0.8em] select-none
//           pointer-events-none
//         "
//       >
//         {`${i + 1 < 10 ? "0" : ""}${i + 1}`}
//       </span>
//     </li>
//   );
// }


// "use client";

// import { useFloatingBoxAnimation } from "@/hooks";
// import Box from "../floating-box";
// import { TProject } from "@/types";

// export function ProjectListView({
//   onViewProject,
//   displayedProjects,
// }: {
//   onViewProject: (
//     event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>
//   ) => void;
//   displayedProjects: TProject[];
// }) {
//   const {
//     imgRef,
//     btnRef,
//     textRef,
//     onMouseEnter,
//     onMouseLeave,
//     isActive,
//     onEnterElement,
//     listRef,
//   } = useFloatingBoxAnimation();

//   return (
//     <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 relative w-full">
//       <div className="relative w-full">
//         {/* Floating Box */}
//         <Box
//           imgRef={imgRef}
//           btnRef={btnRef}
//           textRef={textRef}
//           isActive={isActive}
//           displayedProjects={displayedProjects}
//         />

//         {/* Project List */}
//         <ul
//           onMouseEnter={onMouseEnter}
//           onMouseLeave={onMouseLeave}
//           ref={listRef}
//           className="w-full"
//         >
//           {displayedProjects.map((item, i) => {
//             const { title, type, id } = item;
//             return (
//               <ProjectListItem
//                 key={i}
//                 onMouseEnter={onEnterElement}
//                 onClick={onViewProject}
//                 id={id}
//                 title={title}
//                 type={type}
//                 i={i}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function ProjectListItem({
//   onMouseEnter,
//   onClick,
//   id,
//   title,
//   type,
//   i,
// }: {
//   onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
//   onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
//   id: string;
//   title: string;
//   type: string;
//   i: number;
// }) {
//   return (
//     <li
//       onMouseEnter={onMouseEnter}
//       onClick={onClick}
//       data-id={id}
//       data-type="list-item"
//       tabIndex={0}
//       className="
//         list-none cursor-pointer relative
//         border-b first:border-t border-[var(--ash)]
//         transition-all duration-500 ease-in-out
//         hover:opacity-70 focus:opacity-80
//         focus:outline-none focus:ring-2 focus:ring-[var(--white)]
//         focus:bg-[var(--white-alpha)]
//         overflow-hidden group
//       "
//     >
//       <div
//         className="
//           flex justify-between items-center 
//           text-[var(--ash)] 
//           py-8 px-8 sm:py-10 sm:px-12 md:py-14 md:px-16 lg:py-16 lg:px-20
//           transition-all duration-500 group relative z-10
//         "
//       >
//         <h2
//           className="
//             relative block leading-none 
//             text-[2rem] sm:text-[3rem] md:text-[clamp(5rem,5.5vw,10rem)]
//             transform transition-transform duration-500
//             group-hover:-translate-x-3
//           "
//         >
//           {title}
//         </h2>

//         <p
//           className="
//             text-[1.6rem] transform transition-transform duration-500 
//             group-hover:translate-x-3
//           "
//         >
//           {type}
//         </p>
//       </div>

//       {/* Right background number — slightly right aligned */}
//       <span
//   className="
//     absolute top-1/2 right-[6%]
//     -translate-y-1/2 
//     text-[clamp(3rem,10vw,16rem)] 
//     font-bold font-[sf-pro-bold]
//     text-[var(--white)] opacity-10 leading-[0.8em] select-none
//     pointer-events-none
//   "
// >
//   {`${i + 1 < 10 ? "0" : ""}${i + 1}`}
// </span>

//     </li>
//   );
// }


"use client";

import { useFloatingBoxAnimation } from "@/hooks";
import Box from "../floating-box";
import { TProject } from "@/types";

export function ProjectListView({
  onViewProject,
  displayedProjects,
}: {
  onViewProject: (
    event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>
  ) => void;
  displayedProjects: TProject[];
}) {
  const {
    imgRef,
    btnRef,
    textRef,
    onMouseEnter,
    onMouseLeave,
    isActive,
    onEnterElement,
    listRef,
  } = useFloatingBoxAnimation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative w-full">
      <div className="relative w-full">
        {/* Floating Box */}
        <Box
          imgRef={imgRef}
          btnRef={btnRef}
          textRef={textRef}
          isActive={isActive}
          displayedProjects={displayedProjects}
        />

        {/* Project List */}
        <ul
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={listRef}
          className="w-full"
        >
          {displayedProjects.map((item, i) => {
            const { title, type, id } = item;
            return (
              <ProjectListItem
                key={i}
                onMouseEnter={onEnterElement}
                onClick={onViewProject}
                id={id}
                title={title}
                type={type}
                i={i}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ProjectListItem({
  onMouseEnter,
  onClick,
  id,
  title,
  type,
  i,
}: {
  onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  id: string;
  title: string;
  type: string;
  i: number;
}) {
  return (
    <li
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      data-id={id}
      data-type="list-item"
      tabIndex={0}
      className="
        list-none cursor-pointer relative
        border-b first:border-t border-[var(--ash)]
        transition-all duration-500 ease-in-out
        hover:opacity-80 focus:opacity-80
        focus:outline-none focus:ring-2 focus:ring-[var(--white)]
        focus:bg-[var(--white-alpha)]
        overflow-hidden group
      "
    >
      <div
        className="
          flex justify-between items-center flex-wrap gap-y-4
          text-[var(--ash)] 
          py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-12 lg:py-14 lg:px-16
          transition-all duration-500 group relative z-10
        "
      >
        <h2
          className="
            relative block leading-none 
            text-[1.8rem] sm:text-[2.5rem] md:text-[clamp(4rem,5vw,8rem)]
            transform transition-transform duration-500
            group-hover:-translate-x-3
          "
        >
          {title}
        </h2>

        <p
          className="
            text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]
            transform transition-transform duration-500 
            group-hover:translate-x-3
          "
        >
          {type}
        </p>
      </div>

      {/* Background number — responsive position and size */}
      <span
        className="
          absolute top-1/2 right-[5%] sm:right-[6%]
          -translate-y-1/2 
          text-[clamp(3rem,8vw,14rem)] 
          font-bold font-[sf-pro-bold]
          text-[var(--white)] opacity-10 leading-[0.8em] select-none
          pointer-events-none
        "
      >
        {`${i + 1 < 10 ? "0" : ""}${i + 1}`}
      </span>
    </li>
  );
}
