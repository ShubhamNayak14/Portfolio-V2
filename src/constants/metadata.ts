import PROJECTS from "./projects";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";

const METADATA = {
  projects: {
    title: "Shubham Nayak: Projects",
    description: "A collection of projects, replicas, and creative experiments by Shubham Nayak.",
    url: `${BASE_URL}/projects`,
    image: `${BASE_URL}/images/covers/projects.png`,
  },

  //  Async-safe single project metadata generator
  singleproject: async ({ id }: { id: string }) => {
    const project = PROJECTS.find((item) => item.id === id);

    if (project) {
      const { title, media } = project;
      const firstMedia =
        typeof media?.[0]?.source === "string"
          ? media[0].source
          : media?.[0]?.source?.src || "/images/covers/projects.png";

      return {
        title: `Shubham Nayak | Project | ${title}`,
        description: `${title} — a project by Shubham Nayak showcasing creativity and technical depth.`,
        url: `${BASE_URL}/projects/${id}`,
        image: `${BASE_URL}${firstMedia}`,
      };
    } else {
      return {
        title: `Shubham Nayak | Project`,
        description: `Invalid or unknown project.`,
        url: `${BASE_URL}/projects/${id}`,
        image: `${BASE_URL}/images/covers/invalid-project.png`,
      };
    }
  },
};

export default METADATA;
