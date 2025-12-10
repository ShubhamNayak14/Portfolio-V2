// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import { useSelectProjectAnimation, useSingleProjectPageInit } from "@/hooks";
// import { useAnimationsContext } from "@/context";
// import { projectAnimations } from "@/utils/animations";
// import SingleProject from "@/components/SingleProject";
// import Layout from "@/shared/layout";

// // Utility to restore scroll lock
// function restoreScroll() {
//   document.body.style.overflow = "";
//   document.body.classList.remove("hide", "modal-open", "no-scroll");
// }

// export default function ProjectClient({ id }: { id: string }) {
//   const darkSectionRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const modalImgRef = useRef<HTMLDivElement>(null);

//   const router = useRouter();
//   const { removeCurrentProject } = projectAnimations;

//   useSingleProjectPageInit();

//   const { selectedProjectId, onGoToProject } = useSelectProjectAnimation({
//     initialId: id,
//   });

//   const { radialGradientAnimation, contactOpenerAnimation } = useAnimationsContext();

//   const [isHydrated, setIsHydrated] = useState(false);
//   useEffect(() => {
//     setIsHydrated(true);
//     restoreScroll();
//     return restoreScroll;
//   }, []);

//   useEffect(() => {
//     radialGradientAnimation?.scrollTrigger?.refresh();
//     contactOpenerAnimation?.scrollTrigger?.refresh();
//   }, [selectedProjectId]);

//   // Updated close handler: Replace route and refresh router
//   const onDeselectProject = () => {
//     if (modalRef.current && modalImgRef.current) {
//       const tl = removeCurrentProject({
//         modalContainer: modalRef.current,
//         modalMedia: modalImgRef.current,
//       });
//       tl.to(modalRef.current, { opacity: 0 });
//       tl.then(() => {
//         restoreScroll(); // Restore scroll after animation
//         router.replace("/projects"); // Replace URI to projects list
//         router.refresh(); // Refresh to re-fetch and render properly
//       });
//     } else {
//       restoreScroll();
//       router.replace("/projects");
//       router.refresh();
//     }
//   };

//   if (!isHydrated) return null;

//   return (
//        <div
//         style={{
//           fontSize: "62.5%",
//           // scrollbarWidth: "none",
//         }}
//       >
//     <Layout.DarkSection darkSectionRef={darkSectionRef} pathname={`/projects/${id}`}>
//       <div ref={modalRef}>
//         <SingleProject
//           currProjectId={selectedProjectId}
//           onClose={onDeselectProject}
//           modalImgRef={modalImgRef}
//           onGoToProject={onGoToProject}
//         />
//       </div>
//     </Layout.DarkSection>
//     </div>
//   );
// }


// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// // Assuming SingleProject is now correctly imported from its own file:
// import SingleProject from "@/components/SingleProject"; 
// import Layout from "@/shared/layout";

// // Import other necessary utilities/hooks
// import { useSelectProjectAnimation, useSingleProjectPageInit } from "@/hooks";
// import { useAnimationsContext } from "@/context";
// import { projectAnimations } from "@/utils/animations";

// // Utility to restore scroll lock
// function restoreScroll() {
//   document.body.style.overflow = "";
//   document.body.classList.remove("hide", "modal-open", "no-scroll");
// }

// export default function ProjectClient({ id }: { id: string }) {
//   const darkSectionRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const modalImgRef = useRef<HTMLDivElement>(null);

//   const router = useRouter();
//   const { removeCurrentProject } = projectAnimations;

//   useSingleProjectPageInit();

//   const { selectedProjectId, onGoToProject } = useSelectProjectAnimation({
//     initialId: id,
//   });

//   const { radialGradientAnimation, contactOpenerAnimation } = useAnimationsContext();

//   const [isHydrated, setIsHydrated] = useState(false);
//   useEffect(() => {
//     setIsHydrated(true);
//     restoreScroll();
//     return restoreScroll;
//   }, []);

//   useEffect(() => {
//     radialGradientAnimation?.scrollTrigger?.refresh();
//     contactOpenerAnimation?.scrollTrigger?.refresh();
//   }, [selectedProjectId]);

//   // FIX: Updated close handler to use router.back()
//   const onDeselectProject = () => {
//     if (modalRef.current && modalImgRef.current) {
//       const tl = removeCurrentProject({
//         modalContainer: modalRef.current,
//         modalMedia: modalImgRef.current,
//       });
//       tl.to(modalRef.current, { opacity: 0 });
//       tl.then(() => {
//         restoreScroll(); // Restore scroll after animation
//         router.back(); // Navigate back one step in history
//         router.refresh(); // Refresh to re-fetch and render properly
//       });
//     } else {
//       restoreScroll();
//       router.back(); // Navigate back one step in history
//       router.refresh();
//     }
//   };

//   if (!isHydrated) return null;

//   return (
//     <div
//       style={{
//         fontSize: "62.5%",
//       }}
//     >
//       <Layout.DarkSection darkSectionRef={darkSectionRef} pathname={`/projects/${id}`}>
//         <div ref={modalRef}>
//           <SingleProject
//             currProjectId={selectedProjectId}
//             onClose={onDeselectProject}
//             modalImgRef={modalImgRef}
//             onGoToProject={onGoToProject}
//           />
//         </div>
//       </Layout.DarkSection>
//     </div>
//   );
// }



// src/app/projects/@modal/[id]/ProjectClient.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
// Assuming SingleProject is now correctly imported from its own file:
import SingleProject from "@/components/SingleProject";
import Layout from "@/shared/layout";

// Import other necessary utilities/hooks
import { useSelectProjectAnimation, useSingleProjectPageInit } from "@/hooks";
import { useAnimationsContext } from "@/context";
import { projectAnimations } from "@/utils/animations";

// Utility to restore scroll lock
function restoreScroll() {
  document.body.style.overflow = "";
  document.body.classList.remove("hide", "modal-open", "no-scroll");
}

export default function ProjectClient({ id }: { id: string }) {
  const darkSectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalImgRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { removeCurrentProject } = projectAnimations;

  useSingleProjectPageInit();

  const { selectedProjectId, onGoToProject } = useSelectProjectAnimation({
    initialId: id,
  });

  const { radialGradientAnimation, contactOpenerAnimation } = useAnimationsContext();

  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
    restoreScroll();
    return restoreScroll;
  }, []);

  useEffect(() => {
    radialGradientAnimation?.scrollTrigger?.refresh();
    contactOpenerAnimation?.scrollTrigger?.refresh();
  }, [selectedProjectId]);

  // FIX: Updated close handler using router.back()
  const onDeselectProject = () => {
    if (modalRef.current && modalImgRef.current) {
      const tl = removeCurrentProject({
        modalContainer: modalRef.current,
        modalMedia: modalImgRef.current,
      });
      tl.to(modalRef.current, { opacity: 0 });
      tl.then(() => {
        restoreScroll(); // Restore scroll after animation
        router.back(); // Navigate back one step in history
        router.refresh(); // Refresh to re-fetch and render properly
      });
    } else {
      restoreScroll();
      router.back(); // Navigate back one step in history
      router.refresh();
    }
  };

  if (!isHydrated) return null;

  return (
    <div
      style={{
        fontSize: "62.5%",
      }}
    >
      <Layout.DarkSection darkSectionRef={darkSectionRef} pathname={`/projects/${id}`}>
        <div ref={modalRef}>
          <SingleProject
            currProjectId={selectedProjectId}
            onClose={onDeselectProject}
            modalImgRef={modalImgRef}
            onGoToProject={onGoToProject}
          />
        </div>
      </Layout.DarkSection>
    </div>
  );
}

