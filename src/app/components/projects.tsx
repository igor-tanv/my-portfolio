'use client';

import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
              <Image
  src={project.image}
  alt={project.title}
  layout="fill"
  objectFit="cover"
  className="group-hover:opacity-80 transition-opacity"
/>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
