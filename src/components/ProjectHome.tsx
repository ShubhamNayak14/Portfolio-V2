"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null); // h2
  const uiHeadingRef = useRef<HTMLHeadingElement | null>(null); // h4

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    // storage for cleanup
    const originals: { el: HTMLElement; html: string }[] = [];
    const observers: IntersectionObserver[] = [];
    const hoverHandlers: {
      el: HTMLElement;
      enter: EventListener;
      leave: EventListener;
    }[] = [];

    // helper: recursively process nodes and preserve element attributes
    const processNode = (node: ChildNode): Node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        const txt = node.textContent || "";
        for (const ch of txt.split("")) {
          const span = document.createElement("span");
          span.className = "letter inline-block";
          span.textContent = ch === " " ? "\u00A0" : ch;
          frag.appendChild(span);
        }
        return frag;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const elNode = node as Element;
        // create same tag and copy attributes to preserve styling/classes
        const clone = document.createElement(elNode.tagName.toLowerCase());
        for (let i = 0; i < elNode.attributes.length; i++) {
          const a = elNode.attributes[i];
          clone.setAttribute(a.name, a.value);
        }
        for (const child of Array.from(elNode.childNodes)) {
          clone.appendChild(processNode(child));
        }
        return clone;
      } else {
        return document.createTextNode("");
      }
    };

    // split heading into letter spans and return a function to animate them (when called)
    const splitHeading = (el: HTMLElement | null) => {
      if (!el) return null;
      // if already split, return animator
      if (el.querySelector(".letter")) {
        return () => {
          const letters = el.querySelectorAll<HTMLElement>(".letter");
          gsap.fromTo(
            letters,
            { y: 16, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.03,
            }
          );
        };
      }

      originals.push({ el, html: el.innerHTML });

      const frag = document.createDocumentFragment();
      for (const child of Array.from(el.childNodes)) {
        frag.appendChild(processNode(child));
      }
      el.innerHTML = "";
      el.appendChild(frag);

      // animator function
      const animate = () => {
        const letters = el.querySelectorAll<HTMLElement>(".letter");
        gsap.fromTo(
          letters,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.03,
          }
        );
      };

      return animate;
    };

    // Setup: split headings, then observe them and animate when they enter view
    const setupHeadingObservers = () => {
      const headings: (HTMLElement | null)[] = [
        titleRef.current,
        uiHeadingRef.current,
      ];
      headings.forEach((heading) => {
        if (!heading) return;
        const animate = splitHeading(heading);
        if (!animate) return;

        // If already in viewport, animate immediately
        const rect = heading.getBoundingClientRect();
        const inViewOnMount = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewOnMount) {
          // small timeout to ensure layout settled
          window.requestAnimationFrame(() => animate());
          return;
        }

        // Otherwise use IntersectionObserver to trigger animation once when visible
        const io = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animate();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.18 }
        );

        io.observe(heading);
        observers.push(io);
      });
    };

    // Run inside a gsap.context to keep things scoped (and make revert simpler)
    const ctx = gsap.context(() => {
      // Setup heading splitting + observers
      setupHeadingObservers();

      // cards fade/scale on scroll with ScrollTrigger
      gsap.from(".project-card", {
        scale: 0.92,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // overlay content stagger
      gsap.from(".overlay-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".overlay-content",
          start: "top 85%",
        },
      });

      // hover tilt + scale for cards
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const onEnter: EventListener = () => {
          gsap.to(card, {
            scale: 1.03,
            rotateY: 4,
            rotateX: -2,
            // boxShadow: "0 20px 40px rgba(0,0,0,0.28)",
            duration: 0.35,
            ease: "power2.out",
          });
        };
        const onLeave: EventListener = () => {
          gsap.to(card, {
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            // boxShadow: "0 0px 0px rgba(0,0,0,0)",
            duration: 0.6,
            ease: "power2.out",
          });
        };
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        hoverHandlers.push({ el: card, enter: onEnter, leave: onLeave });
      });
    }, sectionRef);

    // After images inside the section load, refresh ScrollTrigger so triggers measure correctly
    const imgs = sectionRef.current?.querySelectorAll("img") ?? [];
    if (imgs.length > 0) {
      const imgPromises: Promise<void>[] = [];
      imgs.forEach((img) => {
        const i = img as HTMLImageElement;
        if (i.complete) return;
        imgPromises.push(
          new Promise((res) => {
            i.addEventListener("load", () => res(), { once: true });
            i.addEventListener("error", () => res(), { once: true });
          })
        );
      });
      if (imgPromises.length > 0) {
        Promise.all(imgPromises).then(() => {
          // refresh triggers after images loaded
          ScrollTrigger.refresh();
        });
      } else {
        // nothing to wait for
        ScrollTrigger.refresh();
      }
    } else {
      ScrollTrigger.refresh();
    }

    // cleanup on unmount
    return () => {
      ctx.revert();
      observers.forEach((o) => o.disconnect());
      hoverHandlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      originals.forEach(({ el, html }) => {
        try {
          el.innerHTML = html;
        } catch {
          /* ignore */
        }
      });
    };
  }, [setCardRef]);

  return (
    <div ref={sectionRef} className="w-full flex flex-col items-center">
      {/* Card 1 */}
      <div className="relative w-full min-h-screen max-w-6xl flex flex-col justify-center mx-auto py-12 px-4 sm:px-0">
        <span className="hidden md:flex absolute -left-[16.5rem] top-[60%] text-[4.2rem] dark:text-[#222] dark:opacity-100 opacity-25 font-extrabold tracking-wider rotate-[-90deg] select-none pointer-events-none">
          PROJECT
        </span>

        <div className="mb-5 px-2 sm:px-0">
          <h2
            ref={titleRef}
            className="
      project-title font-extrabold
      text-[64px] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[4rem]
      text-black dark:text-white
      text-center sm:text-left
      pb-5
      inline-block
    "
          >
            Featured<span className="text-orange-400 ">{" { Project }"}</span>
          </h2>
        </div>

        <div
          ref={(el) => setCardRef(el, 0)}
          className="project-card relative rounded-[32px] border-[8px] dark:border-[#222] border-gray-100 overflow-hidden"
        >
          <Image
            src="/image/p.jpg"
            alt="Project Showcase"
            width={960}
            height={720}
            className="rounded w-full h-[500px] sm:h-[480px] object-cover"
            priority
          />

          <div className="relative w-full h-full">
            {/* Overlay: hidden on small devices */}
            <div
              className="hidden sm:flex absolute left-2 right-2 bottom-2 
                  bg-black/40 backdrop-blur-lg backdrop-saturate-150 
                  border border-white/20 shadow-lg px-10 py-4 
                  flex-row items-center justify-between rounded-2xl"
            >
              <div className="text-white max-w-[60%]">
                <h3 className="font-semibold text-xl mb-1">Title</h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>

            {/* Button: always visible */}
            <div className="absolute left-4 right-4 bottom-5 flex justify-center sm:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 
                 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 
                 text-white font-semibold rounded-full shadow-lg 
                 hover:brightness-105 hover:scale-105 transition-all duration-300"
              >
         
                <span className="text-lg">✱</span>
                <span className="text-sm">Go to Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        ref={(el) => setCardRef(el, 1)}
        className="project-card relative w-full min-h-screen max-w-6xl flex flex-col justify-center mx-auto py-12 mt-0 px-4 sm:px-0"
      >
        <span className="hidden md:flex absolute -left-[16.5rem] top-[70%] text-[4.2rem] dark:text-[#222] dark:opacity-100 opacity-25 font-extrabold tracking-wider rotate-[-90deg] select-none pointer-events-none">
          PROJECT
        </span>
        <span className="hidden md:flex absolute -right-[16.5rem] top-[1%] text-[4.2rem] dark:text-[#222] dark:opacity-100 opacity-25 font-extrabold tracking-wider rotate-90 select-none pointer-events-none">
          PROJECT
        </span>

        <div className="flex flex-col md:flex-row md:items-start gap-7 w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col order-1 md:order-2 w-full md:w-1/4 mt-7 md:mt-25 pr-4">
            <h4
              ref={uiHeadingRef}
              className="ui-heading dark:text-white text-black font-extrabold text-[5rem] md:text-[4rem] mb-4 leading-none"
            >
              Design{" "}
              <span className=" md:text-[4rem] sm:text-[4rem]">Project</span>
            </h4>

            <div className="md:hidden mb-4">
              <Image
                src="/image/p.jpg"
                alt="UI Design"
                width={300}
                height={200}
                className="object-cover rounded-3xl w-full h-auto"
              />
            </div>

            <p className="dark:text-gray-300 text-gray-950 text-[13px] leading-tight max-w-full mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <div>

            </div>
            
            <a
              href="#"
              className="mt-3 sm:mt-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 
             bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 
             text-white font-semibold rounded-full shadow-lg 
             hover:brightness-105 hover:scale-105 transition-all duration-300"
            >
           
                <span className="text-lg">✱</span>
                <span className="text-sm">Go to Project</span>
            
            </a>
            
          </div>

          <div className="hidden md:flex order-2 md:order-1 bg-white border-[8px] dark:border-[#222] border-gray-100 rounded-3xl shadow-xl w-full md:w-3/4 h-[320px] sm:h-[440px] overflow-hidden md:mr-8">
            <Image
              src="/image/p.jpg"
              alt="UI Design"
              width={1080}
              height={560}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
