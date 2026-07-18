'use client';

import { portfolioData } from '@/data/content';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  return (
    <section id="services" className="section">
      <ScrollReveal>
        <div className="mb-20">
          <span className="section-label">
            <span className="text-accent">✦</span>
            What I Do
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            My <span className="text-outline-accent">Skills</span> &amp; Expertise
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioData.services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 80}>
            <div className="group relative border-2 border-border bg-bg-surface p-8 transition-all duration-500 hover:border-accent/50 hover:bg-bg-card h-full sm:p-10">
              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-text-primary/[0.03] transition-all duration-500 group-hover:text-accent/10 sm:top-8 sm:right-8 sm:text-7xl">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-accent transition-all duration-300 group-hover:w-12" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">{service.number}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-text-primary transition-colors group-hover:text-accent sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
