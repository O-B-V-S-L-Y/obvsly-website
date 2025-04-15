'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-obvsly-darker/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo className="h-auto w-16" />
        </Link>

        <div className="hidden md:flex space-x-8">
          {['About', 'Team', 'Vision'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-display text-sm tracking-wider hover:text-neon-pink transition-colors"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <button className="glass-panel px-4 py-2 hidden md:block">
          <span className="font-display text-sm tracking-wider">CONTACT US</span>
        </button>

        <button className="md:hidden text-2xl">
          <span>☰</span>
        </button>
      </div>
    </motion.nav>
  );
} 