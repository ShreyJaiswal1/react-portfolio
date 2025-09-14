import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Music, Gamepad2, Brain, Coffee, Camera, BookOpen } from 'lucide-react';

const interests = [
  {
    name: 'Guitar',
    icon: Music,
    description: 'Creating melodies and exploring different musical styles',
    color: 'text-purple-400',
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    description: 'Strategy games and competitive gaming experiences',
    color: 'text-blue-400',
  },
  {
    name: 'AI Tools',
    icon: Brain,
    description: 'Experimenting with cutting-edge AI technologies',
    color: 'text-green-400',
  },
  {
    name: 'Coffee',
    icon: Coffee,
    description: 'Fuel for late-night coding sessions',
    color: 'text-amber-400',
  },
  {
    name: 'Photography',
    icon: Camera,
    description: 'Capturing moments and exploring visual storytelling',
    color: 'text-cyan-400',
  },
  {
    name: 'Learning',
    icon: BookOpen,
    description: 'Continuous learning and skill development',
    color: 'text-orange-400',
  },
];

export const Interests: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-6">
            Interests & Hobbies
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Beyond coding, here's what keeps me inspired and motivated
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
            >
              <GlassCard 
                variant="tertiary" 
                className="text-center group cursor-pointer h-48 flex flex-col items-center justify-center relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    className={`p-4 rounded-full bg-glass-primary/30 mb-4 ${interest.color}`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <interest.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {interest.name}
                  </h3>
                  
                  <p className="text-foreground-secondary text-sm text-center px-2">
                    {interest.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};