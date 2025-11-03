"use client"

import { useEffect, useRef } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (!shouldShow) return

    const element = elementRef.current
    if (!element) return

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    }

    const annotation = annotate(element, annotationConfig)

    annotationRef.current = annotation
    annotationRef.current.show()

    const resizeObserver = new ResizeObserver(() => {
      annotation.hide()
      annotation.show()
    })

    resizeObserver.observe(element)
    resizeObserver.observe(document.body)

    return () => {
      if (element) {
        annotate(element, { type: action }).remove()
        resizeObserver.disconnect()
      }
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}


// "use client";

// import React, { useEffect, useRef } from "react";
// import { useInView } from "motion/react";
// import { annotate } from "rough-notation";
// import type { RoughAnnotation } from "rough-notation/lib/model";

// type AnnotationAction =
//   | "highlight"
//   | "underline"
//   | "box"
//   | "circle"
//   | "strike-through"
//   | "crossed-off"
//   | "bracket";

// interface HighlighterProps {
//   children: React.ReactNode;
//   action?: AnnotationAction;
//   color?: string;
//   strokeWidth?: number;
//   animationDuration?: number;
//   iterations?: number;
//   padding?: number;
//   multiline?: boolean;
//   isView?: boolean; // if true -> only activates when in viewport
// }

// /**
//  * ✨ Highlighter Component
//  * Uses Rough Notation to animate text highlights, underlines, etc.
//  * Now synchronized with GSAP — includes delay & resize-safe redraw.
//  */
// export function Highlighter({
//   children,
//   action = "highlight",
//   color = "#ffd1dc",
//   strokeWidth = 1.5,
//   animationDuration = 600,
//   iterations = 2,
//   padding = 2,
//   multiline = true,
//   isView = false,
// }: HighlighterProps) {
//   const elementRef = useRef<HTMLSpanElement>(null);
//   const annotationRef = useRef<RoughAnnotation | null>(null);

//   // Trigger annotation when visible in viewport (if isView = true)
//   const isInView = useInView(elementRef, {
//     once: true,
//     margin: "-10%",
//   });

//   const shouldShow = !isView || isInView;

//   useEffect(() => {
//     if (!shouldShow) return;
//     const element = elementRef.current;
//     if (!element) return;

//     // Annotation configuration
//     const annotationConfig = {
//       type: action,
//       color,
//       strokeWidth,
//       animationDuration,
//       iterations,
//       padding,
//       multiline,
//     };

//     const annotation = annotate(element, annotationConfig);
//     annotationRef.current = annotation;

//     // ✅ Delay ensures GSAP animations finish first
//     const timer = setTimeout(() => {
//       annotationRef.current?.show();
//     }, 600); // adjust if GSAP timing changes (400–800ms works well)

//     // ✅ Handle resizing smoothly to redraw the highlight
//     const resizeObserver = new ResizeObserver(() => {
//       requestAnimationFrame(() => {
//         if (annotationRef.current) {
//           annotationRef.current.hide();
//           annotationRef.current.show();
//         }
//       });
//     });

//     resizeObserver.observe(element);
//     resizeObserver.observe(document.body);

//     return () => {
//       clearTimeout(timer);
//       resizeObserver.disconnect();
//       annotationRef.current?.remove();
//     };
//   }, [
//     shouldShow,
//     action,
//     color,
//     strokeWidth,
//     animationDuration,
//     iterations,
//     padding,
//     multiline,
//   ]);

//   return (
//     <span ref={elementRef} className="relative inline-block bg-transparent">
//       {children}
//     </span>
//   );
// }
