import React, { useState } from 'react';
import { Camera, Sparkles, Crown, Building2, PartyPopper, Flame, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function GalleryPage({ onNavigate, onOpenBooking }) {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      category: 'signature',
      title: 'Authentic Hyderabadi Mutton Dum Biryani',
      subtitle: 'Where flavour meets presentation',
      desc: 'Layered aged basmati rice, tender seasoned mutton, infused with pure saffron and fried brown onions.',
      image: 'assets/home/biryani_handi.jpg',
      tag: 'Signature Dishes'
    },
    {
      category: 'weddings',
      title: 'Grand Royal Wedding Buffet Setup',
      subtitle: 'Beautiful food for unforgettable beginnings',
      desc: 'Gleaming golden chafing dishes, underlit marble banquets, floral urns and white-linen arrangements.',
      image: 'assets/occasions/wedding.jpg',
      tag: 'Weddings'
    },
    {
      category: 'corporate',
      title: 'Corporate Executive Gala & Conference Buffet',
      subtitle: 'Professional catering, thoughtfully delivered',
      desc: 'Synchronized multi-tier dining, continental live pasta counters, and executive refreshments.',
      image: 'assets/occasions/corporate.jpg',
      tag: 'Corporate Events'
    },
    {
      category: 'celebrations',
      title: 'Intimate Family Gathering & Sangeet Spread',
      subtitle: 'Making every occasion delicious',
      desc: 'Live kebab skewers, authentic curries, artisanal breads and vibrant celebratory dining.',
      image: 'assets/occasions/reception.jpg',
      tag: 'Special Celebrations'
    },
    {
      category: 'behind',
      title: 'Master Ustads at the Live Flame Counters',
      subtitle: 'Passion begins long before the plate reaches your table',
      desc: 'Dough-sealed deghs slow cooking over fragrant wood charcoal with fresh whole spices.',
      image: 'assets/home/service_live_counters.jpg',
      tag: 'Behind the Flavours'
    },
    {
      category: 'signature',
      title: 'Complete Banqueting & Dessert Pavilion',
      subtitle: 'Royal sweetness to conclude the feast',
      desc: 'Crispy fried bread triangles soaked in rich cardamom milk, topped with silver leaf and dry fruits.',
      image: 'assets/home/service_buffet.jpg',
      tag: 'Signature Desserts'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28 font-sans">
      
      {/* Header Banner - Royal Midnight Blue */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#01142B]">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-25 pointer-events-none"
          style={{ 
            backgroundImage: "url('assets/hero-bg.jpg')",
            backgroundPosition: 'right 20% center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011227] via-[#01142B]/95 to-[#01142B]/75 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center sm:text-left">
          {/* Eyebrow */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#ECC870]">
              VISUAL FEAST & BANQUET MOMENTS
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            Every Celebration Tells a Story
          </h1>
          <p className="font-serif italic text-[#ECC870] text-xl sm:text-2xl mb-4">
            Discover the Flavours. Experience the Moments.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl">
            Welcome to a visual journey through Nashwan Caterings. Our gallery is where visitors can experience the colours, flavours, presentation, and celebrations behind our food.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
            <button 
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-[2px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>BOOK YOUR EVENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('menu')}
              className="px-7 py-3 rounded-[2px] border border-[#ECC870]/70 hover:border-[#ECC870] text-[#ECC870] hover:bg-white/5 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Explore Menus
            </button>
          </div>
        </div>
      </section>

      {/* S-Curve Wave Divider from Midnight Blue to Warm Luxury Ivory */}
      <div className="relative w-full h-[46px] sm:h-[62px] md:h-[76px] overflow-hidden leading-none z-10 -mt-[1px]">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full block" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="galleryGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A034" />
              <stop offset="25%" stopColor="#ECC870" />
              <stop offset="50%" stopColor="#FFF3CA" />
              <stop offset="75%" stopColor="#DFB251" />
              <stop offset="100%" stopColor="#C9932B" />
            </linearGradient>
          </defs>
          <path 
            d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" 
            fill="#FAF8F5" 
          />
          <path 
            d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" 
            stroke="url(#galleryGoldRibbon)" 
            strokeWidth="3.2" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Gallery Body - Luxury Warm Ivory */}
      <div className="bg-[#FAF8F5] text-[#0A192F] flex-1 pb-20">
        
        {/* Filter Navigation Bar */}
        <section className="sticky top-16 sm:top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#ECC870]/30 px-4 sm:px-8 lg:px-12 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-[20px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === 'all'
                  ? 'bg-[#ECC870] text-[#01142B] shadow-md font-bold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#ECC870] hover:text-[#01142B]'
              }`}
            >
              All Visuals
            </button>
            <button
              onClick={() => setFilter('signature')}
              className={`px-5 py-2 rounded-[20px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === 'signature'
                  ? 'bg-[#ECC870] text-[#01142B] shadow-md font-bold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#ECC870] hover:text-[#01142B]'
              }`}
            >
              Signature Dishes
            </button>
            <button
              onClick={() => setFilter('weddings')}
              className={`px-5 py-2 rounded-[20px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === 'weddings'
                  ? 'bg-[#ECC870] text-[#01142B] shadow-md font-bold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#ECC870] hover:text-[#01142B]'
              }`}
            >
              Weddings
            </button>
            <button
              onClick={() => setFilter('corporate')}
              className={`px-5 py-2 rounded-[20px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === 'corporate'
                  ? 'bg-[#ECC870] text-[#01142B] shadow-md font-bold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#ECC870] hover:text-[#01142B]'
              }`}
            >
              Corporate Events
            </button>
            <button
              onClick={() => setFilter('celebrations')}
              className={`px-5 py-2 rounded-[20px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === 'celebrations'
                  ? 'bg-[#ECC870] text-[#01142B] shadow-md font-bold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#ECC870] hover:text-[#01142B]'
              }`}
            >
              Special Celebrations
            </button>
            <button
              onClick={() => setFilter('behind')}
              className={`px-5 py-2 rounded-[20px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === 'behind'
                  ? 'bg-[#ECC870] text-[#01142B] shadow-md font-bold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#ECC870] hover:text-[#01142B]'
              }`}
            >
              Behind the Flavours
            </button>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx}
                className="group rounded-[14px] overflow-hidden bg-white border border-[#ECC870]/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                  <img 
                    src={item.image} 
                    onError={(e) => { e.target.src = 'assets/hero-bg.jpg'; }}
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3.5 left-3.5 bg-[#01142B]/85 backdrop-blur-md border border-[#ECC870]/50 text-[#ECC870] text-[10px] uppercase font-semibold px-3 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#01142B] group-hover:text-[#B28228] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-serif italic text-xs text-[#B28228] mt-1 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* High-Impact Quotes from document */}
          <div className="mt-16 p-8 sm:p-12 rounded-[16px] bg-gradient-to-r from-[#01142B] via-[#021A38] to-[#01142B] border border-[#ECC870]/40 text-center shadow-xl">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#ECC870] font-normal">
              "Where Great Food Becomes a Beautiful Memory."
            </p>
            <span className="text-xs text-white/80 uppercase tracking-widest mt-3 block font-semibold">
              Tradition on Every Plate. Hospitality in Every Moment.
            </span>
            <div className="mt-6 flex justify-center gap-4">
              <button 
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-[2px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                Plan Your Event with Nashwan
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
