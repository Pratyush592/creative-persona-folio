
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-cream/10 pb-8 mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-neon mb-2">Partho Mukherjee</h2>
              <p className="text-cream/70">
                Professional Copywriter | Web Designer | Email Marketer | Web Developer | Facebook Ads Specialist
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#services" className="text-cream/70 hover:text-neon transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-cream/70 hover:text-neon transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-cream/70 hover:text-neon transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Partho Mukherjee. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="mailto:parthomukherg@gmail.com" className="text-cream/50 hover:text-neon transition-colors">
                parthomukherg@gmail.com
              </a>
              <span className="text-cream/50">|</span>
              <a href="tel:+919219454348" className="text-cream/50 hover:text-neon transition-colors">
                +91 9219454348
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
