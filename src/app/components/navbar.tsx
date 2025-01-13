'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section tracking
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#hero"
          className={`text-xl font-bold transition-colors ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          Igor Tatarinov
        </Link>
        <div className="space-x-6">
          {['about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`transition-colors font-medium ${
                scrolled
                  ? activeSection === section
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-500'
                  : activeSection === section
                  ? 'text-blue-300'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
