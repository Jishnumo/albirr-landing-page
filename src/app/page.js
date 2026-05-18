import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AdmissionsSection from "./components/AdmissionsSection";
import Features from "./components/Features";
import ChairmanMessage from "./components/ChairmanMessage";
import CardsSection from "./components/CardsSection";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-school-navy text-white">
      <main>
        {/* Hero and About blended as one continuous dark section */}
        <div className="bg-[#0f1f42]">
          <Reveal delay={0}>
            <Hero />
          </Reveal>
          <Reveal delay={120}>
            <AboutSection />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <Features />
        </Reveal>
        <Reveal delay={80}>
          <ChairmanMessage />
        </Reveal>
        <Reveal delay={80}>
          <AdmissionsSection />
        </Reveal>
        <Reveal delay={80}>
          <CardsSection />
        </Reveal>
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>

        {/* Final Sections blended into dark blue */}
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
