import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import GitHubShowcase from "@/components/sections/GitHubShowcase";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubShowcase />
      <Experience />
      <Certifications />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
