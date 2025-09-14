import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/ui/animated-text';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, Download, Target, } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export const Hero: React.FC = () => {
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden px-4'>
      {/* Subtle animated background blobs */}
      <div className='absolute inset-0 -z-10 pointer-events-none'>
        <motion.div
          className='absolute -left-24 top-16 w-80 h-80 bg-gradient-to-tr from-primary/18 to-accent/12 rounded-full blur-3xl'
          animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.5, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute right-10 bottom-10 w-72 h-72 bg-gradient-to-bl from-secondary/16 to-primary/8 rounded-full blur-3xl'
          animate={{ scale: [1.08, 0.98, 1.08], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mb-8 px-4 sm:px-0'
        >
          {/* NAME */}
          <div className='inline-block'>
            <motion.h1
              className='text-5xl md:text-7xl font-extrabold tracking-tight leading-tight'
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <span className='block text-4xl md:text-6xl'>Hi, I’m</span>

              {/* First and last name separated so we can style differently */}
              <span className='block mt-2'>
                <span
                  className='inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#7c83ff] to-[#06b6d4]'
                  style={{ WebkitBackgroundClip: 'text' }}
                >
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#7c83ff] to-[#06b6d4] drop-shadow-[0_6px_18px_rgba(124,131,255,0.12)]'>
                    Shrey
                  </span>
                </span>{' '}
                <span className='inline-block text-foreground/90'>Jaiswal</span>
              </span>
            </motion.h1>

            {/* Animated underline SVG (subtle) */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0.35 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
              className='mx-auto mt-4 w-56'
            >
              <svg
                viewBox='0 0 200 10'
                className='w-full h-2'
                preserveAspectRatio='none'
                aria-hidden
              >
                <path
                  d='M5 5 Q50 12 100 5 T195 5'
                  fill='none'
                  stroke='url(#g1)'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
                <defs>
                  <linearGradient id='g1' x1='0' x2='1'>
                    <stop offset='0' stopColor='rgba(139,92,246,0.9)' />
                    <stop offset='1' stopColor='rgba(6,182,212,0.9)' />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Subtitle / Role */}
          <motion.h2
            className='mt-6 text-lg md:text-2xl text-foreground-secondary font-medium'
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Full Stack Developer — building user-first web apps with modern
            stacks & AI
          </motion.h2>

          {/* Animated tagline */}
          <div className='mt-4 max-w-2xl mx-auto'>
            <AnimatedText
              text='Crafting digital experiences with modern web technologies and AI innovation.'
              className='text-sm md:text-base text-muted-foreground leading-relaxed mx-10'
              delay={0.5}
              stagger={0.03}
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className='flex flex-wrap items-center justify-center gap-3 mt-8'
        >
          {/* Primary: Contact */}
          <Button
            variant='link'
            size='lg'
            className='flex items-center gap-3 px-5 py-3 rounded-full shadow-md hover:shadow-lg transform-gpu transition duration-250'
            asChild
          >
            <a
              href='mailto:5aprilshrey@gmail.com'
              aria-label='Email Shrey'
              className='flex items-center'
            >
              <Mail className='h-5 w-5' />
              <span>Contact</span>
            </a>
          </Button>

          {/* Secondary: Download CV */}
          <Button
            variant='outline'
            size='lg'
            className='flex items-center gap-3 px-4 py-2 rounded-full border-2 border-white/10 hover:border-white/20 transition transform hover:-translate-y-0.5'
            asChild
          >
            <a
              href='/Shrey resume.pdf'
              download
              aria-label='Download CV'
              rel='noopener noreferrer'
            >
              <Download className='h-4 w-4' />
              <span className='ml-1'>Download CV</span>
            </a>
          </Button>

          {/* Social compact buttons */}
          <div className='flex items-center gap-2 ml-0 sm:ml-2'>
            <Button
              variant='ghost'
              size='sm'
              className='p-2 rounded-full border border-white/6 hover:border-white/20'
              asChild
            >
              <a
                href='https://github.com/ShreyJaiswal1'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                title='GitHub'
              >
                <Github className='h-5 w-5' />
              </a>
            </Button>

            <Button
              variant='ghost'
              size='sm'
              className='p-2 rounded-full border border-white/6 hover:border-white/20'
              asChild
            >
              <a
                href='https://linkedin.com/in/shreyjaiswal1'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                title='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </a>
            </Button>

            <Button
              variant='ghost'
              size='sm'
              className='p-2 rounded-full border border-white/6 hover:border-white/20'
              asChild
            >
              <a
                href='https://discord.gg/ZVCB8EnRX2'
                aria-label='Email'
                title='Email'
              >
                <SiDiscord className='h-5 w-5' />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* subtle down arrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='mt-12'
        >
          <div className='animate-bounce'>
            <ArrowDown className='h-6 w-6 text-foreground/70 mx-auto' />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
