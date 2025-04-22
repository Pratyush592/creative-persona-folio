
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-charcoal relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-40 w-96 h-96 bg-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-neon/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-cream mb-4">
              Partho Mukherjee
            </h1>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="highlight-box">Professional Copywriter</span>
              <span className="highlight-box">Web Designer</span>
              <span className="highlight-box">Email Marketer</span>
              <span className="highlight-box">Web Developer</span>
              <span className="highlight-box">Facebook Ads Specialist</span>
            </div>
            <p className="text-lg text-cream/90 mb-8 max-w-lg">
              Versatility is My Strength. Mastery is My Standard.
            </p>
            <p className="text-cream/80 mb-8 max-w-lg">
              Words have power. Designs create impact. And being results-focused, I combine all these to craft high-converting marketing assets that turn visitors into buyers and brands into market leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary">
                View Portfolio
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden animate-fade-in shadow-xl border border-cream/10">
              <img 
                src="/lovable-uploads/be153ccc-b004-4a2c-b71e-32e373fe4992.png" 
                alt="Portfolio Preview"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-neon font-bold">COPY THAT CONVERTS</p>
                <p className="text-cream text-xl">SEE FOR YOURSELF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
