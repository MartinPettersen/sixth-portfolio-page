import React from "react";
import ProjectPage from "@/app/components/(projects)/ProjectPage";

type Props = {
  params: { project: string };
};

const page = ({ params }: Props) => {
  const projectSlug = params.project;
  
  return (
    <ProjectPage slug={projectSlug}/>
  );
};

export default page;
