"use client";

import ProjectHore from "@/components/ProjectHore";
import BadgeButton from "@/components/ui/badge-button";
import Project from "@/components/projects";
import ScrollText from "@/components/ScrollText";
import ComingSoon from "@/components/ComingSoon";
import Coming from '@/components/Coming';

const initFilterBy = "tech-stack";
const initFilterKey = "all";

export default function ProjectsPage() {
  return (
    <>
      <ProjectHore />

      <Project initFilterBy={initFilterBy} initFilterKey={initFilterKey} />
      {/* <ComingSoon /> */}
      <Coming/>
      <ScrollText text="Let'sconnect" className="" />
      <div className="w-full flex justify-center py-15  top-0 md:py-20">
        <BadgeButton />
      </div>
    </>
  );
}
