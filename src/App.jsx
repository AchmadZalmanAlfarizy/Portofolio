import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Sertifikat from './components/Sertifikat';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mounted, setMounted] = useState(false); // site rendered (just before the curtain lifts)
  const [ready, setReady] = useState(false); // splash finished

  const handlePrepare = useCallback(() => setMounted(true), []);
  const handleDone = useCallback(() => setReady(true), []);

  // Lock scroll while the intro is showing
  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [ready]);

  return (
    <LanguageProvider>
      <AnimatePresence>
        {!ready && <SplashScreen key="splash" onPrepare={handlePrepare} onDone={handleDone} />}
      </AnimatePresence>
      {mounted && (
        <div className="bg-slate-950 text-white min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Sertifikat />
          <Contact />
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
