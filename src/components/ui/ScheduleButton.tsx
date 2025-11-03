"use client";

import React, { forwardRef } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Target } from "lucide-react";

type ScheduleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ScheduleButton = forwardRef<HTMLButtonElement, ScheduleButtonProps>(
  (props, ref) => {
    const handleClick = () => {
            window.open("https://cal.com/shubhamnayak/connect-with-shubham", "_blank");
    };

    return (
      <button
        ref={ref}
        {...props}
        onClick={handleClick}
        className="
          fixed top-2 left-2 sm:top-6 sm:left-6
          flex items-center gap-3
          px-4 py-2 sm:px-5 sm:py-2.5
          text-sm sm:text-base
          font-extralight
          rounded-full
          shadow-md hover:shadow-lg transition-all duration-300
          bg-gray-900 text-white dark:bg-gray-100 dark:text-black
         z-20
        "
      >
        <CalendarIcon className="h-6 w-6 sm:h-6 sm:w-6" /> 
        <span className="hidden sm:inline-flex">Schedule a call</span>
      </button>
    );
  }
);

ScheduleButton.displayName = "ScheduleButton";

export default ScheduleButton;



