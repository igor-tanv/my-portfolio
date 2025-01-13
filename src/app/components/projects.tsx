import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string; // Added the image property
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
              {/* Make the image clickable */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </a>

              {/* Render the project title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              {/* Render the project description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Render the project link */}
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
