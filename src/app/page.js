import Hero from "./components/Hero";
import QuoteBar from "./components/QuoteBar";
import AboutSection from "./components/AboutSection";
import AdmissionsSection from "./components/AdmissionsSection";
import Features from "./components/Features";
import ChairmanMessage from "./components/ChairmanMessage";
import CardsSection from "./components/CardsSection";
import ContactForm from "./components/ContactForm";

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
      </main>

      {/* Footer Placeholder (Optional but good for premium feel) */}
      <footer className="bg-deep-navy border-t border-white/5 py-12 px-6 md:px-12 text-center text-white/50 text-sm">
        <div className="mx-auto max-w-7xl">
          <p>© 2024 ALBİRR Schools. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
