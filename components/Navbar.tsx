
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Spa', path: '/spa' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  // List of pages that have a full-screen dark hero at the top
  const heroPages = [
    '/', '/rooms', '/dining', '/spa', '/offers', '/contact', 
    '/facilities', '/experiences', '/gallery', '/events', 
    '/location', '/blog', '/faq', '/about', '/legal', '/terms'
  ];

  const isHeroPage = heroPages.includes(location.pathname);
  // Force solid background if it's a page without a hero (like Room Details) or if user scrolled
  const shouldBeSolid = isScrolled || !isHeroPage;

  const handleNavLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${shouldBeSolid ? 'bg-[#0B1221] shadow-2xl py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => handleNavLinkClick('/')}
          className="text-2xl font-serif font-bold tracking-[0.3em] text-white transition-all duration-500 hover:tracking-[0.4em]"
        >
          L'HÉRITAGE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavLinkClick(link.path)}
              className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 relative group text-white/90 hover:text-white`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#D4AF37] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <Link
            to="/rooms"
            className="bg-[#D4AF37] text-white px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-[#0B1221] transition-all transform hover:-translate-y-1 shadow-lg gold-glow"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <ICONS.Close /> : <ICONS.Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Strictly Opaque and Full Screen */}
      <div className={`fixed inset-0 bg-[#0B1221] z-[105] flex flex-col items-center justify-center transition-all duration-700 cubic-bezier(0.77, 0, 0.175, 1) ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-white text-3xl font-serif tracking-[0.1em] hover:text-[#D4AF37] transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => handleNavLinkClick(link.path)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/rooms"
            className={`mt-10 bg-[#D4AF37] text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.3em] transition-all duration-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reservations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
