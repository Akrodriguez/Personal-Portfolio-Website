import { Hero } from "@/components/sections/hero";
import RecruiterSnapshot from "@/components/sections/recruiter-snapshot";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecruiterSnapshot />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}