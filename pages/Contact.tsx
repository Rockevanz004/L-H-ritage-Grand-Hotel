
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="animate-page">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" 
        />
        <div className="absolute inset-0 bg-[#0B1221]/50"></div>
        <div className="relative z-10 text-white mt-20">
          <span className="text-[10px] uppercase tracking-[0.5em] mb-4 block animate-fade-in-up font-bold text-[#D4AF37]">Personalized Service</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in-up delay-100">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-lg font-light opacity-90 animate-fade-in-up delay-200">
            Our dedicated team is available 24/7 to attend to your every need.
          </p>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16 reveal-left">
              <div className="max-w-xl">
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Concierge</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#0B1221] mb-8 leading-tight">We Are Here <br/> To Assist You</h2>
                <p className="text-slate-500 text-xl leading-relaxed font-light">
                  Whether you require a private chauffeur, a specialized restaurant reservation, or have questions about your stay, our concierge team is at your complete disposal.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="flex items-start space-x-6 reveal delay-s-1">
                  <div className="bg-white p-6 shadow-lg text-[#D4AF37]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-2">Telephone</h4>
                    <p className="font-serif text-2xl text-[#0B1221] tracking-tight">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 reveal delay-s-2">
                  <div className="bg-white p-6 shadow-lg text-[#D4AF37]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-2">General Inquiry</h4>
                    <p className="font-serif text-2xl text-[#0B1221] tracking-tight">hello@lheritage.com</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-10 border-t border-slate-200 reveal delay-s-3">
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-4">Location</h4>
                <p className="font-serif text-2xl text-[#0B1221]">75 Avenue de l'Élégance, 75008 Paris, France</p>
              </div>
            </div>

            <div className="bg-white p-16 shadow-2xl rounded-sm border border-slate-100 reveal-right">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20 animate-fade-in">
                  <div className="w-24 h-24 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-4xl font-serif text-[#0B1221]">Message Received</h3>
                  <p className="text-slate-500 text-lg font-light leading-relaxed">Thank you for reaching out. Our concierge will attend to your request and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <h3 className="text-3xl font-serif text-[#0B1221] mb-4">Send a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] transition-all bg-transparent font-light text-lg"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] transition-all bg-transparent font-light text-lg"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] transition-all bg-transparent font-light text-lg"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border-b border-slate-200 py-4 outline-none focus:border-[#D4AF37] transition-all bg-transparent font-light text-lg resize-none"
                      placeholder="Share your details with us..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#0B1221] text-white py-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all shadow-xl mt-6">Send Inquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
