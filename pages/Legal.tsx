
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="animate-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920" 
          alt="Legal Information" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" 
        />
        <div className="absolute inset-0 bg-[#0B1221]/40"></div>
        <div className="relative z-10 text-white mt-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 animate-fade-in-up">Legal Information</h1>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-16 shadow-2xl space-y-20 text-slate-600 leading-relaxed font-light text-lg">
            <section>
              <h2 className="text-3xl font-serif text-[#0B1221] mb-8 border-b border-[#D4AF37] pb-4">Privacy Policy</h2>
              <p className="mb-6">At L'Héritage Grand Hotel, we respect the privacy of our distinguished guests. We only collect the minimal personal data necessary to process your reservations and enhance your bespoke stay experience.</p>
              <p className="mb-6">Our website employs the latest SSL encryption technologies to ensure your sensitive payment details and personal identifiers remain strictly confidential and protected against unauthorized access.</p>
            </section>
            <section>
              <h2 className="text-3xl font-serif text-[#0B1221] mb-8 border-b border-[#D4AF37] pb-4">Terms of Service</h2>
              <p className="mb-6">Check-in time is officially from 3:00 PM. Check-out is requested by 12:00 PM. Early arrival and late departure can be arranged subject to availability and may incur additional charges.</p>
              <p className="mb-6">Cancellation policy: Reservations must be cancelled at least 48 hours prior to arrival date to avoid a penalty of one night's room rate plus tax. Specialized holiday bookings may have different requirements.</p>
              <p>The hotel is strictly non-smoking in all indoor public areas and guest accommodations. A restoration fee will be applied for any violations.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
