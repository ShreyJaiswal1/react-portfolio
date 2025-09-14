import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="secondary" className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-secondary text-lg font-semibold">
                      United University
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-foreground-secondary mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-lg">2023 - 2026</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-foreground-secondary">
                  <p className="leading-relaxed text-lg">
                    Pursuing comprehensive computer science education with focus on software development, 
                    database management, and emerging technologies.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="text-foreground font-semibold">Core Subjects:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Data Structures & Algorithms</li>
                        <li>• Object-Oriented Programming</li>
                        <li>• Database Management Systems</li>
                        <li>• Web Development</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-foreground font-semibold">Specializations:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Full Stack Development</li>
                        <li>• Software Engineering</li>
                        <li>• System Design</li>
                        <li>• AI/ML Fundamentals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};