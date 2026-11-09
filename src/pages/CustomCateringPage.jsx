import React, { useState } from 'react';
import { ChefHat, Check, Trash2, Send, Plus, Calendar, Users, Phone, User, MessageSquare, Crown, Building2, PartyPopper, ArrowRight, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

export default function CustomCateringPage({ onNavigate, onOpenBooking }) {
  const [selectedDishes, setSelectedDishes] = useState([
    'Zafrani Mutton Dum Biryani (Aged Basmati, Saffron)',
    'Chicken Majestic Flambé (Signature)',
    'Mirchi Ka Salan (Slow-Roasted Peanut Sesame Gravy)',
    'Dahi Ki Chutney with Pomegranate & Mint',
    'Shahi Double Ka Meetha (Pure Ghee & Pistachio)'
  ]);

  const [activeCategory, setActiveCategory] = useState('all');
  const [guestCount, setGuestCount] = useState('300 - 500 Guests');
  const [eventType, setEventType] = useState('Royal Wedding Banquet');
  const [eventDate, setEventDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const menuDatabase = [
    {
      category: 'Welcome Refreshments',
      items: [
        { name: 'Shahi Zafrani Sharbat with Basil Seeds', veg: true, desc: 'Chilled saffron cooler infused with royal herbs' },
        { name: 'Fresh Mint Virgin Mojito', veg: true, desc: 'Crushed garden mint, lime spritz & sparkling soda' },
        { name: 'Rose Badam Milk with Silver Leaf', veg: true, desc: 'Slow simmered almond milk with Damask rose water' },
        { name: 'Blue Lagoon Citrus Mocktail', veg: true, desc: 'Vibrant curacao syrup with zesty citrus punch' },
        { name: 'Kesar Pista Thandai', veg: true, desc: 'Rich cardamom milk blended with dry fruits' }
      ]
    },
    {
      category: 'Hyderabadi Starters (Non-Veg)',
      items: [
        { name: 'Chicken Majestic Flambé (Signature)', veg: false, desc: 'Crispy spiced chicken strips tempered with green chillies & curd' },
        { name: 'Mutton Seekh Kebab (Slow Charcoal Grilled)', veg: false, desc: 'Minced lamb spiced with royal cloves & roasted cumin' },
        { name: 'Fish Apollo (Tender Boneless Spiced)', veg: false, desc: 'Boneless tender fish tempered with mustard & curry leaves' },
        { name: 'Tala Hua Gosht (Hyderabadi Crispy Meat)', veg: false, desc: 'Shallow fried mutton morsels with crushed pepper' },
        { name: 'Murgh Malai Tikka with Cream & Saffron', veg: false, desc: 'Velvety chicken chunks with cardamom & melted cheese' },
        { name: 'Crispy Amritsari Fish Pakora', veg: false, desc: 'Ajwain infused batter fried river fish' }
      ]
    },
    {
      category: 'Royal Starters (Veg)',
      items: [
        { name: 'Paneer Malai Tikka Angara', veg: true, desc: 'Smoked cottage cheese cubes with bell peppers & cream' },
        { name: 'Crispy Chilli Baby Corn Salt & Pepper', veg: true, desc: 'Wok tossed crunchy baby corn with oriental spices' },
        { name: 'Dahi Ke Kebab with Mint Chutney', veg: true, desc: 'Crisp exterior with molten spiced hung curd center' },
        { name: 'Hara Bhara Kebab with Cashew Center', veg: true, desc: 'Fresh spinach, green peas & mashed potato patty' },
        { name: 'Tandoori Stuffed Mushrooms', veg: true, desc: 'Marinated button mushrooms filled with spiced cheese' }
      ]
    },
    {
      category: 'Signature Rice & Biryani',
      items: [
        { name: 'Zafrani Mutton Dum Biryani (Aged Basmati, Saffron)', veg: false, desc: 'The gold standard: layered basmati & succulent meat cooked in sealed degh' },
        { name: 'Special Chicken Dum Biryani (Hyderabadi Degh)', veg: false, desc: 'Fragrant long-grain rice with traditional brown onion marinade' },
        { name: 'Vegetable Dum Biryani with Saffron', veg: true, desc: 'Fresh garden vegetables layered with aromatic whole spices' },
        { name: 'Traditional Bagara Rice with Dalcha', veg: true, desc: 'Spiced tempered rice served with lentil mutton or veg dalcha' },
        { name: 'Kashmiri Pulao with Roasted Dry Fruits', veg: true, desc: 'Sweet-scented pulao studded with cashews, almonds & pomegranate' }
      ]
    },
    {
      category: 'Authentic Curries & Gravies',
      items: [
        { name: 'Dum Ka Murgh (Cashew Poppy Seed Gravy)', veg: false, desc: 'Slow simmered chicken steeped in rich royal nut gravy' },
        { name: 'Mutton Rogan Josh Kashmiri Style', veg: false, desc: 'Aromatic tender lamb infused with Kashmiri cockscomb flower' },
        { name: 'Butter Chicken Shahi Makhani', veg: false, desc: 'Smoked pulled chicken in velvety tomato butter silk' },
        { name: 'Paneer Butter Masala Royal Cut', veg: true, desc: 'Soft cottage cheese simmered in fenugreek cream gravy' },
        { name: 'Dal Makhani Bukhara Style', veg: true, desc: 'Slow cooked black urad dal finished with white churned butter' },
        { name: 'Nizami Handi Veg Medley', veg: true, desc: 'Garden vegetables simmered in coriander cashew masala' }
      ]
    },
    {
      category: 'Accompaniments & Artisanal Breads',
      items: [
        { name: 'Freshly Baked Rumali Roti', veg: true, desc: 'Paper thin handkerchief bread baked over inverted wok' },
        { name: 'Butter Garlic Naan & Tandoori Roti', veg: true, desc: 'Clay oven flatbreads brushed with pure ghee' },
        { name: 'Mirchi Ka Salan (Classic Hyderabadi)', veg: true, desc: 'Slow roasted sesame, coconut & peanut gravy with large chillies' },
        { name: 'Dahi Ki Chutney with Pomegranate & Mint', veg: true, desc: 'Whisked fresh curd with roasted cumin and ruby pearls' }
      ]
    },
    {
      category: 'Royal Desserts & Sweet Pavilions',
      items: [
        { name: 'Shahi Double Ka Meetha (Pure Ghee & Pistachio)', veg: true, desc: 'Golden fried crust soaked in rabdi and saffron syrup' },
        { name: 'Qubani Ka Meetha with Fresh Malai', veg: true, desc: 'Slow stewed Turkish apricots with cracked apricot kernels' },
        { name: 'Angoori Rasmalai with Saffron Milk', veg: true, desc: 'Delicate chenna dumplings floating in pistachio clotted cream' },
        { name: 'Hot Gulab Jamun with Rabdi Pot', veg: true, desc: 'Melt in mouth mawa dumplings served over creamy condensed milk' },
        { name: 'Badam Kheer / Zafrani Phirni in Clay Earthen Pots', veg: true, desc: 'Ground rice and almond dessert served chilled' }
      ]
    }
  ];

  const toggleDish = (dishName) => {
    if (selectedDishes.includes(dishName)) {
      setSelectedDishes(selectedDishes.filter(d => d !== dishName));
    } else {
      setSelectedDishes([...selectedDishes, dishName]);
    }
  };

  const handleSendToWhatsApp = () => {
    if (selectedDishes.length === 0) return;

    const dishListFormatted = selectedDishes.map((dish, idx) => `${idx + 1}. ${dish}`).join('%0A');

    const message = 
      `*NASHWAN CATERINGS - BESPOKE EVENT CURATION*%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `• *Client Name:* ${encodeURIComponent(clientName || 'Valued Guest')}%0A` +
      `• *Phone:* ${encodeURIComponent(clientPhone || 'Shared via chat')}%0A` +
      `• *Event Type:* ${encodeURIComponent(eventType)}%0A` +
      `• *Approx. Guests:* ${encodeURIComponent(guestCount)}%0A` +
      `• *Preferred Date:* ${encodeURIComponent(eventDate || 'To be decided')}%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `*CURATED MENU ITEMS (${selectedDishes.length} Selected):*%0A` +
      `${dishListFormatted}%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `Please provide per-plate quotation, live counter additions, and sample tasting schedule.`;

    window.open(`https://wa.me/919949390829?text=${message}`, '_blank');
  };

  const filteredDatabase = activeCategory === 'all' 
    ? menuDatabase 
    : menuDatabase.filter(sec => sec.category.toLowerCase().includes(activeCategory));

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28">
      
      {/* Header Banner */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#01142B] overflow-hidden text-center sm:text-left">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-25 pointer-events-none"
          style={{ 
            backgroundImage: "url('assets/hero-bg.jpg')",
            backgroundPosition: 'right 20% center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011227] via-[#01142B]/95 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#ECC870]">
              BESPOKE EVENT CURATION
            </span>
            <span className="w-12 h-[1px] bg-[#ECC870]/70 inline-block" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-2">
            Interactive Menu Curator
          </h1>
          <p className="font-serif italic text-[#ECC870] text-xl sm:text-2xl mb-4">
            Pick Your Dishes. Estimate Your Guests. Send to WhatsApp in 1-Click.
          </p>

          <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
            Select items from any category below to build your celebration's custom dining spread. When you're ready, dispatch your tailored list directly to our master banqueting team for instant quotation and chef consultation.
          </p>
        </div>
      </section>

      {/* S-Curve Wave Divider into Ivory Curator Section */}
      <div className="relative w-full h-[46px] sm:h-[62px] md:h-[76px] overflow-hidden leading-none z-10 -mt-[1px]">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full block" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="customGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#customGoldRibbon)" 
            strokeWidth="3.2" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Main Interactive Curator Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#0B1E38] flex-1">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Menu Item Selector (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: 'all', label: 'All Categories' },
                { id: 'refreshments', label: 'Refreshments' },
                { id: 'starters', label: 'Starters' },
                { id: 'biryani', label: 'Biryani & Rice' },
                { id: 'curries', label: 'Curries' },
                { id: 'breads', label: 'Breads & Accompaniments' },
                { id: 'desserts', label: 'Desserts' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                    activeCategory === cat.id
                      ? 'bg-[#0B1E38] text-white border-[#0B1E38] shadow-md'
                      : 'bg-white text-neutral-600 border-neutral-300 hover:border-[#ECC870]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu Sections List */}
            {filteredDatabase.map((sec, sIdx) => (
              <div key={sIdx} className="bg-white rounded-[16px] border border-[#ECC870] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between pb-3 border-b border-[#ECC870]/30 mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#0B1E38] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2BA4EE]" />
                    <span>{sec.category}</span>
                  </h3>
                  <span className="text-[11px] text-neutral-500 font-medium">
                    {sec.items.length} Options Available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {sec.items.map((item, iIdx) => {
                    const isSelected = selectedDishes.includes(item.name);
                    return (
                      <div
                        key={iIdx}
                        onClick={() => toggleDish(item.name)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#2BA4EE]/10 border-[#2BA4EE] shadow-sm'
                            : 'bg-neutral-50 border-neutral-200 hover:border-[#ECC870] hover:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`w-3.5 h-3.5 rounded-sm border shrink-0 mt-0.5 flex items-center justify-center ${
                            item.veg ? 'border-emerald-600' : 'border-red-600'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#0B1E38] leading-tight">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                              {item.desc}
                            </div>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded shrink-0 flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-[#2BA4EE] border-[#2BA4EE] text-white'
                            : 'border-neutral-300 bg-white text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>

          {/* Right Column: Live Selection Summary & WhatsApp Dispatcher (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            
            <div className="bg-[#01142B] text-white rounded-[18px] border border-[#ECC870]/70 p-6 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#ECC870]/30 mb-5">
                <div>
                  <span className="text-[10px] text-[#ECC870] font-bold tracking-widest uppercase block mb-0.5">
                    Live Event Tray
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Your Curated Feast
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ECC870] text-[#01142B] font-bold text-sm flex items-center justify-center shadow-md">
                  {selectedDishes.length}
                </div>
              </div>

              {/* Event Parameters Inputs */}
              <div className="space-y-3 mb-5 text-xs">
                <div>
                  <label className="text-neutral-300 block mb-1 font-medium">Event Type</label>
                  <select 
                    value={eventType} 
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#03152E] border border-[#ECC870]/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#ECC870]"
                  >
                    <option>Royal Wedding Banquet</option>
                    <option>Grand Reception / Valima</option>
                    <option>Corporate Gala / Summit</option>
                    <option>Birthday Celebration</option>
                    <option>Anniversary Dinner</option>
                    <option>Intimate House Party</option>
                  </select>
                </div>

                <div>
                  <label className="text-neutral-300 block mb-1 font-medium">Guest Capacity</label>
                  <select 
                    value={guestCount} 
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#03152E] border border-[#ECC870]/50 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#ECC870]"
                  >
                    <option>50 - 100 Guests</option>
                    <option>100 - 300 Guests</option>
                    <option>300 - 500 Guests</option>
                    <option>500 - 1,000 Guests</option>
                    <option>1,000+ Royal Feast</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-neutral-300 block mb-1 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul / Ahmed" 
                      value={clientName} 
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#03152E] border border-[#ECC870]/50 rounded-lg p-2 text-white focus:outline-none focus:border-[#ECC870]"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-300 block mb-1 font-medium">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="9949390829" 
                      value={clientPhone} 
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#03152E] border border-[#ECC870]/50 rounded-lg p-2 text-white focus:outline-none focus:border-[#ECC870]"
                    />
                  </div>
                </div>
              </div>

              {/* Selected Dishes Scroller */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs text-neutral-300 mb-2">
                  <span>Selected Dishes ({selectedDishes.length})</span>
                  {selectedDishes.length > 0 && (
                    <button onClick={() => setSelectedDishes([])} className="text-[#ECC870] hover:underline">
                      Clear All
                    </button>
                  )}
                </div>

                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
                  {selectedDishes.map((dish, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px] bg-[#03152E] p-2 rounded border border-white/5">
                      <span className="truncate pr-2">{i + 1}. {dish}</span>
                      <button onClick={() => toggleDish(dish)} className="text-neutral-500 hover:text-red-400 shrink-0">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dispatch Button */}
              <button
                onClick={handleSendToWhatsApp}
                disabled={selectedDishes.length === 0}
                className="w-full py-3.5 px-4 rounded-[2px] bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(237,168,61,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Menu to WhatsApp →</span>
              </button>

              <p className="text-[10px] text-center text-neutral-400 mt-3">
                Direct to Nashwan Banqueting Desk: 9949390829 / 9492247495
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
