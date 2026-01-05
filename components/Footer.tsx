
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1221] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold tracking-widest">L'HÉRITAGE</h3>
            <p className="text-slate-400 leading-relaxed font-light">
              Experience the pinnacle of European luxury in our historic grand hotel. Where every stay is a curated journey through time and elegance.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-[#D4AF37] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/dining" className="hover:text-white transition-colors">Dining & Bar</Link></li>
              <li><Link to="/spa" className="hover:text-white transition-colors">Spa & Wellness</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-[#D4AF37] mb-8">Discover</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/blog" className="hover:text-white transition-colors">Travel Guide</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors">Location</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events & Weddings</Link></li>
              <li><Link to="/offers" className="hover:text-white transition-colors">Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-[#D4AF37] mb-8">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Join our circle for exclusive offers and seasonal updates.</p>
            <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Subscribed! Check your inbox soon.'); }}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-slate-800 border-none px-4 py-3 text-white w-full focus:ring-1 focus:ring-[#D4AF37] outline-none"
                required
              />
              <button className="bg-[#D4AF37] px-6 py-3 hover:bg-[#B8962D] transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 L'Héritage Grand Hotel. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/legal" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
