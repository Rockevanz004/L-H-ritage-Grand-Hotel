
import React from 'react';

const Location: React.FC = () => {
  return (
    <div className="animate-page">
      {/* Hero Section - Matching Home Page exactly in alignment and scale */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1920" 
            alt="Paris Skyline" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            The Neighborhood
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Location & Discovery
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            Perfectly positioned in the prestigious 8th Arrondissement of Paris.
          </p>
        </div>

        {/* Scroll Indicator - Matching Home Page Exactly */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-2xl mx-auto reveal">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">The City</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] mb-8">In The Heart Of It All</h2>
            <p className="text-slate-500 text-xl font-light">L'Héritage offers a quiet sanctuary while being just steps away from the world's most iconic landmarks.</p>
          </div>
          
          <div className="aspect-[21/9] w-full bg-slate-200 rounded-sm overflow-hidden mb-24 relative shadow-2xl group reveal">
             <img src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=1920" alt="Map Area" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-md p-10 text-center shadow-2xl max-w-sm border border-[#D4AF37]/20 reveal delay-s-2">
                   <h4 className="font-serif text-3xl text-[#0B1221] mb-4">L'Héritage Grand Hotel</h4>
                   <p className="text-slate-500 text-sm font-light mb-6">75 Avenue de l'Élégance, 75008 Paris, France</p>
                   <button 
                     onClick={() => window.open('https://maps.google.com', '_blank')}
                     className="bg-[#0B1221] text-white px-10 py-4 text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-[#D4AF37] transition-all"
                   >
                    Open In Google Maps
                   </button>
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="space-y-12 reveal-left">
              <h3 className="text-3xl font-serif text-[#0B1221] border-b border-[#D4AF37] pb-4">Nearby Attractions</h3>
              <ul className="space-y-10">
                <li className="group cursor-default reveal delay-s-1">
                  <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#D4AF37] mb-3">The Louvre Museum</h4>
                  <p className="text-lg text-slate-500 font-light leading-relaxed">A scenic 10 minute walk through the royal gardens of the Tuileries.</p>
                </li>
                <li className="group cursor-default reveal delay-s-2">
                  <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#D4AF37] mb-3">Champs-Élysées</h4>
                  <p className="text-lg text-slate-500 font-light leading-relaxed">The world's most prestigious shopping avenue is just 5 minutes by private chauffeur.</p>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 space-y-12 reveal-right">
              <h3 className="text-3xl font-serif text-[#0B1221] border-b border-[#D4AF37] pb-4">Arrival & Transport</h3>
              <p className="text-slate-600 leading-relaxed text-xl font-light">
                We provide complimentary VIP airport transfers for all Suite guests. Our multi-lingual concierge can arrange everything from private helicopters to yacht charters on the Seine.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                 <div className="p-10 bg-white border border-slate-100 shadow-lg hover:border-[#D4AF37] transition-all reveal delay-s-1">
                    <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4">By Air</h4>
                    <p className="text-lg text-slate-800 font-serif">Charles de Gaulle (CDG)</p>
                    <p className="text-sm text-slate-500 font-light mt-2">45 minutes by car transfer.</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 shadow-lg hover:border-[#D4AF37] transition-all reveal delay-s-2">
                    <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4">By Rail</h4>
                    <p className="text-lg text-slate-800 font-serif">Gare du Nord (Eurostar)</p>
                    <p className="text-sm text-slate-500 font-light mt-2">15 minutes by car transfer.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
