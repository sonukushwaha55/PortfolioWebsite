import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Code, Cpu } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const TITLES = [
  'Software Developer',
  'ASP.NET Core & C# Developer'
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TITLES[titleIndex] || TITLES[0];
    if (!currentFullText) return;
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-br from-pink-500/15 to-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-purple-500/30 dark:border-purple-400/30 shadow-md animate-slide-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                Available for Software Developer opportunities
              </span>
            </div>

            <div className="space-y-4 animate-slide-up animation-delay-100">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 bg-clip-text text-transparent">Sonu Kumar</span>
              </h1>
              
              <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-4xl font-bold text-slate-700 dark:text-slate-300">
                  I am a{' '}
                </span>
                <span className="ml-2 text-2xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 border-r-4 border-purple-500 pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up animation-delay-200">
              Software Developer with 2 years of experience developing robust backend services and responsive web applications using <strong className="text-slate-800 dark:text-slate-200">ASP.NET Core, .NET Core Web API, C#, React, Tailwind CSS, Bootstrap, JavaScript, and SQL Server Database</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 animate-slide-up animation-delay-300">
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:opacity-95 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300/60 dark:border-slate-700/60 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Mail className="w-5 h-5 text-purple-500" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-slate-200/80 dark:border-slate-800/80 animate-slide-up animation-delay-400">
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: 'https://github.com/sonukushwaha55', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/sonu-kumar5819', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://x.com/sonu_kushwaha5', label: 'Twitter' },
                  { icon: Mail, href: 'mailto:sonukumar1772001@gmail.com', label: 'Email' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/60 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="hidden sm:block h-6 w-px bg-slate-300 dark:bg-slate-800" />

              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Based in <span className="font-semibold text-slate-700 dark:text-slate-300">India</span> 🇮🇳
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex justify-center animate-slide-up animation-delay-300">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur-xl opacity-30 animate-pulse-slow" />
              
              <div className="relative glass-card rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-500">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>DeveloperProfile.cs</span>
                  </div>
                </div>

                <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-800 dark:text-slate-200 bg-slate-900 p-4 rounded-xl shadow-inner overflow-x-auto">
                  <p><span className="text-purple-400">var</span> <span className="text-purple-300">developer</span> = <span className="text-purple-400">new</span> &#123;</p>
                  <p className="pl-4"><span className="text-cyan-400">Name</span> = <span className="text-emerald-300">"Sonu Kumar"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">Role</span> = <span className="text-emerald-300">"Software Developer"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">Experience</span> = <span className="text-emerald-300">"2 Years"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">Location</span> = <span className="text-emerald-300">"India"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">Backend</span> = <span className="text-amber-300">"ASP.NET Core, C#, Web API, SQL Server"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">Frontend</span> = <span className="text-amber-300">"React, Tailwind, Bootstrap, JS"</span>,</p>
                  <p className="pl-4"><span className="text-cyan-400">Status</span> = <span className="text-emerald-300">"Ready for new challenges 🚀"</span></p>
                  <p>&#125;;</p>
                </div>

                <div className="absolute -top-6 -right-6 glass p-3.5 rounded-2xl shadow-xl border border-purple-500/30 flex items-center gap-3 animate-float">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-500">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experience</div>
                    <div className="text-base font-extrabold text-slate-900 dark:text-white">2 Years Exp</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 glass p-3.5 rounded-2xl shadow-xl border border-pink-500/30 flex items-center gap-3 animate-float animation-delay-200">
                  <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-500">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-600 font-medium">Core Stack</div>
                    <div className="text-base font-extrabold text-slate-900 dark:text-white">.NET & React</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

