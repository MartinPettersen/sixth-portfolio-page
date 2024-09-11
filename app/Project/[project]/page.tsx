import React from "react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

const page = ({ params }: Props) => {
  const project = params.project;
  const imageUrl = "/images/screen_image.png";
  const projectText =
    "En Forum Oppgave. Brukere må kunne registrere seg og logge inn Et innlegg hører til et forum/kategori Et innlegg kan ha flere svar Kun registrerte brukere kan skrive innlegg og svar Hjemmesiden skal vise oversikt over seneste innlegg, og man skal kunne filtrere på kategori/forum Innlegg på forsiden skal vise antall svar Forfatter skal kunne slette egne innlegg og svar, men ikke andres Forfatter skal kunne redigere egne innlegg og svar, men ikke andres Legge til noe feks en tekst [edited] som gjør at folk kan se om et svar er redigert Brukere skal kunne dele/linke til tråder Man skal kunne dele/linke til kommentarer Det skal være mulig å klikke på en bruker og se post- og forumtråder de har laget Brukere skal kunne rapportere en kommentar eller tråd Administrator skal kunne se tråder og kommentarer som har blitt rapportert Administrator skal kunne slette kommentarer og tråder som er upassende Man skal bli spurt om man faktisk ønsker å slette før noe blir slettet Brukerene skal kunne kommentere på andre sine kommentarer Man skal kunne se at en kommentar er et svar på en spesifikk kommentar Man skal kunne se datoene for når en tråd ble laget Man skal kunne se datoene for når en post ble laget Bruker skal kunne slette sin egen bruker Brukere skal kunne raportere andre brukere Admin skal kunne slette raporterte brukere Det skal være reserverte brukernavn som man ikke skal kunne kalle seg selv, som feks Admin eller lignende navn som kan brukes med ille hensikter";
  const tech = [
    "Next",
    "React",
    "Tailwind",
    "Mongodb",
    "Mongodb-Atlas",
    "No-SQL",
    "Vercel",
    "TypeScript",
    "Next-Auth",
    "Google-Authentication",
  ];

  return (
    <div className="flex flex-col gap-20 font-bold min-h-screen min-w-screen items-center justify-center py-20">
      <h1 className="font-manrope text-5xl">{project}</h1>
      <Image
        src={imageUrl}
        alt={"Project Image"}
        layout={"static"}
        width={800}
        height={800}
        className="object-contain border-2 border-solid border-[#52525b]"
      />

      <div className="flex flex-row gap-10">
        <div className="bg-[#bae6fd] rounded-xl shadow-lg hover:shadow-inner p-2 w-[82px] flex items-center justify-center border-2 border-solid border-[#52525b] hover:cursor-pointer">
          Github
        </div>
        <div className="bg-[#bae6fd] rounded-xl shadow-lg hover:shadow-inner p-2 w-[82px] flex items-center justify-center border-2 border-solid border-[#52525b] hover:cursor-pointer">
          Host
        </div>
        <div className="bg-[#bae6fd] rounded-xl shadow-lg hover:shadow-inner p-2 w-[82px] flex items-center justify-center border-2 border-solid border-[#52525b] hover:cursor-pointer">
          Backend
        </div>
      </div>

      <p className="font-nunito w-[90%] sm:w-[60%]">{projectText}</p>
    </div>
  );
};

export default page;
