// import styles from "./styles.module.scss";
// import { TProject } from "@/types";
// import Image from "next/image";
// export function ProjectsGridView({
// 	onViewProject,
// 	displayedProjects,
// }: {
// 	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
// 	displayedProjects: TProject[];
// }) {
// 	return (
// 		<div className={styles.container}>
// 			{displayedProjects.map((item, i) => {
// 				const { id, media, title, bgColor } = item;

// 				return (
// 					<button
// 						key={i}
// 						className={styles.box}
// 						data-id={id}
// 						data-type="box-item"
// 						onClick={onViewProject}
// 						style={{ backgroundColor: bgColor }}
// 					>
// 						{media[0] && <Image src={media[0].source || ""} alt={title} objectFit="cover" layout="fill" />}
// 						<div className={styles.boxOverlay}></div>
// 						<div className={styles.boxCircle}>
// 							<span>View</span>
// 						</div>
// 					</button>
// 				);
// 			})}
// 		</div>
// 	);
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { TProject } from "@/types";
// import { useRouter } from "next/navigation";

// export function ProjectsGridView({
//   displayedProjects,
// }: {
//   displayedProjects: TProject[];
// }) {
//   const [clickedId, setClickedId] = useState<string | null>(null);
//   const router = useRouter();

//   const handleViewProject = (
//     e: React.MouseEvent<HTMLButtonElement>,
//     id: string
//   ) => {
//     e.preventDefault();
//     setClickedId(id);

//     // Smooth delay before navigation
//     setTimeout(() => {
//       router.push(`/projects/${id}`);
//     }, 400);
//   };

//   return (
//     <div
//       className="
//         grid gap-4 
//         grid-cols-[repeat(auto-fill,minmax(180px,1fr))] 
//         sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
//         md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] 
//         xl:grid-cols-[repeat(auto-fill,minmax(430px,1fr))]
//       "
//     >
//       {displayedProjects.map((item, i) => {
//         const { id, media, title, bgColor } = item;

//         return (
//           <button
//             key={i}
//             data-id={id}
//             data-type="box-item"
//             onClick={(e) => handleViewProject(e, id)}
//             style={{ backgroundColor: bgColor }}
//             className={`
//               relative overflow-hidden cursor-pointer border-0
//               h-[140px] md:h-[340px]
//               group transition-all duration-500
//               focus:outline-none
//               ${clickedId === id ? "scale-95 opacity-70" : ""}
//             `}
//           >
//             {media[0] && (
//               <Image
//                 src={media[0].source || ""}
//                 alt={title}
//                 fill
//                 className="
//                   object-cover scale-105 transition-transform duration-300 
//                   group-hover:scale-100
//                 "
//               />
//             )}

//             {/* Overlay */}
//             <div
//               className="
//                 absolute inset-0 z-10 
//                 bg-[rgba(0,0,0,0)] md:bg-[rgba(0,0,0,0.4)] 
//                 transition-colors duration-300
//                 group-hover:bg-[rgba(0,0,0,0)]
//               "
//             ></div>

//             {/* Circle */}
//             <div
//               className="
//                 absolute inset-0 flex items-center justify-center 
//                 opacity-0 transition-opacity duration-300 z-20 
//                 group-hover:opacity-100
//               "
//             >
//               <span
//                 className="
//                   flex items-center justify-center text-center
//                   rounded-full bg-[var(--blue)] text-[var(--white)]
//                   shadow-md text-sm md:text-lg font-medium
//                   w-16 h-16 md:w-24 md:h-24
//                   transition-transform duration-300
//                   group-hover:scale-110
//                 "
//               >
//                 View
//               </span>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import Image from "next/image";
import { TProject } from "@/types";
import { useRouter } from "next/navigation";

export function ProjectsGridView({
  displayedProjects,
}: {
  displayedProjects: TProject[];
}) {
  const [clickedId, setClickedId] = useState<string | null>(null);
  const router = useRouter();

  const handleViewProject = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    setClickedId(id);

    // Smooth delay before navigation
    setTimeout(() => {
      router.push(`/projects/${id}`);
    }, 400);
  };

  return (
    <div
      className="
        grid gap-4 
        grid-cols-[repeat(auto-fill,minmax(180px,1fr))] 
        sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
        md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] 
        xl:grid-cols-[repeat(auto-fill,minmax(430px,1fr))]
      "
    >
      {displayedProjects.map((item, i) => {
        const { id, media, title, bgColor } = item;

        return (
          <button
            key={i}
            data-id={id}
            data-type="box-item"
            onClick={(e) => handleViewProject(e, id)}
            style={{ backgroundColor: bgColor }}
            className={`
              relative overflow-hidden cursor-pointer border-0
              h-[140px] md:h-[340px]
              group transition-all duration-500
              focus:outline-none
              ${clickedId === id ? "scale-95 opacity-70" : ""}
            `}
          >
            {media[0] && (
              <Image
                src={media[0].source || ""}
                alt={title}
                fill
                className="
                  object-cover scale-105 transition-transform duration-300 
                  group-hover:scale-100
                "
              />
            )}

            {/* Overlay */}
            <div
              className="
                absolute inset-0 z-10 
                bg-[rgba(0,0,0,0)] md:bg-[rgba(0,0,0,0.4)] 
                transition-colors duration-300
                group-hover:bg-[rgba(0,0,0,0)]
              "
            ></div>

            {/* Circle */}
            <div
              className="
                absolute inset-0 flex items-center justify-center 
                opacity-0 transition-opacity duration-300 z-20 
                group-hover:opacity-100
              "
            >
              <span
                className="
                  flex items-center justify-center text-center
                  rounded-full bg-[var(--blue)] text-[var(--white)]
                  shadow-md text-sm md:text-lg font-medium
                  w-16 h-16 md:w-24 md:h-24
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                View
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
} 

