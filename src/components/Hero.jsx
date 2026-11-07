import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ServiceHighlights from './ServiceHighlights';
import StatsPanel from './StatsPanel';

export default function Hero({ onOpenBooking, onOpenCustomMenu, onFeatureClick, onOpenMenu }) {
  return (
    <section className="relative h-full w-full flex flex-col justify-between overflow-hidden bg-[#080706]">
      {/* 
        Background Image container 
        Preserves original banquet composition:
        Buffet with golden chafing dishes, marble table, florals & ambient chandeliers on the right.
        Darkened left area with subtle left-to-right gradient for typography clarity.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-right lg:bg-[center_right] z-0"
        style={{ 
          backgroundImage: "url('assets/hero-bg.jpg'), url('/assets/hero-bg.jpg')",
          backgroundPosition: 'right 30% center'
        }}
      >
        {/* Dark Left-to-Right Gradient Overlay for readability while revealing buffet */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070605] via-[#080706]/92 sm:via-[#080706]/85 md:via-[#080706]/70 to-transparent lg:w-[75%]" />
        
        {/* Soft overall darkening vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-black/60" />
        
        {/* Subtle radial warmth on bottom right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area - Strict Single Screen Height */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-24 lg:pt-26 pb-4 sm:pb-6 flex-1 flex flex-col justify-between h-full min-h-0">
        
        {/* Hero Left-Aligned Content */}
        <div className="max-w-2xl lg:max-w-3xl flex-1 flex flex-col justify-center py-1 sm:py-2">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 backdrop-blur-sm mb-2 sm:mb-3 w-fit animate-fadeIn">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] -ml-2.5" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#ECC870]">
              PREMIUM CATERING SERVICES
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-2 sm:mb-3 drop-shadow-lg">
            <span className="text-[#FDFBF7] block">Nashwan</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5CE] via-[#ECC870] to-[#C5A059] block">
              Catering
            </span>
          </h1>

          {/* Description */}
          <p className="text-neutral-200/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mb-4 sm:mb-6 font-sans">
            Delicious food, elegant presentation, and seamless service for every celebration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Button 1: Book Your Event */}
            <button 
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Book Your Event</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Button 2: Custom Menu */}
            <button 
              onClick={onOpenCustomMenu}
              className="group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#FDFBF7] bg-[#0C0B0A]/60 hover:bg-[#D4AF37]/15 border border-[#ECC870]/70 hover:border-[#ECC870] backdrop-blur-md transition-all duration-300"
            >
              <div className="w-4 h-4 rounded-full border border-[#ECC870] flex items-center justify-center text-[#ECC870] group-hover:rotate-45 transition-transform duration-300">
                <Sparkles className="w-2 h-2" />
              </div>
              <span>Custom Menu</span>
            </button>
          </div>

          {/* Service Highlights */}
          <div className="w-full">
            <ServiceHighlights onFeatureClick={onFeatureClick} />
          </div>

        </div>

        {/* Bottom Section: Statistics Panel at bottom-left */}
        <div className="pt-2 sm:pt-3">
          <StatsPanel />
        </div>

      </div>

    </section>
  );
}
