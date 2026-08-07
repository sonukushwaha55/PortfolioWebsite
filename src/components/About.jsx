import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  MapPin, 
  Target, 
  Layers, 
  Download, 
  Database, 
  Layout, 
  Sparkles, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';

export default function About() {
  const [downloaded, setDownloaded] = useState(false);

  const quickFacts = [
    {
      label: 'Experience',
      value: '2+ Years',
      icon: Briefcase,
      bgGlow: 'hover:border-purple-500/50 dark:group-hover:border-purple-500/50',
    },
    {
      label: 'Location',
      value: 'India',
      icon: MapPin,
      bgGlow: 'hover:border-pink-500/50 dark:group-hover:border-pink-500/50',
    },
    {
      label: 'Focus',
      value: 'Full-Stack',
      icon: Target,
      bgGlow: 'hover:border-fuchsia-500/50 dark:group-hover:border-fuchsia-500/50',
    },
    {
      label: 'Projects',
      value: 'ERP & E-Commerce',
      icon: Layers,
      bgGlow: 'hover:border-purple-500/50 dark:group-hover:border-purple-500/50',
    },
  ];

  const backendSkills = [
    'ASP.NET Core & C#',
    '.NET Core Web API',
    'SQL Server Database',
    'Entity Framework Core',
    'RESTful API Design',
    'Microservices Architecture',
    'Node.js & Express',
    'Database Optimization',
    'Redis Caching'
  ];

  const frontendSkills = [
    'React.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'Tailwind CSS',
    'HTML5 & CSS3',
    'Bootstrap Framework',
    'Responsive Web Design',
    'State Management (Redux)',
    'Component Architecture',
    'Web Performance & SEO'
  ];

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger download simulation
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Developer_Resume.pdf');
    document.body.appendChild(link);
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-purple-500 selection:text-white">
     
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-3xl pointer-events-none translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 animate-pulse" />
            <span>Discover My Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Passionate software engineer building robust backend architectures and sleek, dynamic frontend interfaces.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          
          <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors duration-300">
            
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 opacity-80" />

            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-gradient-to-br dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-300 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Who I Am</h3>
                    <p className="text-xs text-purple-700 dark:text-purple-300/80 font-medium">Software Engineer & Full-Stack Developer</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300 hidden sm:inline-block font-medium">
                  Available for Opportunities
                </span>
              </div>

              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                Hello! I am a full-stack developer passionate about constructing enterprise web solutions and high-throughput backend services. With a focused approach to clean code, architectural efficiency, and modern aesthetic design, I help turn complex software requirements into intuitive, reliable products.
              </p>

           
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Quick Facts
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className={`bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 ${fact.bgGlow} rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] shadow-sm dark:shadow-lg flex items-start gap-3.5`}
                    >
                      <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200/80 dark:border-slate-700/80 text-purple-600 dark:text-purple-400 flex-shrink-0 shadow-sm">
                        <fact.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          {fact.label}
                        </span>
                        <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate mt-0.5">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-700/60">
              <button
                onClick={handleDownload}
                className="w-full relative group/btn overflow-hidden rounded-xl p-[1px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] active:scale-[0.99]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 transition-all duration-300 group-hover/btn:opacity-90" />
                <span className="relative block w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-[11px] px-6 py-3.5 text-center text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 transition-all duration-300">
                  <Download className={`w-5 h-5 ${downloaded ? 'animate-bounce' : 'group-hover/btn:translate-y-0.5'} transition-transform`} />
                  <span>{downloaded ? 'Downloading Resume...' : 'Download Resume'}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>

 
          <div className="space-y-6 flex flex-col justify-between">
            
  
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden flex-1 group transition-colors duration-300">
               
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500/80" />

               
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700/60 pb-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-300 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Backend & Database Architecture
                  </h3>
                  <p className="text-xs text-purple-700 dark:text-purple-300/80 font-medium">Scalable Services & Systems</p>
                </div>
              </div>

               
              <div className="flex flex-wrap gap-2.5">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200/90 dark:border-purple-500/30 text-purple-900 dark:text-purple-200 text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/60 hover:text-purple-950 dark:hover:text-white hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-0.5 cursor-default group/chip"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 group-hover/chip:bg-pink-500 dark:group-hover/chip:bg-pink-400 group-hover/chip:scale-125 transition-all" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

             
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden flex-1 group transition-colors duration-300">
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500/80" />

               
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700/60 pb-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center text-pink-600 dark:text-pink-300 shadow-sm dark:shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                  <Layout className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Frontend & UI Frameworks
                  </h3>
                  <p className="text-xs text-pink-700 dark:text-pink-300/80 font-medium">Responsive Layouts & Dynamic Interfaces</p>
                </div>
              </div>

               
              <div className="flex flex-wrap gap-2.5">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200/90 dark:border-purple-500/30 text-purple-900 dark:text-purple-200 text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-pink-50 dark:hover:bg-purple-500/20 hover:border-pink-400 dark:hover:border-pink-400/60 hover:text-pink-950 dark:hover:text-white hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:-translate-y-0.5 cursor-default group/chip"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 dark:bg-pink-400 group-hover/chip:bg-purple-500 dark:group-hover/chip:bg-purple-400 group-hover/chip:scale-125 transition-all" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


