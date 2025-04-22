
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const portfolioItems = [
    {
      title: "Sample Copy",
      description: "Persuasive copywriting for maximum conversion",
      image: "/lovable-uploads/698aed2b-7487-419b-bb9e-cf5d06f08f59.png",
      category: "copy",
      link: "https://docs.google.com/document/d/1-P0Z-wGzYP5EB-vNVANHk4CfDvJYWsEGG3hk2YGmKmE/edit?tab=t.0"
    },
    {
      title: "Sample AD Copy",
      description: "Engaging Facebook ad copy that drives clicks",
      image: "/lovable-uploads/294f7db5-bf1c-457a-b440-f7043987b296.png",
      category: "copy",
      link: "https://docs.google.com/document/d/1AEJV8zmw47xEGAUNTm17NlA9jE2JN-1URteiBYTSoNs/edit?tab=t.0"
    },
    {
      title: "Exclusive Email Copy",
      description: "Email campaigns that engage and convert",
      image: "/lovable-uploads/30582367-3a3d-4445-99c9-da845b026246.png",
      category: "email",
      link: "https://docs.google.com/document/d/1OavhLV354YNa-HOntCWiTr-fciOVmoKD9MeK6mqeSOM/edit?tab=t.0"
    },
    {
      title: "Fashion Website",
      description: "Mobile-first design for fashion e-commerce",
      image: "/lovable-uploads/b737555f-52f1-4930-8d2b-46510ce97ac9.png",
      category: "web",
      link: "#"
    },
    {
      title: "Banking Platform",
      description: "Modern fintech interface with clean UX",
      image: "/lovable-uploads/1f10dcb3-4164-4360-93c7-c94989cf1012.png",
      category: "web",
      link: "#"
    },
    {
      title: "Payment Solution",
      description: "Secure payment gateway with elegant design",
      image: "/lovable-uploads/c8d2586c-192b-4d6f-9861-9ddc5f4098c8.png",
      category: "web",
      link: "#"
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            My Portfolio
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-6"></div>
          <p className="text-cream/80">
            A selection of my recent work across copywriting, web design, and marketing
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'all'
                ? 'bg-neon text-charcoal font-medium'
                : 'bg-cream/10 text-cream hover:bg-cream/20'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Projects
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'copy'
                ? 'bg-neon text-charcoal font-medium'
                : 'bg-cream/10 text-cream hover:bg-cream/20'
            }`}
            onClick={() => setActiveTab('copy')}
          >
            Copywriting
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'email'
                ? 'bg-neon text-charcoal font-medium'
                : 'bg-cream/10 text-cream hover:bg-cream/20'
            }`}
            onClick={() => setActiveTab('email')}
          >
            Email Marketing
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === 'web'
                ? 'bg-neon text-charcoal font-medium'
                : 'bg-cream/10 text-cream hover:bg-cream/20'
            }`}
            onClick={() => setActiveTab('web')}
          >
            Web Design
          </button>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="portfolio-item group bg-charcoal overflow-hidden rounded-xl"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-xl font-bold text-cream mb-2">{item.title}</h3>
                    <p className="text-cream/80 mb-4">{item.description}</p>
                    <span className="text-neon text-sm font-medium flex items-center">
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
