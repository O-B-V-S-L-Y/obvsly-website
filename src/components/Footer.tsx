'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-obvsly-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Logo and info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="w-14 h-auto" />
            </div>
            <p className="text-white/60 text-sm mb-6">
              Creating obvious solutions for common problems.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com`} 
                  className="text-white/60 hover:text-neon-pink transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="w-6 h-6 flex items-center justify-center border border-white/20 rounded-full">
                    {social.charAt(0).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h3 className="font-display text-sm tracking-wider text-white/80 mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              {[
                { name: 'Grass', href: 'https://o-b-v-s-l-y.github.io/grass-website/', external: true },
                { name: 'Coming Soon', href: '#', external: false }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-white/60 hover:text-neon-pink text-sm transition-colors"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Links */}
          <div>
            <h3 className="font-display text-sm tracking-wider text-white/80 mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {['About', 'Team', 'Vision', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-neon-pink text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-display text-sm tracking-wider text-white/80 mb-4">JOIN OUR JOURNEY</h3>
            <p className="text-white/60 text-sm mb-4">
              Sign up for updates on our latest products and company news.
            </p>
            <div className="relative flex items-center w-full">
              <input
                type="email"
                placeholder="Your email"
                className="glass-input text-sm w-full pr-20 rounded-md"
              />
              <button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-neon-pink text-black px-4 py-1.5 font-display text-sm hover:bg-opacity-80 transition-colors"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="w-full h-px bg-white/10 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} OBVSLY. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href="/" 
                className="text-white/40 hover:text-white/80 text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 