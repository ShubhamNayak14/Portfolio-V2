// import styles from "./styles.module.scss";
// import { TProjectsView } from "@/types";
// import { ListIcon, GridIcon } from "@/components/icons";
// export default function ViewSelector({
// 	currentView,
// 	handleSetCurrentView,
// }: {
// 	currentView: TProjectsView;
// 	handleSetCurrentView: (view: TProjectsView) => void;
// }) {
// 	return (
// 		<div className={styles.view}>
// 			<button
// 				value="list"
// 				className={currentView === "list" ? styles.active : ""}
// 				onClick={() => handleSetCurrentView("list")}
// 				aria-label="list-view"
// 			>
// 				<ListIcon />
// 			</button>
// 			<button
// 				value="grid"
// 				className={currentView === "grid" ? styles.active : ""}
// 				onClick={() => handleSetCurrentView("grid")}
// 				aria-label="grid-view"
// 			>
// 				<GridIcon />
// 			</button>
// 		</div>
// 	);
// }


"use client";

import React from "react";
import { TProjectsView } from "@/types";
import { List, Grid2x2 } from "lucide-react";

export default function ViewSelector({
  currentView,
  handleSetCurrentView,
}: {
  currentView: TProjectsView;
  handleSetCurrentView: (view: TProjectsView) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4 px-8 xl:px-0">
      {/* List View Button */}
      <button
        value="list"
        onClick={() => handleSetCurrentView("list")}
        aria-label="list-view"
        className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full border flex items-center justify-center 
          transition-all duration-300 transform hover:scale-105 
          ${
            currentView === "list"
              ? "bg-gray-900 border-gray-700 dark:bg-gray-100 dark:border-gray-400"
              : "border-gray-300 dark:border-gray-600 hover:opacity-75"
          }`}
      >
        <List
          className={`w-5 h-5 transition-colors duration-300 
            ${
              currentView === "list"
                ? "text-white dark:text-gray-900"
                : "text-gray-800 dark:text-gray-300"
            }`}
        />
      </button>

      {/* Grid View Button */}
      <button
        value="grid"
        onClick={() => handleSetCurrentView("grid")}
        aria-label="grid-view"
        className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full border flex items-center justify-center 
          transition-all duration-300 transform hover:scale-105 
          ${
            currentView === "grid"
              ? "bg-gray-900 border-gray-700 dark:bg-gray-100 dark:border-gray-400"
              : "border-gray-300 dark:border-gray-600 hover:opacity-75"
          }`}
      >
        <Grid2x2
          className={`w-5 h-5 transition-colors duration-300 
            ${
              currentView === "grid"
                ? "text-white dark:text-gray-900"
                : "text-gray-800 dark:text-gray-300"
            }`}
        />
      </button>
    </div>
  );
}
