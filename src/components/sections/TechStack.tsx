import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiOpenai,
  SiN8N,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiVite
} from 'react-icons/si';

// First row of technologies going left
const techRow1 = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Framer', icon: <SiFramer /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
];

// Second row of technologies going right
const techRow2 = [
  { name: 'Python', icon: <SiPython /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Google Cloud', icon: <SiGooglecloud /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'AI/ML APIs', icon: <SiOpenai /> },
  { name: 'n8n', icon: <SiN8N /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'CSS3', icon: <SiCss3 /> },
];

export const TechStack: React.FC = () => {
  return (
    <section className='py-32 overflow-hidden relative border-y-4 border-foreground bg-background'>
      
      {/* Brutalist Grid Background overlay for the marquee section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16 flex flex-col items-center'
        >
          <div className="inline-block px-4 py-2 border-2 border-foreground bg-foreground text-background font-black uppercase tracking-widest mb-6">
            Stack.
          </div>
          <h2 className='text-4xl md:text-6xl font-black uppercase text-foreground mb-6 tracking-tighter'>
            Arsenal & Capabilities
          </h2>
          <div className="w-16 h-2 bg-foreground mb-6"></div>
          <p className='text-foreground-secondary text-lg font-medium max-w-2xl mx-auto'>
            A comprehensive suite of modern tools and frameworks to engineer resilient, scalable, and brutal systems.
          </p>
        </motion.div>
      </div>

      <div className='flex flex-col gap-8 relative z-10'>
        

        {/* First Marquee - Moving Left */}
        <div className="flex w-[200vw] sm:w-max group">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 30, // Smooth continuous
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techRow1, ...techRow1].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Second Marquee - Moving Right */}
        <div className="flex w-[200vw] sm:w-max group">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["-50%", 0] }}
            transition={{
              duration: 35, // Slightly different speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techRow2, ...techRow2].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Brutalist Badge
const TechBadge = ({ tech }: { tech: any }) => (
  <div className="flex items-center gap-4 px-6 py-4 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default min-w-max group/badge">
    <div 
      className="text-4xl transition-transform duration-300 group-hover/badge:scale-110 text-foreground"
    >
      {tech.icon}
    </div>
    <span className="text-xl font-black uppercase text-foreground tracking-tight">{tech.name}</span>
  </div>
);
