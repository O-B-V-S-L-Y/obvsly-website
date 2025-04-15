'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const navItems = ['Team', 'Vision'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 relative h-full">
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

        <Link href="#contact" className="glass-panel px-4 py-2 hidden md:block hover:bg-white/10 transition-colors">
          <span className="font-display text-sm tracking-wider">CONTACT US</span>
        </Link>

        <button 
          className="md:hidden text-2xl z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span>{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 w-full bg-obvsly-darker/95 backdrop-blur-md md:hidden flex flex-col items-center space-y-4 py-6 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-display text-lg tracking-wider hover:text-neon-pink transition-colors"
              onClick={toggleMobileMenu}
            >
              {item.toUpperCase()}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="font-display text-lg tracking-wider hover:text-neon-pink transition-colors"
            onClick={toggleMobileMenu}
          >
            CONTACT US
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
} 