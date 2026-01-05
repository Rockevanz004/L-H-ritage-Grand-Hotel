
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ICONS } from '../constants';

const Spa: React.FC = () => {
  const navigate = useNavigate();
  const treatments = [
    { name: "Royal Gold Facial", duration: "90 min", price: "280", desc: "A luxurious treatment using 24k gold leaf to restore radiance and elasticity. This signature experience combines ancient mineral therapies with modern dermatological innovation." },
    { name: "Deep Tissue Harmony", duration: "60 min", price: "190", desc: "Therapeutic massage targeting deep muscle tension for complete body renewal. Our expert therapists use heated organic oils to soothe and rejuvenate." },
    { name: "Aegean Scrub & Wrap", duration: "120 min", price: "340", desc: "Marine salts and algae wrap to detoxify and hydrate the skin. Experience the ultimate body purification inspired by the pristine waters of the Mediterranean." }
  ];

  return (
    <div className="animate-page">
      {/* Hero Section - Updated with requested image and centering fix */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1920" 
            alt="Royal Spa Sanctuary" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            Sanctuary of Peace
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            The Royal Spa
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            An oasis of tranquility where centuries-old traditions meet modern wellness innovation.
          </p>
        </div>

        {/* Scroll Indicator - Perfect Centering */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="bg-[#FDFBF7]">
        <div className="container mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 reveal-left">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block">Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] leading-tight">Holistic Rejuvenation <br/> For Mind & Body</h2>
              <p className="text-slate-600 leading-relaxed text-xl font-light">
                At L'Héritage Spa, we believe wellness is a journey, not a destination. Our expert therapists curate personalized experiences that restore balance, vitality, and deep inner peace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-6">
                <div className="flex flex-col items-start space-y-4 group">
                  <div className="w-12 h-12 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                    <ICONS.Spa />
                  </div>
                  <h4 className="font-serif text-2xl text-[#0B1221]">Thermal Circuit</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">Experience our eucalyptus steam rooms, cedar saunas, and Arctic ice plunges.</p>
                </div>
                <div className="flex flex-col items-start space-y-4 group">
                  <div className="w-12 h-12 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                    <ICONS.Coffee />
                  </div>
                  <h4 className="font-serif text-2xl text-[#0B1221]">Vitality Bar</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">Recharge with curated organic infusions and cold-pressed botanical elixirs.</p>
                </div>
              </div>
            </div>
            <div className="relative group reveal-right">
              <div className="absolute inset-0 bg-[#0B1221]/5 translate-x-6 translate-y-6 -z-10 transition-transform duration-700"></div>
              {/* Reliable image of people in robes on loungers matching user request */}
              <img 
                src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1200&auto=format&fit=crop" 
                alt="Spa Wellness" 
                className="w-full h-[650px] object-cover shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>

        <section className="py-32 bg-[#0B1221] text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24 reveal">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Signature Rituals</span>
              <h2 className="text-4xl md:text-6xl font-serif">The Collection</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {treatments.map((t, i) => (
                <div key={t.name} className={`bg-white/5 backdrop-blur-sm border border-white/10 p-12 hover:border-[#D4AF37] transition-all duration-700 group flex flex-col h-full reveal delay-s-${i+1}`}>
                  <div className="flex justify-between items-start mb-10">
                    <h3 className="text-3xl font-serif text-white group-hover:text-[#D4AF37] transition-colors leading-tight">{t.name}</h3>
                    <span className="text-[#D4AF37] font-serif text-2xl">${t.price}</span>
                  </div>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light flex-grow">{t.desc}</p>
                  <div className="flex justify-between items-center pt-8 border-t border-white/10">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{t.duration}</span>
                      <button 
                        onClick={() => navigate('/booking-confirmation', { state: { type: 'Spa Treatment Booking', details: t.name } })}
                        className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-all border-b border-[#D4AF37] pb-1"
                      >
                        Book Now
                      </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-24 text-center reveal">
              <button 
                onClick={() => alert('Brochure download started...')}
                className="bg-[#D4AF37] text-white px-16 py-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-[#0B1221] transition-all shadow-2xl"
              >
                Download Spa Brochure
              </button>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        </section>
      </div>
    </div>
  );
};

export default Spa;
