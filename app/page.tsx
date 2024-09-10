import Navbar from "./components/(navigation)/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Welcome from "./pages/Welcome";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8 pb-20  sm:p-20 ">
      <Navbar />
      <Welcome />
      <About />
      <Education />
    </div>
  );
}
