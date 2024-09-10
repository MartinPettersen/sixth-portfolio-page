import React from "react";

const Education = () => {
  const headlineOne =
    "Bachelor in Informatics: Programming and Networks(180sp)";
  const placeOne = "University of Oslo";
  const educationOne =
    "Programming and data communication. Programmering of machines. Create systems, programs and applications. Develop computer systems, program systems and algorithms. Understanding how software and operating systems work.";
  const headlineTwo = "Bachelor in Multimedia technology and design(180sp)";
  const placeTwo = "University of Agder, Grimstad";
  const educationTwo =
    "Theoretical and practical foundation in technology and multimedia. Such as graphic design, 3D-visualization and animation, video and audio production, image processing, webdesign and interactive media design.";

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">Education</h1>

      <div className="flex flex-col sm:flex-row gap-10  items-center justify-center pl-20">
        <div className="flex flex-col gap-4  ">
          <div className="text-lg">
            <h2>{headlineOne}</h2>
            <h2>{placeOne}</h2>
          </div>
          <p className="font-nunito w-[90%] sm:w-[80%]">{educationOne}</p>
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="text-lg">
            <h2>{headlineTwo}</h2>
            <h2>{placeTwo}</h2>
          </div>
          <p className="font-nunito w-[90%] sm:w-[80%]">{educationTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
