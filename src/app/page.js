import Hero from "./components/Hero";
import QuoteBar from "./components/QuoteBar";
import AboutSection from "./components/AboutSection";
import AdmissionsSection from "./components/AdmissionsSection";
import Features from "./components/Features";
import ChairmanMessage from "./components/ChairmanMessage";
import CardsSection from "./components/CardsSection";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-school-navy text-white">
      <main>
        {/* Main Sections */}
        {/* Hero, Quote, and About blended as one continuous dark section */}
        <div className="bg-[#0f1f42]">
          <Hero />
          <QuoteBar />
          <AboutSection />
        </div>
        <Features />
        <ChairmanMessage />
        <AdmissionsSection />
        <CardsSection />
        <ContactForm />

        {/* Final Sections blended into dark blue */}
        <Gallery />
        <div className="xl:-mt-44">
          <Footer />
        </div>
      </main>
    </div>
  );
}
