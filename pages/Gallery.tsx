
import React from 'react';

const Gallery: React.FC = () => {
  // Verified high-quality luxury hotel and interior images
  // Updated 15th image (index 14) to match the user's previously requested Parisian breakfast scene
  const galleryImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945", // 1
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", // 2
    "https://images.unsplash.com/photo-1590490360182-c33d57733427", // 3
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", // 4
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d", // 5
    "https://images.unsplash.com/photo-1555244162-803834f70033", // 6
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03", // 7
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b", // 8
    "https://images.unsplash.com/photo-1590439471364-192aa70c0b53", // 9
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32", // 10
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39", // 11
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf", // 12
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", // 13
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // 14
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143", // 15 - BREAKFAST SCENE
    "https://images.unsplash.com/photo-1549144511-f099e773c147"  // 16
  ];

  return (
    <div className="animate-page">
      {/* Hero Section - Updated with the specific Paris balcony image requested */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1920" 
            alt="The Grand Heritage View" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            Visual Journey
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Our Heritage
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            A window into the timeless elegance and sophisticated moments of L'Héritage.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Explore Gallery</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 mb-24 text-center max-w-3xl reveal">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Atmosphere</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0B1221] mb-8">Captured Elegance</h2>
          <p className="text-slate-500 font-light text-xl leading-relaxed">
            Explore every detail of our palatial estate, from our gold-leaf ceilings to our intimate garden corners. Each frame tells a story of refined Parisian luxury.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-[1600px] mx-auto">
          {galleryImages.map((imgUrl, i) => (
            <div key={i} className={`aspect-square overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 reveal delay-s-${(i % 4) + 1}`}>
               <img 
                 src={`${imgUrl}?auto=format&fit=crop&q=80&w=800`} 
                 alt="Gallery Heritage" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-500">
                  <span className="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/50 px-6 py-3 hover:bg-white hover:text-[#0B1221] transition-all">Expand View</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
