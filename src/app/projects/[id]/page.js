'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/data/content';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Find the project based on number matching format "0X"
  const projectNumber = id.padStart(2, '0');
  const project = portfolioData.projects.find((p) => p.number === projectNumber);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-text-primary px-6">
        <h1 className="text-4xl font-mono mb-4">Project Not Found</h1>
        <Link href="/" className="border-2 border-text-primary px-6 py-3 font-mono text-sm uppercase hover:bg-text-primary hover:text-bg transition-all">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-bg">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                          linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Giant ghosted watermark number */}
      <div className="absolute right-[-5%] bottom-[-5%] text-[35vw] font-bold leading-none select-none pointer-events-none opacity-[0.03] transition-all duration-1000"
        style={{ color: project.color }}>
        {project.number}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Back Link */}
        <div className={`mb-12 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Link href="/#projects" className="group inline-flex items-center gap-3 text-sm font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors">
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Info, Desc, Buttons */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-100 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent mb-6">
              {project.category}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-text-muted mb-8">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mb-10">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-text-dim mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border-2 border-border bg-bg-surface px-4 py-2 text-xs font-mono uppercase tracking-wider text-text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-accent px-6 sm:px-8 py-4 text-sm font-bold uppercase tracking-wider text-bg transition-all hover:bg-accent-hover">
                  Live Demo
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-text-primary px-6 sm:px-8 py-4 text-sm font-bold uppercase tracking-wider text-text-primary transition-all hover:bg-text-primary hover:text-bg">
                  GitHub Code
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Project Image + Key Features */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Project Screenshot */}
            {project.image && (
              <div className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-text-dim mb-4">Project Preview</h3>
                <div className="relative border-2 border-border overflow-hidden group">
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-accent transition-all duration-500 group-hover:w-full z-10" />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-text-primary mb-6">
                  Key <span className="text-outline-accent">Features</span>
                </h2>

                <div className="space-y-4">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="border-2 border-border bg-bg-surface p-5 sm:p-6 hover:border-accent/40 transition-colors">
                      <h4 className="text-sm font-bold text-text-primary mb-2 uppercase tracking-wide">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
