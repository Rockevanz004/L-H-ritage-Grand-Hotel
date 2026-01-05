
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the services of L'Héritage Grand Hotel, you agree to be bound by these Terms of Service. These terms apply to all visitors, guests, and others who access or use our facilities and digital platforms."
    },
    {
      title: "2. Reservations & Payments",
      content: "All reservations must be guaranteed with a valid credit card at the time of booking. The hotel reserves the right to pre-authorize credit cards prior to arrival. For certain premium suites and long-term stays, a non-refundable deposit may be required."
    },
    {
      title: "3. Cancellation & No-Show Policy",
      content: "Standard reservations must be cancelled at least 48 hours prior to the local check-in time (3:00 PM) to avoid a penalty of one night's room rate plus applicable taxes. Special event periods and non-refundable rates have distinct cancellation terms which are disclosed during the booking process."
    },
    {
      title: "4. Check-in & Check-out",
      content: "Check-in is available from 3:00 PM. Guests must present valid government-issued photo identification upon arrival. Check-out is strictly by 12:00 PM. Late check-out requests are subject to availability and may incur additional fees up to a full night's rate."
    },
    {
      title: "5. Guest Conduct & Property Regulations",
      content: "L'Héritage is a strictly non-smoking establishment. A restoration fee of €500 will be applied to any guest room where smoking has occurred. We expect all guests to maintain a level of conduct consistent with the refined atmosphere of our hotel. Excessive noise or disruptive behavior may result in immediate eviction without refund."
    },
    {
      title: "6. Liability & Personal Property",
      content: "The hotel provides in-room safes for the convenience of our guests. L'Héritage Grand Hotel shall not be held liable for the loss of money, jewelry, or other valuables not secured in the provided safes or at the front desk safety deposit boxes."
    },
    {
      title: "7. Governing Law",
      content: "These terms and your use of our services are governed by and construed in accordance with the laws of France. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Paris."
    }
  ];

  return (
    <div className="animate-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
          alt="L'Héritage Architecture" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" 
        />
        <div className="absolute inset-0 bg-[#0B1221]/70"></div>
        <div className="relative z-10 text-white mt-20">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-4 block animate-fade-in-up font-bold text-[#D4AF37]">Legal Framework</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in-up delay-100">Terms of Service</h1>
          <p className="max-w-2xl mx-auto text-lg font-light opacity-80 animate-fade-in-up delay-200">
            Last Updated: July 15, 2024
          </p>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-12 md:p-24 shadow-2xl rounded-sm border border-slate-100">
            <div className="mb-16 reveal">
              <p className="text-slate-500 text-lg leading-relaxed font-light italic">
                Welcome to L'Héritage Grand Hotel. These terms govern your stay and interaction with our brand. We invite you to review these details carefully to ensure a seamless and sophisticated experience.
              </p>
            </div>

            <div className="space-y-20">
              {sections.map((section, idx) => (
                <div key={idx} className={`reveal delay-s-${(idx % 3) + 1}`}>
                  <h2 className="text-3xl font-serif text-[#0B1221] mb-6 border-l-2 border-[#D4AF37] pl-8">{section.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed font-light pl-8">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-16 border-t border-slate-100 text-center reveal">
              <p className="text-slate-400 text-sm mb-10 italic">
                Should you have any questions regarding these terms, our concierge is at your service.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#0B1221] text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all"
              >
                Inquire with Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
