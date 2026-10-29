import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
