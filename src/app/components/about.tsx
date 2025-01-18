'use client';

const About = () => {
  return (
    <section
   id="about"
  className="py-12 px-6 bg-gray-100 flex flex-col justify-center items-center"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          I&#39;m Igor Tatarinov, a full-stack software engineer with expertise in
          Node.js, AWS, TypeScript, React, Symfony, PHP, and Docker. My passion
          lies in solving complex problems and building scalable, user-friendly
          applications.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
          Outside of coding, I enjoy grappling workouts, exploring the outdoors,
          and diving into books about technology and global issues.
        </p>
      </div>
    </section>
  );
};

export default About;
