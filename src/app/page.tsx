import Image from "next/image";
import Hero from "./hero"

export default function Home() {
  const frontendTechnologies = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Gatsby", logo: "/logos/gatsby.svg" },
    { name: "HTML/CSS", logo: "/logos/html5.svg" },
    { name: "Handlebars", logo: "/logos/handlebars.svg" },
  ];

  const backendTechnologies = [
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "AWS Lambda", logo: "/logos/awslambda.svg" },
    { name: "AWS API Gateway", logo: "/logos/awsapigateway.svg" },
    { name: "AWS S3", logo: "/logos/amazons3.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "Symfony", logo: "/logos/symfony.svg" },
  ];


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {<Hero/>}
      {/* My Stack Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-50 to-gray-100 text-gray-800 text-center sm:text-left"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Technologies I Use
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Frontend Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-blue-500">
                Frontend
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {frontendTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center shadow-md bg-white rounded-lg p-4 hover:scale-105 transition-transform"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <p className="mt-3 font-medium text-gray-700">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-blue-500">
                Backend
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {backendTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center shadow-md bg-white rounded-lg p-4 hover:scale-105 transition-transform"
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <p className="mt-3 font-medium text-gray-700">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">
                A brief description of your project and its key features.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
            {/* Project 2 */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">
                A brief description of your project and its key features.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
            {/* Project 3 */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600 mb-4">
                A brief description of your project and its key features.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2024 Igor Tatarinov. All rights reserved.</p>
      </footer>
    </div>
  );
}