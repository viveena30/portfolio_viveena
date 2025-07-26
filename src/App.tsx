import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'skills', 'experience', 'projects', 'certifications', 'publications'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <CertificationsSection />
      <PublicationsSection />
      <Footer />
    </div>
  );
}

export default App;