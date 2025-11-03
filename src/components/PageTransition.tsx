"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const NUM_BLOCKS = 6;

type OverlayProps = {
  blocksRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  onComplete: () => void;
};

function Overlay({ blocksRef, onComplete }: OverlayProps) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.to(blocksRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.1,
    });
  }, [blocksRef, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "row",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
      }}
    >
      {Array.from({ length: NUM_BLOCKS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            blocksRef.current[i] = el ?? null;
          }}
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: "#101010",
          }}
        />
      ))}
    </div>
  );
}

type PageTransitionProps = {
  children: React.ReactNode;
  Loader: React.ComponentType<{ onComplete: () => void }>;
};

export default function PageTransition({ children, Loader }: PageTransitionProps) {
  const [step, setStep] = useState<"loader" | "overlay" | "home">("loader");
  const overlayBlocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const homeWrapperRef = useRef<HTMLDivElement | null>(null);

  // Fade in homepage when step === 'home'
  useEffect(() => {
    if (step === "home" && homeWrapperRef.current) {
      gsap.fromTo(
        homeWrapperRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [step]);

  return (
    <div>
      {/* Loader */}
      {step === "loader" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
          }}
        >
          <Loader onComplete={() => setStep("overlay")} />
        </div>
      )}

      {/* Overlay */}
      {step === "overlay" && (
        <Overlay
          blocksRef={overlayBlocksRef}
          onComplete={() => setStep("home")}
        />
      )}

      {/* Main Content */}
      {step === "home" && (
        <div ref={homeWrapperRef} style={{ opacity: 0 }}>
          {children}
        </div>
      )}
    </div>
  );
}
