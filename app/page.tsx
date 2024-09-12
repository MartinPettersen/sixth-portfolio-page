"use client"
import { useEffect } from "react";
import About from "./components/(pages)/About";
import Education from "./components/(pages)/Education";
import Projects from "./components/(pages)/Projects";
import Welcome from "./components/(pages)/Welcome";

export default function Home() {

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if(hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth"});
      }
    }    
  }, [])

  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8 pb-20  sm:p-20 ">
      <section id="home" className="snap-start">

      <Welcome />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="education" className="snap-start">
        <Education />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
}
