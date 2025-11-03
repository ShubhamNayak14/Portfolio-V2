// import { ProjectListView } from "./list-view";
// import { ProjectsGridView } from "./grid-view";
// import { TProject } from "../../types";

// export default function Project({
// 	onViewProject,
// 	displayedProjects,
// 	currentView,
// }: {
// 	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
// 	displayedProjects: TProject[];
// 	currentView?: "list" | "grid";
// }) {
// 	return (
// 		<>
// 			{displayedProjects.length === 0 ? (
// 				<div style={{ color: "#86868b", fontSize: "1.6rem", textAlign: "center", padding: "0px 2rem" }}>
// 					Oops, no <span style={{ color: "#fff" }}>&quot;PUBLIC&quot;</span> project with that tech
// 				</div>
// 			) : (
// 				<>
// 					{currentView === "grid" && (
// 						<ProjectsGridView  displayedProjects={displayedProjects} />
// 					)}

// 					{currentView === "list" && <ProjectListView onViewProject={onViewProject} displayedProjects={displayedProjects} />}
// 				</>
// 			)}
// 		</>
// 	);
// }



import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
import { TProject } from "../../types";

export default function Project({
  onViewProject,
  displayedProjects,
  currentView,
}: {
  onViewProject: (
    event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>
  ) => void;
  displayedProjects: TProject[];
  currentView?: "list" | "grid";
}) {
  return (
    <>
      {displayedProjects.length === 0 ? (
        <div
          className="
            text-gray-500 dark:text-gray-400 
            text-lg sm:text-xl md:text-2xl 
            text-center px-6 py-10 
            font-medium tracking-wide
          "
        >
          Oops, no{" "}
          <span className="text-gray-900 dark:text-white font-semibold">
            “PUBLIC”
          </span>{" "}
          project with that tech.
        </div>
      ) : (
        <>
          {currentView === "grid" && (
            <ProjectsGridView displayedProjects={displayedProjects} />
          )}

          {currentView === "list" && (
            <ProjectListView
              onViewProject={onViewProject}
              displayedProjects={displayedProjects}
            />
          )}
        </>
      )}
    </>
  );
}
