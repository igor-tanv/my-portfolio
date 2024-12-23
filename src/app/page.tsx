import Image from "next/image";

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
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen"
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Igor</span>
        </h1>
        <p className="text-lg max-w-3xl">
          Full Stack software engineer specializing in building beautiful,
          functional websites and applications.
        </p>
        <a
          href="#about"
          className="mt-6 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-lg"
        >
          Learn More
        </a>
      </section>

      {/* My Stack Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-50 to-gray-100 text-gray-800 text-center sm:text-left"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2024 Igor Tatarinov. All rights reserved.</p>
      </footer>
    </div>
  );
}