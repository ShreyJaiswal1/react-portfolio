import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import {
  Github,
  ExternalLink,
  Bot,
  Users,
  Sparkles,
  ChartBar,
  Workflow
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
    title: 'Honey AI',
    description:
      'An intelligent AI-powered chatbot that provides personalized assistance and automated responses using advanced natural language processing.',
    features: [
      'Natural Language Processing',
      'Context-aware responses',
      'Multi-platform integration',
      'Real-time chat interface',
    ],
    tech: ['Node.js', 'Llama3.3', 'GroqAI API', 'Forebase', 'Passport.js'],
    github: 'https://github.com/ShreyJaiswal1/aichatbot',
    demo: 'https://honey.lazyshrey.xyz',
    icon: <Sparkles className='h-6 w-6' />,
    stats: "132+ Users"
  },
  {
    title: 'Krystal Discord Bot',
    description:
      'A feature-rich Discord bot serving over 2 million users with moderation, music, entertainment, and utility commands.',
    features: [
      'Advanced moderation system',
      'AI chatbot channel',
      'Music & entertainment features',
      'Server analytics',
    ],
    tech: ['Discord.js', 'Node.js', 'MongoDB', 'Lavalink'],
    github: 'https://github.com/ShreyJaiswal1/krystal-discord-bot',
    icon: <Bot className='h-6 w-6' />,
    stats: '2M+ Users',
  },
  {
    title: 'Cortexa DataInsight AI',
    description:
      'A Smart AI-Powered Data Analysis Tool that combines artificial intelligence with intuitive data analysis capabilities.',
    features: [
      'Multi-format data support (CSV, Excel, JSON, Parquet)',
      'Interactive chat interface for data queries',
      'AI-powered image analysis and recognition',
      'Real-time analysis with instant insights',
      'Secure authentication with Clerk',
    ],
    tech: [
      'Next.js 15.5.0',
      'Python',
      'Groq AI',
      'Google Gemini',
      'Pandas',
      'Clerk Authentication',
    ],
    github: 'https://github.com/ShreyJaiswal1/cortexa-datainsight-ai',
    demo: 'https://cortexa.lazyshrey.xyz/',
    icon: <ChartBar className='h-6 w-6' />,
    stats: "73+ Users"
  },
  {
    title: 'AI Image Workflow Automation',
    description:
      "An intelligent automation platform that combines n8n workflow automation with Google's Nano Banana (Gemini 2.5 Flash Image) for automated image processing, editing, and analysis workflows.",
    features: [
      'Automated image processing workflows with n8n',
      'Natural language image editing via Nano Banana API',
      'Real-time image analysis and validation',
      'Integration with Google Drive and cloud storage',
      'Custom API endpoints for image operations',
    ],
    tech: [
      'n8n',
      'Google Nano Banana',
      'Python',
      'Google Cloud APIs',
      'Webhook Integrations',
      'REST APIs',
      'Docker',
    ],
    icon: <Workflow className='h-6 w-6' />,
    stats: 'Auto-processes 100+ images/hour',
  },
];

export const Projects: React.FC = () => {
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
            Featured Projects
          </h2>
          <p className='text-foreground-secondary text-lg max-w-2xl mx-auto'>
            A showcase of my recent work and contributions to the developer
            community
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <GlassCard
                variant='primary'
                className='h-full group relative overflow-hidden'
                hover={true}
              >
                {/* Hover glow effect */}
                <div className='absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10'></div>

                <div className='relative z-10'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                      <div className='p-3 rounded-lg bg-primary/20 text-primary'>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-foreground'>
                          {project.title}
                        </h3>
                        {project.stats && (
                          <div className='flex items-center gap-2 text-accent text-sm'>
                            <Users className='h-4 w-4' />
                            <span>{project.stats}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className='text-foreground-secondary mb-6 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='mb-6'>
                    <h4 className='text-foreground font-semibold mb-3'>
                      Key Features:
                    </h4>
                    <ul className='space-y-2'>
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-start gap-2 text-foreground-secondary'
                        >
                          <span className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0'></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='mb-6'>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 text-xs rounded-full bg-glass-secondary/50 text-foreground-secondary border border-primary/20'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex gap-3'>
                    {project.github && (
                      <Button
                        variant='outline'
                        size='sm'
                        className='bg-glass-primary/50 border-primary/30 hover:bg-primary/20 backdrop-blur-glass'
                        asChild
                      >
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Github className='mr-2 h-4 w-4' />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant='outline'
                        size='sm'
                        className='bg-glass-primary/50 border-accent/30 hover:bg-accent/20 backdrop-blur-glass'
                        asChild
                      >
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='mr-2 h-4 w-4' />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
