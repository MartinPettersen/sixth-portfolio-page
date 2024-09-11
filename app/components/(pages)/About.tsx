import React, { useEffect, useState } from "react";
import { getAbout } from "@/sanity/sanity-utils";

const About = () => {
  const [aboutText, setAboutText] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const aboutInfo = await getAbout();
      setAboutText(aboutInfo[0]?.aboutInfo || "");
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">About</h1>
      <p className="font-nunito w-[90%] sm:w-[60%]">{aboutText}</p>

    </div>
  );
};

export default About;
