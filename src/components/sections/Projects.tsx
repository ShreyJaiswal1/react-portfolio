import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Github,
  ExternalLink,
  Users,
  Sparkles,
  ChartBar,
  Workflow,
  Headphones,
  Cat,
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
  stats?: string;
}

const projects: Project[] = [
  {
    title: 'Melofy',
    description:
      'A premium, high-performance music streaming platform designed for a social and immersive auditory experience. Features real-time shared listening, Hi-Fi audio support, and a sleek, minimalist dark-mode aesthetic.',
    features: [
      'Real-time Listen Along social sessions',
      'High-Fidelity (Hi-Fi) lossless audio',
      'Cross-device synchronization',
      'Interactive synced lyrics & PiP mode',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Upstash Redis',
      'Socket.io',
    ],
    github: 'https://github.com/ShreyJaiswal1/melofy',
    demo: 'https://melofy.jene.in',
    icon: <Headphones className='h-6 w-6' />,
    stats: '100M+ Tracks',
  },
  {
    title: 'Honey AI',
    description:
      'An intelligent AI-powered chatbot that provides personalized assistance and automated responses using advanced natural language processing. Features a fully custom NLP engine with Groq API integration.',
    features: [
      'Natural Language Processing',
      'Context-aware responses',
      'Multi-platform integration',
      'Real-time chat interface',
    ],
    tech: ['Node.js', 'Llama3.3', 'GroqAI API', 'Firebase', 'Passport.js'],
    github: 'https://github.com/ShreyJaiswal1/aichatbot',
    demo: 'https://honey.lazyshrey.in',
    icon: <Sparkles className='h-6 w-6' />,
    stats: '132+ Users',
  },
  {
    title: 'Meowuwu',
    description:
      'A delightful, cat-themed "link-in-bio" platform and aesthetic alternative to Linktree. It allows creators and artists to build personality-filled link cards with playful motifs and modern pastel themes.',
    features: [
      'Custom link cards with unique icons',
      'Aesthetic cat-themed pastel designs',
      'Purr-fect analytics for link tracking',
      'Mobile-optimized responsive experience',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MongoDB'],
    github: 'https://github.com/ShreyJaiswal1/meowuwu',
    demo: 'https://meowuwu.in',
    icon: <Cat className='h-6 w-6' />,
    stats: 'The Cuter Link',
  },
  {
    title: 'Cortexa DataInsight AI',
    description:
      'A Smart AI-Powered Data Analysis Tool combining artificial intelligence with intuitive data visualization capabilities. It transforms raw data into actionable insights instantly.',
    features: [
      'Multi-format data support (CSV, Excel, JSON)',
      'Interactive chat interface for queries',
      'AI-powered image analysis',
      'Real-time chart generation and insights',
    ],
    tech: [
      'Next.js',
      'Python',
      'Groq AI',
      'Google Gemini',
      'Pandas',
      'FastAPI',
    ],
    github: 'https://github.com/ShreyJaiswal1/cortexa-datainsight-ai',
    demo: 'https://cortexa.lazyshrey.in/',
    icon: <ChartBar className='h-6 w-6' />,
    stats: 'Enterprise Ready',
  },
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  // Brutalist interaction: slight hard shift instead of 3D tilt
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className='h-full flex flex-col p-8 md:p-10 border-2 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200'>
        
        <div className='flex items-start justify-between mb-8 border-b-4 border-foreground pb-6'>
          <div className='flex items-center gap-5 w-full'>
            <div className='p-4 border-2 border-foreground bg-foreground text-background shrink-0'>
              {project.icon}
            </div>
            <div className="flex-1">
              <h3 className='text-3xl font-black uppercase tracking-tight text-foreground mb-2'>
                {project.title}
              </h3>
              {project.stats && (
                <div className='inline-flex items-center gap-2 px-3 py-1 border-2 border-foreground bg-background text-foreground font-bold text-sm uppercase tracking-wider'>
                  <Users className='h-4 w-4' />
                  <span>{project.stats}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className='text-foreground-secondary text-lg md:text-xl font-medium mb-10 leading-relaxed flex-1'>
          {project.description}
        </p>

        <div className='mb-10'>
          <h4 className='text-foreground font-black mb-4 text-base uppercase tracking-widest border-b-2 border-foreground/20 pb-2 inline-block'>
            Specs
          </h4>
          <ul className='space-y-3'>
            {project.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className='flex items-start gap-4 text-foreground-secondary font-medium text-base'
              >
                <div className='w-3 h-3 bg-foreground mt-1.5 flex-shrink-0 border-2 border-background shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]' />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='mb-10'>
          <div className='flex flex-wrap gap-3'>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className='px-4 py-2 text-sm font-bold uppercase tracking-wider bg-background text-foreground border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-auto border-t-2 border-foreground/10 pt-8'>
          {project.github && (
            <Button
              variant='outline'
              size='lg'
              className='flex-1 h-16 rounded-none border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-widest transition-colors'
              asChild
            >
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className="flex justify-center"
              >
                <Github className='mr-3 h-5 w-5' />
                Source
              </a>
            </Button>
          )}
          {project.demo && (
            <Button
              size='lg'
              className='flex-1 h-16 rounded-none border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground font-bold uppercase tracking-widest transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'
              asChild
            >
              <a
                href={project.demo}
                target='_blank'
                rel='noopener noreferrer'
                className="flex justify-center items-center"
              >
                Launch
                <ExternalLink className='ml-3 h-5 w-5' />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className='py-32 px-4 md:px-8 relative z-20 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-24'
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mb-6">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-sm font-bold tracking-widest uppercase text-foreground">Archive</span>
          </div>
          
          <h2 className='text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground mb-6'>
            Featured Work.
          </h2>
          
          <div className="w-24 h-2 bg-foreground mb-8"></div>

          <p className='text-foreground-secondary text-xl md:text-2xl max-w-3xl leading-relaxed font-medium'>
            A selection of my best projects, blending complex backends with stunning, immersive frontends.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
