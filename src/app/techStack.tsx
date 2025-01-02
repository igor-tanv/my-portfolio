
import React from "react";
import Image from "next/image";

interface Technology {
  name: string;
  logo: string;
}

interface TechStackProps {
  technologies: Technology[];
}

const TechStack: React.FC<TechStackProps> = ({
  technologies,
}) => {
  return (
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
  );
};

export default TechStack;
