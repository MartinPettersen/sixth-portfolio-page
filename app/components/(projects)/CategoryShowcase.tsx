import React, { useEffect, useState } from "react";
import ProjectImageCard from "../(images)/ProjectImageCard";
import { Project } from "@/types/Project";
import { getProjectCategories } from "@/sanity/sanity-utils";

type Props = {
  label: string;
  category: string;
  gridNumber: number;
};

const CategoryShowcase = ({ label, category, gridNumber }: Props) => {
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
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-2xl pb-20">{label}</h1>
      {projects ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-${gridNumber} gap-y-80 gap-x-40  items-center justify-center sm:pl-4`}
        >
          {projects.map((project, index) => (
            <div className="flex items-center justify-center">
              <div className="w-[200px] h-[200px] flex items-center justify-center">
                <ProjectImageCard
                  imageUrl={project.image}
                  textDescription={project.projectInfo}
                  layout="static"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CategoryShowcase;
