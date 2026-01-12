import { useState, useEffect } from 'react';
import ylgcLogo from '../assets/logo/ylgc.png';
import techLogo from '../assets/logo/tech_logo.png';
import glfLogo from '../assets/logo/PSG-GLF.png';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Committees', id: 'committees' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 text-2xl font-display font-bold text-white hover:text-accent-gold transition-colors"
            >
              <img src={techLogo} alt="PSG Tech Logo" className="h-16 w-auto md:h-20 object-contain bg-white rounded-md p-1" />
              <img src={glfLogo} alt="PSG GLF Logo" className="h-16 w-auto md:h-20 object-contain bg-white rounded-md p-1" />
              <img src={ylgcLogo} alt="YLGC Logo" className="h-16 w-auto md:h-20 object-contain bg-white rounded-md p-1" />
              <span>YLGC MUN</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-accent-gold transition-colors px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://linktr.ee/ylgcmun2026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold text-primary-bg px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all hover:scale-105 inline-flex items-center justify-center"
              >
                Register
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-accent-gold transition-colors p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-accent-gold transition-colors block px-3 py-2 text-base font-medium w-full text-left"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://linktr.ee/ylgcmun2026"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-accent-gold text-primary-bg px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all w-full mt-2 inline-block text-center"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}