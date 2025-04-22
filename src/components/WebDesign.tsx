
import React from 'react';

const WebDesign = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title text-charcoal mb-6">
                Web Design
              </h2>
              <p className="text-charcoal/80 mb-6">
                I create stunning, functional websites that not only look great but also deliver results. My design process focuses on user experience and conversion optimization.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-charcoal/90">Responsive design that works on all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-charcoal/90">User-centric interfaces for better engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-charcoal/90">Conversion-focused design that drives action</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative bg-charcoal rounded-lg p-3 shadow-xl">
                  <div className="flex items-center justify-start space-x-1.5 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="rounded-md overflow-hidden">
                    <img 
                      src="/lovable-uploads/c8d2586c-192b-4d6f-9861-9ddc5f4098c8.png" 
                      alt="Web design example" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon/20 rounded-full z-[-1]"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple/20 rounded-full z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesign;
