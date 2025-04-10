'use client';

import { motion } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    name: 'Maciej Mikołajek',
    role: 'CEO & Founder',
    bio: 'Visionary entrepreneur with a passion for building beautiful products that solve real problems. Founder of Blinkfeed, GetCareToday and several other ventures that provided valuable lessons in product-market fit.',
    image: '/images/team-placeholder.jpg',
  },
  {
    name: 'Adam Styrkosz',
    role: 'CTO & Co-Founder',
    bio: 'Technical genius with an eye for detail, expertise in scalable architecture and developer experience. Brings technical precision and systematic thinking to every project.',
    image: '/images/team-placeholder.jpg',
  },
  {
    name: 'Łukasz Filipek',
    role: 'COO & Co-Founder',
    bio: 'Operations mastermind with a talent for making impossible things happen. Excels at turning vision into executable strategy and creating systems that scale.',
    image: '/images/team-placeholder.jpg',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet the <span className="neon-text">Team</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are a small but mighty team united by our passion for creating obvious solutions for common problems.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember 
              key={member.name} 
              member={member} 
              index={index} 
            />
          ))}
        </motion.div>

        <motion.div 
          className="glass-panel p-8 max-w-4xl mx-auto mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-neon-purple"></div>
          <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-neon-purple"></div>
          
          <h3 className="text-2xl md:text-3xl font-display mb-4">Our <span className="text-neon-purple">Story</span></h3>
          
          <p className="text-white/70 mb-4 leading-relaxed">
            It all began with Maciej's experience building Blinkfeed. After seeing the challenges of building products people actually want, 
            he recognized a pattern in successful startups: idea validation, MVP development, user feedback, iteration.
          </p>
          
          <p className="text-white/70 mb-4 leading-relaxed">
            "Building startups is a repeatable process," Maciej realized. "But most founders are so focused on building 
            that they forget to validate." He brought together Adam and Łukasz to form a team that could execute the full startup algorithm, 
            from validation to scale.
          </p>
          
          <p className="text-white/70 leading-relaxed">
            We've learned that creating products people genuinely need follows a clear pattern: validate first, 
            build second, and iterate constantly. This approach, combined with our commitment to elegant, 
            obvious solutions, is what makes OBVSLY different.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TeamMember({ member, index }: { member: typeof TEAM_MEMBERS[0], index: number }) {
  return (
    <motion.div 
      className="glass-panel overflow-hidden relative flex flex-col h-full"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
      viewport={{ once: true }}
      // whileHover={{ y: -5 }}
    >
      <div className="p-6 flex-grow">
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
          <div className={`absolute inset-0 ${
            index === 0 ? 'bg-neon-pink/20' : 
            index === 1 ? 'bg-neon-blue/20' : 'bg-neon-purple/20'
          }`}></div>
          <div className={`absolute inset-0 flex items-center justify-center text-6xl rounded-lg ${
            index === 0 ? 'border-2 border-neon-pink' : 
            index === 1 ? 'border-2 border-neon-blue' : 'border-2 border-neon-purple'
          }`}>
            {member.name.charAt(0)}
          </div>
        </div>
        
        <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
        <p className={`text-sm mb-4 ${
          index === 0 ? 'text-neon-pink' : 
          index === 1 ? 'text-neon-blue' : 'text-neon-purple'
        }`}>{member.role}</p>
        <p className="text-white/70 text-sm">{member.bio}</p>
      </div>
      
      <div className={`h-1 w-full mt-auto ${
        index === 0 ? 'bg-neon-pink' : 
        index === 1 ? 'bg-neon-blue' : 'bg-neon-purple'
      }`}></div>
    </motion.div>
  );
} 