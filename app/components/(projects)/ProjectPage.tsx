"use client";
import { getProject } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import PortableTextSerializer from "../(sanity)/PortableTextSerializer";

type Props = {
  slug: string;
};

const ProjectPage = ({ slug }: Props) => {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const projectInfo = await getProject(slug);
      console.log("projectInfo", projectInfo);
      console.log("project.image", projectInfo.image);
      setProject(projectInfo);
    };

    fetchData();
  }, [slug]);

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center py-20 ">
      {project ? (
        <div className="flex flex-col gap-10 items-center justify-center ">
          <h1 className="font-manrope text-5xl font-bold">{project.name}</h1>
          <Image
            src={project.image}
            alt={project.alt}
            layout={"static"}
            width={800}
            height={800}
            className="h-[500px] object-contain object-center mt-3 aspect-auto "
          />

          <div className="flex flex-row gap-10">
            <Link
              href={project.githubLinks[0]}
              target="_blank"
              className="bg-[#bae6fd] rounded-xl shadow-lg hover:shadow-inner p-2 w-[82px] flex items-center justify-center border-2 border-solid border-[#52525b] hover:cursor-pointer"
            >
              Github
            </Link>
            {Array.isArray(project.hostLinks) &&
            project.hostLinks.length > 0 ? (
              <Link
                href={project.hostLinks[0]}
                target="_blank"
                className="bg-[#bae6fd] rounded-xl shadow-lg hover:shadow-inner p-2 w-[82px] flex items-center justify-center border-2 border-solid border-[#52525b] hover:cursor-pointer"
              >
                Host
              </Link>
            ) : null}
          </div>

          <p className="font-nunito max-w-[90%] sm:max-w-[60%]">
            <PortableText
              value={project.content}
              components={PortableTextSerializer}
            />
          </p>
          <div
            className={`grid grid-cols-2 sm:grid-cols-6 gap-y-4 gap-x-2 justify-items-center text-center  items-center  justify-center `}
          >
            {project.tech.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectPage;
