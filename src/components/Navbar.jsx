import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  CalendarDays, 
  Menu as MenuIcon, 
  X, 
  ChevronDown, 
  Sparkles, 
  Crown, 
  UtensilsCrossed, 
  Building2, 
  Users, 
  Wine 
} from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenCustomMenu, onOpenMenu, onOpenGallery, onOpenAbout, onOpenContact, onSelectService }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { id: 'wedding', title: 'Royal Wedding Banquets', desc: 'Regal dining setups with silver-grade service', icon: Crown },
    { id: 'corporate', title: 'Corporate Galas & Summits', desc: 'Refined multi-cuisine buffets & executive lunching', icon: Building2 },
    { id: 'reception', title: 'Grand Receptions & Engagements', desc: 'Artisanal spreads and celebratory dining', icon: Wine },
    { id: 'traditional', title: 'Traditional Feasts & Sangeet', desc: 'Authentic regional recipes & live stations', icon: UtensilsCrossed },
    { id: 'vip', title: 'Exclusive Private Dining', desc: 'Intimate bespoke luxury catering for VIPs', icon: Sparkles }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#080706]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-[#D4AF37]/20' 
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left Section: Logo & Phone Numbers */}
            <div className="flex items-center gap-4 lg:gap-6">
              <a href="#" className="flex items-center group">
                <img 
                  src="assets/logo.png" 
                  onError={(e) => { e.target.src = '/assets/logo.png' }}
                  alt="Nashwan Catering Services" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
                />
              </a>

              {/* Phone Numbers Display with Gold Accents */}
              <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-[#D4AF37]/30 text-xs text-[#EFE8DA]">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#ECC870]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-wider text-[#D4AF37] uppercase font-semibold">Catering Direct Line</span>
                  <div className="flex items-center gap-1.5 font-medium tracking-wide">
                    <a href="tel:9492247495" className="hover:text-[#ECC870] transition-colors">9492247495</a>
                    <span className="text-[#D4AF37]/60">•</span>
                    <a href="tel:9949390829" className="hover:text-[#ECC870] transition-colors">9949390829</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a 
                href="#" 
                className="px-3.5 py-2 text-sm font-medium text-white hover:text-[#ECC870] transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-100 transition-transform origin-left"></span>
              </a>

              <button 
                onClick={onOpenAbout}
                className="px-3.5 py-2 text-sm font-medium text-[#E5E5E5] hover:text-[#ECC870] transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  className="px-3.5 py-2 text-sm font-medium text-[#E5E5E5] hover:text-[#ECC870] transition-colors flex items-center gap-1.5 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#D4AF37] ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-[#0D0B09]/95 backdrop-blur-xl border border-[#D4AF37]/35 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] py-2 z-50 animate-fadeIn">
                    <div className="px-3 py-1.5 border-b border-[#D4AF37]/20 mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#ECC870] font-semibold">Specialized Offerings</span>
                    </div>
                    {servicesList.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onSelectService(service);
                          }}
                          className="w-full text-left px-3.5 py-2.5 hover:bg-[#D4AF37]/15 flex items-start gap-3 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#ECC870] shrink-0 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-[#ECC870] transition-colors">{service.title}</div>
                            <div className="text-[10px] text-neutral-400 leading-snug">{service.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button 
                onClick={onOpenMenu}
                className="px-3.5 py-2 text-sm font-medium text-[#E5E5E5] hover:text-[#ECC870] transition-colors relative group"
              >
                Menu
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>

              <button 
                onClick={onOpenCustomMenu}
                className="px-3.5 py-2 text-sm font-medium text-[#E5E5E5] hover:text-[#ECC870] transition-colors relative group"
              >
                Custom Menu
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>

              <button 
                onClick={onOpenGallery}
                className="px-3.5 py-2 text-sm font-medium text-[#E5E5E5] hover:text-[#ECC870] transition-colors relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>

              <button 
                onClick={onOpenContact}
                className="px-3.5 py-2 text-sm font-medium text-[#E5E5E5] hover:text-[#ECC870] transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </nav>

            {/* Right Section: Premium Book Now Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button 
                onClick={onOpenBooking}
                className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <CalendarDays className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Now</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg border border-[#D4AF37]/40 text-[#ECC870] hover:bg-[#D4AF37]/15 lg:hidden transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden flex justify-end">
          <div className="w-4/5 max-w-sm h-full bg-[#0E0C09] border-l border-[#D4AF37]/30 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
                <img src="assets/logo.png" onError={(e) => { e.target.src = '/assets/logo.png' }} alt="Nashwan Catering" className="h-10 w-auto" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#ECC870] hover:bg-[#D4AF37]/10 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Phone Numbers in Mobile Drawer */}
              <div className="py-4 border-b border-[#D4AF37]/15">
                <span className="text-[10px] tracking-wider text-[#ECC870] uppercase font-semibold block mb-1">Direct Inquiries</span>
                <div className="flex flex-col gap-1 text-sm font-medium text-neutral-200">
                  <a href="tel:9492247495" className="flex items-center gap-2 hover:text-[#ECC870]">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> 9492247495
                  </a>
                  <a href="tel:9949390829" className="flex items-center gap-2 hover:text-[#ECC870]">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> 9949390829
                  </a>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 py-4">
                <a 
                  href="#" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-white hover:text-[#ECC870] rounded-md transition-colors"
                >
                  Home
                </a>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenAbout(); }}
                  className="px-3 py-2 text-left text-base font-medium text-neutral-300 hover:text-[#ECC870] rounded-md transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onSelectService(servicesList[0]); }}
                  className="px-3 py-2 text-left text-base font-medium text-neutral-300 hover:text-[#ECC870] rounded-md transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenMenu(); }}
                  className="px-3 py-2 text-left text-base font-medium text-neutral-300 hover:text-[#ECC870] rounded-md transition-colors"
                >
                  Signature Menus
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCustomMenu(); }}
                  className="px-3 py-2 text-left text-base font-medium text-neutral-300 hover:text-[#ECC870] rounded-md transition-colors"
                >
                  Custom Menu Builder
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenGallery(); }}
                  className="px-3 py-2 text-left text-base font-medium text-neutral-300 hover:text-[#ECC870] rounded-md transition-colors"
                >
                  Banquet Gallery
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="px-3 py-2 text-left text-base font-medium text-neutral-300 hover:text-[#ECC870] rounded-md transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] text-black font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <CalendarDays className="w-4 h-4" />
                Book Your Event
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
