import React from "react";

const About = () => {
  const aboutText =
    `I have a bachelor in Informatics: Programming and Networks and a bachelor in Multimedia Technology and design. I have also completed a 3 month Full Stack JavaScript bootcamp. As a person I am dedicated and give a hundred percent to what I'm working with.I work very well independently, while I also want to learn from others and to be able to share knowledge myself. I am passionate about finding good solutions as well as smart ways to work and believe that we never finish learning. I’m motivated by tasks that require thinking and have a great appreciation of intelligent solutions even when I’m not the one to create them.`;

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">About</h1>
      <p className="font-nunito w-[90%] sm:w-[60%]">{aboutText}</p>
    </div>
  );
};

export default About;
