import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <Projects />
      <About />
      <Skills />
      <TechStack />
      <Contact />
    </>
  );
}
