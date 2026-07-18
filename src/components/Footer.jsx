import { portfolioData } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  // Social links with professional SVG icons and responsive layout configurations
  const socials = {
    linkedin: {
      name: 'Linkedin',
      url: portfolioData.socials.linkedin,
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      gridClass: 'col-span-2 row-start-1 h-[90px] sm:h-[120px] lg:h-[130px]',
    },
    Github: {
      name: 'Github',
      url: portfolioData.socials.github,
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
      ),
      gridClass: 'col-span-2 row-start-2 h-[90px] sm:h-[120px] lg:h-[130px]',
    },
    Instagram: {
      name: 'Instagram',
      url: portfolioData.socials.instagram,
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      gridClass: 'col-span-1 row-span-2 h-[180px] sm:h-[240px] lg:h-[260px]',
    },
    mail: {
      name: 'Mail',
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`,
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gridClass: 'col-span-1 row-span-2 h-[180px] sm:h-[240px] lg:h-[260px]',
    },
  };

  return (
    <footer className="border-t-2 border-border bg-bg">
      {/* Main footer area — DEEPAK watermark + social grid */}
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-12 sm:py-16 lg:py-20 gap-8">
            
            {/* Left — Big DEEPAK watermark left-aligned on all screens */}
            <div className="text-left w-full lg:w-auto">
              <div className="text-[clamp(3.5rem,12vw,8rem)] font-bold leading-none tracking-tighter text-text-primary/[0.04]">
                DEEPAK.
              </div>
            </div>

            {/* Right — Custom asymmetric Social grid with rounded corners */}
            <div className="w-full lg:w-auto pb-4 lg:pb-0 max-w-md mr-auto lg:mr-0 lg:ml-auto">
              <div className="grid grid-cols-4 border-t border-l rounded-2xl overflow-hidden border-border w-full lg:w-[480px]">
                {Object.values(socials).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col items-center justify-center gap-2 sm:gap-3 border-r border-b border-border bg-bg-surface overflow-hidden ${social.gridClass}`}
                  >
                    {/* Inner wrapper to handle pop-up scale/lift effect without touching borders */}
                    <div className="transform translate-y-0 scale-100 transition-all duration-300 ease-out flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 group-hover:-translate-y-2.5 group-hover:scale-108 group-active:-translate-y-2.5 group-active:scale-108">
                      <div className="text-text-muted/50 transition-colors duration-300 group-hover:text-accent group-active:text-accent">
                        {social.icon}
                      </div>

                      <span className="text-[10px] sm:text-sm font-medium tracking-wider text-text-muted/80 transition-colors duration-300 group-hover:text-accent group-active:text-accent">
                        {social.name}
                      </span>
                    </div>

                    {/* Minimal diagonal link arrow indicator */}
                    <svg
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 h-3 w-3 sm:h-3.5 sm:w-3.5 text-text-dim opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-x-0 group-active:translate-y-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar with centered copyright */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center">
            <span className="text-xs font-mono text-text-dim">
              © {year} <span className="text-accent font-semibold">{portfolioData.fullName}.</span>
            </span>
            <span className="hidden sm:inline text-text-dim/40">·</span>
            <span className="text-xs font-mono text-text-dim">
              All rights <span className="text-accent font-semibold">reserved.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
