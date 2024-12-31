import Image from "next/image";
import Head from "next/head";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
      <Head />

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

      {/* Navbar */}
      <nav className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 flex justify-center space-x-8">
          <a href="#hero" className="text-gray-300 hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">
            About
          </a>
          <a href="#technologies" className="text-gray-300 hover:text-cyan-400 transition">
            Tech Stack
          </a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">
            Projects
          </a>
        </div>
      </nav>

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

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center shadow-lg bg-gray-700 rounded-lg p-4 transition-transform hover:scale-105"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <p className="mt-3 font-medium text-gray-200">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 shadow-lg rounded-lg p-6 transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
