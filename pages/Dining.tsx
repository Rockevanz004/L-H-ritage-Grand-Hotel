import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dining: React.FC = () => {
  const navigate = useNavigate();
  const venues = [
    {
      name: "L'Orangerie",
      type: "Michelin 3-Star Fine Dining",
      desc: "An immersive gastronomic experience led by Chef Julien Laurent, focusing on seasonal French terroir with a modern twist. The restaurant is housed in a stunning glass atrium overlooking the hotel's courtyard gardens.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
      hours: "7:00 PM - 10:30 PM"
    },
    {
      name: "The Blue Library Bar",
      type: "Artisan Cocktails & Spirits",
      desc: "Our historic library transformed into a sophisticated lounge. Perfect for pre-dinner aperitifs, rare spirit tastings, or late-night jazz sessions in an intimate candle-lit atmosphere.",
      image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=1200",
      hours: "12:00 PM - 1:00 AM"
    }
  ];

  return (
    <div className="animate-page">
      {/* Hero Section - Exactly matching Home/Rooms Page layout */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Culinary Display" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            Culinary Excellence
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Dining & Spirits
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            A symphony of flavors curated by world-renowned masters of gastronomy.
          </p>
        </div>

        {/* Scroll Indicator - Perfect Centering */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="bg-[#FDFBF7]">
        <div className="container mx-auto px-6 py-32 text-center max-w-3xl reveal">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Gastronomy</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] mb-10">A Journey of Flavors</h2>
          <p className="text-slate-500 font-light text-xl leading-relaxed">
            From Michelin-starred excellence in our glass-domed orangerie to artisan cocktails in the candle-lit library, our culinary offerings celebrate the very best of local and international cuisine.
          </p>
        </div>

        {venues.map((venue, idx) => (
          <section key={venue.name} className={`py-32 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FDFBF7]'}`}>
            <div className="container mx-auto px-6">
              <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}>
                <div className={`lg:w-1/2 overflow-hidden rounded-sm group relative ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                  <img src={venue.image} alt={venue.name} className="w-full h-[650px] object-cover shadow-2xl transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 border-[20px] border-white/10 m-8 group-hover:m-12 transition-all duration-700"></div>
                </div>
                <div className="lg:w-1/2 space-y-8 reveal">
                  <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.4em]">{venue.type}</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#0B1221]">{venue.name}</h2>
                  <p className="text-slate-600 leading-relaxed text-xl font-light">{venue.desc}</p>
                  <div className="pt-8 pb-10 border-t border-slate-100">
                     <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Availability</p>
                     <p className="text-2xl font-serif text-[#0B1221]">{venue.hours}</p>
                  </div>
                  <button 
                    onClick={() => navigate('/booking-confirmation', { state: { type: 'Table Reservation', details: `A dinner table at ${venue.name}` } })}
                    className="bg-[#0B1221] text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all shadow-xl"
                  >
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Dining;