import React from "react";
import CategoryShowcase from "../(projects)/CategoryShowcase";
import CategoryShowcaseWebsite from "../(projects)/CategoryShowcaseWebsite";
import ProjectNavbar from "../(navigation)/ProjectNavbar";

const Projects = () => {

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center pb-20">
      <h1 className="font-manrope text-5xl">Projects</h1>
      <ProjectNavbar />
      <section id="websites" className="snap-start">
        <CategoryShowcaseWebsite
          label={"Websites"}
          category={"website"}
        />
      </section>

      <section id="mobile" className="snap-start">
        <CategoryShowcase
          label={"Smartphone Projects"}
          category={"mobile"}
        />
      </section>

      <section id="diverse" className="snap-start">
        <CategoryShowcaseWebsite
          label={"Miscellaneous"}
          category={"diverse"}
        />
      </section>
    </div>
  );
};

export default Projects;
