
import React from 'react';

const BrandDesign = () => {
  return (
    <section className="py-20 bg-sage/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title text-charcoal mb-6">
                Brand Redesign
              </h2>
              <p className="text-charcoal/80 mb-6">
                Creating visual identities that captivate audiences and reflect brand values. From logos to complete brand systems, I help businesses establish a powerful digital presence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-charcoal/90">Logo design and brand identity</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-charcoal/90">Visual language and style guides</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-charcoal/90">Digital asset creation and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative flex justify-center">
                {/* iPhone mockup with website */}
                <div className="relative w-48 h-96 bg-charcoal rounded-[3rem] p-2 border-4 border-charcoal shadow-xl mr-[-40px] z-10 transform rotate-[-5deg]">
                  <div className="absolute top-0 w-24 h-6 bg-charcoal rounded-b-xl left-1/2 transform -translate-x-1/2"></div>
                  <div className="h-full w-full rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="/lovable-uploads/b737555f-52f1-4930-8d2b-46510ce97ac9.png" 
                      alt="Fashion website on mobile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Laptop mockup with website */}
                <div className="relative w-64 h-40 bg-charcoal rounded-t-lg p-2 border-4 border-charcoal shadow-xl z-0 mt-20">
                  <div className="h-full w-full rounded-t-md overflow-hidden">
                    <img 
                      src="/lovable-uploads/1f10dcb3-4164-4360-93c7-c94989cf1012.png" 
                      alt="Digital banking website" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-0 right-0 h-3 bg-charcoal"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDesign;
