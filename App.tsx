
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Dining from './pages/Dining';
import Spa from './pages/Spa';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Experiences from './pages/Experiences';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Location from './pages/Location';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import TermsOfService from './pages/TermsOfService';
import BookingConfirmation from './pages/BookingConfirmation';
import About from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const ScrollRevealManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once revealed, we don't need to observe it anymore for performance
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Force Home on initial load/refresh to prevent defaulting to other pages
  useEffect(() => {
    if (window.location.hash !== '#/') {
      window.location.hash = '#/';
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealManager />
      <div className="min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Direct mapping for the root path to Home */}
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/location" element={<Location />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            
            {/* Catch-all route to redirect back to home if an invalid path is entered */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
