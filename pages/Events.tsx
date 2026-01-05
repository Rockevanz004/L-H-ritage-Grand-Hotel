
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Events: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-page">
      {/* Hero Section - Matching Home Page exactly in alignment and scale */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920" 
            alt="Wedding Gala" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            Grand Occasions
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Events & Weddings
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            Unforgettable moments set against a backdrop of unparalleled historical grandeur.
          </p>
        </div>

        {/* Scroll Indicator - Matching Home Page Exactly */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 group relative reveal-left">
            <div className="absolute inset-0 bg-[#D4AF37]/10 translate-x-6 translate-y-6 -z-10"></div>
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" alt="Grand Celebration" className="w-full h-[750px] object-cover rounded-sm shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]" />
          </div>
          <div className="lg:w-1/2 space-y-10 reveal-right">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block">Celebrations</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] leading-tight">Crafting Memories <br/> Beyond Compare</h2>
            <p className="text-slate-600 text-xl leading-relaxed font-light">
              From royal weddings in our gold-leaf ballrooms to high-stakes strategic meetings in our private library, L'Héritage provides a setting that commands respect and inspires awe.
            </p>
            <div className="space-y-8 pt-6">
              <div className="flex items-start space-x-6 border-b border-slate-200 pb-8 reveal delay-s-1">
                <span className="text-[#D4AF37] font-serif text-3xl">01</span>
                <div>
                  <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#0B1221] mb-2">The Royal Ballroom</h4>
                  <p className="text-base text-slate-500 font-light">Accommodating up to 500 guests under hand-painted ceilings and crystal chandeliers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 border-b border-slate-200 pb-8 reveal delay-s-2">
                <span className="text-[#D4AF37] font-serif text-3xl">02</span>
                <div>
                  <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#0B1221] mb-2">The Skyline Terrace</h4>
                  <p className="text-base text-slate-500 font-light">An open-air garden terrace with 360-degree views of Paris, perfect for cocktails at sunset.</p>
                </div>
              </div>
            </div>
            <div className="pt-6 reveal delay-s-3">
              <button 
                onClick={() => navigate('/booking-confirmation', { state: { type: 'Event Request', details: 'A private celebration or corporate meeting' } })}
                className="bg-[#0B1221] text-white px-16 py-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all shadow-2xl"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
