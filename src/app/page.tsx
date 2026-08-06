import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Structure from "@/components/Structure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Statement />
      <Services />
      <Gallery />
      <VisionMission />
      <Values />
      <Structure />
      <Contact />
      <Footer />
    </main>
  );
}
