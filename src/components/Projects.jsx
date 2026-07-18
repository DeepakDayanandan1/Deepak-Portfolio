'use client';

import { useState } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/content';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? portfolioData.projects : portfolioData.projects.slice(0, 3);

  return (
    <section id="projects" className="section">
      <ScrollReveal>
        <div className="flex flex-col gap-4 mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label">
              <span className="text-accent">✦</span>
              Selected Works
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              Featured <span className="text-outline-accent">Projects</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-text-muted leading-relaxed">
            A curated selection of full-stack, AI, and web development projects—each built to solve real-world problems with modern technologies.          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {visibleProjects.map((project, index) => {
          const isLocal = project.link.startsWith('/');
          const LinkTag = isLocal ? Link : 'a';
          const linkProps = isLocal ? {} : { target: "_blank", rel: "noopener noreferrer" };

          return (
            <ScrollReveal key={project.title} delay={index * 80}>
              <LinkTag href={project.link} {...linkProps} className="group block">
                <div className="relative border-2 border-border bg-bg-surface p-6 transition-all duration-500 hover:border-accent/60 hover:bg-bg-card sm:p-8 md:p-10 overflow-hidden">
                  {/* Accent top border on hover */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                  {/* Number watermark */}
                  <span className="absolute -right-2 -bottom-6 text-[6rem] font-bold leading-none select-none pointer-events-none transition-all duration-500 sm:text-[8rem] md:text-[12rem]"
                    style={{ color: project.color, opacity: 0.04 }}>
                    {project.number}
                  </span>

                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center">
                    {/* Left: Number + Category */}
                    <div className="flex items-center gap-4 md:w-48 md:flex-shrink-0">
                      <span className="text-4xl font-bold text-text-dim/30 md:text-5xl">{project.number}</span>
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim">{project.category}</span>
                      </div>
                    </div>

                    {/* Middle: Title + Desc */}
                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mb-4 max-w-lg text-sm leading-relaxed text-text-muted">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="border border-border px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-text-dim">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Arrow */}
                    <div className="flex items-center md:flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center border-2 border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                        <svg className="h-5 w-5 -rotate-45 text-text-dim transition-all duration-300 group-hover:rotate-0 group-hover:text-bg"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </LinkTag>
            </ScrollReveal>
          );
        })}
      </div>

      {portfolioData.projects.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 border-2 border-text-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-text-primary transition-all hover:bg-text-primary hover:text-bg cursor-pointer"
          >
            {showAll ? 'Show Less' : 'Show All Projects'}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
