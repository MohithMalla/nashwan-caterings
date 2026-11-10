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
      <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#011227]/90 via-[#01142B]/60 to-transparent">
        <div className="max-w-[1750px] mx-auto flex items-center justify-between">
          
          {/* Left Section: Cyan & White Nashwan Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNav('home')} className="flex items-center shrink-0 text-left">
              <img 
                src="assets/logo.png" 
                onError={(e) => { e.target.src = 'assets/logo.png' }}
                alt="Nashwan Catering Services" 
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </button>
          </div>

          {/* Center Navigation Links (Navigation: Montserrat 500) */}
          <nav className="font-montserrat hidden lg:flex items-center space-x-7 xl:space-x-9 text-xs sm:text-[13px] tracking-wider uppercase font-medium">
            {/* Home */}
            <button 
              onClick={() => handleNav('home')}
              className={`transition-colors relative ${
                activePage === 'home' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              HOME
            </button>

            {/* About */}
            <button 
              onClick={() => handleNav('about')}
              className={`transition-colors ${
                activePage === 'about' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              ABOUT
            </button>

            {/* Services */}
            <button 
              onClick={() => handleNav('services')}
              className={`transition-colors ${
                activePage === 'services' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              SERVICES
            </button>

            {/* Menu */}
            <button 
              onClick={() => handleNav('menu')}
              className={`transition-colors ${
                activePage === 'menu' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              MENU
            </button>

            {/* Custom Menu */}
            <button 
              onClick={() => handleNav('custom')}
              className={`transition-colors ${
                activePage === 'custom' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              CUSTOM MENU
            </button>

            {/* Gallery */}
            <button 
              onClick={() => handleNav('gallery')}
              className={`transition-colors ${
                activePage === 'gallery' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              GALLERY
            </button>

            {/* Contact */}
            <button 
              onClick={() => handleNav('contact')}
              className={`transition-colors ${
                activePage === 'contact' 
                  ? 'text-[#ECC870] font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Section: Gold Outlined "GET A QUOTE" Button (Button: Montserrat 500) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('quote')}
              className="font-montserrat px-6 sm:px-7 py-2.5 rounded-[2px] border border-[#ECC870]/80 hover:border-[#ECC870] hover:bg-[#ECC870]/10 text-white hover:text-[#ECC870] text-xs font-medium uppercase tracking-[0.2em] transition-all duration-200 shadow-sm"
            >
              GET A QUOTE
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#ECC870]/40 text-[#ECC870] lg:hidden"
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
                <button onClick={() => { setMobileMenuOpen(false); handleNav('services'); }} className={`text-left ${activePage === 'services' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Services</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('menu'); }} className={`text-left ${activePage === 'menu' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Menu</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('custom'); }} className={`text-left ${activePage === 'custom' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Custom Catering</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('gallery'); }} className={`text-left ${activePage === 'gallery' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Gallery</button>
                <button onClick={() => { setMobileMenuOpen(false); handleNav('contact'); }} className={`text-left ${activePage === 'contact' ? 'text-[#E5A947] font-semibold' : 'text-neutral-300'}`}>Contact</button>
              </div>
            </div>

            <button 
              onClick={() => { setMobileMenuOpen(false); onNavigate('quote'); }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-black" />
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
