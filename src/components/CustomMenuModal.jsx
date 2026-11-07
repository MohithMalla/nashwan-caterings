import React, { useState } from 'react';
import { X, Check, ChefHat, Sparkles, Send, Plus, Trash2 } from 'lucide-react';

export default function CustomMenuModal({ isOpen, onClose, onCustomMenuSubmit }) {
  const [selectedItems, setSelectedItems] = useState([
    'Zafrani Mutton Dum Biryani',
    'Mirchi Ka Salan & Dahi Ki Chutney',
    'Shahi Double Ka Meetha'
  ]);
  const [guestCount, setGuestCount] = useState('250');

  if (!isOpen) return null;

  const categories = [
    {
      name: 'Signature Rice & Biryani',
      items: [
        'Zafrani Mutton Dum Biryani',
        'Special Chicken Dum Biryani',
        'Veg Dum Biryani with Saffron',
        'Bagara Rice with Dalcha',
        'Kashmiri Pulao with Dry Fruits'
      ]
    },
    {
      name: 'Royal Appetizers & Starters',
      items: [
        'Mutton Seekh Kebab',
        'Chicken Majestic',
        'Fish Apollo',
        'Tandoori Murgh Tikka',
        'Paneer Malai Tikka',
        'Crispy Corn Salt & Pepper'
      ]
    },
    {
      name: 'Curries & Gravies',
      items: [
        'Dum Ka Murgh (Hyderabadi Style)',
        'Mutton Rogan Josh',
        'Butter Chicken Delicacy',
        'Paneer Butter Masala',
        'Dal Makhani Royal Simmer'
      ]
    },
    {
      name: 'Artisanal Breads & Salan',
      items: [
        'Fresh Rumali Roti',
        'Butter Tandoori Naan',
        'Mirchi Ka Salan & Dahi Ki Chutney',
        'Kulcha & Paratha'
      ]
    },
    {
      name: 'Desserts & Sweet Finales',
      items: [
        'Shahi Double Ka Meetha',
        'Qubani Ka Meetha with Vanilla Cream',
        'Hot Gulab Jamun with Rabdi',
        'Badam Kheer / Phirni',
        'Royal Matka Malai Kulfi'
      ]
    },
    {
      name: 'Welcome Drinks & Mocktails',
      items: [
        'Shahi Zafrani Sharbat',
        'Fresh Mint Lemon Mojito',
        'Rose Badam Milk',
        'Blue Lagoon Mocktail'
      ]
    }
  ];

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRequestQuote = () => {
    const text = `Hello Nashwan Catering,%0A%0AI would like a quotation for my custom menu (%2A${selectedItems.length} items%2A for %2A${guestCount} guests%2A):%0A%0A${selectedItems.map((item, idx) => `${idx + 1}. ${encodeURIComponent(item)}`).join('%0A')}%0A%0APlease let me know the pricing and banquet arrangements.`;
    window.open(`https://wa.me/919492247495?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#D4AF37]/25 flex items-center justify-between bg-[#12100E]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#ECC870]">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Custom Menu <span className="text-[#ECC870]">Curator</span>
              </h2>
              <p className="text-xs text-neutral-300">Select dishes to craft your banquet menu</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-[#ECC870] hover:bg-[#D4AF37]/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Left Categories, Right Summary */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Dishes Selector */}
          <div className="lg:col-span-2 space-y-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-[#14120F] border border-[#D4AF37]/20 rounded-xl p-4">
                <h3 className="text-sm font-serif font-bold text-[#ECC870] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870]" />
                  {cat.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.items.map((item, i) => {
                    const isSelected = selectedItems.includes(item);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleItem(item)}
                        className={`text-left text-xs p-2.5 rounded-lg border transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'bg-[#D4AF37]/20 border-[#ECC870] text-white font-medium shadow-[0_0_10px_rgba(212,175,55,0.2)]' 
                            : 'bg-[#0F0E0C] border-white/5 text-neutral-300 hover:border-[#D4AF37]/40 hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{item}</span>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#ECC870] text-black' : 'border border-neutral-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Summary Sidebar */}
          <div className="lg:col-span-1 bg-[#14120F] border border-[#D4AF37]/30 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20 mb-4">
                <h4 className="font-serif font-bold text-white text-base">Your Selected Menu</h4>
                <span className="text-xs bg-[#D4AF37]/20 text-[#ECC870] px-2.5 py-0.5 rounded-full font-semibold">
                  {selectedItems.length} Dishes
                </span>
              </div>

              {/* Guest Count selector */}
              <div className="mb-4">
                <label className="text-[11px] font-medium text-neutral-300 block mb-1">Estimated Guest Count</label>
                <select 
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#0D0B09] border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ECC870]"
                >
                  <option value="100 - 200 Guests">100 - 200 Guests</option>
                  <option value="250 Guests">250 Guests</option>
                  <option value="500 Guests">500 Guests</option>
                  <option value="1000+ Guests">1000+ Guests</option>
                </select>
              </div>

              {/* Items List */}
              <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                {selectedItems.length === 0 ? (
                  <p className="text-xs text-neutral-400 italic py-4 text-center">Click on items to add them to your curated feast.</p>
                ) : (
                  selectedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-2 bg-black/40 rounded border border-white/5">
                      <span className="truncate text-neutral-200">{item}</span>
                      <button 
                        onClick={() => toggleItem(item)}
                        className="text-neutral-400 hover:text-red-400 ml-2"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 mt-4 space-y-2">
              <button
                onClick={handleRequestQuote}
                disabled={selectedItems.length === 0}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] disabled:opacity-50 text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get Instant Quote</span>
              </button>
              <div className="text-[10px] text-center text-neutral-400">
                Or call our banquet manager: <span className="text-[#ECC870]">9492247495</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
