'use client';

import Link from 'next/link';
import { portfolioData } from '@/data/content';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const skillsData = portfolioData?.skillsData || {
    badge: "TOOLBOX // TECH STACK",
    heading: "Systems, Stack",
    headingHighlight: "& Tools",
    subtitle: "",
    snippet: {
      comment: "# Deepak Dayanandan — Developer & Designer",
      fn: "def build():",
      body: 'ideas = ["solve", "build", "scale", "innovate"]',
      ret: 'return "always curious & building"',
    },
    categories: [],
  };

  const categories = skillsData.categories || [];

  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 md:pt-12 md:pb-28 relative overflow-hidden">
      {/* Backward-compatibility anchor for #services */}
      <span id="services" className="sr-only" />

      {/* Decorative background grid element */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Section Header */}
      <ScrollReveal>
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label !mb-3">
                <span className="text-accent">✦</span>
                {skillsData.badge}
                <span className="text-accent">✦</span>
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
                {skillsData.heading}{' '}
                <span className="text-outline-accent">{skillsData.headingHighlight}</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-text-muted md:text-right">
              {skillsData.subtitle}
            </p>
          </div>

          {/* Interactive Code / Terminal Block — preserved exactly as requested */}
          {skillsData.snippet && (
            <div className="mt-6 sm:mt-8 border-2 border-border bg-bg-surface p-4 font-mono sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neon-yellow/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neon-lime/70" />
                  <span className="ml-2 text-xs text-text-dim">stack.py</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-text-dim uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-lime animate-pulse" />
                  <span>ACTIVE // 10+ TECHNOLOGIES</span>
                </div>
              </div>

              <div className="space-y-1 text-xs sm:text-sm">
                <div className="text-text-dim">{skillsData.snippet.comment}</div>
                <div>
                  <span className="text-accent font-semibold">{skillsData.snippet.fn}</span>
                </div>
                <div className="pl-4 sm:pl-6 text-text-muted">
                  {skillsData.snippet.body}
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-neon-lime">{skillsData.snippet.ret}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Spacious 2x2 Tech Matrix — styled cleanly like the Toolkit reference card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <ScrollReveal key={category.id} delay={index * 80}>
            <div className="group relative flex h-full flex-col justify-between border-2 border-border bg-bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-accent/60 hover:bg-bg-card">
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />

              <div>
                {/* Header */}
                <div className="mb-5">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent">
                    {category.label}
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Spacious Skill Pills — un-congested, comfortable wrapping */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {category.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border/80 bg-bg px-3.5 sm:px-4 py-2 font-mono text-xs sm:text-sm text-text-muted transition-all duration-200 hover:border-accent hover:text-text-primary hover:bg-bg-surface cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Project References */}
              {category.appliedProjects && category.appliedProjects.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-dim">
                    Applied in:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {category.appliedProjects.map((p) => (
                      <Link
                        key={p.name}
                        href={p.link}
                        className="inline-flex items-center gap-1 text-xs font-mono text-text-muted border border-border/70 bg-bg px-2.5 py-1 transition-all duration-200 hover:border-accent hover:text-accent"
                      >
                        <span>{p.name}</span>
                        <span className="text-[10px] text-accent">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
