
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import BrandDesign from '../components/BrandDesign';
import WebDesign from '../components/WebDesign';
import ThreeD from '../components/ThreeD';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <BrandDesign />
      <WebDesign />
      <ThreeD />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
