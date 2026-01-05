
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="animate-page">
      {/* Hero Section - Matching Home Page exactly in alignment and scale */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1920" 
            alt="L'Héritage Gazette" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-[#0B1221]/45"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.6em] mb-8 animate-fade-in-up font-bold text-[#D4AF37]">
            The Gazette
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-6xl animate-fade-in-up delay-100 leading-[1.1] tracking-tight">
            Stories & Insights
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light opacity-80 animate-fade-in-up delay-200">
            A window into the art of living well and the secrets of the French capital.
          </p>
        </div>

        {/* Scroll Indicator - Matching Home Page Exactly */}
        <div className="absolute bottom-12 inset-x-0 flex flex-col items-center animate-bounce opacity-70 z-20 pointer-events-none">
          <div className="w-[1px] h-16 bg-[#D4AF37] mb-3"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white whitespace-nowrap">Scroll To Explore</span>
        </div>
      </section>

      <div className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {BLOG_POSTS.map((post, idx) => (
              <div key={post.id} className={`group cursor-pointer reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                <div className="overflow-hidden mb-10 aspect-[16/10] shadow-2xl relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="space-y-6">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em]">{post.category}</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#0B1221] group-hover:text-[#D4AF37] transition-colors leading-tight">{post.title}</h3>
                  <p className="text-slate-500 font-light text-xl leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
                    <span className="hover:text-[#0B1221] transition-colors">By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center reveal">
            <button className="border-b-2 border-[#D4AF37] pb-2 text-[10px] uppercase font-bold tracking-[0.4em] hover:text-[#D4AF37] transition-all">View Archive</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
