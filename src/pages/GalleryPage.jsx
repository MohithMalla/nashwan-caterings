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
      image: 'assets/hero-bg.jpg',
      tag: 'Signature Dishes'
    },
    {
      category: 'weddings',
      title: 'Grand Royal Wedding Buffet Setup',
      subtitle: 'Beautiful food for unforgettable beginnings',
      desc: 'Gleaming golden chafing dishes, underlit marble banquets, floral urns and white-linen arrangements.',
      image: 'assets/hero-bg.jpg',
      tag: 'Weddings'
    },
    {
      category: 'corporate',
      title: 'Corporate Executive Gala & Conference Buffet',
      subtitle: 'Professional catering, thoughtfully delivered',
      desc: 'Synchronized multi-tier dining, continental live pasta counters, and executive refreshments.',
      image: 'assets/hero-bg.jpg',
      tag: 'Corporate Events'
    },
    {
      category: 'celebrations',
      title: 'Intimate Family Gathering & Sangeet Spread',
      subtitle: 'Making every occasion delicious',
      desc: 'Live kebab skewers, authentic curries, artisanal breads and vibrant celebratory dining.',
      image: 'assets/hero-bg.jpg',
      tag: 'Special Celebrations'
    },
    {
      category: 'behind',
      title: 'Master Ustads at the Firewood Deghs',
      subtitle: 'Passion begins long before the plate reaches your table',
      desc: 'Dough-sealed deghs slow cooking over fragrant wood charcoal with fresh whole spices.',
      image: 'assets/hero-bg.jpg',
      tag: 'Behind the Flavours'
    },
    {
      category: 'signature',
      title: 'Shahi Double Ka Meetha & Qubani Pavilion',
      subtitle: 'Royal sweetness to conclude the feast',
      desc: 'Crispy fried bread triangles soaked in rich cardamom milk, topped with silver leaf and dry fruits.',
      image: 'assets/hero-bg.jpg',
      tag: 'Signature Desserts'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#080706] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28">
      
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-[#8C6D37]/30 text-center sm:text-left">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/95 to-[#080706]/70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#8C6D37]/40 bg-[#D4AF37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A947]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E5A947]">
              VISUAL FEAST & BANQUET MOMENTS
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            Every Celebration Tells a Story
          </h1>
          <p className="font-serif italic text-[#E5A947] text-xl sm:text-2xl mb-4">
            Discover the Flavours. Experience the Moments.
          </p>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Welcome to a visual journey through Nashwan Caterings. Our gallery is where visitors can experience the colours, flavours, presentation, and celebrations behind our food.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button 
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>BOOK YOUR EVENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-[#0E0C0A] border-b border-[#8C6D37]/30 sticky top-16 sm:top-20 z-30 backdrop-blur-md px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            All Visuals
          </button>
          <button
            onClick={() => setFilter('signature')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filter === 'signature'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Signature Dishes
          </button>
          <button
            onClick={() => setFilter('weddings')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filter === 'weddings'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Weddings
          </button>
          <button
            onClick={() => setFilter('corporate')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filter === 'corporate'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Corporate Events
          </button>
          <button
            onClick={() => setFilter('celebrations')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filter === 'celebrations'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Special Celebrations
          </button>
          <button
            onClick={() => setFilter('behind')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filter === 'behind'
                ? 'bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black shadow-lg'
                : 'text-neutral-300 hover:text-[#E5A947] hover:bg-white/5'
            }`}
          >
            Behind the Flavours
          </button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              className="group rounded-2xl overflow-hidden bg-[#120F0D] border border-[#8C6D37]/35 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md border border-[#8C6D37]/40 text-[#E5A947] text-[10px] uppercase font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E5A947] transition-colors">
                  {item.title}
                </h4>
                <p className="font-serif italic text-xs text-[#E5A947] mt-0.5 mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Quotes from document */}
        <div className="mt-16 p-8 rounded-2xl bg-[#120F0D] border border-[#8C6D37]/30 text-center">
          <p className="font-serif italic text-xl sm:text-2xl text-[#E5A947]">
            "Where Great Food Becomes a Beautiful Memory."
          </p>
          <span className="text-xs text-neutral-400 uppercase tracking-widest mt-2 block">
            Tradition on Every Plate. Hospitality in Every Moment.
          </span>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
