import Image from "next/image";
import Projects from "./projects";
import TechStack from "./techStack";
import Navbar from "./navbar";

export default function Home() {


// src/data/projectsData.ts
const projects = [
  {
    title: "Project One",
    description: "A full-stack application that demonstrates...",
    link: "#",
  },
  {
    title: "Project Two",
    description: "An AWS-powered microservices architecture...",
    link: "#",
  },
  {
    title: "Project Three",
    description: "An e-commerce platform built with...",
    link: "#",
  },
];

  const technologies = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "TypeScript", logo: "/logos/typescript.png" },
    { name: "Symfony", logo: "/logos/symfony.svg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">

      {/* Hero Section */}
      <section id="hero" className="bg-gray-800 py-20 text-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white">Igor Tatarinov</h1>
          <p className="text-xl mt-4 text-gray-400">
            Full-Stack Software Engineer specializing in scalable solutions.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-8 py-3 text-gray-900 bg-cyan-400 rounded hover:bg-cyan-300 transition"
          >
            View My Work
          </a>
        </div>
      </section>

      <Navbar />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-white text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-400 text-center leading-relaxed">
            I am a passionate software engineer with a deep understanding of modern
            development practices, specializing in cloud-native applications and
            scalable systems. I enjoy building solutions that make an impact.
          </p>
        </div>
      </section>

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
