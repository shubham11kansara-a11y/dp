import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ActivitiesSection from './components/ActivitiesSection';
import ContactSection from './components/ContactSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for Spider Web loader animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="app-container">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ActivitiesSection />
            <ContactSection />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
