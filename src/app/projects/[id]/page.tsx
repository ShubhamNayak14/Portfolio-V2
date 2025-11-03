import { Metadata } from "next";
import { PROJECTS, METADATA } from "@/constants";
import ProjectClient from "./ProjectClient";

//  Generate static params for pre-rendered routes
export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

//  Await params before using it
export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ProjectClient id={id} />;
}

//  Await params and metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { title, description, image, url } = await METADATA.singleproject(resolvedParams);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
