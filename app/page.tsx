import Navbar from "./components/(navigation)/Navbar";
import About from "./components/(pages)/About";
import Education from "./components/(pages)/Education";
import Projects from "./components/(pages)/Projects";
import Welcome from "./components/(pages)/Welcome";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8 pb-20  sm:p-20 ">
      <Navbar />
      <Welcome />
      <About />
      <Education />
      <Projects />
    </div>
  );
}
