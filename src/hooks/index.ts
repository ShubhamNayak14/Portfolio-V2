//---------------------------
// UTILS
//---------------------------
import useWindowSize from "./useWindowSize";
import useSetBannerHeight from "./useSetBannerHeight";
import useTrapFocus from "./useTrapFocus";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import useSmoothScroll from "./useSmoothScroll";
import usePrevious from "./usePrevious";
import useDebounceScrollToTop from "./useDebounceScrollToTop";
import usePageScrollProgress from "./usePageScrollProgress";

//---------------------------
// ANIMATIONS
//---------------------------
import useRegisterGsapScrollTrigger from "./useRegisterGsapPlugins";
import useSelectProjectAnimation from "./useSelectProjectAnimation";
import useFloatingBoxAnimation from "./useFloatingBoxAnimation";
import useTransitionToDarkSection from "./useTransitionToDarkSection";

//---------------------------
// PAGE LOAD
//---------------------------
import initPageLoads from "./initialPagesLoad";
const { useHomePageInit,  useSingleProjectPageInit, use404PageInit, useProjectsPageInit } =
	initPageLoads;

//---------------------------
// OTHERS
//---------------------------
import useProjectsCurrentView from "./useProjectsCurrentView";

export {
	useWindowSize,
	useSetBannerHeight,
	useIsomorphicLayoutEffect,
	useTrapFocus,
	useRegisterGsapScrollTrigger,
	useSelectProjectAnimation,
	useHomePageInit,
	// useGenericPageInit,
	useSingleProjectPageInit,
	use404PageInit,
	useFloatingBoxAnimation,
	useProjectsPageInit,
	useProjectsCurrentView,
	useSmoothScroll,
	usePrevious,
	useTransitionToDarkSection,
	useDebounceScrollToTop,
	usePageScrollProgress,
};
