
import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
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
  );
};

  

export default Projects