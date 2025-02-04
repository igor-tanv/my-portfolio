'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setAnimate(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen text-white flex flex-col justify-center items-center px-4 overflow-hidden">
  <Image
    src="/hero-background.jpg"
    alt="Hero Background"
    layout="fill"
    objectFit="cover"
    priority
    className="absolute inset-0 z-0" // Ensures it covers the section and sits behind content
  />

  <div className={`relative z-10 transition-opacity duration-1000 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
    <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I&#39;m Igor Tatarinov</h1>
    <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl text-center">
      A full-stack developer passionate about building innovative and scalable web applications.
    </p>
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
    >
      View My Work
    </a>
  </div>
</section>

  );
};

export default Hero;
