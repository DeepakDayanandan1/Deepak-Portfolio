'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0, threshold = 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set delay as CSS variable
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
  }[direction] || 'reveal';

  return (
    <div ref={ref} className={`${directionClass} ${className}`}>
      {children}
    </div>
  );
}
