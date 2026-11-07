import React from 'react';
import { X, Sparkles, Eye } from 'lucide-react';

export default function GalleryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const galleryItems = [
    {
      title: 'Grand Banquet Table Setting',
      desc: 'Royal golden chafing dishes, marble counters, floral vases & ambient candlelight',
      image: 'assets/hero-bg.jpg',
      tag: 'Banquet Decor'
    },
    {
      title: 'Royal Biryani Dum Station',
      desc: 'Authentic sealed clay deghs steaming with saffron basmati & tender slow-cooked mutton',
      image: 'assets/hero-bg.jpg',
      tag: 'Live Station'
    },
    {
      title: 'VIP High-Table Setup',
      desc: 'Formal silver-plated cutlery, crystal goblets and personalized dinner cards',
      image: 'assets/hero-bg.jpg',
      tag: 'Fine Dining'
    },
    {
      title: 'Artisanal Dessert Pavilion',
      desc: 'Shahi double ka meetha, fresh rabdi fountains, qubani and warm halwa varieties',
      image: 'assets/hero-bg.jpg',
      tag: 'Dessert Gallery'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-[#D4AF37]/25 flex items-center justify-between bg-[#12100E]">
          <div>
            <span className="text-[10px] tracking-widest text-[#ECC870] uppercase font-semibold">Visual Grandeur</span>
            <h2 className="font-serif text-2xl font-bold text-white">Banquet & Dining <span className="text-[#ECC870]">Gallery</span></h2>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-[#ECC870]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/25 bg-[#14120F] shadow-lg"
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#ECC870] text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-[#ECC870] transition-colors">{item.title}</h4>
                  <p className="text-xs text-neutral-300 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-[#D4AF37]/20 bg-[#12100E] text-center text-xs text-neutral-400">
          Want to view real setup videos or plan a tasting session? Call us at <span className="text-[#ECC870] font-semibold">9492247495</span> or <span className="text-[#ECC870] font-semibold">9949390829</span>.
        </div>
      </div>
    </div>
  );
}
