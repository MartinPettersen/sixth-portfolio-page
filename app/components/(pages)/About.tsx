import React, { useEffect, useState } from "react";
import { getAbout } from "@/sanity/sanity-utils";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import PortableTextSerializer from "../(sanity)/PortableTextSerializer";

const About = () => {
  const [aboutText, setAboutText] = useState<PortableTextBlock[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const aboutInfo = await getAbout();
      setAboutText(aboutInfo[0]?.aboutContent as PortableTextBlock[]|| null);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-20  min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl font-bold">About</h1>
      {aboutText ? (
        <p className="font-nunito w-[90%] sm:w-[60%]">
          <PortableText value={aboutText} components={PortableTextSerializer} />
        </p>
      ) : null}
    </div>
  );
};

export default About;
