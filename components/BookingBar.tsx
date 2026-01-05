import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICONS } from '../constants';

const BookingBar: React.FC = () => {
  const [dates, setDates] = useState({ checkIn: '2024-07-15', checkOut: '2024-07-20' });
  const [guests, setGuests] = useState(2);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Pass data via state to simulate a real flow
    navigate('/booking-confirmation', { 
      state: { 
        type: 'Availability Search',
        details: `${guests} guests from ${dates.checkIn} to ${dates.checkOut}`
      } 
    });
  };

  return (
    <div className="w-full bg-white shadow-2xl z-40 transform -translate-y-1/2 rounded-md max-w-6xl mx-auto border border-slate-100 p-2 md:p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col px-4 py-2 border-r border-slate-100 last:border-0 relative">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Check In</span>
            <div className="flex items-center justify-between">
              <input
                type="date"
                value={dates.checkIn}
                onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                className="text-sm font-medium outline-none cursor-pointer text-slate-800 bg-white w-full pr-8 relative z-10"
              />
              <div className="absolute right-4 bottom-2.5 text-[#D4AF37] opacity-60">
                <ICONS.Calendar />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 py-2 border-r border-slate-100 last:border-0 relative">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Check Out</span>
            <div className="flex items-center justify-between">
              <input
                type="date"
                value={dates.checkOut}
                onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                className="text-sm font-medium outline-none cursor-pointer text-slate-800 bg-white w-full pr-8 relative z-10"
              />
              <div className="absolute right-4 bottom-2.5 text-[#D4AF37] opacity-60">
                <ICONS.Calendar />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col px-4 py-2 relative">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Guests</span>
            <div className="flex items-center justify-between">
              <input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className="text-sm font-medium outline-none bg-white cursor-pointer text-slate-800 w-full pr-8 relative z-10"
              />
              <div className="absolute right-4 bottom-2.5 text-[#D4AF37] opacity-60">
                <ICONS.Users />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="bg-[#0B1221] text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-all rounded-sm active:scale-95"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default BookingBar;