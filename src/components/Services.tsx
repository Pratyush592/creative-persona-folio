
import React from 'react';

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="bg-neon/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-charcoal/80">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Copywriting",
      description: "Compelling copy that drives action, tells your story, and connects with your audience.",
      icon: "✍️"
    },
    {
      title: "Web Design",
      description: "Beautiful, functional websites that represent your brand and engage your visitors.",
      icon: "🎨"
    },
    {
      title: "Email Marketing",
      description: "Strategic campaigns that nurture leads, drive sales, and build lasting relationships.",
      icon: "📧"
    },
    {
      title: "Web Development",
      description: "Custom websites built with clean code, responsive design, and user experience in mind.",
      icon: "💻"
    },
    {
      title: "Facebook Ads",
      description: "Targeted campaigns that reach your ideal customers and deliver measurable results.",
      icon: "📱"
    },
    {
      title: "3D Website Design",
      description: "Immersive experiences that set your brand apart with cutting-edge design technology.",
      icon: "🌐"
    }
  ];

  return (
    <section id="services" className="py-20 bg-olive text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-6"></div>
          <p className="text-cream/80">
            Comprehensive digital solutions to grow your brand and connect with your audience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
