
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-neon">
            PARTHO<span className="text-cream">.DESIGN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-cream hover:text-neon transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-cream hover:text-neon transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-cream hover:text-neon transition-colors">
              About
            </a>
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cream" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal absolute w-full py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="text-cream hover:text-neon transition-colors"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-cream hover:text-neon transition-colors"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-cream hover:text-neon transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="btn-primary inline-block text-center"
              onClick={toggleMobileMenu}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
