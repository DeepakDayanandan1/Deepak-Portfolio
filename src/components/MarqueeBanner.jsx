'use client';

import { portfolioData } from '@/data/content';

export default function MarqueeBanner() {
  const words = portfolioData.marqueeWords;
  return (
    <div className="relative border-y-2 border-text-primary/10 bg-bg-surface py-5 overflow-hidden">
      <div className="animate-marquee marquee-track">
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-6 mx-6 whitespace-nowrap">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors">
              {word}
            </span>
            <span className="text-accent text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
