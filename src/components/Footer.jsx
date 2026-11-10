import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate, onOpenBooking }) {
  return (
    <footer className="bg-[#011227] border-t border-[#ECC870]/30 text-[#FDFBF7] pt-14 pb-8 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#ECC870]/20">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <img 
              src="assets/logo.png" 
              onError={(e) => { e.target.src = 'assets/logo.png' }}
              alt="Nashwan Caterings" 
              className="h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(236,200,112,0.25)]"
            />
            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              <strong className="text-[#ECC870]">NASHWAN CATERINGS</strong><br />
              Authentic Flavours. Timeless Traditions. Unforgettable Celebrations.
            </p>
            <p className="text-xs text-[#ECC870] italic">
              "Taste the Tradition. Celebrate the Moment."
            </p>

            {/* FSSAI & ISO Certifications */}
            <div className="pt-2 flex items-center gap-4">
              <img 
                src="assets/fssai-logo.svg" 
                alt="FSSAI" 
                className="h-9 w-auto object-contain" 
              />
              <img 
                src="assets/iso-logo.svg" 
                alt="ISO 9001 Quality Assurance" 
                className="h-9 w-auto object-contain rounded-[2px]" 
              />
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-[#ECC870] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#ECC870] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#ECC870] transition-colors">
                  About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#ECC870] transition-colors">
                  Catering Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#ECC870] transition-colors">
                  The Taste of Hyderabad Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom')} className="hover:text-[#ECC870] transition-colors">
                  Custom Catering & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#ECC870] transition-colors">
                  Celebration Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quote')} className="hover:text-[#ECC870] transition-colors text-[#ECC870] font-semibold">
                  Get a Free Quote (30 Mins)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#ECC870] transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Services */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-[#ECC870] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>Royal Wedding Banquets</li>
              <li>Corporate Galas & Summits</li>
              <li>Grand Receptions & Valima</li>
              <li>Traditional Sangeet Feasts</li>
              <li>Private High-Table Dining</li>
              <li>Live Degh Biryani Counters</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-[#ECC870] mb-4">
              Registered Office & Contact
            </h4>
            <div className="text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ECC870]" />
                <a href="tel:9492247495" className="hover:text-[#ECC870]">9492247495</a>
                <span className="text-neutral-500">•</span>
                <a href="tel:9949390829" className="hover:text-[#ECC870]">9949390829</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ECC870] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  H.No: 2-20-17/5, Kummari Kunta, Chilka Nagar, Uppal, Medchal-Malkajgiri, Uppal Circle No.2, Hyderabad, Telangana - 500039
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#ECC870]" />
                <span>Booking Desk: 9:00 AM – 10:00 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onNavigate('quote')}
                className="w-full py-2.5 px-4 rounded-[2px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md font-montserrat"
              >
                GET A QUOTE
              </button>
            </div>
          </div>

        </div>

        {/* Certifications & Government Compliance Bar */}
        <div className="py-6 border-b border-[#ECC870]/20 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#01162F] border border-[#ECC870]/30 hover:border-[#ECC870]/60 transition-colors">
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center shrink-0 shadow-sm border border-neutral-200">
              <img src="assets/fssai-logo.svg" alt="FSSAI" className="h-6 w-auto object-contain" />
            </div>
            <div>
              <div className="font-montserrat text-white font-semibold text-[11px] uppercase tracking-wide">
                FSSAI Lic. No: <span className="text-[#ECC870] font-mono">23624031003794</span>
              </div>
              <div className="text-[10px] text-neutral-400">
                Govt. of Telangana • Food Safety & Standards Authority of India (Valid Upto 2029)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#01162F] border border-[#ECC870]/30">
            <div className="flex items-center justify-center shrink-0 shadow-sm">
              <img src="assets/iso-logo.svg" alt="ISO 9001" className="h-8 w-auto object-contain rounded-[2px]" />
            </div>
            <div>
              <div className="font-montserrat text-white font-semibold text-[11px] uppercase tracking-wide">
                ISO 9001:2015 & ISO 22000:2018
              </div>
              <div className="text-[10px] text-neutral-400">
                Certified Food Safety & Quality Management System
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#01162F] border border-amber-500/30">
            <div className="text-amber-400 font-bold text-xs bg-amber-950/60 px-2 py-1 rounded border border-amber-500/40">
              حلال
            </div>
            <div>
              <div className="font-montserrat text-white font-semibold text-[11px] uppercase tracking-wide">
                100% Halal Preparation
              </div>
              <div className="text-[10px] text-neutral-400">
                Strict Hyderabadi culinary traditions & authenticated sourcing
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-2">
          <p>© {new Date().getFullYear()} Nashwan Caterings. All Rights Reserved. Crafted with pride in Hyderabad.</p>
          <p className="flex items-center gap-3">
            <span>Authentic Hyderabadi Cuisine</span>
            <span className="text-[#ECC870]">•</span>
            <span>Uncompromising Quality</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
