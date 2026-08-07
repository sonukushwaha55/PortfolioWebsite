import React, { useState } from 'react';
import { ExternalLink, FolderGit2, CheckCircle2, Globe } from 'lucide-react';
import { Github } from './SocialIcons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'ERP Systems', 'Web Apps', 'Portals'];

  const projects = [
    {
      id: 1,
      title: 'College ERP System',
      category: 'ERP Systems',
      tagline: 'Campus management & student portal',
      description: 'A full-featured enterprise ERP platform for educational institutions to streamline admissions, student records, fee management, and automated report generation.',
      features: ['Campus management', 'Dynamic subject selection', 'PDF admission slips'],
      tags: ['ASP.NET Core', '.NET Web API', 'C#', 'SQL Server', 'React', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      liveUrl: 'https://github.com/sonukushwaha55',
      githubUrl: 'https://github.com/sonukushwaha55'
    },
    {
      id: 2,
      title: 'Internship Portal Platform',
      category: 'Portals',
      tagline: 'Student internship & recruiter platform',
      description: 'A centralized portal connecting college students with hiring organizations featuring candidate application tracking, job postings, and interview scheduling.',
      features: ['Student & recruiter platform', 'Interactive landing page', 'Resume management'],
      tags: ['React', 'ASP.NET Core', 'C#', 'Tailwind CSS', 'SQL Server'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      liveUrl: 'https://github.com/sonukushwaha55',
      githubUrl: 'https://github.com/sonukushwaha55'
    },
    {
      id: 3,
      title: 'E-Commerce Web Application',
      category: 'Web Apps',
      tagline: 'Online shopping & inventory management',
      description: 'A responsive e-commerce web app featuring real-time product search, shopping cart checkout, customer order histories, and an admin inventory management module.',
      features: ['Product filtering & cart', 'Order tracking system', 'Admin inventory panel'],
      tags: ['ASP.NET', 'C#', 'SQL Server', 'React', 'Tailwind CSS'],
      image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      liveUrl: 'https://github.com/sonukushwaha55',
      githubUrl: 'https://github.com/sonukushwaha55'
    },
    {
      id: 4,
      title: 'Employee Management System',
      category: 'ERP Systems',
      tagline: 'Workforce tracking & payroll web app',
      description: 'An enterprise web system for HR departments to manage employee records, attendance logs, leave approvals, and automated payroll calculations.',
      features: ['Attendance logging', 'Automated payroll', 'Leave approval system'],
      tags: ['React', 'Express', 'Node.js', 'MongoDB', 'REST API'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      liveUrl: 'https://github.com/sonukushwaha55',
      githubUrl: 'https://github.com/sonukushwaha55'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-purple-500 selection:text-white">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <FolderGit2 className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafting Scalable <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 bg-clip-text text-transparent">Web Applications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore key enterprise ERP systems, portals, and full-stack web platforms engineered with modern UI/UX and robust backends.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 scale-105 ring-2 ring-purple-400/50'
                    : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-sm'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/90 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-200/80 dark:border-white/10">
                  <div className="absolute top-0 left-0 right-0 z-20 bg-slate-900/85 backdrop-blur-md px-3 py-2 flex items-center justify-between border-b border-white/10 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                    </div>
                    <div className="bg-slate-800/80 text-slate-400 px-2.5 py-0.5 rounded-md text-[10px] truncate max-w-[150px] border border-white/5 font-mono">
                      https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app
                    </div>
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pt-7 group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 pt-7 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                  <span className="absolute top-10 right-3 z-20 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-purple-600/80 backdrop-blur-md border border-purple-400/30 shadow-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-purple-600 dark:text-purple-300/80 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100/80 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-md shadow-purple-500/20 hover:shadow-purple-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


