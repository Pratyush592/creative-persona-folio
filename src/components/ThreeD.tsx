
import React from 'react';

const ThreeD = () => {
  return (
    <section className="py-20 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            3D Websites
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-cream/80 mb-6">
                Take your web presence to the next dimension with immersive 3D websites that captivate visitors and create memorable experiences. Combining cutting-edge technology with creative design, these sites stand out in today's digital landscape.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-cream/90">Interactive 3D elements and animations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-cream/90">Immersive user experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-neon text-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">✓</span>
                  <span className="text-cream/90">Performance-optimized 3D rendering</span>
                </li>
              </ul>
              <a href="#contact" className="btn-outline">
                Discuss a 3D Project
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img 
                  src="/lovable-uploads/c8d2586c-192b-4d6f-9861-9ddc5f4098c8.png" 
                  alt="3D Website Example" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img 
                  src="/lovable-uploads/1f10dcb3-4164-4360-93c7-c94989cf1012.png" 
                  alt="3D Website Example" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img 
                  src="/lovable-uploads/30582367-3a3d-4445-99c9-da845b026246.png" 
                  alt="3D Website Example" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeD;
