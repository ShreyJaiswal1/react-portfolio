import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className='w-full mt-12 mb-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Left: author + short note */}
          <div className='flex items-center gap-3'>
            <div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/6 backdrop-blur-md border border-white/6 shadow-sm'
              aria-hidden
            >
              <Heart className='h-4 w-4 text-pink-400' />
              <span className='text-sm text-slate-300'>Made with care by</span>
              <a
                href='#hero'
                onClick={scrollToTop}
                className='ml-1 font-medium text-slate-100 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/40 rounded'
              >
                Shrey Jaiswal
              </a>
            </div>

            <span className='text-xs text-slate-400 hidden sm:inline'>•</span>

            <div className='text-xs text-slate-400 ml-2'>
              © {year} Shrey Jaiswal
            </div>
          </div>
          {/* Right: social icons + back-to-top */}
          <div className='flex items-center gap-3'>
            <a
              href='https://github.com/ShreyJaiswal1'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='inline-flex items-center justify-center p-2 rounded-md bg-white/4 hover:bg-white/6 transition'
            >
              <Github className='h-5 w-5 text-slate-200' />
            </a>

            <a
              href='https://linkedin.com/in/shreyjaiswal1'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='inline-flex items-center justify-center p-2 rounded-md bg-white/4 hover:bg-white/6 transition'
            >
              <Linkedin className='h-5 w-5 text-slate-200' />
            </a>
            <a
              href='https://discord.gg/ZVCB8EnRX2'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='inline-flex items-center justify-center p-2 rounded-md bg-white/4 hover:bg-white/6 transition'
            >
              <SiDiscord className='h-5 w-5 text-slate-200' />
            </a>


            <a
              href='mailto:5aprilshrey@gmail.com'
              aria-label='Email'
              className='inline-flex items-center justify-center p-2 rounded-md bg-white/4 hover:bg-white/6 transition'
            >
              <Mail className='h-5 w-5 text-slate-200' />
            </a>

            <button
              onClick={scrollToTop}
              aria-label='Back to top'
              className='ml-2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/4 hover:bg-white/8 shadow-sm transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/30'
              title='Back to top'
            >
              <ArrowUp className='h-4 w-4 text-slate-100' />
            </button>
          </div>
        </div>

        {/* Optional small caption */}
      </div>
    </footer>
  );
};

export default Footer;
