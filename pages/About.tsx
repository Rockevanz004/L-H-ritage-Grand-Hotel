
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-page">
      {/* Hero Section - Standardized with a distinct heritage-themed image */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517840901100-8179e982ad31?auto=format&fit=crop&q=80&w=1920" 
            alt="The Heritage of L'Héritage" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            The Legend
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Our Story
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            A century-long commitment to the art of refined living in the heart of Paris.
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
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10 reveal-left">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block">Heritage</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#0B1221]">A Century of Parisian Grandeur</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light">
                Since opening our doors in 1892, L'Héritage Grand Hotel has been the preferred residence for royalty, artists, and global leaders. Originally a palatial private mansion, our estate has been meticulously preserved to offer the ultimate in timeless luxury.
              </p>
              <div className="space-y-6 pt-4">
                <p className="text-slate-600 text-lg leading-relaxed font-light italic border-l-4 border-[#D4AF37] pl-8">
                  "Our philosophy is simple: to provide an experience that transcends mere accommodation. Every detail is designed to evoke a sense of homecoming in the heart of the world's most beautiful city."
                </p>
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">— JULIEN CLARENCE, FOUNDER</p>
              </div>
            </div>
            <div className="lg:w-1/2 group relative reveal-right">
               <div className="absolute inset-0 border-[15px] border-[#D4AF37]/10 m-[-20px] -z-10 group-hover:m-[-30px] transition-all duration-700"></div>
               <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" alt="Historical Estate" className="w-full h-[750px] object-cover rounded-sm shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <section className="py-32 bg-[#0B1221] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="text-center space-y-6 reveal delay-s-1">
              <h4 className="font-serif text-3xl">Artistry</h4>
              <p className="text-slate-400 font-light leading-relaxed">Every corner of the hotel is curated with museum-quality art and hand-crafted furnishings.</p>
            </div>
            <div className="text-center space-y-6 reveal delay-s-2">
              <h4 className="font-serif text-3xl">Service</h4>
              <p className="text-slate-400 font-light leading-relaxed">Personalized rituals that anticipate your every wish before you even think of them.</p>
            </div>
            <div className="text-center space-y-6 reveal delay-s-3">
              <h4 className="font-serif text-3xl">Legacy</h4>
              <p className="text-slate-400 font-light leading-relaxed">Preserving the spirit of the past while leading the future of luxury hospitality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
