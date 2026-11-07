import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate, onOpenBooking }) {
  return (
    <footer className="bg-[#0A0907] border-t border-[#8C6D37]/30 text-[#FDFBF7] pt-14 pb-8 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <img 
              src="assets/logo.png" 
              onError={(e) => { e.target.src = '/assets/logo.png' }}
              alt="Nashwan Caterings" 
              className="h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
            />
            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              <strong className="text-[#E5A947]">NASHWAN CATERINGS</strong><br />
              Authentic Flavours. Timeless Traditions. Unforgettable Celebrations.
            </p>
            <p className="text-xs text-[#E5A947] italic">
              "Taste the Tradition. Celebrate the Moment."
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-[#E5A947] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#E5A947] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#E5A947] transition-colors">
                  About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#E5A947] transition-colors">
                  The Taste of Hyderabad Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom')} className="hover:text-[#E5A947] transition-colors">
                  Custom Catering & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#E5A947] transition-colors">
                  Celebration Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#E5A947] transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Catering Expertise */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-[#E5A947] mb-4">
              Our Five Pillars
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><span className="text-[#E5A947] font-semibold">Authenticity:</span> Honouring culinary heritage</li>
              <li><span className="text-[#E5A947] font-semibold">Quality:</span> Fresh ingredients & pure spices</li>
              <li><span className="text-[#E5A947] font-semibold">Hygiene:</span> 5-star sanitation standards</li>
              <li><span className="text-[#E5A947] font-semibold">Presentation:</span> Visual banquet splendour</li>
              <li><span className="text-[#E5A947] font-semibold">Hospitality:</span> Heartfelt warmth & care</li>
            </ul>
          </div>

          {/* Col 4: Connect & Direct Line */}
          <div>
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-[#E5A947] mb-4">
              Connect With Nashwan
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A947] shrink-0 mt-0.5" />
                <span>Balaji Enclave, Uppal, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A947] shrink-0" />
                <div className="flex items-center gap-1.5 font-medium">
                  <a href="tel:9949390829" className="hover:text-[#E5A947]">9949390829</a>
                  <span>/</span>
                  <a href="tel:9492247495" className="hover:text-[#E5A947]">9492247495</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E5A947] shrink-0" />
                <span>Business Hours: 8:00 AM – 11:00 PM IST</span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.justdial.com/Hyderabad/Nashwan-Catering-Services-Balaji-Enclave-Uppal/040PXX40-XX40-250414090522-R6N9_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#E5A947] hover:underline bg-[#E5A947]/10 px-3 py-1.5 rounded-lg border border-[#8C6D37]/30"
                >
                  <span>Verified JustDial Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
          <p>© {new Date().getFullYear()} Nashwan Caterings. All rights reserved.</p>
          <p className="italic text-neutral-400">
            "Where Hyderabad's Culinary Heritage Meets Contemporary Elegance"
          </p>
        </div>

      </div>
    </footer>
  );
}
