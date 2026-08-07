import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 p-0.5 flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">
                Sonu <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Kumar</span>
              </span>
              <p className="text-xs text-slate-500">
                Software Developer | ASP.NET Core, .NET Core Web API, C# & React
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sonukushwaha55"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/sonu-kumar5819"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/sonu_kushwaha5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-md hover:scale-110 active:scale-95 transition-transform"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sonu Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>React, ASP.NET Core & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

