// import gsap from "gsap";
// import { otherSharedAnimations } from "@/utils/animations";
// import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
// import { useAnimationsContext } from "@/context";
// const { openNoiseLayers, drawSvgLogo, closeNoiseLayers, removePageLoaderBlocker } = otherSharedAnimations;

// export default function useSingleProjectInit() {
// 	const { initialAppLoad, exitAnimation, setInitialAppLoad } = useAnimationsContext();

// 	useIsomorphicLayoutEffect(() => {
// 		window.scrollTo({
// 			top: 0,
// 			left: 0,
// 		});
// 		const layers = document.querySelectorAll("[data-key='layer']");
// 		const logo = document.querySelector("[data-key='logo']") as Element;
// 		const logoChildren = document.querySelectorAll("[data-key='logo'] path");

// 		if (layers && logo && logoChildren) {
// 			const master = gsap.timeline();

// 			if (initialAppLoad) {
// 				setInitialAppLoad(false);
// 				master.add(
// 					removePageLoaderBlocker({
// 						node: document.getElementById("blocker") as HTMLDivElement,
// 					})
// 				);
// 				master.add(drawSvgLogo(logo, logoChildren));
// 				exitAnimation.add(closeNoiseLayers({ node: layers }), 0);
// 			}

// 			master.add(openNoiseLayers(layers));
// 			master.add(() => {
// 				document.querySelector("body")?.classList.remove("hide");
// 				const navLogo = document.querySelector("[data-key='nav-logo']") as HTMLElement | null;

// 				if (navLogo) {
// 					navLogo.style.visibility = "visible";
// 				}
// 			});

// 			return () => {
// 				master.kill();
// 			};
// 		}
// 	}, []);

// 	return {};
// }

"use client";

import gsap from "gsap";
import { otherSharedAnimations } from "@/utils/animations";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
import { useAnimationsContext } from "@/context";

const {
  openNoiseLayers,
  drawSvgLogo,
  closeNoiseLayers,
  removePageLoaderBlocker,
} = otherSharedAnimations;

export default function useSingleProjectInit() {
  const { initialAppLoad, exitAnimation, setInitialAppLoad } =
    useAnimationsContext();

  useIsomorphicLayoutEffect(() => {
    // ✅ Wait for DOM to be ready
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 });

      const layers = document.querySelectorAll("[data-key='layer']");
      const logo = document.querySelector("[data-key='logo']") as Element | null;
      const logoChildren = document.querySelectorAll("[data-key='logo'] path");

      // ✅ Guard against missing elements
      if (!layers?.length || !logo || !logoChildren?.length) return;

      const master = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (initialAppLoad) {
        setInitialAppLoad(false);

        master.add(
          removePageLoaderBlocker({
            node: document.getElementById("blocker") as HTMLDivElement,
          })
        );
        master.add(drawSvgLogo(logo, logoChildren));
        exitAnimation.add(closeNoiseLayers({ node: layers }), 0);
      }

      master.add(openNoiseLayers(layers));
      master.add(() => {
        document.body.classList.remove("hide");
        const navLogo = document.querySelector("[data-key='nav-logo']") as HTMLElement | null;
        if (navLogo) navLogo.style.visibility = "visible";
      });

      return () => master.kill();
    }, 100); // small delay ensures all project DOM is mounted

    return () => clearTimeout(timer);
  }, []);

  return {};
}
