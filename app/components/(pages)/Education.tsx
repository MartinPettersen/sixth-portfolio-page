import { getEducation } from "@/sanity/sanity-utils";
import { Education as EducationType } from "@/types/Education";
import React, { useEffect, useState } from "react";

const Education = () => {

  const [education, setEducation] = useState<EducationType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const educationInfo = await getEducation();
      setEducation(educationInfo[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-20  min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl font-bold">Education</h1>

      {education ? (
        <div className="flex flex-col sm:flex-row items-center justify-center pl-0">
          <div className="flex flex-col gap-4 ">
            <div className="text-lg flex flex-col" >
              <h2>{education.secondBach}</h2>
              <h2>{education.secondBachLocation}</h2>
            </div>
            <p className="font-nunito w-[90%] sm:w-[80%]">{education.secondBachInfo}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10  items-center justify-center sm:pl-20">
            <div className="flex flex-col gap-4  ">
              <div className="text-lg">
                <h2>{education.firstBach}</h2>
                <h2>{education.firstBachLocation}</h2>
              </div>
              <p className="font-nunito w-[90%] sm:w-[80%]">{education.firstBachInfo}</p>
            </div>
          </div>
        </div>
      ) : null}
      {/* 
      <div className="bg-[#bae6fd] rounded-xl shadow-lg hover:shadow-inner p-2 w-[142px] flex items-center justify-center border-2 border-solid border-[#52525b] hover:cursor-pointer">Download CV</div>
      */}
    </div>
  );
};

export default Education;
