// "use client"
// import styles from "./styles.module.scss";
// import Image from "next/image";
// import { useWindowSize } from "@/hooks";
// import { useEffect, useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "@/components/icons";
// import { StaticImageData } from "next/image";
// export default function Slider({
// 	items,
// 	id,
// 	bgColor,
// }: {
// 	items: { type: "image" | "video" | "gif"; source: StaticImageData }[];
// 	id: string;
// 	bgColor: string;
// }) {
// 	const { innerHeight, innerWidth } = useWindowSize();

// 	const itemsWrapperRef = useRef<HTMLDivElement>(null);

// 	const [sliderDisplacement, setSliderDisplacement] = useState<number>(0);
// 	const [itemWidth, setItemWidth] = useState<number>(0);
// 	const [activeItem, setActiveItem] = useState(0);

// 	//-----------------------------------------------------
// 	// User clicked on an indicator
// 	//-----------------------------------------------------
// 	const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
// 		if (!(e.target instanceof HTMLButtonElement)) {
// 			return;
// 		}
// 		const { slide } = e.target.dataset;
// 		if (!slide) return;
// 		moveSlider(parseInt(slide), itemWidth);
// 	};

// 	//-----------------------------------------------------
// 	// User clicked on an arrow
// 	//-----------------------------------------------------
// 	const handleChangeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
// 		const { action } = e.currentTarget.dataset;
// 		if (!action) return;

// 		if (action === "<") {
// 			if (activeItem <= 0) {
// 				moveSlider(0, itemWidth);
// 			} else {
// 				moveSlider(activeItem - 1, itemWidth);
// 			}
// 		} else if (action === ">") {
// 			if (activeItem >= items.length - 1) {
// 				moveSlider(items.length - 1, itemWidth);
// 			} else {
// 				moveSlider(activeItem + 1, itemWidth);
// 			}
// 		}
// 	};

// 	const moveSlider = (itemNumber: number, width: number) => {
// 		setActiveItem(itemNumber);
// 		setSliderDisplacement(width * itemNumber);
// 	};

// 	//------------------------------------------------------------
// 	// Refresh slider when device dimentions changes
// 	//------------------------------------------------------------
// 	useEffect(() => {
// 		if (itemsWrapperRef.current) {
// 			const width = itemsWrapperRef.current.children[0].clientWidth;
// 			setItemWidth(width);
// 			moveSlider(activeItem, width);
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [innerWidth, innerHeight]);

// 	//------------------------------------------------------------
// 	// Reset slider immediately we are viewing a different project
// 	//------------------------------------------------------------
// 	useEffect(() => {
// 		setActiveItem(0);
// 		moveSlider(0, itemWidth);
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [id]);

// 	return (
// 		<>
// 			<div className={styles.slider}>
// 				{activeItem !== 0 && (
// 					<button className={styles.control + " " + styles.prev} data-action="<" onClick={handleChangeItem}>
// 						<ChevronLeft />
// 					</button>
// 				)}
// 				<div
// 					className={styles.sliderInner}
// 					ref={itemsWrapperRef}
// 					style={{
// 						transform: `translateX(-${sliderDisplacement}px)`,
// 					}}
// 				>
// 					{items.map((a, i) => {
// 						const { source } = a;
// 						return (
// 							<div key={i} className={styles.item} style={{ backgroundColor: bgColor }}>
// 								<Image src={source} alt={`Picture ${i}`} />
// 							</div>
// 						);
// 					})}
// 				</div>
// 				{activeItem !== items.length - 1 && (
// 					<button className={styles.control + " " + styles.next} data-action=">" onClick={handleChangeItem}>
// 						<ChevronRight />
// 					</button>
// 				)}
// 			</div>

// 			<div className={styles.indicators} onClick={handleSetActiveItem}>
// 				{items.map((a, i) => {
// 					return (
// 						<button
// 							className={activeItem === i ? styles.indicator + " " + styles.active : styles.indicator}
// 							data-slide={i}
// 							key={i}
// 						></button>
// 					);
// 				})}
// 			</div>
// 		</>
// 	);
// }


// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { ChevronLeft, ChevronRight } from "@/components/icons";
// import { useWindowSize } from "@/hooks";
// import styles from "./styles.module.scss";

// type SliderItem = {
// 	type: "image" | "video" | "gif";
// 	source: StaticImageData;
// };

// interface SliderProps {
// 	items: SliderItem[];
// 	id: string;
// 	bgColor: string;
// }

// export default function Slider({ items, id, bgColor }: SliderProps) {
// 	const { innerHeight, innerWidth } = useWindowSize();

// 	const itemsWrapperRef = useRef<HTMLDivElement | null>(null);
// 	const [sliderDisplacement, setSliderDisplacement] = useState(0);
// 	const [itemWidth, setItemWidth] = useState(0);
// 	const [activeItem, setActiveItem] = useState(0);

// 	//-----------------------------------------------------
// 	// Move slider helper
// 	//-----------------------------------------------------
// 	const moveSlider = (itemNumber: number, width: number) => {
// 		setActiveItem(itemNumber);
// 		setSliderDisplacement(width * itemNumber);
// 	};

// 	//-----------------------------------------------------
// 	// User clicked on an indicator
// 	//-----------------------------------------------------
// 	const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
// 		const target = e.target as HTMLButtonElement;
// 		if (!target.dataset.slide) return;
// 		const slideIndex = parseInt(target.dataset.slide);
// 		moveSlider(slideIndex, itemWidth);
// 	};

// 	//-----------------------------------------------------
// 	// User clicked on arrows
// 	//-----------------------------------------------------
// 	const handleChangeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
// 		const action = e.currentTarget.dataset.action;
// 		if (!action) return;

// 		if (action === "<") {
// 			moveSlider(Math.max(0, activeItem - 1), itemWidth);
// 		} else if (action === ">") {
// 			moveSlider(Math.min(items.length - 1, activeItem + 1), itemWidth);
// 		}
// 	};

// 	//------------------------------------------------------------
// 	// Refresh slider when window dimensions change
// 	//------------------------------------------------------------
// 	useEffect(() => {
// 		if (!itemsWrapperRef.current || items.length === 0) return;

// 		const firstChild = itemsWrapperRef.current.children[0] as HTMLElement;
// 		if (firstChild) {
// 			const width = firstChild.clientWidth;
// 			setItemWidth(width);
// 			moveSlider(activeItem, width);
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [innerWidth, innerHeight]);

// 	//------------------------------------------------------------
// 	// Reset slider when project ID changes
// 	//------------------------------------------------------------
// 	useEffect(() => {
// 		if (itemWidth > 0) moveSlider(0, itemWidth);
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [id]);

// 	//------------------------------------------------------------
// 	// Prevent render issues if no items
// 	//------------------------------------------------------------
// 	if (!items || items.length === 0) {
// 		return <div className={styles.sliderEmpty}>No media to display</div>;
// 	}

// 	//------------------------------------------------------------
// 	// Render component
// 	//------------------------------------------------------------
// 	return (
// 		<>
// 			<div className={styles.slider}>
// 				{/* Left Arrow */}
// 				{activeItem > 0 && (
// 					<button
// 						className={`${styles.control} ${styles.prev}`}
// 						data-action="<"
// 						onClick={handleChangeItem}
// 						aria-label="Previous Slide"
// 					>
// 						<ChevronLeft />
// 					</button>
// 				)}

// 				{/* Slider Inner */}
// 				<div
// 					className={styles.sliderInner}
// 					ref={itemsWrapperRef}
// 					style={{ transform: `translateX(-${sliderDisplacement}px)` }}
// 				>
// 					{items.map((item, i) => (
// 						<div
// 							key={i}
// 							className={styles.item}
// 							style={{ backgroundColor: bgColor }}
// 						>
// 							<Image
// 								src={item.source}
// 								alt={`Slide ${i + 1}`}
// 								className={styles.image}
// 								priority={i === 0}
// 							/>
// 						</div>
// 					))}
// 				</div>

// 				{/* Right Arrow */}
// 				{activeItem < items.length - 1 && (
// 					<button
// 						className={`${styles.control} ${styles.next}`}
// 						data-action=">"
// 						onClick={handleChangeItem}
// 						aria-label="Next Slide"
// 					>
// 						<ChevronRight />
// 					</button>
// 				)}
// 			</div>

// 			{/* Indicators */}
// 			<div className={styles.indicators} onClick={handleSetActiveItem}>
// 				{items.map((_, i) => (
// 					<button
// 						key={i}
// 						data-slide={i}
// 						className={`${styles.indicator} ${
// 							activeItem === i ? styles.active : ""
// 						}`}
// 						aria-label={`Go to slide ${i + 1}`}
// 					></button>
// 				))}
// 			</div>
// 		</>
// 	);
// }



// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { ChevronLeft, ChevronRight } from "@/components/icons";
// import { useWindowSize } from "@/hooks";
// import styles from "./styles.module.scss";

// type SliderItem = {
// 	type: "image" | "video" | "gif";
// 	source: StaticImageData | string; // allow static or remote
// };

// interface SliderProps {
// 	items: SliderItem[];
// 	id: string;
// 	bgColor: string;
// }

// export default function Slider({ items, id, bgColor }: SliderProps) {
// 	const { innerHeight, innerWidth } = useWindowSize();
// 	const itemsWrapperRef = useRef<HTMLDivElement | null>(null);
// 	const [sliderDisplacement, setSliderDisplacement] = useState(0);
// 	const [itemWidth, setItemWidth] = useState(0);
// 	const [activeItem, setActiveItem] = useState(0);

// 	//-----------------------------------------------------
// 	// Move slider helper
// 	//-----------------------------------------------------
// 	const moveSlider = (itemNumber: number, width: number) => {
// 		setActiveItem(itemNumber);
// 		setSliderDisplacement(width * itemNumber);
// 	};

// 	//-----------------------------------------------------
// 	// User clicked on an indicator
// 	//-----------------------------------------------------
// 	const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
// 		const target = e.target as HTMLButtonElement;
// 		if (!target.dataset.slide) return;
// 		const slideIndex = parseInt(target.dataset.slide);
// 		moveSlider(slideIndex, itemWidth);
// 	};

// 	//-----------------------------------------------------
// 	// User clicked on arrows
// 	//-----------------------------------------------------
// 	const handleChangeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
// 		const action = e.currentTarget.dataset.action;
// 		if (!action) return;

// 		if (action === "<") {
// 			moveSlider(Math.max(0, activeItem - 1), itemWidth);
// 		} else if (action === ">") {
// 			moveSlider(Math.min(items.length - 1, activeItem + 1), itemWidth);
// 		}
// 	};

// 	//------------------------------------------------------------
// 	// Refresh slider when window dimensions change
// 	//------------------------------------------------------------
// 	useEffect(() => {
// 		if (!itemsWrapperRef.current || items.length === 0) return;

// 		const firstChild = itemsWrapperRef.current.children[0] as HTMLElement;
// 		if (firstChild) {
// 			const width = firstChild.clientWidth;
// 			setItemWidth(width);
// 			moveSlider(activeItem, width);
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [innerWidth, innerHeight]);

// 	//------------------------------------------------------------
// 	// Reset slider when project ID changes
// 	//------------------------------------------------------------
// 	useEffect(() => {
// 		if (itemWidth > 0) moveSlider(0, itemWidth);
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [id]);

// 	//------------------------------------------------------------
// 	// Prevent render issues if no items
// 	//------------------------------------------------------------
// 	if (!items || items.length === 0) {
// 		return <div className={styles.sliderEmpty}>No media to display</div>;
// 	}

// 	//------------------------------------------------------------
// 	// Render component
// 	//------------------------------------------------------------
// 	return (
// 		<>
// 			<div className={styles.slider}>
// 				{/* Left Arrow */}
// 				{activeItem > 0 && (
// 					<button
// 						className={`${styles.control} ${styles.prev}`}
// 						data-action="<"
// 						onClick={handleChangeItem}
// 						aria-label="Previous Slide"
// 					>
// 						<ChevronLeft />
// 					</button>
// 				)}

// 				{/* Slider Inner */}
// 				<div
// 					className={styles.sliderInner}
// 					ref={itemsWrapperRef}
// 					style={{
// 						transform: `translateX(-${sliderDisplacement}px)`,
// 					}}
// 				>
// 					{items.map((item, i) => (
// 						<div
// 							key={i}
// 							className={styles.item}
// 							style={{
// 								backgroundColor: bgColor,
// 								position: "relative",
// 								overflow: "hidden",
// 								borderRadius: "12px",
// 							}}
// 						>
// 							{/* ✅ Support both images & videos */}
// 							{item.type === "video" ? (
// 								<video
// 									src={item.source as string}
// 									controls
// 									autoPlay
// 									muted
// 									loop
// 									playsInline
// 									style={{
// 										width: "100%",
// 										height: "100%",
// 										objectFit: "cover",
// 										borderRadius: "12px",
// 									}}
// 								/>
// 							) : (
// 								<div
// 									style={{
// 										position: "relative",
// 										width: "100%",
// 										height: "0",
// 										paddingTop: "56.25%", // 16:9 aspect ratio
// 										borderRadius: "12px",
// 									}}
// 								>
// 									<Image
// 										src={item.source}
// 										alt={`Slide ${i + 1}`}
// 										fill
// 										sizes="(max-width: 768px) 100vw, 70vw"
// 										style={{
// 											objectFit: "cover",
// 											borderRadius: "12px",
// 										}}
// 										priority={i === 0}
// 									/>
// 								</div>
// 							)}
// 						</div>
// 					))}
// 				</div>

// 				{/* Right Arrow */}
// 				{activeItem < items.length - 1 && (
// 					<button
// 						className={`${styles.control} ${styles.next}`}
// 						data-action=">"
// 						onClick={handleChangeItem}
// 						aria-label="Next Slide"
// 					>
// 						<ChevronRight />
// 					</button>
// 				)}
// 			</div>

// 			{/* Indicators */}
// 			<div className={styles.indicators} onClick={handleSetActiveItem}>
// 				{items.map((_, i) => (
// 					<button
// 						key={i}
// 						data-slide={i}
// 						className={`${styles.indicator} ${
// 							activeItem === i ? styles.active : ""
// 						}`}
// 						aria-label={`Go to slide ${i + 1}`}
// 					></button>
// 				))}
// 			</div>
// 		</>
// 	);
// }


// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { useWindowSize } from "@/hooks";

// type SliderItem = {
//   type: "image" | "video" | "gif";
//   source: StaticImageData | string;
// };

// interface SliderProps {
//   items: SliderItem[];
//   id: string;
//   bgColor: string;
//   onClose?: () => void;
// }

// export default function Slider({ items, id, bgColor, onClose }: SliderProps) {
//   const { innerWidth } = useWindowSize();
//   const itemsWrapperRef = useRef<HTMLDivElement | null>(null);
//   const [sliderDisplacement, setSliderDisplacement] = useState(0);
//   const [itemWidth, setItemWidth] = useState(0);
//   const [activeItem, setActiveItem] = useState(0);

//   // Swipe tracking
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const moveSlider = (itemNumber: number, width: number) => {
//     if (width <= 0) return;
//     setActiveItem(itemNumber);
//     setSliderDisplacement(width * itemNumber);
//   };

//   const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
//     const target = e.target as HTMLButtonElement;
//     if (!target.dataset.slide) return;
//     const slideIndex = parseInt(target.dataset.slide);
//     moveSlider(slideIndex, itemWidth);
//   };

//   const handleChangeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const action = e.currentTarget.dataset.action;
//     if (!action) return;
//     if (action === "<") moveSlider(Math.max(0, activeItem - 1), itemWidth);
//     else if (action === ">") moveSlider(Math.min(items.length - 1, activeItem + 1), itemWidth);
//   };

//   // Handle swipe gestures
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const diff = touchStartX.current - touchEndX.current;

//     // Minimum swipe distance threshold
//     if (Math.abs(diff) > 50) {
//       if (diff > 0 && activeItem < items.length - 1) {
//         // Swipe left → next
//         moveSlider(activeItem + 1, itemWidth);
//       } else if (diff < 0 && activeItem > 0) {
//         // Swipe right → previous
//         moveSlider(activeItem - 1, itemWidth);
//       }
//     }
//   };

//   useEffect(() => {
//     const wrapper = itemsWrapperRef.current;
//     if (!wrapper || !wrapper.firstElementChild) return;

//     const firstChild = wrapper.firstElementChild as HTMLElement;
//     const observer = new ResizeObserver(() => {
//       const width = firstChild.clientWidth;
//       if (width > 0) {
//         setItemWidth(width);
//         moveSlider(activeItem, width);
//       }
//     });

//     observer.observe(firstChild);
//     return () => observer.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [innerWidth]);

//   useEffect(() => {
//     if (itemWidth > 0) moveSlider(0, itemWidth);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id, itemWidth]);

//   if (!items || items.length === 0) {
//     return <div className="text-center text-gray-400 py-10">No media to display</div>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 sm:px-10 relative">
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="group/close absolute -top-10 right-0 flex items-center justify-start bg-orange-500 text-white font-semibold uppercase
//           h-10 w-24 rounded-full pl-3 transition-all duration-300 overflow-hidden z-30
//           [clip-path:inset(0_0_0_3.5rem_round_999px)]
//           hover:[clip-path:inset(0_0_0_0_round_999px)]
//           hover:bg-orange-600 focus:outline-none"
//       >
//         <X className="w-5 h-5 mr-2 transition-transform duration-300 group-hover/close:rotate-90" />
//         <span className="opacity-0 group-hover/close:opacity-100 transition-opacity duration-300">
//           Close
//         </span>
//       </button>

//       {/* Slider Container */}
//       <div
//         className="relative w-full overflow-hidden rounded-3xl shadow-lg group"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {/* Left Arrow (hover visible) */}
//         {activeItem > 0 && (
//           <button
//             className="absolute left-3 top-1/2 -translate-y-1/2 z-20
//               bg-black/40 text-white p-2 rounded-full
//               transition-all duration-300 backdrop-blur-sm shadow-md
//               opacity-0 group-hover:opacity-100 hover:bg-black/60"
//             data-action="<"
//             onClick={handleChangeItem}
//             aria-label="Previous Slide"
//           >
//             <ChevronLeft size={25} />
//           </button>
//         )}

//         {/* Slider Inner */}
//         <div
//           ref={itemsWrapperRef}
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${sliderDisplacement}px)` }}
//         >
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="
//                 min-w-full flex-shrink-0 flex items-center justify-center
//                 bg-black rounded-3xl
//                 aspect-[4/5] sm:aspect-[4/5] md:aspect-[16/9]
//               "
//               style={{ backgroundColor: bgColor }}
//             >
//               {item.type === "video" ? (
//                 <video
//                   src={item.source as string}
//                   controls
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-full object-cover rounded-3xl"
//                 />
//               ) : (
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={item.source}
//                     alt={`Slide ${i + 1}`}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 70vw"
//                     className="object-cover rounded-3xl"
//                     priority={i === 0}
//                     unoptimized
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow (hover visible) */}
//         {activeItem < items.length - 1 && (
//           <button
//             className="absolute right-3 top-1/2 -translate-y-1/2 z-20
//               bg-black/40 text-white p-2 rounded-full
//               transition-all duration-300 backdrop-blur-sm shadow-md
//               opacity-0 group-hover:opacity-100 hover:bg-black/60"
//             data-action=">"
//             onClick={handleChangeItem}
//             aria-label="Next Slide"
//           >
//             <ChevronRight size={25} />
//           </button>
//         )}
//       </div>

//       {/* Indicators */}
//       <div
//         className="flex items-center justify-center gap-3 mt-6"
//         onClick={handleSetActiveItem}
//       >
//         {items.map((_, i) => (
//           <button
//             key={i}
//             data-slide={i}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               activeItem === i
//                 ? "bg-orange-500 w-8"
//                 : "bg-gray-400 w-4 hover:bg-gray-500"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useWindowSize } from "@/hooks";

type SliderItem = {
  type: "image" | "video" | "gif";
  source: StaticImageData | string;
};

interface SliderProps {
  items: SliderItem[];
  id: string;
  bgColor: string;
  onClose?: () => void;
}

export default function Slider({ items, id, bgColor, onClose }: SliderProps) {
  const { innerWidth } = useWindowSize();
  const itemsWrapperRef = useRef<HTMLDivElement | null>(null);
  const [sliderDisplacement, setSliderDisplacement] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  // Swipe tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const moveSlider = (itemNumber: number, width: number) => {
    if (width <= 0) return;
    setActiveItem(itemNumber);
    setSliderDisplacement(width * itemNumber);
  };

  const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    if (!target.dataset.slide) return;
    const slideIndex = parseInt(target.dataset.slide);
    moveSlider(slideIndex, itemWidth);
  };

  const handleChangeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.dataset.action;
    if (!action) return;
    if (action === "<") moveSlider(Math.max(0, activeItem - 1), itemWidth);
    else if (action === ">") moveSlider(Math.min(items.length - 1, activeItem + 1), itemWidth);
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeItem < items.length - 1) {
        moveSlider(activeItem + 1, itemWidth);
      } else if (diff < 0 && activeItem > 0) {
        moveSlider(activeItem - 1, itemWidth);
      }
    }
  };

  useEffect(() => {
    const wrapper = itemsWrapperRef.current;
    if (!wrapper || !wrapper.firstElementChild) return;

    const firstChild = wrapper.firstElementChild as HTMLElement;
    const observer = new ResizeObserver(() => {
      const width = firstChild.clientWidth;
      if (width > 0) {
        setItemWidth(width);
        moveSlider(activeItem, width);
      }
    });

    observer.observe(firstChild);
    return () => observer.disconnect();
  }, [innerWidth]);

  useEffect(() => {
    if (itemWidth > 0) moveSlider(0, itemWidth);
  }, [id, itemWidth]);

  if (!items || items.length === 0) {
    return <div className="text-center text-gray-400 py-10">No media to display</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-8 relative">
     

      {/* Slider Container */}
      <div
        className="relative w-full overflow-hidden rounded-3xl shadow-xl group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        {activeItem > 0 && (
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20
              bg-black/40 text-white p-2 rounded-full
              transition-all duration-300 backdrop-blur-sm shadow-md
              opacity-0 group-hover:opacity-100 hover:bg-black/60"
            data-action="<"
            onClick={handleChangeItem}
          >
            <ChevronLeft size={26} />
          </button>
        )}

        {/* Slider Inner */}
        <div
          ref={itemsWrapperRef}
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `translateX(-${sliderDisplacement}px)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                min-w-full flex-shrink-0 flex items-center justify-center
                bg-black rounded-3xl
                aspect-[4/5] sm:aspect-[4/5] md:aspect-[16/9]
              "
              style={{ backgroundColor: bgColor }}
            >
              {item.type === "video" ? (
                <video
                  src={item.source as string}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.source}
                    alt={`Slide ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover rounded-3xl transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    priority={i === 0}
                    unoptimized
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {activeItem < items.length - 1 && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20
              bg-black/40 text-white p-2 rounded-full
              transition-all duration-300 backdrop-blur-sm shadow-md
              opacity-0 group-hover:opacity-100 hover:bg-black/60"
            data-action=">"
            onClick={handleChangeItem}
          >
            <ChevronRight size={26} />
          </button>
        )}
      </div>

      {/* Indicators */}
      <div className="flex items-center justify-center gap-3 mt-6" onClick={handleSetActiveItem}>
        {items.map((_, i) => (
          <button
            key={i}
            data-slide={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeItem === i
                ? "bg-orange-500 w-8"
                : "bg-gray-400 w-4 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
