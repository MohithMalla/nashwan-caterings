import React, { useState } from 'react';
import { X, Sparkles, Check, Crown, Flame, HeartHandshake } from 'lucide-react';

export default function MenuModal({ isOpen, onClose, onSelectMenuForBooking }) {
  const [activeTab, setActiveTab] = useState('royal');

  if (!isOpen) return null;

  const menus = {
    royal: {
      title: 'The Nizami Shahi Dastarkhwan',
      tagline: 'Our premier gold-standard feast for royal weddings and celebrations',
      courses: [
        {
          type: 'Welcome Refreshments',
          items: ['Zafrani Shahi Sharbat with Basil Seeds', 'Badam Milk with Silver Leaf', 'Fresh Mint Mojito']
        },
        {
          type: 'Royal Starters',
          items: ['Smoked Mutton Seekh Kebabs', 'Chicken Majestic Flambé', 'Crispy Apollo Fish', 'Paneer Malai Tikka']
        },
        {
          type: 'The Grand Main Course',
          items: ['Authentic Zafrani Mutton Dum Biryani (Aged Basmati)', 'Mirchi Ka Salan & Dahi Ki Chutney', 'Dum Ka Murgh Hyderabadi', 'Tandoori Butter Naan & Rumali Roti']
        },
        {
          type: 'Royal Desserts',
          items: ['Shahi Double Ka Meetha (Pure Ghee & Pistachio)', 'Qubani Ka Meetha with Rich Malai Cream', 'Kashmiri Zafrani Phirni']
        }
      ]
    },
    wedding: {
      title: 'Grand Wedding & Reception Spread',
      tagline: 'An extravagant multi-station buffet designed to dazzle 500+ guests',
      courses: [
        {
          type: 'Live Counters',
          items: ['Live Tandoor & Grill Kebab Station', 'Artisanal Chaat & Dahi Bhalla Station', 'Italian Pasta Live Counter']
        },
        {
          type: 'Celebration Mains',
          items: ['Chicken Dum Biryani (Hyderabadi Style)', 'Mutton Rogan Josh Kashmiri', 'Paneer Lababdar', 'Dal Bukhara Overnight Simmer']
        },
        {
          type: 'Breads & Rice',
          items: ['Assorted Tandoori Breads (Garlic Naan, Roti)', 'Jeera Rice with Fried Brown Onions']
        },
        {
          type: 'Grand Sweet Pavilion',
          items: ['Hot Gulab Jamun with Rabdi', 'Angoori Rasmalai', 'Seasonal Fresh Fruit Tartlets & Paan Counter']
        }
      ]
    },
    veg: {
      title: 'Satvik & Pure Vegetarian Banquet',
      tagline: '100% vegetarian royal fare prepared with uncompromising sanctity and taste',
      courses: [
        {
          type: 'Welcome Sips',
          items: ['Thandai with Crushed Dry Fruits', 'Kesar Pista Milk', 'Virgin Guava Chilli']
        },
        {
          type: 'Starters',
          items: ['Hara Bhara Kebab', 'Tandoori Stuffed Mushroom', 'Crispy Golden Corn Salt & Pepper', 'Veg Spring Rolls']
        },
        {
          type: 'Royal Mains',
          items: ['Shahi Zafrani Veg Dum Biryani', 'Paneer Butter Masala', 'Methi Malai Matar', 'Dal Makhani Heritage Recipe']
        },
        {
          type: 'Desserts',
          items: ['Kaju Katli Crumble Halwa', 'Moong Dal Halwa (Desi Ghee)', 'Rasgulla in Saffron Syrup']
        }
      ]
    }
  };

  const currentMenu = menus[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#D4AF37]/25 flex items-center justify-between bg-[#12100E]">
          <div>
            <span className="text-[10px] tracking-widest text-[#ECC870] uppercase font-semibold">Curated Masterpieces</span>
            <h2 className="font-serif text-2xl font-bold text-white">Signature Banquet <span className="text-[#ECC870]">Menus</span></h2>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-[#ECC870]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-[#D4AF37]/20 bg-[#0F0D0A] px-6 gap-2 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('royal')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'royal' 
                ? 'border-[#D4AF37] text-[#ECC870]' 
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            Nizami Shahi
          </button>
          <button 
            onClick={() => setActiveTab('wedding')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'wedding' 
                ? 'border-[#D4AF37] text-[#ECC870]' 
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Grand Wedding
          </button>
          <button 
            onClick={() => setActiveTab('veg')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'veg' 
                ? 'border-[#D4AF37] text-[#ECC870]' 
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            Pure Vegetarian
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-bold text-white mb-1">{currentMenu.title}</h3>
            <p className="text-xs text-neutral-300">{currentMenu.tagline}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentMenu.courses.map((course, idx) => (
              <div key={idx} className="bg-[#14120F] border border-[#D4AF37]/20 rounded-xl p-4">
                <h4 className="text-xs font-serif font-bold text-[#ECC870] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#D4AF37]/15">
                  {course.type}
                </h4>
                <ul className="space-y-1.5">
                  {course.items.map((item, i) => (
                    <li key={i} className="text-xs text-neutral-200 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#D4AF37]/20 bg-[#12100E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-300">
            Customize any menu package to your specific requirements.
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectMenuForBooking(currentMenu.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.02]"
          >
            Select & Inquire For This Menu
          </button>
        </div>

      </div>
    </div>
  );
}
