'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 12 * 8 }).map((_, i) => (
          <div key={i} className="h-40 border-t border-l border-white/10"></div>
        ))}
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 tracking-tight">
            <span className="neon-text">O B V S L Y</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90">
            We build <span className="text-neon-blue">obvious</span> solutions for <span className="text-neon-pink">validated</span> problems.
          </h2>
          
          <motion.div 
            className="glass-panel p-8 max-w-3xl mx-auto mb-12 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-neon-pink"></div>
            <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-neon-blue"></div>
            
            <p className="text-lg md:text-xl font-light leading-relaxed">
              Great products aren't just built—they're <span className="font-semibold text-neon-green">methodically crafted</span> through validation, 
              testing, and iteration. We turn this process into a repeatable algorithm for startup success.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.button 
              className="button-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const teamSection = document.getElementById('team');
                if (teamSection) teamSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              OUR TEAM
            </motion.button>
            
            <motion.button 
              className="button-glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const visionSection = document.getElementById('vision');
                if (visionSection) visionSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              THE ALGORITHM
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 h-40 w-40 rounded-full bg-neon-pink/20 blur-3xl"
        animate={{ 
          x: [0, 40, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-20 h-60 w-60 rounded-full bg-neon-blue/20 blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
} 