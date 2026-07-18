import React from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: "Deepak. — Portfolio",
  description:
    "Explore the portfolio of Deepak Dayanandan, showcasing modern web applications, AI-powered projects, and user-centric digital experiences.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "Deepak Dayanandan",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "AI Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  openGraph: {
    title: "Deepak. — Portfolio",
    description:
      "Explore modern web applications, AI-powered projects, and intuitive digital experiences built by Deepak Dayanandan.",
    url: "https://deepakdesigns.vercel.app",
    siteName: "Deepak Dayanandan",
    images: [
      {
        url: "/title.png",
        width: 922,
        height: 549,
        alt: "Deepak — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak. — Portfolio",
    description:
      "Explore modern web applications, AI-powered projects, and intuitive digital experiences built by Deepak Dayanandan.",
    images: ["/title.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
