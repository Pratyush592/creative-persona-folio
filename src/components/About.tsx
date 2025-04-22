
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-charcoal">
            Who Am I?
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <p className="text-lg text-charcoal/90 mb-6">
              I bridge the gap between compelling copy and stunning design. As a versatile professional with expertise across multiple disciplines, I help businesses transform their online presence and marketing strategies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">What I Do Best</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Persuasive Copywriting - Sales pages, landing pages, product descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Web Design & Development - Responsive, user-friendly websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Email Marketing - Campaigns that drive engagement and conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Facebook Ads - Targeted campaigns that deliver ROI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">3D Website Design - Immersive experiences</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Why Work With Me?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Experienced Professional - 5+ years in digital marketing and design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Client-Focused - Your goals become my mission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Data-Driven & Creative - I blend analytics with creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Multi-Disciplinary - One professional for multiple needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                    <span className="text-charcoal/90">Results-Oriented - Focused on delivering measurable outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
