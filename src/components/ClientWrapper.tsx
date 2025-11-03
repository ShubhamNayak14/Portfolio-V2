// "use client";

// import React from "react";
// import { useRegisterGsapScrollTrigger, useSmoothScroll } from "@/hooks";

// export default function ClientWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useRegisterGsapScrollTrigger();
//   useSmoothScroll();

//   return <>{children}</>;
// }

// "use client";

// import React, { useEffect } from "react";
// import { useRegisterGsapScrollTrigger, useSmoothScroll } from "@/hooks";

// export default function ClientWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const registerScrollTrigger = useRegisterGsapScrollTrigger;
//   const smoothScroll = useSmoothScroll;

//   useEffect(() => {
//     let mounted = true;

//     const init = async () => {
//       // Wait until DOM & images are ready
//       await new Promise((resolve) => {
//         if (document.readyState === "complete") resolve(true);
//         else window.addEventListener("load", () => resolve(true), { once: true });
//       });

//       if (mounted) {
//         registerScrollTrigger();
//         smoothScroll();
//       }
//     };

//     init();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return <>{children}</>;
// }


"use client";

import React from "react";
import { useRegisterGsapScrollTrigger, useSmoothScroll } from "@/hooks";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  //  Call hooks directly at the top level — never inside effects or conditionals
  useRegisterGsapScrollTrigger();
  useSmoothScroll();

  return <>{children}</>;
}
