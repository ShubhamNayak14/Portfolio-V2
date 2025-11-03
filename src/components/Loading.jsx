// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const greetings = [
//   { lang: "English", text: "Hello" },
//   { lang: "Chinese", text: "你好" },
//   { lang: "Japanese", text: "こんにちは" },
//   { lang: "Hindi", text: "नमस्ते" },
//   { lang: "Bengali", text: "হ্যালো" },
//   { lang: "Odia", text: "ନମସ୍କାର" },
//   { lang: "Marathi", text: "नमस्कार" },
// ];

// const Loading = ({ onComplete }) => {
//   const [index, setIndex] = useState(0);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.fromTo(
//         textRef.current,
//         { opacity: 0, scale: 0.9 }, // start smaller
//         {
//           opacity: 1,
//           scale: 1, // zoom in to normal
//           duration: 0.25,
//           ease: "power2.out",
//         }
//       ).to(textRef.current, {
//         opacity: 0,
//         scale: 1.1, // slight zoom out as it fades
//         duration: 0.25,
//         delay: 0.25,
//         ease: "power2.in",
//         onComplete: () => {
//           if (index < greetings.length - 1) {
//             setIndex(index + 1);
//           } else {
//             onComplete();
//           }
//         },
//       });
//     }, textRef);

//     return () => ctx.revert();
//   }, [index, onComplete]);

//   return (
//     <div
//       style={{
//         backgroundColor: "#121212",
//         position: "fixed",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 9999,
//         overflow: "hidden",
//       }}
//     >
//       <img
//   src="/image/bg.jpg"
//         alt="Background Logo"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           width: 600,
//           height: 600,
//           transform: "translate(-50%, -50%)",
//           opacity: 0.05,
//           pointerEvents: "none",
//           userSelect: "none",
//           zIndex: 0,
//         }}
//       />
//       <span
//         ref={textRef}
//         style={{
//           color: "white",
//           fontSize: 64,
//           fontWeight: 300,
//           fontFamily: "'Reaktif', sans-serif",
//           userSelect: "none",
//           zIndex: 1,
//         }}
//       >
//         {greetings[index].text}
//       </span>
//     </div>
//   );
// };

// export default Loading;

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const greetings = [
//   { lang: "English", text: "Hello" },
//   { lang: "Chinese", text: "你好" },
//   { lang: "Japanese", text: "こんにちは" },
//   { lang: "Hindi", text: "नमस्ते" },
//   { lang: "Bengali", text: "হ্যালো" },
//   { lang: "Odia", text: "ନମସ୍କାର" },
//   { lang: "Marathi", text: "नमस्कार" },
// ];

// const Loading = ({ onComplete }) => {
//   const [index, setIndex] = useState(0);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.fromTo(
//         textRef.current,
//         { opacity: 0, scale: 0.9 }, // start smaller
//         {
//           opacity: 1,
//           scale: 1, // zoom in to normal
//           duration: 0.25,
//           ease: "power2.out",
//         }
//       ).to(textRef.current, {
//         opacity: 0,
//         scale: 1.1, // slight zoom out as it fades
//         duration: 0.25,
//         delay: 0.25,
//         ease: "power2.in",
//         onComplete: () => {
//           if (index < greetings.length - 1) {
//             setIndex(index + 1);
//           } else {
//             onComplete();
//           }
//         },
//       });
//     }, textRef);

//     return () => ctx.revert();
//   }, [index, onComplete]);

//   return (
//     <div
//       style={{
//         backgroundColor: "#121212",
//         position: "fixed",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 9999,
//         overflow: "hidden",
//         padding: "0 10vw", // padding for smaller screens
//       }}
//     >
//       <img
//   src="/image/bg.jpg"
//   alt="Background Logo"
//   style={{
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: "50vw",          // width is 50% of viewport width, scales responsively
//     maxWidth: 600,          // caps max width at 600px on large screens
//     height: "auto",         // maintains aspect ratio
//     maxHeight: "50vh",      // caps max height at 50% of viewport height
//     transform: "translate(-50%, -50%)",
//     opacity: 0.05,
//     pointerEvents: "none",
//     userSelect: "none",
//     zIndex: 0,
//     objectFit: "contain",   // ensures image fits inside its box without cropping/stretching
//   }}
// />
//       <span
//         ref={textRef}
//         style={{
//           color: "white",
//           fontSize: "clamp(2rem, 8vw, 4rem)", // scales 32px - 64px approx responsively
//           fontWeight: 300,
//           fontFamily: "'Reaktif', sans-serif",
//           userSelect: "none",
//           zIndex: 1,
//           textAlign: "center",
//           lineHeight: 1.1,
//         }}
//       >
//         {greetings[index].text}
//       </span>
//     </div>
//   );
// };

// export default Loading;


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const greetings = [
//   { lang: "English", text: "Hello" },
//   { lang: "Chinese", text: "你好" },
//   { lang: "Japanese", text: "こんにちは" },
//   { lang: "Hindi", text: "नमस्ते" },
//   { lang: "Bengali", text: "হ্যালো" },
//   { lang: "Odia", text: "ନମସ୍କାର" },
//   { lang: "Marathi", text: "नमस्कार" },
// ];

// const Loading = ({ onComplete }) => {
//   const [index, setIndex] = useState(0);
//   const textRef = useRef(null);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.fromTo(
//         textRef.current,
//         { opacity: 0, scale: 0.9 },
//         {
//           opacity: 1,
//           scale: 1.05, // slightly larger for emphasis
//           duration: 0.25,
//           ease: "power2.out",
//         }
//       )
//         .to(textRef.current, {
//           opacity: 0,
//           scale: 1.1, 
//           duration: 0.25,
//           delay: 0.25,
//           ease: "power2.in",
//           onComplete: () => {
//             if (index < greetings.length - 1) {
//               setIndex(index + 1);
//             } else {
//               onComplete();
//             }
//           },
//         });

//       // Zoom background logo slightly in sync
//       if (logoRef.current) {
//         gsap.fromTo(
//           logoRef.current,
//           { scale: 1 },
//           {
//             scale: 1.05,
//             duration: 0.5,
//             ease: "power2.inOut",
//             yoyo: true,
//             repeat: 1,
//           }
//         );
//       }
//     }, textRef);

//     return () => ctx.revert();
//   }, [index, onComplete]);

//   return (
//     <div
//       style={{
//         backgroundColor: "#121212",
//         position: "fixed",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 9999,
//         overflow: "hidden",
//         padding: "0 5vw",
//       }}
//     >
//       <img
//         ref={logoRef}
//         src="/image/bg.jpg"
//         alt="Background Logo"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           width: "50vw",
//           maxWidth: 600,
//           height: "auto",
//           maxHeight: "50vh",
//           transform: "translate(-50%, -50%)",
//           opacity: 0.05,
//           pointerEvents: "none",
//           userSelect: "none",
//           zIndex: 0,
//           objectFit: "contain",
//         }}
//       />
//       <span
//         ref={textRef}
//         style={{
//           color: "white",
//           fontSize: "clamp(3rem, 10vw, 6rem)", // larger text, fully responsive
//           fontWeight: 400,
//           fontFamily: "'Reaktif', sans-serif",
//           userSelect: "none",
//           zIndex: 1,
//           textAlign: "center",
//           lineHeight: 1.1,
//         }}
//       >
//         {greetings[index].text}
//       </span>
//     </div>
//   );
// };

// export default Loading;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const greetings = [
  { lang: "English", text: "Hello" },
  { lang: "Chinese", text: "你好" },
  { lang: "Japanese", text: "こんにちは" },
  { lang: "Hindi", text: "नमस्ते" },
  { lang: "Bengali", text: "হ্যালো" },
  { lang: "Odia", text: "ନମସ୍କାର" },
  { lang: "Marathi", text: "नमस्कार" },
];

const Loading = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (index < greetings.length - 1) {
            setIndex(index + 1);
          } else {
            onComplete();
          }
        },
      });

      // Animate both text and logo together
      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.10, ease: "power2.out" },
        0
      )
        .to(
          textRef.current,
          { opacity: 0, scale: 1, duration: 0.10, delay: 0.15, ease: "power2.in" },
          ">"
        )
        .fromTo(
          logoRef.current,
          { scale: 1 },
          { scale: 1, ease: "power2.inOut" },
          0
        );
    }, textRef);

    return () => ctx.revert();
  }, [index, onComplete]);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
        padding: "0 5vw",
      }}
    >
      <img
        ref={logoRef}
        src="/image/bg.jpg"
        alt="Background Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50vw",
          maxWidth: 600,
          height: "auto",
          maxHeight: "50vh",
          transform: "translate(-50%, -50%)",
          opacity: 0.05,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          objectFit: "contain",
        }}
      />
      <span
        ref={textRef}
        style={{
          color: "white",
          fontSize: "clamp(3rem, 10vw, 5rem)",
          fontWeight: 500,
          fontFamily: "'Reaktif', sans-serif",
          userSelect: "none",
          zIndex: 1,
          textAlign: "center",
          lineHeight: 1.1,
          wordBreak: "break-word",
        }}
      >
        {greetings[index].text}
      </span>

      {/* Responsive adjustments for small devices */}
      <style jsx>{`
        @media (max-width: 768px) {
          img {
            width: 70vw;
            max-width: 400px;
            max-height: 40vh;
            transform: translate(-50%, -50%);
          }
          span {
            font-size: clamp(3rem, 12vw, 5rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
