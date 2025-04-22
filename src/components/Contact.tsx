
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-olive relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-cream" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-neon mx-auto mb-6"></div>
            <p className="text-cream/80 max-w-2xl mx-auto">
              Ready to discuss your project? Contact me today and let's create something amazing together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-cream/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-cream mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-neon/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Phone</p>
                    <p className="text-cream font-medium">+91 9219454348</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon/20 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Email</p>
                    <a href="mailto:parthomukherg@gmail.com" className="text-cream font-medium hover:text-neon transition-colors">
                      parthomukherg@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Location</p>
                    <p className="text-cream font-medium">India, UP, Mirzapur, Civil Lines Fatahan</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-bold text-cream mb-4">View My Work</h4>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="https://docs.google.com/document/d/1-P0Z-wGzYP5EB-vNVANHk4CfDvJYWsEGG3hk2YGmKmE/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-charcoal hover:bg-charcoal/80 text-cream py-3 px-4 rounded-lg flex justify-between items-center transition-colors"
                  >
                    <span>Sample Copy</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://docs.google.com/document/d/1AEJV8zmw47xEGAUNTm17NlA9jE2JN-1URteiBYTSoNs/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-charcoal hover:bg-charcoal/80 text-cream py-3 px-4 rounded-lg flex justify-between items-center transition-colors"
                  >
                    <span>Sample AD Copy</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://docs.google.com/document/d/1OavhLV354YNa-HOntCWiTr-fciOVmoKD9MeK6mqeSOM/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-charcoal hover:bg-charcoal/80 text-cream py-3 px-4 rounded-lg flex justify-between items-center transition-colors"
                  >
                    <span>Exclusive Email Copy</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-cream p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal/80 text-sm font-medium mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-sage focus:ring-1 focus:ring-sage focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-charcoal/80 text-sm font-medium mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-sage focus:ring-1 focus:ring-sage focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-charcoal/80 text-sm font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-sage focus:ring-1 focus:ring-sage focus:outline-none"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-charcoal/80 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-sage focus:ring-1 focus:ring-sage focus:outline-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-neon hover:bg-neon/90 text-charcoal font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
