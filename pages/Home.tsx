import React from 'react';
import BookingBar from '../components/BookingBar';
import { ROOMS, ICONS } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative animate-page">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
            alt="L'Heritage Grand Entrance"
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">The Pinnacle of Parisian Elegance</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">A Timeless Legacy <br/> Reimagined</h1>
        </div>
        
        {/* Scroll Indicator - Perfect Centering */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      {/* Booking Bar Container */}
      <div className="container mx-auto px-6 relative z-30">
        <BookingBar />
      </div>

      {/* Intro Section */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-24">
            {/* Left Column: Facts and Figures */}
            <div className="lg:w-1/2 space-y-12">
              <div className="reveal">
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold block">Art of Living</span>
                <h2 className="text-5xl md:text-7xl font-serif text-[#0B1221] leading-tight">An Intimate Sanctuary <br/> in the Heart of Paris</h2>
              </div>
              <p className="text-slate-600 text-2xl leading-relaxed font-light reveal delay-s-1">
                For over a century, L'Héritage has defined the standards of Parisian luxury. Each corner of our hotel tells a story of royalty, artistry, and unparalleled hospitality.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-8 reveal delay-s-2">
                <div>
                  <h4 className="text-6xl font-serif text-[#D4AF37] mb-3">1892</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Established</p>
                </div>
                <div>
                  <h4 className="text-6xl font-serif text-[#D4AF37] mb-3">3★</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Michelin Awards</p>
                </div>
              </div>

              <div className="pt-10 border-b border-slate-100 pb-12 reveal delay-s-3">
                <Link to="/facilities" className="inline-block border-b-2 border-[#D4AF37] pb-3 text-[11px] uppercase tracking-[0.4em] font-bold hover:text-[#D4AF37] transition-all">The Full Estate Guide</Link>
              </div>

              {/* Legendary Narrative Bridge (Desktop only, subtle placement) */}
              <div className="hidden lg:block max-w-md reveal delay-s-4">
                <p className="text-xl font-serif italic text-slate-400 leading-[1.8]">
                  "We do not merely offer a room; we provide a stage for the extraordinary moments of your life."
                </p>
              </div>
            </div>

            {/* Right Column: Narrative & Image */}
            <div className="lg:w-1/2 flex flex-col justify-end relative group">
              {/* Philosophical Chronicle - The "Legendary" Paragraph */}
              <div className="mb-16 lg:pl-12 border-l border-[#D4AF37]/30 reveal-right">
                <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.6em] font-bold block mb-6">The Essence</span>
                <p className="text-3xl md:text-4xl font-serif text-[#0B1221] leading-[1.5] italic mb-8 relative">
                  The architecture of L'Héritage is not merely stone and mortar; it is a meticulously preserved manuscript of European high society. Every corridor breathes the legacy of those who shaped the modern world within these very walls.
                </p>
                <p className="text-slate-500 font-light text-lg leading-relaxed">
                  To walk through our gilded entrance is to dance with the shadows of history, where every crystal light is a silent witness to a century of celebrated secrets and refined quietude.
                </p>
              </div>

              {/* The Image */}
              <div className="relative overflow-hidden shadow-2xl reveal-right delay-s-2">
                <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-1000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
                  alt="Historical Elegance" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                />
                <div className="absolute bottom-10 left-10 text-white z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <p className="text-[9px] uppercase tracking-[0.5em] font-bold mb-2 text-[#D4AF37]">Architectural Splendor</p>
                  <p className="font-serif text-2xl italic">The Facade at Twilight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-48 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-8 reveal">
            <div>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Signature Stays</span>
              <h2 className="text-5xl md:text-8xl font-serif text-[#0B1221]">Our Masterpieces</h2>
            </div>
            <Link to="/rooms" className="group flex items-center space-x-4 text-[#0B1221] font-bold uppercase tracking-[0.3em] text-[11px] hover:text-[#D4AF37] transition-all">
              <span>View Full Collection</span>
              <div className="w-12 h-[1px] bg-[#0B1221] group-hover:bg-[#D4AF37] group-hover:w-20 transition-all"></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {ROOMS.filter(r => r.featured).map((room, i) => (
              <div key={room.id} className={`group cursor-pointer reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                <Link to={`/rooms/${room.id}`}>
                  <div className="overflow-hidden mb-12 relative aspect-[16/10] shadow-2xl group">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700"></div>
                    <div className="absolute top-10 right-10 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xl">
                      From ${room.price}
                    </div>
                  </div>
                </Link>
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-serif group-hover:text-[#D4AF37] transition-colors leading-tight">
                    <Link to={`/rooms/${room.id}`}>{room.name}</Link>
                  </h3>
                  <p className="text-slate-500 font-light text-2xl leading-relaxed line-clamp-2 max-w-xl">{room.description}</p>
                  <div className="flex items-center space-x-12 pt-6">
                    <Link to={`/rooms/${room.id}`} className="flex items-center space-x-4 text-slate-400 group-hover:text-[#0B1221] transition-colors"><ICONS.Bed /> <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{room.size}</span></Link>
                    <Link to={`/rooms/${room.id}`} className="flex items-center space-x-4 text-slate-400 group-hover:text-[#0B1221] transition-colors"><ICONS.Wifi /> <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Connected</span></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid with Rolling Hover Effects */}
      <section className="py-24 bg-[#0B1221] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 shadow-2xl">
            <Link to="/spa" className="bg-[#0B1221] py-24 px-12 flex flex-col items-center text-center group hover:bg-[#D4AF37] transition-all duration-700 reveal delay-s-1">
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white mb-10 transition-all group-hover:bg-white group-hover:text-[#0B1221]">
                <ICONS.Spa />
              </div>
              <h4 className="font-serif text-3xl mb-4">Royal Spa</h4>
              <p className="text-slate-400 group-hover:text-white/80 text-lg font-light transition-all">Wellness redefined</p>
            </Link>
            <Link to="/dining" className="bg-[#0B1221] py-24 px-12 flex flex-col items-center text-center group hover:bg-[#D4AF37] transition-all duration-700 reveal delay-s-2">
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white mb-10 transition-all group-hover:bg-white group-hover:text-[#0B1221]">
                <ICONS.Coffee />
              </div>
              <h4 className="font-serif text-3xl mb-4">Fine Dining</h4>
              <p className="text-slate-400 group-hover:text-white/80 text-lg font-light transition-all">Michelin excellence</p>
            </Link>
            <Link to="/experiences" className="bg-[#0B1221] py-24 px-12 flex flex-col items-center text-center group hover:bg-[#D4AF37] transition-all duration-700 reveal delay-s-3">
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white mb-10 transition-all group-hover:bg-white group-hover:text-[#0B1221]">
                <ICONS.Wifi />
              </div>
              <h4 className="font-serif text-3xl mb-4">Experiences</h4>
              <p className="text-slate-400 group-hover:text-white/80 text-lg font-light transition-all">Parisian secrets</p>
            </Link>
            <Link to="/gallery" className="bg-[#0B1221] py-24 px-12 flex flex-col items-center text-center group hover:bg-[#D4AF37] transition-all duration-700 reveal delay-s-4">
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white mb-10 transition-all group-hover:bg-white group-hover:text-[#0B1221]">
                <ICONS.Bed />
              </div>
              <h4 className="font-serif text-3xl mb-4">Gallery</h4>
              <p className="text-slate-400 group-hover:text-white/80 text-lg font-light transition-all">Visual heritage</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with Soft Fade */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold mb-16 block reveal">Voices of L'Héritage</span>
          <div className="text-4xl md:text-6xl font-serif italic text-slate-800 leading-[1.5] mb-20 font-light reveal delay-s-1">
            "An oasis of silence and luxury in the bustling heart of Paris. The Royal Suite offers views that stay with you forever."
          </div>
          <div className="flex flex-col items-center reveal delay-s-2">
            <div className="flex text-[#D4AF37] space-x-3 mb-6 scale-125">
              <ICONS.Star /><ICONS.Star /><ICONS.Star /><ICONS.Star /><ICONS.Star />
            </div>
            <span className="font-bold uppercase tracking-[0.4em] text-[11px] text-slate-400">Alexander Thorne — Forbes Travel Guide</span>
          </div>
        </div>
      </section>

      {/* Final CTA - Balanced sizing and alignment */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1920" 
            alt="Paris At Dusk" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto flex flex-col items-center">
           <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold mb-12 block reveal">Unforgettable</span>
           <h2 className="text-5xl md:text-8xl font-serif leading-[1.2] mb-10 reveal delay-s-1">Begin Your Journey</h2>
           <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto mb-16 leading-relaxed reveal delay-s-2">
             Your extraordinary experience awaits at L'Héritage Grand Hotel. <br className="hidden md:block"/> Discover the true essence of Parisian luxury.
           </p>
           <div className="reveal delay-s-3">
             <Link 
               to="/rooms" 
               className="inline-block bg-[#D4AF37] text-white px-20 py-7 uppercase tracking-[0.5em] text-[11px] font-bold hover:bg-white hover:text-[#0B1221] transition-all duration-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95"
             >
               Reserve Your Sanctuary
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;