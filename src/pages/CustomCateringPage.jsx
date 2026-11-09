import React, { useState, useMemo } from 'react';
import { 
  ChefHat, 
  Check, 
  Trash2, 
  Search, 
  Phone, 
  MessageSquare, 
  X, 
  ChevronDown, 
  ChevronRight,
  Minus,
  Plus,
  Users,
  Utensils,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';
import { MASTER_MENU_CATEGORIES, MASTER_MENU_INFO } from '../data/masterMenuData';
import Footer from '../components/Footer';

export default function CustomCateringPage({ onNavigate, onOpenBooking }) {
  // Search query & active category
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState(MASTER_MENU_CATEGORIES[0]?.id || 'welcome_drinks_and_beverages');
  
  // Pre-selected popular signature items
  const [selectedDishes, setSelectedDishes] = useState([
    'Anjeer Badam Milk',
    'Badam Milk (Cold)',
    'Chocolate Milkshake',
    'Dry Fruit Faluda',
    'Aratikaya Bajji',
    'Babycorn 65',
    'Bread Cheese Roll',
    'Corn Pakoda',
    'Chicken 65',
    'Chicken Megestic',
    'Mutton Sheek Kabab',
    'Apollo Fish',
    'Butter Garlic Prawns',
    'Butter Naan',
    'Rumali Roti',
    'Paneer Butter Masala',
    'Bagara Baingan',
    'Mutton Dum Biryani',
    'Chicken Dum Biryani',
    'Gulab Jamoon',
    'Double Ka Meeta',
    'Qurbani Ka Meeta',
    'Vanilla',
    'Sweet Pan Counter'
  ]);

  // Event & client details
  const [estimatedGuests, setEstimatedGuests] = useState('500');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('Wedding / Banquet Celebration');

  // Mobile state
  const [isMobileSelectionOpen, setIsMobileSelectionOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  // Accordion collapsed categories
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCategoryCollapse = (catId) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Toggle dish selection
  const toggleDish = (dishName) => {
    if (selectedDishes.includes(dishName)) {
      setSelectedDishes(selectedDishes.filter(d => d !== dishName));
    } else {
      setSelectedDishes([...selectedDishes, dishName]);
    }
  };

  // Select all or deselect all within a category
  const selectAllInCategory = (categoryItems) => {
    const allSelected = categoryItems.every(item => selectedDishes.includes(item));
    if (allSelected) {
      setSelectedDishes(selectedDishes.filter(d => !categoryItems.includes(d)));
    } else {
      const toAdd = categoryItems.filter(item => !selectedDishes.includes(item));
      setSelectedDishes([...selectedDishes, ...toAdd]);
    }
  };

  // Clear all selections
  const clearSelection = () => {
    if (selectedDishes.length === 0) return;
    if (window.confirm('Are you sure you want to clear your custom menu selection?')) {
      setSelectedDishes([]);
    }
  };

  // Filter categories and items based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return MASTER_MENU_CATEGORIES;
    }
    const query = searchQuery.toLowerCase().trim();
    return MASTER_MENU_CATEGORIES.map(cat => {
      const matchingItems = cat.items.filter(item => item.toLowerCase().includes(query));
      return {
        ...cat,
        items: matchingItems
      };
    }).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  // Group selected dishes by category for the right sidebar
  const selectedGrouped = useMemo(() => {
    const groups = [];
    MASTER_MENU_CATEGORIES.forEach(cat => {
      const picked = cat.items.filter(item => selectedDishes.includes(item));
      if (picked.length > 0) {
        groups.push({
          categoryName: cat.name,
          items: picked
        });
      }
    });
    return groups;
  }, [selectedDishes]);

  // Handle WhatsApp dispatch with URL encoding
  const handleSendToWhatsApp = () => {
    if (selectedDishes.length === 0) {
      alert('Please select at least one dish for your custom menu.');
      return;
    }

    let dishListText = '';
    selectedGrouped.forEach(group => {
      dishListText += `\n*— ${group.categoryName.toUpperCase()} —*\n`;
      group.items.forEach((dish, idx) => {
        dishListText += `  ${idx + 1}. ${dish}\n`;
      });
    });

    const message = 
`*NASHWAN CATERINGS - BESPOKE EVENT CURATION*
━━━━━━━━━━━━━━━━━━━━━━━━━━
• *Client Name:* ${clientName || 'Valued Guest'}
• *Phone:* ${clientPhone || 'Shared via chat'}
• *Event Type:* ${eventType}
• *Approx. Guests:* ${estimatedGuests || '500'} Guests
• *Preferred Date:* ${eventDate || 'To be decided'}
• *Catering Branch:* Hyderabad (Uppal / Secunderabad)
━━━━━━━━━━━━━━━━━━━━━━━━━━
*CURATED MENU ITEMS (${selectedDishes.length} Selected):*${dishListText}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Please provide itemized per-plate quotation, live counter recommendations, and tasting schedule.`;

    const whatsappUrl = `https://wa.me/919949390829?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const totalDishesCount = useMemo(() => {
    return MASTER_MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28 pb-20 md:pb-0 font-sans selection:bg-[#ECC870]/30">
      
      {/* =========================================================================
          PAGE HEADER BANNER: NASHWAN CATERINGS (Consistent with Menu & About Pages)
      ========================================================================= */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#011022] via-[#01142B] to-[#021B3A] border-b border-[#ECC870]/20 text-center overflow-hidden">
        {/* Ambient background with hero watermark */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')", backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011227]/90 via-[#01142B]/95 to-[#01142B] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.25em] uppercase text-[#ECC870] block mb-2">
            NASHWAN CATERING SERVICES • BESPOKE EVENT CURATION
          </span>

          <h1 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            Curate Your Custom Menu
          </h1>

          <p className="font-lato text-neutral-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed mb-4">
            Select your preferred dishes across our 28 master culinary categories. Craft a tailored banquet proposal for your celebration and connect directly with our chefs.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#021B3A] border border-[#ECC870]/30 text-xs text-[#ECC870] font-montserrat">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">Direct Lines: 9492247495 & 9949390829</span>
            <span className="text-[#ECC870]/60">•</span>
            <span className="text-neutral-300">Hyderabad</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN 3-COLUMN BUILDER (Contained, Zero Overflow, Perfect Layout)
      ========================================================================= */}
      <div className="flex-1 w-full max-w-[1520px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Mobile Filter & Search Bar */}
        <div className="lg:hidden mb-5 flex flex-col gap-3">
          {/* Search Box */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder={`Search over ${totalDishesCount} dishes...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#021B3A] border border-[#ECC870]/30 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#ECC870] shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Browse Categories Accordion / Dropdown on Mobile */}
          <button 
            onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
            className="w-full py-3 px-4 rounded-lg bg-[#021B3A] border border-[#ECC870]/35 text-white flex items-center justify-between text-xs font-montserrat uppercase tracking-wider font-semibold shadow-md"
          >
            <span>Browse Categories ({MASTER_MENU_CATEGORIES.length})</span>
            <ChevronDown className={`w-4 h-4 text-[#ECC870] transition-transform ${isMobileCategoryOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile Category Dropdown List */}
          {isMobileCategoryOpen && (
            <div className="bg-[#021B3A] border border-[#ECC870]/30 rounded-lg p-3 max-h-60 overflow-y-auto space-y-1 shadow-xl custom-scrollbar">
              {MASTER_MENU_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    setIsMobileCategoryOpen(false);
                    const el = document.getElementById(`cat-${cat.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-xs transition-colors flex items-center justify-between ${
                    activeCategoryId === cat.id 
                      ? 'bg-[#ECC870] text-[#01142B] font-semibold' 
                      : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <span className="truncate pr-2">{cat.name}</span>
                  <span className="text-[10px] opacity-70 shrink-0">({cat.items.length})</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3-COLUMN DESKTOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
          
          {/* =========================================================================
              COLUMN 1: CATEGORIES SIDEBAR (Contained Scroll, Zero Overflow)
          ========================================================================= */}
          <aside className="hidden lg:flex lg:col-span-3 xl:col-span-3 sticky top-28 bg-[#01142B] border border-[#ECC870]/30 rounded-2xl p-4 shadow-2xl h-[calc(100vh-140px)] flex-col overflow-hidden">
            
            {/* Header (shrink-0 so it stays anchored at top) */}
            <div className="pb-3 mb-2 border-b border-[#ECC870]/20 flex items-center justify-between shrink-0">
              <h2 className="font-cormorant text-xl font-medium tracking-tight text-white flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#ECC870]" />
                <span>Categories</span>
              </h2>
              <span className="font-montserrat text-[11px] text-[#ECC870] font-semibold px-2 py-0.5 rounded bg-[#021B3A] border border-[#ECC870]/20">
                {MASTER_MENU_CATEGORIES.length}
              </span>
            </div>

            {/* Scrollable list: flex-1 min-h-0 guarantees clean scroll INSIDE the card */}
            <nav className="flex-1 min-h-0 overflow-y-auto space-y-1.5 pr-2 custom-scrollbar text-xs">
              {MASTER_MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                const chosenInCategory = cat.items.filter(item => selectedDishes.includes(item)).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      const el = document.getElementById(`cat-${cat.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#ECC870] text-[#01142B] font-semibold shadow-md' 
                        : 'text-neutral-300 hover:text-white hover:bg-[#021B3A]'
                    }`}
                  >
                    <span className="truncate pr-2 font-lato text-xs flex-1 min-w-0" title={cat.name}>
                      {cat.name}
                    </span>
                    
                    <div className="flex items-center gap-1.5 shrink-0 ml-1">
                      {chosenInCategory > 0 && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center ${
                          isActive ? 'bg-[#01142B] text-[#ECC870]' : 'bg-[#ECC870] text-[#01142B]'
                        }`}>
                          {chosenInCategory}
                        </span>
                      )}
                      <span className={`text-[11px] font-montserrat ${isActive ? 'text-[#01142B]/80 font-semibold' : 'text-neutral-400'}`}>
                        ({cat.items.length})
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* =========================================================================
              COLUMN 2: SEARCH + DISH ACCORDION GRID (6 cols on lg)
          ========================================================================= */}
          <main className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-6">
            
            {/* Desktop Top Search Bar */}
            <div className="hidden lg:block relative w-full shadow-lg">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder={`Search over ${totalDishesCount} dishes...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-[#021B3A] border border-[#ECC870]/30 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#ECC870] shadow-inner transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* If searching and no results */}
            {filteredCategories.length === 0 && (
              <div className="p-12 text-center bg-[#021B3A] border border-[#ECC870]/20 rounded-xl">
                <p className="font-cormorant text-2xl text-neutral-300 mb-2">No dishes match "{searchQuery}"</p>
                <p className="font-lato text-xs text-neutral-400 mb-4">Try searching for a different ingredient or category</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-5 py-2 rounded-lg bg-[#ECC870] text-[#01142B] font-montserrat text-xs font-semibold uppercase tracking-wider"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* List of Category Accordions */}
            {filteredCategories.map((cat) => {
              const isCollapsed = collapsedCategories[cat.id];
              const selectedCount = cat.items.filter(item => selectedDishes.includes(item)).length;
              const allSelected = cat.items.length > 0 && selectedCount === cat.items.length;

              return (
                <section 
                  key={cat.id} 
                  id={`cat-${cat.id}`}
                  className="bg-[#01142B] border border-[#ECC870]/25 rounded-xl overflow-hidden shadow-xl transition-all scroll-mt-28"
                >
                  {/* Category Header Row (Accordion Bar) */}
                  <div className="bg-[#021B3A] border-b border-[#ECC870]/25 px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3">
                    <button 
                      onClick={() => toggleCategoryCollapse(cat.id)}
                      className="flex items-center gap-3 text-left flex-1 group"
                    >
                      <div className="w-7 h-7 rounded bg-[#01142B] border border-[#ECC870]/50 flex items-center justify-center shrink-0 text-[#ECC870] group-hover:bg-[#ECC870] group-hover:text-[#01142B] transition-colors">
                        {isCollapsed ? <Plus className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                      </div>

                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="font-cormorant text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-[#ECC870] transition-colors">
                          {cat.name}
                        </h3>
                        <span className="font-lato text-xs sm:text-sm text-neutral-400">
                          ({cat.items.length})
                        </span>
                      </div>
                    </button>

                    {/* Category Action: Select All / Deselect All */}
                    <div className="flex items-center gap-2 shrink-0">
                      {selectedCount > 0 && (
                        <span className="font-montserrat text-[11px] font-semibold text-[#ECC870] bg-[#01142B] px-2 py-0.5 rounded border border-[#ECC870]/30 hidden sm:inline-block">
                          {selectedCount} selected
                        </span>
                      )}

                      <button
                        onClick={() => selectAllInCategory(cat.items)}
                        className="font-montserrat text-[11px] font-medium text-neutral-300 hover:text-[#ECC870] px-2.5 py-1 rounded bg-[#01142B] border border-[#ECC870]/20 hover:border-[#ECC870]/60 transition-colors uppercase tracking-wider"
                      >
                        {allSelected ? 'Deselect All' : 'Select All'}
                      </button>
                    </div>
                  </div>

                  {/* 2-Column Grid of Dishes */}
                  {!isCollapsed && (
                    <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 bg-[#011227]/60">
                      {cat.items.map((dish) => {
                        const isChecked = selectedDishes.includes(dish);

                        return (
                          <div
                            key={dish}
                            onClick={() => toggleDish(dish)}
                            className={`p-3.5 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3 select-none group ${
                              isChecked 
                                ? 'bg-[#021B3A] border-[#ECC870] shadow-[0_4px_16px_rgba(236,200,112,0.15)] ring-1 ring-[#ECC870]/50' 
                                : 'bg-[#021B3A]/40 border-neutral-800 hover:border-[#ECC870]/40 hover:bg-[#021B3A]/70'
                            }`}
                          >
                            {/* Checkbox */}
                            <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-all ${
                              isChecked 
                                ? 'bg-[#ECC870] text-[#01142B] shadow-sm' 
                                : 'border border-[#ECC870]/40 bg-[#01142B] group-hover:border-[#ECC870]'
                            }`}>
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>

                            {/* Dish Name */}
                            <span className={`font-lato text-xs sm:text-[13px] leading-snug transition-colors ${
                              isChecked ? 'text-white font-semibold' : 'text-neutral-300 group-hover:text-white'
                            }`}>
                              {dish}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}

          </main>

          {/* =========================================================================
              COLUMN 3: YOUR SELECTION PANEL (Contained Scroll, Zero Overflow)
          ========================================================================= */}
          <aside className="hidden lg:flex lg:col-span-3 xl:col-span-3 sticky top-28 bg-[#01142B] border border-[#ECC870]/30 rounded-2xl p-5 shadow-2xl h-[calc(100vh-140px)] flex-col overflow-hidden justify-between">
            
            {/* Top Selection Header (shrink-0 so it stays anchored at top) */}
            <div className="shrink-0">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECC870]/20 mb-3">
                <div>
                  <h2 className="font-cormorant text-2xl font-medium tracking-tight text-white">
                    Your Selection
                  </h2>
                  <p className="font-montserrat text-xs text-[#ECC870] font-semibold mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ECC870] animate-pulse" />
                    <span>■ {selectedDishes.length} items chosen</span>
                  </p>
                </div>

                {selectedDishes.length > 0 && (
                  <button 
                    onClick={clearSelection}
                    className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors text-xs flex items-center gap-1"
                    title="Clear Selection"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Estimated Guests Input Box */}
              <div className="mb-3">
                <label className="font-montserrat text-[11px] font-semibold uppercase tracking-wider text-neutral-300 block mb-1">
                  ESTIMATED GUESTS
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="number"
                    min="25"
                    step="25"
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#021B3A] border border-[#ECC870]/30 text-white font-montserrat text-sm font-semibold focus:outline-none focus:border-[#ECC870]"
                  />
                </div>
              </div>
            </div>

            {/* Middle: Categorized Dish List (flex-1 min-h-0 guarantees scroll INSIDE the card) */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-1.5 my-2 space-y-3 custom-scrollbar text-xs">
              {selectedDishes.length === 0 ? (
                <div className="py-10 text-center text-neutral-400 flex flex-col items-center justify-center">
                  <ChefHat className="w-10 h-10 text-[#ECC870]/40 mb-3 stroke-[1.5]" />
                  <p className="font-cormorant text-base text-neutral-300 font-medium">No dishes selected</p>
                  <p className="text-[11px] font-lato text-neutral-400 max-w-[190px] mt-1">
                    Select dishes from the menu to build your event quotation.
                  </p>
                </div>
              ) : (
                selectedGrouped.map((group) => (
                  <div key={group.categoryName} className="border-b border-[#ECC870]/10 pb-2.5">
                    <h4 className="font-montserrat text-[10px] font-bold text-[#ECC870] uppercase tracking-wider mb-1.5">
                      {group.categoryName} ({group.items.length})
                    </h4>
                    <ul className="space-y-1">
                      {group.items.map((dish) => (
                        <li key={dish} className="flex items-center justify-between text-neutral-200 group text-[11px]">
                          <span className="flex items-baseline gap-1.5 truncate pr-2">
                            <span className="text-[#ECC870] text-xs leading-none">▪</span>
                            <span className="truncate">{dish}</span>
                          </span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDish(dish);
                            }}
                            className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-rose-400 p-0.5 transition-opacity"
                            title="Remove"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Actions (shrink-0 stays pinned at the bottom) */}
            <div className="pt-3 border-t border-[#ECC870]/20 space-y-2 shrink-0">
              <button 
                onClick={handleSendToWhatsApp}
                disabled={selectedDishes.length === 0}
                className="w-full py-3.5 px-4 rounded-lg bg-[#ECC870] hover:bg-[#F3D68A] disabled:bg-neutral-700 disabled:text-neutral-500 text-[#01142B] font-montserrat font-bold text-xs uppercase tracking-wider shadow-[0_6px_20px_rgba(236,200,112,0.35)] hover:shadow-[0_8px_25px_rgba(236,200,112,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-[#01142B]" />
                <span>SHARE VIA WHATSAPP</span>
              </button>

              {selectedDishes.length > 0 && (
                <button 
                  onClick={clearSelection}
                  className="w-full text-center font-montserrat text-[11px] font-semibold text-neutral-400 hover:text-neutral-200 uppercase tracking-wider py-1"
                >
                  CLEAR SELECTION
                </button>
              )}
            </div>

          </aside>

        </div>

      </div>

      {/* =========================================================================
          MOBILE STICKY ACTION BAR & FLOATING BUTTONS
      ========================================================================= */}
      <div className="lg:hidden fixed bottom-14 left-0 right-0 z-30 px-3 py-2 bg-[#011024]/95 backdrop-blur-md border-t border-[#ECC870]/25 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 pl-2">
          <span className="font-montserrat text-lg font-bold text-white">
            {selectedDishes.length}
          </span>
          <span className="font-lato text-xs text-neutral-300">items</span>
        </div>

        <button 
          onClick={() => setIsMobileSelectionOpen(true)}
          className="py-2.5 px-5 rounded-lg bg-[#ECC870] text-[#01142B] font-montserrat font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
        >
          <span>VIEW SELECTION</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Action Buttons on Mobile */}
      <div className="lg:hidden fixed bottom-28 right-3 z-30 flex flex-col gap-2.5">
        <a 
          href="https://wa.me/919949390829?text=Hi%20Nashwan%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20catering%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-lg bg-[#075E54] text-white flex items-center justify-center shadow-xl border border-emerald-400/30 hover:scale-105 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        <a 
          href="tel:9492247495"
          className="w-11 h-11 rounded-lg bg-[#ECC870] text-[#01142B] flex items-center justify-center shadow-xl border border-[#ECC870]/60 hover:scale-105 transition-transform"
          aria-label="Call Caterer"
        >
          <Phone className="w-5 h-5 fill-[#01142B]" />
        </a>
      </div>

      {/* =========================================================================
          MOBILE SELECTION DRAWER / MODAL
      ========================================================================= */}
      {isMobileSelectionOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm p-0 sm:p-4 animate-fadeIn">
          <div 
            className="w-full sm:max-w-xl bg-[#01142B] border-t sm:border border-[#ECC870]/40 rounded-t-2xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 bg-[#021B3A] border-b border-[#ECC870]/25 flex items-center justify-between">
              <div>
                <h3 className="font-cormorant text-2xl font-medium text-white">Your Selection</h3>
                <p className="font-montserrat text-xs text-[#ECC870] font-semibold">
                  ■ {selectedDishes.length} items chosen
                </p>
              </div>
              <button 
                onClick={() => setIsMobileSelectionOpen(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Estimated Guests & Event Inputs */}
            <div className="p-4 bg-[#011024] border-b border-[#ECC870]/15 grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-montserrat text-[10px] font-semibold text-neutral-300 uppercase block mb-1">
                  ESTIMATED GUESTS
                </label>
                <input 
                  type="number"
                  value={estimatedGuests}
                  onChange={(e) => setEstimatedGuests(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#021B3A] border border-[#ECC870]/30 text-white font-semibold"
                />
              </div>
              <div>
                <label className="font-montserrat text-[10px] font-semibold text-neutral-300 uppercase block mb-1">
                  EVENT DATE
                </label>
                <input 
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#021B3A] border border-[#ECC870]/30 text-white font-semibold"
                />
              </div>
            </div>

            {/* List of items */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs custom-scrollbar">
              {selectedDishes.length === 0 ? (
                <p className="text-center text-neutral-400 py-8">No items chosen yet.</p>
              ) : (
                selectedGrouped.map(group => (
                  <div key={group.categoryName} className="border-b border-[#ECC870]/15 pb-2">
                    <h5 className="font-montserrat text-[11px] font-bold text-[#ECC870] uppercase mb-1.5">
                      {group.categoryName} ({group.items.length})
                    </h5>
                    <ul className="space-y-1">
                      {group.items.map(dish => (
                        <li key={dish} className="flex items-center justify-between text-neutral-200">
                          <span>• {dish}</span>
                          <button 
                            onClick={() => toggleDish(dish)}
                            className="text-neutral-400 hover:text-rose-400 p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>

            {/* Action button */}
            <div className="p-4 bg-[#021B3A] border-t border-[#ECC870]/25 space-y-2">
              <button 
                onClick={() => {
                  handleSendToWhatsApp();
                  setIsMobileSelectionOpen(false);
                }}
                disabled={selectedDishes.length === 0}
                className="w-full py-3.5 rounded-lg bg-[#ECC870] text-[#01142B] font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-[#01142B]" />
                <span>SHARE VIA WHATSAPP</span>
              </button>

              <button 
                onClick={clearSelection}
                className="w-full text-center font-montserrat text-[11px] text-neutral-400 hover:text-white py-1"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Footer */}
      <Footer 
        onNavigate={onNavigate}
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
}
