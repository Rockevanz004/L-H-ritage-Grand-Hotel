
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BookingConfirmation: React.FC = () => {
  const location = useLocation();
  const { type, details } = (location.state as any) || { type: 'General Inquiry', details: 'Thank you for your interest.' };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 animate-page">
      <div className="max-w-2xl w-full bg-white p-12 shadow-2xl rounded-sm text-center">
        <div className="w-20 h-20 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1 className="text-4xl font-serif mb-4">Request Received</h1>
        <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">{type}</p>
        <div className="bg-[#FDFBF7] p-8 mb-12 border border-slate-100">
           <p className="text-slate-600 font-light italic mb-2">We have received your request for:</p>
           <p className="text-xl font-serif text-[#0B1221]">{details}</p>
        </div>
        <p className="text-slate-500 mb-12 max-w-md mx-auto">
          Our specialized team is currently processing your request. You will receive a formal confirmation via email shortly. 
          Welcome to the world of L'Héritage.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/" className="bg-[#0B1221] text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#1E293B] transition-all">Back to Home</Link>
          <Link to="/rooms" className="border border-slate-200 text-slate-800 px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-slate-50 transition-all">Explore Rooms</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
