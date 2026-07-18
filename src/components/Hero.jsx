'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/content';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                          linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Large decorative number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[30vw] font-bold text-text-primary/[0.02] leading-none select-none pointer-events-none hidden lg:block">
        D.
      </div>

      {/* Accent circle */}
      <div className="absolute top-20 right-[20%] w-[300px] h-[300px] rounded-full border-2 border-accent/10 hidden lg:block" />
      <div className="absolute bottom-[15%] left-[10%] w-[150px] h-[150px] rounded-full bg-accent/5 hidden lg:block" />

      <div className="section relative z-10 pt-24 pb-12">
        {/* Status badge */}
        <div className={`mb-12 transition-all duration-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="inline-flex items-center gap-3 border-2 border-border px-5 py-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-lime" />
            </span>
            Available for opportunities
          </span>
        </div>

        {/* Main heading — giant brutalist type */}
        <div className="mb-8">
          <h1 className={`text-[clamp(2.5rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter transition-all duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="block text-text-primary">DEEPAK</span>
            <span className="block text-outline break-all sm:break-normal">DAYANANDAN</span>
          </h1>
        </div>

        {/* Subtitle & role */}
        <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 transition-all duration-700 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '500ms' }}>
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-12 bg-accent" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">{portfolioData.role}</span>
            </div>
            <p className="text-base text-text-muted leading-relaxed">
              {portfolioData.bio}
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex gap-6 sm:gap-8">
            {portfolioData.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-xs font-mono text-text-dim uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '700ms' }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-bg transition-all hover:bg-accent-hover">
            View Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-text-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-text-primary transition-all hover:bg-text-primary hover:text-bg">
            Resume ↗
          </a>
        </div>

        {/* Bottom line */}
        <div className={`flex items-center gap-6 transition-all duration-700 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          <div className="h-[1px] flex-1 bg-border" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-dim">Scroll to explore</span>
          <div className="flex flex-col items-center">
            <div className="h-10 w-[1px] bg-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}