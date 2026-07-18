'use client';

import { portfolioData } from '@/data/content';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Full-width accent stripe */}
      <div className="bg-accent py-4">
        <div className="animate-marquee-reverse marquee-track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-8 text-sm font-bold uppercase tracking-[0.3em] text-bg whitespace-nowrap">
              About Me
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — Large intro text */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <span className="section-label">
                <span className="text-accent">✦</span>
                Who I Am
              </span>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl mb-8">
                A Developer who
                <span className="text-accent"> creates</span> <br />and 
                <span className="text-outline-accent"> innovates</span> things
                <br className="hidden sm:block" /> for the web.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-text-muted">
                <p>{portfolioData.bio}</p>
                <p>{portfolioData.longBio}</p>
              </div>

              {/* Education Section */}
              <div className="mt-10 flex flex-col gap-6 sm:flex-col sm:items-start">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 border-2 border-accent flex items-center justify-center text-accent shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v3.75m0 0v1.5a.75.75 0 001.5 0v-1.5m-1.5 0h1.5m6-3v3.75m0 0v1.5a.75.75 0 001.5 0v-1.5m-1.5 0h1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary">{portfolioData.college}</div>
                    <div className="text-xs font-mono text-text-dim uppercase tracking-wider">B.Tech Computer Science ENGINEERING</div>
                    <div className="text-xs font-mono text-text-dim uppercase tracking-wider">CGPA: 7.87</div>
                  </div>
                </div>

                {portfolioData.school && (
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 border-2 border-accent flex items-center justify-center text-accent shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-primary">{portfolioData.school}</div>
                      <div className="text-xs font-mono text-text-dim uppercase tracking-wider">Higher Secondary Education</div>
                    </div>
                  </div>
                )}
              </div>
              
            </ScrollReveal>
          </div>

          {/* Right — Stats + quick info */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={200}>
              <div className="border-2 border-border p-8 space-y-0">
                {portfolioData.stats.map((stat, i) => (
                  <div key={stat.label} className={`flex items-center justify-between py-5 ${
                    i < portfolioData.stats.length - 1 ? 'border-b border-border' : ''
                  }`}>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-dim">{stat.label}</span>
                    <span className="text-2xl font-bold text-accent">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Location pill */}
              <div className="mt-6 border-2 border-border p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-text-dim mb-1">Based in</div>
                  <div className="text-lg font-bold text-text-primary">{portfolioData.location}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border-2 border-accent text-accent shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Resume link */}
              <a href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between border-2 border-accent p-6 text-accent transition-all hover:bg-accent hover:text-bg group">
                <span className="text-sm font-bold uppercase tracking-wider">Download Resume</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
