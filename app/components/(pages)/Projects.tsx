import React from "react";
import ProjectImageCard from "../(images)/ProjectImageCard";

const Projects = () => {
  const textScreen =
    "This is a webpage project. Lorem ipsum etc and all that JAZZ if you get my drift";
  const textPhone =
    "This is a SmartPhone project. Lorem ipsum etc and all that JAZZ if you get my drift";

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-60 gap-x-10  items-center justify-center sm:pl-4">
        <ProjectImageCard
          imageUrl="/images/screen_image.png"
          textDescription={textScreen}
          layout="responsive"
        />
        <ProjectImageCard
          imageUrl="/images/screen_image.png"
          textDescription={textScreen}
          layout="responsive"
        />
        <ProjectImageCard
          imageUrl="/images/screen_image.png"
          textDescription={textScreen}
          layout="responsive"
        />
        <div className="flex items-center justify-center">
          <div className="w-[200px] h-[200px] flex items-center justify-center">
            <ProjectImageCard
              imageUrl="/images/phone_image.png"
              textDescription={textPhone}
              layout="static"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[200px] h-[200px] flex items-center justify-center">
            <ProjectImageCard
              imageUrl="/images/phone_image.png"
              textDescription={textPhone}
              layout="static"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[200px] h-[200px] flex items-center justify-center">
            <ProjectImageCard
              imageUrl="/images/phone_image.png"
              textDescription={textPhone}
              layout="static"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
