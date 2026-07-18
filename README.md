<div align="center">

# ⚡ Deepak Dayanandan — Portfolio

A bold, brutalist-inspired developer portfolio built with **Next.js 14**, **Tailwind CSS**, and hand-crafted animations.

![Portfolio Preview](public/preview.png)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel&logoColor=white)](https://deepakdesigns.vercel.app)

[**🔗 Live Demo**](https://deepakdesigns.vercel.app)

</div>

---

## ✨ Highlights

| Feature | Description |
|---|---|
| 🎨 **Brutalist Dark Theme** | Deep blacks with a fiery `#ff4d00` orange accent, neon yellow & cyan pops |
| 🖱️ **Custom Cursor** | Dual-ring reactive cursor with hover scale & blend-mode effects |
| 📽️ **Film Grain Overlay** | Subtle SVG-based grain animation for a cinematic texture |
| 🔄 **Scroll Reveal** | Directional fade-in animations (up, left, right) with staggered children |
| 🏷️ **Marquee Banner** | Continuously scrolling keyword ticker for visual rhythm |
| 📱 **Fully Responsive** | Mobile-first layout with touch-friendly cursor fallback |
| ⚡ **Performance First** | Optimized fonts (Space Grotesk + JetBrains Mono), minimal dependencies |

---

## 📸 Sections

- **Hero** — Large-scale name typography, tagline, availability status, stats, and CTA buttons
- **Projects** — Numbered project cards with category labels, tech tags, and external links
- **About** — Bio, experience overview, and education background
- **Services** — Core competencies (UI/UX Design, Frontend Dev, Design Systems, Prototyping)
- **Tech Stack** — Visual skill grid covering the full arsenal
- **Contact** — Direct email link and social connections (GitHub, LinkedIn, Instagram)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS 3 + CSS custom properties |
| **Fonts** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) · [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| **Animations** | CSS keyframes (marquee, grain, float, glitch, slide-up, scale-in) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── Deepak Dayanandan-Resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens & global styles
│   │   ├── layout.js            # Root layout with cursor, nav, footer
│   │   ├── page.js              # Home page assembly
│   │   └── projects/            # Dynamic project detail pages
│   ├── components/
│   │   ├── Hero.jsx             # Hero section with stats & CTAs
│   │   ├── Projects.jsx         # Numbered project cards
│   │   ├── About.jsx            # Bio & background
│   │   ├── Services.jsx         # Core services grid
│   │   ├── TechStack.jsx        # Technology arsenal
│   │   ├── Contact.jsx          # Contact form & social links
│   │   ├── Navigation.jsx       # Responsive top navigation
│   │   ├── Footer.jsx           # Site footer
│   │   ├── CustomCursor.jsx     # Dual-ring cursor logic
│   │   ├── MarqueeBanner.jsx    # Scrolling keyword ticker
│   │   └── ScrollReveal.jsx     # Intersection Observer wrapper
│   └── data/
│       └── content.js           # ⬅ All portfolio content lives here
├── tailwind.config.js           # Custom colors, fonts, animations
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/DeepakDayanandan1/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — the site hot-reloads on every save.

### Production Build

```bash
npm run build
npm run start
```

---

## 🎨 Customization

### Content

All personal data is centralized in a single file:

```
src/data/content.js
```

Edit your **name**, **tagline**, **bio**, **projects**, **services**, **skills**, **socials**, and **stats** — no need to touch the components.

### Theme

Colors are defined as CSS custom properties in `src/app/globals.css`:

```css
:root {
  --bg:           #0c0c0c;     /* Background */
  --accent:       #ff4d00;     /* Primary accent (orange) */
  --accent-hover: #ff6a2a;     /* Accent hover state */
  --neon-yellow:  #e6ff00;     /* Highlight color */
  --neon-cyan:    #00ffff;     /* Secondary highlight */
  --text-primary: #f5f5f0;     /* Main text */
  --text-muted:   #999999;     /* Subdued text */
}
```

Change these values to instantly re-theme the entire site.

### Resume

Drop your resume PDF into the `public/` folder and update the `resumeUrl` field in `content.js`:

```js
resumeUrl: "/Your-Name-Resume.pdf",
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**
3. Import your repository — Vercel auto-detects Next.js
4. Click **Deploy** ✅

Or via CLI:

```bash
npx vercel
```

### Other Platforms

Any platform supporting Next.js works (Netlify, Railway, AWS Amplify). Just ensure the build command is `next build` and the output directory is `.next`.

---

## 📄 License

This project is open source and available for personal use and learning. Feel free to fork it and make it your own!

---

<div align="center">

**Designed & Developed by [Deepak Dayanandan](https://deepakdesigns.vercel.app)**

[![GitHub](https://img.shields.io/badge/GitHub-DeepakDayanandan1-181717?logo=github)](https://github.com/DeepakDayanandan1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-deepak--dayanandan-0A66C2?logo=linkedin)](https://www.linkedin.com/in/deepak-dayanandan/)

</div>
