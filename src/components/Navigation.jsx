'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { portfolioData } from '@/data/content';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (pathname !== '/') {
      router.push('/' + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b-2 border-text-primary/10' : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo — brutalist style */}
            <a href="/" onClick={(e) => {
              e.preventDefault();
              if (pathname !== '/') {
                router.push('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
              className="relative z-[1001] group">
              <span className="text-xl font-bold tracking-tight text-text-primary">
                DEEPAK
              </span>
              <span className="text-accent font-bold text-xl">.</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <a key={link.label} href={link.href} onClick={(e) => scrollTo(e, link.href)}
                  className="group relative px-5 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary">
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
              <a href={`mailto:${portfolioData.email}`}
                className="ml-4 border-2 border-accent px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-accent transition-all duration-300 hover:bg-accent hover:text-bg">
                Hire Me
              </a>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[1001] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu">
              <span className={`block h-[2px] w-7 bg-text-primary transition-all duration-300 ${mobileOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-7 bg-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-7 bg-text-primary transition-all duration-300 ${mobileOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`fixed inset-0 z-[999] bg-bg transition-all duration-500 md:hidden ${
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex h-full flex-col items-start justify-center px-10 gap-2">
          {links.map((link, i) => (
            <a key={link.label} href={link.href} onClick={(e) => scrollTo(e, link.href)}
              className={`text-5xl font-bold text-text-primary transition-all hover:text-accent hover:translate-x-4 ${
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: mobileOpen ? `${100 + i * 80}ms` : '0ms' }}>
              {link.label}
            </a>
          ))}
          <div className={`mt-8 h-[2px] w-16 bg-accent transition-all duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '500ms' }} />
          <a href={`mailto:${portfolioData.email}`}
            className={`mt-4 text-lg font-mono text-accent transition-all ${
              mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
            {portfolioData.email}
          </a>
        </div>
      </div>
    </>
  );
}
