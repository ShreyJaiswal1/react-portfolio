import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
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
  SiN8N
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const techStack: TechItem[] = [
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'Python', icon: <SiPython />, color: 'text-blue-400' },
  { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
  { name: 'Express', icon: <SiExpress />, color: 'text-gray-300' },
  { name: 'SQL', icon: <SiMysql />, color: 'text-orange-400' },
  { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
  { name: 'Git', icon: <SiGit />, color: 'text-red-500' },
  { name: 'Cloud', icon: <SiGooglecloud />, color: 'text-purple-400' },
  { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-400' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-red-500' },
  { name: 'AI/ML', icon: <SiOpenai />, color: 'text-pink-400' },
  { name: 'n8n', icon: <SiN8N />, color: 'text-red-700' },
];

export const TechStack: React.FC = () => {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-6'>
            Tech Stack
          </h2>
          <p className='text-foreground-secondary text-lg max-w-2xl mx-auto'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
              }}
            >
              <GlassCard
                variant='primary'
                className='text-center group cursor-pointer h-32 flex flex-col items-center justify-center'
              >
                <motion.div
                  className={`text-5xl ${tech.color} mb-3 group-hover:animate-pulse`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className='text-foreground font-medium text-sm'>
                  {tech.name}
                </h3>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
