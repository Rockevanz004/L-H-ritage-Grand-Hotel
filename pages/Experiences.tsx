
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Experiences: React.FC = () => {
  const navigate = useNavigate();
  const experiences = [
    { title: "Private Museum Tour", img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000", desc: "After-hours access to the city's finest art collections." },
    { title: "Vintage Wine Tasting", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000", desc: "Expert-led journey through our underground cellars." },
    { title: "Boutique Atelier Visit", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000", desc: "Meet the masters behind Haute Couture." }
  ];

  return (
    <div className="animate-page">
      {/* Hero Section - Matching Home/Rooms/Dining/Spa layout */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1920" 
            alt="Paris Experiences" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            Curated Moments
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Elite Experiences
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            Go beyond the hotel walls with activities curated exclusively for our guests.
          </p>
        </div>

        {/* Scroll Indicator - Perfect Centering */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-2xl mx-auto reveal">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Discover</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] mb-8">The Spirit of Paris</h2>
            <p className="text-slate-500 text-xl font-light">Explore the hidden facets of the city with our bespoke collection of local discoveries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`group cursor-pointer reveal delay-s-${(i % 3) + 1}`}>
                <div className="aspect-[3/4] overflow-hidden mb-8 relative shadow-2xl">
                   <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-[#0B1221]/20 group-hover:bg-[#0B1221]/60 transition-colors duration-500"></div>
                   <div className="absolute bottom-12 left-12 right-12 text-white">
                      <h3 className="text-3xl font-serif mb-6 group-hover:text-[#D4AF37] transition-colors">{exp.title}</h3>
                      <button 
                        onClick={() => navigate('/booking-confirmation', { state: { type: 'Experience Booking', details: exp.title } })}
                        className="text-[10px] uppercase font-bold tracking-[0.3em] border-b border-white pb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                      >
                        Inquire Details
                      </button>
                   </div>
                </div>
                <p className="text-slate-500 text-lg italic font-light px-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
