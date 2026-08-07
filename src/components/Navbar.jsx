import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass shadow-lg shadow-slate-900/5 dark:shadow-slate-950/50 backdrop-blur-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 p-0.5 flex items-center justify-center shadow-md shadow-purple-500/20">
              <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Sonu <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 bg-clip-text text-transparent">Kumar</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/80 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-800/80 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 border border-slate-300/40 dark:border-slate-700/50 transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400 rotate-0 transition-transform duration-500 hover:rotate-90" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600 rotate-0 transition-transform duration-500 hover:-rotate-12" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:opacity-95 shadow-md shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-800/80 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 transition-all duration-200"
              aria-label="Open main menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass border border-slate-200/80 dark:border-slate-800/80 shadow-xl animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 font-semibold border-l-4 border-purple-600 dark:border-purple-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-center text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

