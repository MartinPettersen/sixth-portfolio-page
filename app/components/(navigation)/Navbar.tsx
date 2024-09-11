"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {

  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path); 
  };
  return (
    <div className="font-manrope flex flex-row gap-6 fixed right-10 top-0 pt-4 z-50 bg-[#F2F2F2] sm:bg-transparent">
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#home')}
      >
        Home
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#about')}
      >
        About
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#education')}
      >
        Education
      </h2>
      <h2
        className="hover:cursor-pointer"
        onClick={() => handleNavigation('/#projects')}
      >
        Projects
      </h2>
    </div>
  );
};

export default Navbar;
