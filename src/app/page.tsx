import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

import projects from "../data/projects.json";

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">

      <Navbar />

      <Hero />

     <About/>

      <Projects projects={projects} />

      <Contact/>

      <Footer/>
    </div>
  );
}
