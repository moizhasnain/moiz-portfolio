import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import CredentialsAndHighlights from "@/components/CredentialsAndHighlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <CaseStudies />
      <Experience />
      <CredentialsAndHighlights />
      <Contact />
      <Footer />
    </main>
  );
}
