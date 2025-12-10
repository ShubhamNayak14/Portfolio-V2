import ProjectClient from "@/app/projects/[id]/ProjectClient";

// export default function ModalPage({ params }: { params: { id: string } }) {
//   return <ProjectClient id={params.id} />;
// }



export default async function ModalPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 3. Await the params before using properties
  const { id } = await params;

  return <ProjectClient id={id} />;
}