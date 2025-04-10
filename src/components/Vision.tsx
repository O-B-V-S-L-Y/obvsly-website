'use client';

import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="neon-text">Vision</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The startup algorithm: how we build products people actually want.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
          {/* Left column - Vision statement */}
          <motion.div 
            className="glass-panel p-8 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-neon-yellow"></div>
            <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-neon-yellow"></div>
            
            <h3 className="text-2xl font-display mb-6 text-neon-yellow">The Startup Algorithm</h3>
            
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                <span className="font-semibold text-white">1. Validate the problem</span> – Ensure you're solving a real pain point people care about.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                <span className="font-semibold text-white">2. Build minimum viable solution</span> – Create the simplest version that delivers value.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                <span className="font-semibold text-white">3. Get user feedback</span> – Learn directly from the people using your product.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                <span className="font-semibold text-white">4. Iterate rapidly</span> – Refine based on feedback, not assumptions.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                <span className="font-semibold text-white">5. Scale what works</span> – Once you've found fit, expand thoughtfully.
              </p>
            </div>
          </motion.div>
          
          {/* Right column - Values */}
          <motion.div 
            className="glass-panel p-8 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-neon-pink"></div>
            <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-neon-blue"></div>
            
            <h3 className="text-2xl font-display mb-6">Lessons <span className="text-neon-blue">Learned</span></h3>
            
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                Our journey with Blinkfeed taught us an essential truth: <span className="font-bold text-neon-green">building isn't enough</span>. 
                We were passionate builders who created a product that didn't solve a pressing problem.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                At OBVSLY, we've inverted this approach. We start with validation, focusing on 
                problems that are <span className="font-bold text-neon-pink">obvious</span> in their importance but 
                lack <span className="font-bold text-neon-blue">obvious</span> solutions.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                We believe the best startups follow a repeatable process – an algorithm that dramatically increases 
                the odds of creating something people truly need and want.
              </p>
              
              <div className="mt-8">
                <button className="button-glass">JOIN OUR JOURNEY</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/3 -right-20 h-40 w-40 rounded-full bg-neon-yellow/20 blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
} 