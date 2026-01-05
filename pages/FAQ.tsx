
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "What is the dress code for dinner?", a: "To maintain the refined atmosphere of L'Orangerie, we kindly request smart-elegant attire for all guests during dinner service. Tailored jackets for gentlemen are appreciated but not mandatory." },
    { q: "How can I arrange airport transfers?", a: "Simply contact our concierge team at least 24 hours prior to arrival with your flight details. Our private chauffeur fleet is available for seamless transfers from CDG, Orly, and private jet terminals." },
    { q: "Is the hotel pet-friendly?", a: "We are delighted to welcome small, well-behaved pets (under 10kg) in specific room categories. A small daily maintenance fee applies, and we provide luxury bedding and specialized pet menus." },
    { q: "Do you offer private shopping experiences?", a: "Yes, our concierge has exclusive relationships with major fashion houses on the Champs-Élysées and Avenue Montaigne to arrange private after-hours viewings and personal styling sessions." },
  ];

  return (
    <div className="animate-page">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
          alt="Inquiries" 
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" 
        />
        <div className="absolute inset-0 bg-[#0B1221]/50"></div>
        <div className="relative z-10 text-white mt-20">
          <span className="text-[10px] uppercase tracking-[0.5em] mb-4 block animate-fade-in-up font-bold text-[#D4AF37]">Information</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in-up delay-100">Guest Inquiries</h1>
          <p className="max-w-2xl mx-auto text-lg font-light opacity-90 animate-fade-in-up delay-200">
            Answers to our most frequently asked questions for your perfect stay.
          </p>
        </div>
        {/* Scroll Indicator - Perfect Centering */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Explore</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className={`border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden reveal delay-s-${(i % 4) + 1}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-10 py-8 text-left flex justify-between items-center font-serif text-2xl text-[#0B1221] group"
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                  <span className={`text-[#D4AF37] text-3xl font-light transition-transform duration-500 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-10 pb-10 text-slate-500 text-lg leading-relaxed font-light border-t border-slate-50 mx-10 pt-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center reveal">
            <p className="text-slate-400 font-light mb-8 italic">Have more questions? Our team is at your disposal.</p>
            <button className="bg-[#0B1221] text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all">Contact Concierge</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
