import React from 'react';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  textDescription: string;
  layout: string;
};

const ProjectImageCard = ({ imageUrl, textDescription, layout }: Props) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={"Project Image"}
          layout={layout}
          width={200}
          height={200}
          className="object-cover w-full h-full border-2 border-solid border-[#52525b]"
        />

        <div className="absolute group inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-70">
          <p className="font-nunito opacity-0 group-hover:opacity-100 text-[#F2F2F2] p-2 text-center">
            {textDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImageCard;
