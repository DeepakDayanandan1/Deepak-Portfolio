import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <Projects />
      <About />
      <Services />
      <TechStack />
      <Contact />
    </>
  );
}
