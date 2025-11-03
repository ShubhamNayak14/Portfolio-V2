// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/router";
// import { projectAnimations } from "@/utils/animations";
// import { events, registerEvent } from "@/utils/analytics/events";
// import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
// const { flipProjectIn, removeCurrentProject, displayNextProject } = projectAnimations;
// export default function useSelectProjectAnimation({ initialId = "" }: { initialId?: string }) {
// 	const router = useRouter();
// 	const [selectedProjectId, setSelectedProjectId] = useState<string>(initialId);
// 	const sourceElem = useRef<HTMLDivElement | HTMLButtonElement | null>(null);
// 	const modalImgRef = useRef<HTMLDivElement>(null);
// 	const modalRef = useRef<HTMLDivElement>(null);
// 	const [isOpen, setIsOpen] = useState(false);

// 	useEffect(() => {
// 		if (initialId) {
// 			setSelectedProjectId(initialId);
// 		}
// 	}, [initialId]);

// 	//-------------------------------
// 	// User clicked on a project
// 	//-------------------------------
// 	const onSelectProject = (e: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => {
// 		const { id, type } = e.currentTarget.dataset;
// 		const floatingBox = document.querySelector("[data-key='project-box']") as HTMLDivElement;

// 		const selectedGridBox = e.currentTarget as HTMLButtonElement;
// 		sourceElem.current = type === "list-item" ? floatingBox : selectedGridBox;
// 		window.history.pushState(null, "New Page Title", `/projects/${id}`);

// 		registerEvent(events.shared.homeAndProjects.viewProjectInfo({ project_title: id as string }));
// 		setSelectedProjectId(id as string);
// 		setIsOpen(true);
// 	};

// 	//-------------------------------
// 	// User click on arrow buttons
// 	//-------------------------------
// 	const onGoToProject = (id: string) => {
// 		//Scroll to top

// 		const elem = document.querySelector("[data-key='project-info']") as HTMLDivElement;
// 		elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
// 		const modal = modalRef.current;
// 		const modalImage = modalImgRef.current;

// 		if (modal && modalImage) {
// 			const tl = removeCurrentProject({
// 				modalContainer: modal,
// 				modalMedia: modalImage,
// 			});

// 			tl.then(() => {
// 				registerEvent(events.shared.homeAndProjects.viewProjectInfo({ project_title: id as string }));
// 				setSelectedProjectId(id);
// 				window.history.pushState(null, "New Page Title", `/projects/${id}`);
// 				displayNextProject({
// 					modalContainer: modal,
// 					modalMedia: modalImage,
// 				});
// 			});
// 		}
// 	};

// 	const [tl, setTl] = useState<gsap.core.Timeline>();

// 	// Close single project view
// 	const onDeselectProject = () => {
// 		tl?.reverse().then(() => {
// 			window.history.pushState(null, "New Page Title", router.pathname);
// 			setSelectedProjectId("");
// 			setIsOpen(false);
// 		});
// 	};

// 	useEffect(() => {
// 		if (isOpen) {
// 			if (sourceElem.current && modalImgRef.current && modalRef.current) {
// 				const tl = flipProjectIn({
// 					modal: modalRef.current,
// 					source: sourceElem.current,
// 					destination: modalImgRef.current,
// 				});

// 				setTl(tl);

// 				return () => {
// 					tl.kill();
// 				};
// 			}
// 		}
// 	}, [isOpen]);

// 	// In Case user uses the browser navigation buttons to navigate. Recall we use "pushState" to alter the history stack
// 	const handlePopState = () => {
// 		window.location.reload();
// 	};
// 	useIsomorphicLayoutEffect(() => {
// 		window.addEventListener("popstate", handlePopState);

// 		return () => {
// 			window.removeEventListener("popstate", handlePopState);
// 		};
// 	}, []);

// 	return {
// 		selectedProjectId,
// 		onSelectProject,
// 		onDeselectProject,
// 		modalImgRef,
// 		modalRef,
// 		onGoToProject,
// 		isOpen,
// 		setSelectedProjectId,
// 	};
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { projectAnimations } from "@/utils/animations";
// import { events, registerEvent } from "@/utils/analytics/events";
// import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

// const { flipProjectIn, removeCurrentProject, displayNextProject } = projectAnimations;

// export default function useSelectProjectAnimation({ initialId = "" }: { initialId?: string }) {
//   const router = useRouter();
//   const [selectedProjectId, setSelectedProjectId] = useState<string>(initialId);
//   const sourceElem = useRef<HTMLDivElement | HTMLButtonElement | null>(null);
//   const modalImgRef = useRef<HTMLDivElement>(null);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (initialId) {
//       setSelectedProjectId(initialId);
//     }
//   }, [initialId]);

//   //-------------------------------
//   // User clicked on a project
//   //-------------------------------
//   const onSelectProject = (e: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => {
//     const { id, type } = e.currentTarget.dataset;
//     const floatingBox = document.querySelector("[data-key='project-box']") as HTMLDivElement;

//     const selectedGridBox = e.currentTarget as HTMLButtonElement;
//     sourceElem.current = type === "list-item" ? floatingBox : selectedGridBox;

//     // Use router.push instead of window.history
//     router.push(`/projects/${id}`);

//     registerEvent(events.shared.homeAndProjects.viewProjectInfo({ project_title: id as string }));
//     setSelectedProjectId(id as string);
//     setIsOpen(true);
//   };

//   //-------------------------------
//   // User click on arrow buttons
//   //-------------------------------
//   const onGoToProject = (id: string) => {
//     // Scroll to top
//     const elem = document.querySelector("[data-key='project-info']") as HTMLDivElement;
//     elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

//     const modal = modalRef.current;
//     const modalImage = modalImgRef.current;

//     if (modal && modalImage) {
//       const tl = removeCurrentProject({
//         modalContainer: modal,
//         modalMedia: modalImage,
//       });

//       tl.then(() => {
//         registerEvent(events.shared.homeAndProjects.viewProjectInfo({ project_title: id as string }));
//         setSelectedProjectId(id);
//         router.push(`/projects/${id}`);
//         displayNextProject({
//           modalContainer: modal,
//           modalMedia: modalImage,
//         });
//       });
//     }
//   };

//   const [tl, setTl] = useState<gsap.core.Timeline>();

//   // Close single project view
//   const onDeselectProject = () => {
//     tl?.reverse().then(() => {
//       router.push(router.pathname);
//       setSelectedProjectId("");
//       setIsOpen(false);
//     });
//   };

//   useEffect(() => {
//     if (isOpen) {
//       if (sourceElem.current && modalImgRef.current && modalRef.current) {
//         const tl = flipProjectIn({
//           modal: modalRef.current,
//           source: sourceElem.current,
//           destination: modalImgRef.current,
//         });

//         setTl(tl);

//         return () => {
//           tl.kill();
//         };
//       }
//     }
//   }, [isOpen]);

//   // In case user uses the browser navigation buttons
//   const handlePopState = () => {
//     window.location.reload();
//   };
//   useIsomorphicLayoutEffect(() => {
//     window.addEventListener("popstate", handlePopState);

//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, []);

//   return {
//     selectedProjectId,
//     onSelectProject,
//     onDeselectProject,
//     modalImgRef,
//     modalRef,
//     onGoToProject,
//     isOpen,
//     setSelectedProjectId,
//   };
// }


"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projectAnimations } from "@/utils/animations";
import { events, registerEvent } from "@/utils/analytics/events";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const { flipProjectIn, removeCurrentProject, displayNextProject } = projectAnimations;

export default function useSelectProjectAnimation({
  initialId = "",
}: {
  initialId?: string;
}) {
  const router = useRouter();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(initialId);
  const sourceElem = useRef<HTMLDivElement | HTMLButtonElement | null>(null);
  const modalImgRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tl, setTl] = useState<gsap.core.Timeline>();

  // 🔹 Initialize selected project ID if provided
  useEffect(() => {
    if (initialId) setSelectedProjectId(initialId);
  }, [initialId]);

  // 🔹 When user clicks a project card
  const onSelectProject = (
    e: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>
  ) => {
    const { id, type } = e.currentTarget.dataset;
    if (!id) return;

    const floatingBox = document.querySelector(
      "[data-key='project-box']"
    ) as HTMLDivElement | null;

    const selectedGridBox = e.currentTarget as HTMLButtonElement;
    sourceElem.current = type === "list-item" ? floatingBox : selectedGridBox;

    router.push(`/projects/${id}`);
    registerEvent(
      events.shared.homeAndProjects.viewProjectInfo({
        project_title: id as string,
      })
    );
    setSelectedProjectId(id as string);
    setIsOpen(true);
  };

  // 🔹 Navigate between projects (next/previous)
  const onGoToProject = (id: string) => {
    const elem = document.querySelector(
      "[data-key='project-info']"
    ) as HTMLDivElement | null;
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    const modal = modalRef.current;
    const modalImage = modalImgRef.current;

    if (modal && modalImage) {
      const tl = removeCurrentProject({
        modalContainer: modal,
        modalMedia: modalImage,
      });

      tl.then(() => {
        registerEvent(
          events.shared.homeAndProjects.viewProjectInfo({
            project_title: id as string,
          })
        );
        setSelectedProjectId(id);
        router.push(`/projects/${id}`);
        displayNextProject({
          modalContainer: modal,
          modalMedia: modalImage,
        });
      });
    }
  };

  // 🔹 Deselect / close single project view
  const onDeselectProject = () => {
    if (tl) {
      tl.reverse().then(() => {
        // ✅ Use router.back() for better navigation handling
        router.back();
        setSelectedProjectId("");
        setIsOpen(false);
      });
    } else {
      router.back();
      setSelectedProjectId("");
      setIsOpen(false);
    }
  };

  // 🔹 Animate project open transition
  useEffect(() => {
    if (isOpen && sourceElem.current && modalImgRef.current && modalRef.current) {
      const tl = flipProjectIn({
        modal: modalRef.current,
        source: sourceElem.current,
        destination: modalImgRef.current,
      });

      setTl(tl);

      // ✅ Proper cleanup returning void
      return () => {
        tl.kill();
      };
    }

    // ✅ No cleanup needed if not open
    return;
  }, [isOpen]);

  // 🔹 Handle browser back/forward button (reloads for consistency)
  const handlePopState = () => {
    window.location.reload();
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return {
    selectedProjectId,
    onSelectProject,
    onDeselectProject,
    modalImgRef,
    modalRef,
    onGoToProject,
    isOpen,
    setSelectedProjectId,
  };
}
