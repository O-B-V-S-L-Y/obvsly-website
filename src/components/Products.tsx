'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import GrassIcon from './GrassIcon';

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="neon-text">Produce</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each product we build follows our validation-first methodology to ensure we solve real problems.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          <motion.div 
            className="glass-panel p-8 md:p-12 relative max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Product grid & content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left column - Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 blur-lg rounded-lg"></div>
                <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-6 rounded-lg relative">
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <GrassIcon width={240} height={240} className="w-full h-auto drop-shadow-xl" />
                  </motion.div>
                </div>
              </div>

              {/* Right column - Content */}
              <div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-display font-bold mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-neon-green">Grass</span>
                </motion.h3>
                <motion.h4 
                  className="text-xl md:text-2xl font-light text-white/90 mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  The inbox, reinvented. Again.
                </motion.h4>
                <motion.p 
                  className="text-white/70 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  We validated the problem: email has become a source of stress rather than productivity. Through extensive user research, we confirmed that people struggle with inbox overwhelm.
                </motion.p>
                <motion.p 
                  className="text-white/70 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Grass is our solution: a radically simplified email experience that helps you process your inbox faster. Swipe effortlessly, triage instantly, respond intelligently.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button className="button-neon" onClick={() => window.open('https://o-b-v-s-l-y.github.io/grass-website/', '_blank')}>LEARN MORE</button>
                </motion.div>
              </div>
            </div>
            

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-8 w-8 border-t-2 border-r-2 border-neon-green"></div>
            <div className="absolute -bottom-4 -left-4 h-8 w-8 border-b-2 border-l-2 border-neon-green"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 