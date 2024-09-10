import React from "react";
import Image from "next/image";

const Projects = () => {
  const textScreen =
    "This is a webpage project. Lorem ipsum etc and all that JAZZ if you get my drift";
  const textPhone =
    "This is a SmartPhone project. Lorem ipsum etc and all that JAZZ if you get my drift";

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  items-center justify-center sm:pl-4">
        <div className="flex flex-col gap-0 items-center justify-center">
          <Image
            src={"/images/screen_image.png"}
            alt={"Project Image"}
            layout="responsive"
            width={200}
            height={200}
            className="object-cover border-solid border-2 border-[#52525b]"
          />
          <p className="font-nunito w-[90%] sm:w-[80%]">{textScreen}</p>
        </div>

        <div className="flex flex-col gap-0 items-center justify-center">
          <Image
            src={"/images/screen_image.png"}
            alt={"Project Image"}
            layout="responsive"
            width={200}
            height={200}
            className="object-cover  border-solid border-2 border-[#52525b]"
          />
          <p className="font-nunito w-[90%] sm:w-[80%]">{textScreen}</p>
        </div>
        <div className="flex flex-col gap-0 items-center justify-center">
          <Image
            src={"/images/screen_image.png"}
            alt={"Project Image"}
            layout="responsive"
            width={200}
            height={200}
            className="object-cover border-solid border-2 border-[#52525b]"
          />
          <p className="font-nunito w-[90%] sm:w-[80%]">{textScreen}</p>
        </div>

        <div className="flex flex-col gap-0 items-center justify-center">
          <Image
            src={"/images/phone_image.png"}
            alt={"Project Image"}
            layout="static"
            width={200}
            height={200}
            className="object-contain  border-solid border-2 border-[#52525b]"
          />
          <p className="font-nunito w-[90%] sm:w-[80%]">{textPhone}</p>
        </div>
        <div className="flex flex-col gap-0 items-center justify-center">
          <Image
            src={"/images/phone_image.png"}
            alt={"Project Image"}
            layout="static"
            width={200}
            height={200}
            className="object-contain  border-solid border-2 border-[#52525b]"
          />
          <p className="font-nunito w-[90%] sm:w-[80%]">{textPhone}</p>
        </div>
                <div className="flex flex-col gap-0 items-center justify-center">
          <Image
            src={"/images/phone_image.png"}
            alt={"Project Image"}
            layout="static"
            width={200}
            height={200}
            className="object-contain  border-solid border-2 border-[#52525b]"
          />
          <p className="font-nunito w-[90%] sm:w-[80%]">{textPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
