'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section
  id="hero"
  className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-4"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
>
  <h1 className="text-5xl md:text-7xl font-bold mb-4">
    Hi, I'm Igor Tatarinov
  </h1>
  <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl">
    A full-stack developer passionate about building innovative and scalable web applications.
  </p>
  <a
    href="#projects"
    className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
  >
    View My Work
  </a>
</section>

  );
};

export default Hero;
