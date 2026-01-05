
import React from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { ROOMS, ICONS } from '../constants';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = ROOMS.find((r) => r.id === id);

  if (!room) return <Navigate to="/rooms" />;

  const handleReserve = () => {
    navigate('/booking-confirmation', { state: { type: 'Room Reservation', details: room.name } });
  };

  return (
    <div className="pt-24 pb-24 animate-page">
      <div className="container mx-auto px-6">
        <Link to="/rooms" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-[#D4AF37] transition-colors mb-12">
          <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8 reveal-left">
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img src={room.images[0]} alt={room.name} className="w-full h-[600px] object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1).map((img, i) => (
                <img key={i} src={img} alt={`${room.name} view ${i + 2}`} className="w-full h-48 object-cover rounded-sm hover:opacity-90 transition-opacity cursor-pointer" />
              ))}
            </div>
          </div>

          <div className="space-y-8 reveal-right">
            <div>
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold">{room.category}</span>
              <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-6">{room.name}</h1>
              <div className="flex items-center space-x-8 text-slate-500 font-medium">
                <span className="flex items-center space-x-2"><ICONS.Bed /> <span>{room.size}</span></span>
                <span className="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> <span>Up to {room.capacity} Guests</span></span>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light">
              {room.description}
            </p>

            <div className="pt-8 border-t border-slate-200 reveal delay-s-1">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Premium Amenities</h4>
              <div className="grid grid-cols-2 gap-y-4">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-3 text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 reveal delay-s-2">
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-4xl font-serif text-[#0B1221]">${room.price}</span>
                <span className="text-slate-400 text-sm uppercase tracking-widest font-bold">Per Night</span>
              </div>
              <button 
                onClick={handleReserve}
                className="w-full bg-[#0B1221] text-white py-5 uppercase tracking-widest text-xs font-bold hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1 shadow-xl active:scale-95"
              >
                Reserve this Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
