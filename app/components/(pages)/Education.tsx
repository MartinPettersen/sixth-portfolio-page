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
        <div className="flex flex-col gap-10 sm:flex-row items-start justify-center w-full px-10">
          <div className="flex flex-col gap-4 w-full sm:w-1/2 p-6">
            
            <div className="text-lg flex flex-col">
              <h2>{education.secondBach}</h2>
              <h2>{education.secondBachLocation}</h2>
            </div>
            <p className="font-nunito">
              {education.secondBachInfo}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2 p-6">
            <div className="flex flex-col gap-4  ">
              <div className="text-lg">
                <h2>{education.firstBach}</h2>
                <h2>{education.firstBachLocation}</h2>
              </div>
              <p className="font-nunito">
                {education.firstBachInfo}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Education;
