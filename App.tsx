import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/sections/Intro';
import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import AboutPhilosophy from './components/sections/AboutPhilosophy';
import SpacesServices from './components/sections/SpacesServices';
import GalleryTestimonials from './components/sections/GalleryTestimonials';
import Booking from './components/sections/Booking';
import Footer from './components/ui/Footer';
import { Partners } from "@/components/sections/PartnerLogo.tsx";

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Intro plays for 3.5 seconds then fades out
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="antialiased bg-charcoal text-sand selection:bg-gold selection:text-charcoal">
      <AnimatePresence>
        {showIntro && <Intro key="intro" />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Header />
          <main>
            <Hero />
            <AboutPhilosophy />
            <Partners />
            <SpacesServices />
            <GalleryTestimonials />
            <Booking />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;