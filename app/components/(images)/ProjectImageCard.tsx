"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  textDescription: string;
  layout: string;
  slug: string,
};

const ProjectImageCard = ({ imageUrl, textDescription, layout, slug }: Props) => {
  const [hideDisplayInfo, setHideDisplayInfo] = useState(true);
  console.log("imageUrl", imageUrl)
  return (
    <div className="relative flex shadow-lg hover:shadow-none flex-col items-start sm:items-center justify-center w-full h-auto overflow-hidden">
      <div className="relative w-full h-full p-2 sm:p-0">
        <Link href={`../Project/${slug}`}>
          <Image
            src={imageUrl}
            alt={"Project Image"}
            layout={layout}
            width={200}
            height={200}
            className="object-cover w-full h-full border-2 border-solid border-[#52525b]"
          />

          <div className="absolute group inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-70">
            <p className="font-nunito font-normal opacity-0 group-hover:opacity-100 text-[#F2F2F2] p-2 text-center">
              {textDescription}
            </p>
          </div>
        </Link>
      </div>
      <div className="sm:hidden ">
        {hideDisplayInfo ? (
          <p className="ml-2 font-nunito" onClick={() => setHideDisplayInfo(false)}>more...</p>
        ) : (
          <div className="ml-2 mb-20">
            <p className="font-nunito" onClick={() => setHideDisplayInfo(true)}>less...</p>
            <p className="font-nunito">
              {textDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectImageCard;
