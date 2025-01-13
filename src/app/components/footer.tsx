'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center">
      <p className="text-gray-500">© 2024 Igor Tatarinov. All rights reserved.</p>

      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://github.com/igor-tanv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/igor-tatarinov-010244a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>

      <a href="#hero" className="text-cyan-400 hover:underline block mt-4">
        Back to Top
      </a>
    </footer>
  );
};

export default Footer;
