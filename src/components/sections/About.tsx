import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Code, Lightbulb, Users, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-4'>
            About Me
          </h2>
          <p className='text-foreground-secondary max-w-2xl mx-auto'>
            I build web apps that solve real problems focused on clarity,
            reliability, and developer ergonomics.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 items-start'>
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard variant='primary' className='h-full'>
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-lg bg-primary/20'>
                    <Code className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-2xl font-semibold text-foreground'>
                    Full-Stack Developer
                  </h3>
                </div>

                <div className='space-y-3 text-foreground-secondary'>
                  <p className='text-lg leading-relaxed'>
                    Hi, I’m Shrey. I spend most of my time building web apps
                    with the MERN stack and Node.js. Over the years I’ve learned
                    that code doesn’t have to be flashy to be good — it just
                    needs to be clear, reliable, and something the next
                    developer can understand without pulling their hair out.
                    That’s the kind of work I enjoy.
                  </p>

                  <p className='text-lg leading-relaxed'>
                    Lately I’ve been exploring applied AI (small, useful
                    automations) and shipping dependable features that move
                    projects forward.
                  </p>

                  {/* Small stats row — remove if you don't want it */}
                  <div className='flex gap-4 mt-3 flex-wrap'>
                    <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/6'>
                      <span className='font-semibold text-sm text-foreground'>
                        3+ yrs
                      </span>
                      <span className='text-xs text-foreground-secondary'>
                        experience
                      </span>
                    </div>
                    <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/6'>
                      <span className='font-semibold text-sm text-foreground'>
                        10+
                      </span>
                      <span className='text-xs text-foreground-secondary'>
                        projects
                      </span>
                    </div>
                    <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/6'>
                      <span className='font-semibold text-sm text-foreground'>
                        OSS
                      </span>
                      <span className='text-xs text-foreground-secondary'>
                        contributions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-5'
          >
            <GlassCard variant='secondary' className='p-5'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-lg bg-secondary/20'>
                  <Lightbulb className='h-6 w-6 text-secondary' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-foreground mb-1'>
                    Practical Problem-Solver
                  </h4>
                  <p className='text-foreground-secondary'>
                    I break problems into small, testable pieces then ship
                    solutions that actually help users.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant='tertiary' className='p-5'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-lg bg-accent/20'>
                  <Users className='h-6 w-6 text-accent' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-foreground mb-1'>
                    Team Player
                  </h4>
                  <p className='text-foreground-secondary'>
                    I communicate clearly, keep code simple, and help teammates
                    move faster documentation and reviews included.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant='primary' className='p-5'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-lg bg-primary/20'>
                  <BookOpen className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-foreground mb-1'>
                    Continuous Learner
                  </h4>
                  <p className='text-foreground-secondary'>
                    I stay curious and pick up new skills from frameworks to
                    AI tools to stay adaptable and relevant.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
