import React, { useEffect } from 'react';
import Navigation from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TechStack } from '@/components/sections/TechStack';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Interests } from '@/components/sections/Interests';
import { Footer } from '@/components/sections/Footer';

const Portfolio: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className='min-h-screen bg-background relative overflow-hidden'>
      {/* SIMPLE BACKGROUND — replace the complex background blocks with this */}
      <div aria-hidden className='fixed inset-0 -z-40 pointer-events-none'>
        {/* base gradient for depth */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(6,8,15,0.98), rgba(12,12,16,0.95))',
          }}
        />

        {/* left blob (soft, blurred) */}
        <div
          className='absolute -left-8 top-12 w-72 h-72 rounded-full blur-3xl'
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(124,131,255,0.16), rgba(6,182,212,0.06) 55%, transparent 70%)',
            opacity: 0.95,
            mixBlendMode: 'screen',
          }}
        />

        {/* right blob (soft, blurred) */}
        <div
          className='absolute -right-6 bottom-14 w-64 h-64 rounded-full blur-3xl'
          style={{
            background:
              'radial-gradient(circle at 65% 35%, rgba(236,72,153,0.10), rgba(124,131,255,0.05) 50%, transparent 70%)',
            opacity: 0.95,
            mixBlendMode: 'screen',
          }}
        />

        {/* subtle vignette to focus center */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(600px 220px at 50% 36%, rgba(124,131,255,0.03), transparent 26%), linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.16))',
            mixBlendMode: 'overlay',
            opacity: 0.95,
          }}
        />
      </div>

      {/* Noise texture overlay for glassmorphism depth */}
      <div className='fixed inset-0 -z-5 opacity-40 mix-blend-soft-light pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5' />
      </div>

      <Navigation />

      <main>
        <section id='hero'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='tech-stack'>
          <TechStack />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='education'>
          <Education />
        </section>
        <section id='interests'>
          <Interests />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;