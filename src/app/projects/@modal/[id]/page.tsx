import ProjectClient from "@/app/projects/[id]/ProjectClient";

export default function ModalPage({ params }: { params: { id: string } }) {
  return <ProjectClient id={params.id} />;
}
