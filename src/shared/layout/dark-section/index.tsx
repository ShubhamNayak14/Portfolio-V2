// import styles from "./styles.module.scss";
// import Noise  from "@/shared/noise";
// import { usePinRadialGradient } from "@/hooks";
// import { RefObject } from "react";

// export default function Layout({
// 	children,
// 	darkSectionRef,
// 	bannerHeight,
// 	pathname,
// }: {
// 	children: JSX.Element;
// 	darkSectionRef: RefObject<HTMLDivElement>;
// 	bannerHeight?: number;
// 	pathname?: string;
// }) {
// 	const { darkSectionRadialGradientRef } = usePinRadialGradient({
// 		darkSectionRef,
// 		bannerHeight,
// 		pathname,
// 	});

// 	return (
// 		<div className={styles.container} ref={darkSectionRef} data-key="dark-section-ref">
// 			<div className={styles.content}>
// 				{children}
// 				<Noise />
// 			</div>

// 		</div>
// 	);
// }


// import * as React from "react";
// import styles from "./styles.module.scss";
// import Noise from "@/shared/noise";
// import { RefObject } from "react";

// export default function Layout({
//   children,
//   darkSectionRef,
//   bannerHeight,
//   pathname,
// }: {
//   children: React.JSX.Element;
//   darkSectionRef: RefObject<HTMLDivElement>;
//   bannerHeight?: number;
//   pathname?: string;
// }) {
//   return (
//     <div className={styles.container} ref={darkSectionRef} data-key="dark-section-ref">
//       <div className={styles.content}>
//         {children}
//         <Noise />
//       </div>
//     </div>
//   );
// }


import * as React from "react";
import styles from "./styles.module.scss";
// import Noise from "@/shared/noise";
import { RefObject } from "react";

export default function Layout({
  children,
  darkSectionRef,
  bannerHeight,
  pathname,
}: {
  children: React.JSX.Element;
  darkSectionRef: RefObject<HTMLDivElement | null>; // Allow null
  bannerHeight?: number;
  pathname?: string;
}) {
  return (
    <div className={styles.container} ref={darkSectionRef} data-key="dark-section-ref">
      <div className={styles.content}>
        {children}
        {/* <Noise /> */}
      </div>
    </div>
  );
}
