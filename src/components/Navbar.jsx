import React, { useState } from 'react';
import { Phone, Calendar, ChevronDown, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ 
  activePage = 'home', 
  onNavigate, 
  onOpenBooking, 
  onOpenCustomMenu, 
  onOpenMenu, 
  onOpenGallery, 
  onOpenAbout, 
  onOpenContact, 
  onSelectService 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      if (page === 'about' && onOpenAbout) onOpenAbout();
      if (page === 'menu' && onOpenMenu) onOpenMenu();
      if (page === 'custom' && onOpenCustomMenu) onOpenCustomMenu();
      if (page === 'gallery' && onOpenGallery) onOpenGallery();
      if (page === 'contact' && onOpenContact) onOpenContact();
    }
  };

  const servicesList = [
    { title: 'Royal Wedding Banquets', desc: 'Regal setups with silver-grade service' },
    { title: 'Corporate Galas & Summits', desc: 'Executive lunching & protocols' },
    { title: 'Grand Receptions & Valima', desc: 'Extravagant celebratory dining' },
    { title: 'Traditional Dastarkhwan Feasts', desc: 'Authentic Hyderabadi live stations' },
    { title: 'Private VIP Dining', desc: 'Bespoke high-table curation' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-black/95 via-black/60 to-transparent">
        <div className="max-w-[1750px] mx-auto flex items-center justify-between">
          
          {/* Left Section: Bigger Logo, Vertical Divider & Direct Line */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Increased Logo Size */}
            <button onClick={() => handleNav('home')} className="flex items-center shrink-0 text-left">
              <img 
                src="assets/logo.png" 
                onError={(e) => { e.target.src = '/assets/logo.png' }}
                alt="Nashwan Catering Services" 
                className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.3)] transition-transform hover:scale-105 duration-300"
              />
            </button>

            {/* Vertical Divider Line */}
            <div className="hidden md:block h-10 w-[1px] bg-[#8C6D37]/50" />

            {/* Catering Direct Line with Phone Circle */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#E5A947]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-wider text-[#D4AF37] uppercase font-bold leading-tight">
                  CATERING DIRECT LINE
                </span>
                <div className="flex items-center gap-1.5 text-white font-medium text-sm sm:text-[15px] tracking-wide leading-tight mt-0.5">
                  <a href="tel:9492247495" className="hover:text-[#E5A947] transition-colors">9492247495</a>
                  <span className="text-[#D4AF37] text-xs leading-none">•</span>
                  <a href="tel:9949390829" className="hover:text-[#E5A947] transition-colors">9949390829</a>
                </div>
              </div>
            </div>
          </div>

          {/* Center Navigation Links (Matching Screenshot Exactly) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-normal">
            {/* Home */}
            <button 
              onClick={() => handleNav('home')}
              className={`transition-colors relative pb-1 ${
                activePage === 'home' 
                  ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                  : 'text-neutral-200 hover:text-[#D4AF37]'
              }`}
            >
              Home
            </button>

            {/* About */}
            <button 
              onClick={() => handleNav('about')}
              className={`transition-colors relative pb-1 ${
                activePage === 'about' 
                  ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                  : 'text-neutral-200 hover:text-[#D4AF37]'
              }`}
            >
              About
            </button>

            {/* Services with Dropdown Chevron */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`transition-colors flex items-center gap-1 relative pb-1 ${
                  activePage === 'custom' 
                    ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                    : 'text-neutral-200 hover:text-[#D4AF37]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0D0B09]/95 backdrop-blur-xl border border-[#D4AF37]/40 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] py-2 z-50">
                  <div className="px-3.5 py-1.5 border-b border-[#D4AF37]/20 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Specialized Offerings</span>
                  </div>
                  {servicesList.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        handleNav('custom');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-[#D4AF37]/15 block transition-colors"
                    >
                      <div className="text-xs font-semibold text-white">{service.title}</div>
                      <div className="text-[10px] text-neutral-400">{service.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Menu */}
            <button 
              onClick={() => handleNav('menu')}
              className={`transition-colors relative pb-1 ${
                activePage === 'menu' 
                  ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                  : 'text-neutral-200 hover:text-[#D4AF37]'
              }`}
            >
              Menu
            </button>

            {/* Custom Menu */}
            <button 
              onClick={() => handleNav('custom')}
              className={`transition-colors relative pb-1 ${
                activePage === 'custom' 
                  ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                  : 'text-neutral-200 hover:text-[#D4AF37]'
              }`}
            >
              Custom Menu
            </button>

            {/* Gallery */}
            <button 
              onClick={() => handleNav('gallery')}
              className={`transition-colors relative pb-1 ${
                activePage === 'gallery' 
                  ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                  : 'text-neutral-200 hover:text-[#D4AF37]'
              }`}
            >
              Gallery
            </button>

            {/* Contact */}
            <button 
              onClick={() => handleNav('contact')}
              className={`transition-colors relative pb-1 ${
                activePage === 'contact' 
                  ? 'text-white font-medium border-b-2 border-[#D4AF37]' 
                  : 'text-neutral-200 hover:text-[#D4AF37]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Section: Pill-Shaped "BOOK NOW" Button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] shadow-[0_4px_20px_rgba(237,168,61,0.4)] hover:shadow-[0_6px_28px_rgba(237,168,61,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-black stroke-[2.2]" />
              <span>BOOK NOW</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#8C6D37]/40 text-[#E5A947] lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md lg:hidden flex justify-end">
          <div className="w-4/5 max-w-sm h-full bg-[#0E0C09] border-l border-[#8C6D37]/30 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#8C6D37]/20">
                <img src="assets/logo.png" onError={(e) => { e.target.src = '/assets/logo.png' }} alt="Nashwan Catering" className="h-12 w-auto" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#E5A947]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Direct Calling on Mobile */}
              <div className="py-4 border-b border-[#8C6D37]/15">
                <span className="text-[10px] tracking-wider text-[#D4AF37] uppercase font-bold block mb-1">Catering Direct Line</span>
                <div className="flex flex-col gap-1.5 text-sm text-neutral-200 font-medium">
                  <a href="tel:9492247495" className="flex items-center gap-2 hover:text-[#E5A947]">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> 9492247495
                  </a>
                  <a href="tel:9949390829" className="flex items-center gap-2 hover:text-[#E5A947]">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> 9949390829
                  </a>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 py-4 text-base">
                <button onClick={() => { setMobileMenuOpen(false); handleNav('home'); }} className={`text-left ${activePage === 'home' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Home</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('about'); }} className={`text-left ${activePage === 'about' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>About Us</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('menu'); }} className={`text-left ${activePage === 'menu' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Menu</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('custom'); }} className={`text-left ${activePage === 'custom' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Custom Catering</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('gallery'); }} className={`text-left ${activePage === 'gallery' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Gallery</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('contact'); }} className={`text-left ${activePage === 'contact' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Contact</button>
              </div>
            </div>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-black" />
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
}
