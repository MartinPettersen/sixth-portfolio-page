import React, { useEffect, useState } from "react";
import ProjectImageCard from "../(images)/ProjectImageCard";
import { Project } from "@/types/Project";
import { getProjectCategories } from "@/sanity/sanity-utils";

type Props = {
  label: string;
  category: string;
};

const CategoryShowcase = ({ label, category }: Props) => {
  const [projects, setProjects] = useState<Project[] | null>();

  useEffect(() => {
    const fetchData = async () => {
      const categoryProjects = await getProjectCategories(category);
      console.log(categoryProjects);
      setProjects(categoryProjects);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-10 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-2xl">{label}</h1>
      {projects ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-y-40 gap-x-20  items-center justify-center sm:pl-0`}
        >

          {projects.map((project, index) => (

            <ProjectImageCard
            imageUrl={project.image}
            textDescription={project.projectInfo}
            layout="responsive"
            slug={project.slug}
            key={index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CategoryShowcase;
