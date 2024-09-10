"use client";
import React from "react";

const Navbar = () => {
  const handleScrollTo = (element: string) => {
    const section = document.getElementById(element);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="font-manrope flex flex-row gap-6 fixed right-10 top-0 pt-4">
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleScrollTo("home")}
      >
        Home
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleScrollTo("about")}
      >
        About
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleScrollTo("education")}
      >
        Education
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleScrollTo("projects")}
      >
        Projects
      </h2>
    </div>
  );
};

export default Navbar;
