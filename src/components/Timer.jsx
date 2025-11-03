"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  // Extract hours, minutes, seconds
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const day = time
    .toLocaleDateString("en-US", {
      weekday: "short",
    })
    .toUpperCase();

  return (
    <div
      className="flex items-center px-5 py-2.5 rounded-full
                 border border-white/15 shadow-lg
                 backdrop-blur-md bg-white/20 dark:bg-black/30
                 text-black dark:text-white
                 text-sm sm:text-base md:text-lg font-semibold"
    >
      {/* Clock Icon Placeholder */}
      <div
        className="bg-orange-500 p-2 rounded-full mr-3
                   flex items-center justify-center shadow-sm"
      />

      {/* Time & Day with Labels */}
      <span suppressHydrationWarning className="flex gap-2">
        <span>{hours}<span className="text-xs ml-1">Hr</span></span>:
        <span>{minutes}<span className="text-xs ml-1">Min</span></span>:
        <span>{seconds}<span className="text-xs ml-1">Sec</span></span>
        <span className="text-orange-500 ml-2">{day}</span>
      </span>
    </div>
  );
}
