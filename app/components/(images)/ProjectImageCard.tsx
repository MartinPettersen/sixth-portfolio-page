import React from 'react'
import Image from "next/image";


type Props = {
    imageUrl: string;
    textDescription: string;
    layout: string
}

const ProjectImageCard = ( {imageUrl, textDescription, layout}: Props) => {
  return (
    <div className="flex flex-col gap-0 items-center justify-center">
      <div className="w-[100%] h-[100%]  flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={"Project Image"}
          layout={layout}
          width={200}
          height={200}
          className="object-contain  border-solid border-2 border-[#52525b]"
        />
      </div>
      <p className="font-nunito w-[90%] sm:w-[80%]">{textDescription}</p>
    </div>
  )
}

export default ProjectImageCard