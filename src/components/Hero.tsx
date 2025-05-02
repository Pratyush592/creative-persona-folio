
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const nameHeading = document.getElementById('name-heading');
      
      if (selection && nameHeading) {
        // Check if any part of the name heading is selected
        const range = selection.toString();
        if (range && nameHeading.textContent?.includes(range)) {
          setIsHighlighted(true);
        } else {
          setIsHighlighted(false);
        }
      }
    };
    
    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, []);

  return (
    <section className="min-h-screen bg-charcoal relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-40 w-96 h-96 bg-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-neon/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col items-center lg:items-start">
          <div className="animate-fade-in text-center lg:text-left max-w-2xl">
            <h1 
              id="name-heading"
              className={`text-5xl md:text-7xl font-bold mb-4 transition-colors duration-300 ${
                isHighlighted ? 'text-purple' : 'text-cream'
              }`}
            >
              Partho Mukherjee
            </h1>
            <div className="flex flex-wrap gap-2 my-4 justify-center lg:justify-start">
              <span className="highlight-box">Professional Copywriter</span>
              <span className="highlight-box">Web Designer</span>
              <span className="highlight-box">Email Marketer</span>
              <span className="highlight-box">Web Developer</span>
              <span className="highlight-box">Facebook Ads Specialist</span>
            </div>
            <p className="text-lg text-cream/90 mb-8">
              Versatility is My Strength. Mastery is My Standard.
            </p>
            <p className="text-cream/80 mb-8">
              Words have power. Designs create impact. And being results-focused, I combine all these to craft high-converting marketing assets that turn visitors into buyers and brands into market leaders.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
