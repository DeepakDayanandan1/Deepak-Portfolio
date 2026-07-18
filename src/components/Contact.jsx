'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/content';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'afead96a-4638-45f7-9411-7b7816713da6',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Website',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Text */}
        <ScrollReveal direction="left">
          <div>
            <span className="section-label">
              <span className="text-accent">✦</span>
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-6 sm:text-5xl md:text-6xl">
              Let&apos;s work
              <br />
              <span className="text-outline-accent">together</span>.
            </h2>
            <p className="text-base text-text-muted leading-relaxed mb-10 max-w-md">
              Got a project idea, feedback, or just want to say hello? I&apos;m always open to connecting and exchanging ideas.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a href={`mailto:${portfolioData.email}`}
                className="group flex items-center gap-4 border-2 border-border p-4 transition-all hover:border-accent">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-accent text-accent text-sm font-bold shrink-0">@</div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim">Email</div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">{portfolioData.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 border-2 border-border p-4">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-accent text-accent text-sm shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim">Location</div>
                  <div className="text-sm font-medium text-text-primary">{portfolioData.location}</div>
                </div>
              </div>
            </div>

            {/* Socials row */}
            <div className="mt-8 flex gap-3">
              {Object.entries(portfolioData.socials).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center border-2 border-border text-xs font-mono uppercase text-text-dim transition-all hover:border-accent hover:text-accent hover:bg-accent/5">
                  {name.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Form */}
        <ScrollReveal direction="right" delay={200}>
          <form onSubmit={handleSubmit} className="border-2 border-border bg-bg-surface p-6 sm:p-8 md:p-10">
            <h3 className="mb-8 text-xl font-bold text-text-primary">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder-text-dim outline-none transition-all focus:border-accent"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-2 border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder-text-dim outline-none transition-all focus:border-accent"
                  placeholder="name@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border-2 border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder-text-dim outline-none transition-all focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all ${
                  status === 'success'
                    ? 'bg-green-600 text-white'
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-accent text-bg hover:bg-accent-hover'
                } ${status === 'sending' ? 'opacity-70' : ''}`}
              >
                {status === 'sending' && 'Sending...'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error' && '✕ Failed — Try Again'}
                {status === 'idle' && 'Send Message →'}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
