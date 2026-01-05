
import React, { useState, useMemo } from 'react';
import { ROOMS, ICONS } from '../constants';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Suite', 'Deluxe', 'Standard'];

  const filteredRooms = useMemo(() => {
    return filter === 'All'
      ? ROOMS
      : ROOMS.filter(r => r.category === filter);
  }, [filter]);

  return (
    <div className="animate-page">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Contemporary Suite" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            The Collection
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Rooms & Suites
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            Immerse yourself in Parisian elegance with our meticulously designed sanctuaries.
          </p>
        </div>

        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          {/* Enhanced Filter Navigation - Improved Visibility and Contrast */}
          <div className="flex flex-col items-center mb-24 reveal">
            <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.5em] font-bold mb-8">Refine Search</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`group relative py-2 px-4 transition-all duration-500`}
                >
                  <span className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${filter === cat ? 'text-[#0B1221]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {cat === 'All' ? 'All Residences' : cat + 's'}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Room Grid - Fixed dynamic reveal bug using CSS animations instead of IntersectionObserver for dynamic content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[400px]">
            {filteredRooms.map((room, idx) => (
              <div 
                key={`${filter}-${room.id}`} 
                className={`bg-white group shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${(idx % 6) * 100}ms` }}
              >
                <Link to={`/rooms/${room.id}`} className="block relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-[#0B1221] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2">
                    {room.category}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white px-6 py-3">View Details</span>
                  </div>
                </Link>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-serif text-[#0B1221] group-hover:text-[#D4AF37] transition-colors leading-tight">
                      <Link to={`/rooms/${room.id}`}>{room.name}</Link>
                    </h3>
                    <div className="text-right">
                      <span className="text-[#D4AF37] font-serif text-xl block">${room.price}</span>
                      <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Per Night</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed font-light line-clamp-3">{room.description}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                     <div className="flex space-x-6 text-slate-400">
                        <span className="flex items-center space-x-2 text-[9px] uppercase font-bold tracking-tighter"><ICONS.Bed /> {room.size}</span>
                        <span className="flex items-center space-x-2 text-[9px] uppercase font-bold tracking-tighter"><ICONS.Wifi /> Connected</span>
                     </div>
                     <Link to={`/rooms/${room.id}`} className="text-[9px] uppercase tracking-[0.2em] font-bold border-b border-[#D4AF37] text-[#0B1221] hover:border-black transition-all">Explore Room</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-slate-400 font-serif text-2xl italic">No rooms found in this category at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
