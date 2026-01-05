
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OFFERS } from '../constants';

const Offers: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-page">
      {/* Hero Section - Exactly matching Home/Rooms/Dining/Spa layout */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1920" 
            alt="Exclusive Luxury Offers" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            Privileged Access
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Packages & Offers
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            Curated experiences and seasonal gifts for our most discerning guests.
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
          <div className="space-y-32">
            {OFFERS.map((offer, idx) => (
              <div key={offer.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 group`}>
                <div className={`lg:w-3/5 overflow-hidden rounded-sm shadow-2xl relative ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                  <img src={offer.image} alt={offer.title} className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                </div>
                <div className={`lg:w-2/5 space-y-8 reveal ${idx % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em]">Limited Time Selection</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#0B1221]">{offer.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-xl font-light">{offer.description}</p>
                  <div className="pt-6 pb-10 border-t border-slate-100">
                     <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Valid Until</p>
                     <p className="text-2xl font-serif text-[#0B1221]">{new Date(offer.validUntil).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div className="bg-white p-10 border border-slate-100 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-8">
                     <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Promotion Code</p>
                        <p className="font-mono text-3xl tracking-[0.2em] text-[#0B1221]">{offer.discountCode}</p>
                     </div>
                     <button 
                      onClick={() => navigate('/booking-confirmation', { state: { type: 'Offer Package Booking', details: offer.title } })}
                      className="w-full sm:w-auto bg-[#0B1221] text-white px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all"
                     >
                      Reserve Package
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
