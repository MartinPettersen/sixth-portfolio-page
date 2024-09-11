import React, { useEffect, useState } from "react";
import ProjectImageCard from "../(images)/ProjectImageCard";
import Link from "next/link";
import { getProjectCategories, getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import CategoryShowcase from "../(projects)/CategoryShowcase";
import CategoryShowcaseWebsite from "../(projects)/CategoryShowcaseWebsite";
import { useRouter } from "next/navigation";

const Projects = () => {
  const textScreen =
    "This is a webpage project. Lorem ipsum etc and all that JAZZ if you get my drift";
  const textPhone =
    "This is a SmartPhone project. Lorem ipsum etc and all that JAZZ if you get my drift";

    const [projects, setProjects] = useState<Project[] | null>();

    useEffect(() => {
      const fetchData = async () => {
        const categoryProjects = await getProjectCategories("website")
        console.log(categoryProjects)
        setProjects(categoryProjects);
      };
  
      fetchData();
    }, []);


    const router = useRouter();

    const handleNavigation = (path: string) => {
      router.push(path); 
    };

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">Projects</h1>
      <div className="flex flex-row gap-4">
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#websites')}
      >
        Websites
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#mobile')}
      >
        Mobile
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#diverse')}
      >
        Diverse
      </h2>
      </div>
      <section id="websites" className="snap-start">
      <CategoryShowcaseWebsite label={"Websites"} category={"website"} gridNumber={2}/>
      </section>
      
      <section id="mobile" className="snap-start">
      <CategoryShowcase label={"Mobile Projects"} category={"mobile"} gridNumber={3}/>
      </section>
      
      <section id="diverse" className="snap-start">
      <CategoryShowcaseWebsite label={"Diverse"} category={"diverse"} gridNumber={2}/>
      </section>
    </div>
  );
};

export default Projects;
