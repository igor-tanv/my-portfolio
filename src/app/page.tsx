import Projects from "./components/projects";
import TechStack from "./components/techStack";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

import projects from "../data/projects.json";
import technologies from "../data/technologies.json";

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">

      <Navbar />

      <Hero />

     <About/>

      <TechStack technologies={technologies}/>

      <Projects projects={projects} />

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-500">© 2024 Igor Tatarinov. All rights reserved.</p>
        <a
          href="#hero"
          className="text-cyan-400 hover:underline block mt-2"
        >
          Back to Top
        </a>
      </footer>
    </div>
  );
}
