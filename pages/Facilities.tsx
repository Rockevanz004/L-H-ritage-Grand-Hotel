
import React from 'react';
import { ICONS } from '../constants';

const Facilities: React.FC = () => {
  const items = [
    { title: "Rooftop Infinity Pool", desc: "Panoramic Parisian skyline views with climate-controlled water and exclusive cocktail service.", icon: <ICONS.Bed /> },
    { title: "Elite Wellness Gym", desc: "State-of-the-art Technogym equipment with on-site personal trainers and private yoga sessions.", icon: <ICONS.Spa /> },
    { title: "Chauffeur Service", desc: "A curated fleet of premium vehicles at your disposal for seamless city transit and airport transfers.", icon: <ICONS.Wifi /> },
    { title: "The Heritage Cinema", desc: "An intimate, velvet-clad 20-seat private theater featuring the latest blockbusters and cinema classics.", icon: <ICONS.Coffee /> },
    { title: "Executive Boardroom", desc: "Sophisticated meeting spaces equipped with the latest technology for high-level business discussions.", icon: <ICONS.Wifi /> },
    { title: "Botanical Courtyard", desc: "A hidden oasis of calm in the center of the hotel, perfect for morning coffee or afternoon tea.", icon: <ICONS.Coffee /> },
  ];

  return (
    <div className="animate-page">
      {/* Hero Section - Standardized to match Home/Rooms hero arrangement */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Facilities" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            The Estate
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            World-Class Services
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            Every amenity is designed to anticipate your needs and exceed your highest expectations.
          </p>
        </div>

        {/* Scroll Indicator - Standardized Centering */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Explore</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto reveal">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Amenities</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] mb-8">Refining The Standard</h2>
            <p className="text-slate-500 text-xl font-light leading-relaxed">
              At L'Héritage, we believe true luxury lies in the details. Our facilities combine historical grandeur with modern convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 shadow-2xl">
            {items.map((item, i) => (
              <div key={i} className={`bg-white p-16 text-center hover:bg-[#FDFBF7] transition-all duration-700 group reveal delay-s-${(i % 3) + 1}`}>
                <div className="w-20 h-20 bg-[#FDFBF7] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0B1221] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-[#0B1221] mb-6">{item.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
