'use client';

import { useEffect, useRef } from 'react';
import { portfolioData } from '@/data/content';
import ScrollReveal from './ScrollReveal';

export default function TechStack() {
  const gridRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Accent divider */}
      <div className="border-y-2 border-text-primary/10 bg-bg-surface py-4">
        <div className="animate-marquee-reverse marquee-track">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="mx-6 text-xs font-mono uppercase tracking-[0.3em] text-text-dim whitespace-nowrap">
              Tools & Technologies
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="section-label justify-center">
              <span className="text-accent">✦</span>
              Tech Stack
              <span className="text-accent">✦</span>
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Tools I <span className="text-outline-accent">Use</span>
            </h2>
          </div>
        </ScrollReveal>

        <div ref={gridRef} className="stagger mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {portfolioData.techStack.map((tech) => (
            <div key={tech}
              className="group border-2 border-border bg-bg-surface px-4 py-4 text-center transition-all duration-300 hover:border-accent hover:bg-accent/5">
              <span className="text-sm font-medium text-text-muted transition-colors group-hover:text-accent">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
