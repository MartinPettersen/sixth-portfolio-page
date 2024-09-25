import { useRouter } from "next/navigation";
import React from "react";

const ProjectNavbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="font-manrope text-sm flex flex-row gap-4 top-4 sticky  text-[#52525b]  z-50 p-2 px-4 rounded-full bg-[rgba(242,242,242,0.5)] backdrop-blur-sm">
      <p
        className="hover:cursor-pointer "
        onClick={() => handleNavigation("/#websites")}
      >
        Websites
      </p>
      <p
        className="hover:cursor-pointer"
        onClick={() => handleNavigation("/#mobile")}
      >
        Smartphone
      </p>
      <p
        className="hover:cursor-pointer"
        onClick={() => handleNavigation("/#diverse")}
      >
        Miscellaneous
      </p>
    </div>
  );
};

export default ProjectNavbar;
