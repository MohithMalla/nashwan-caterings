import React from 'react';
import { Utensils, Calendar } from 'lucide-react';
import StatsPanel from './StatsPanel';

export default function Hero({ onOpenBooking, onOpenCustomMenu, onOpenMenu }) {
  return (
    <section className="relative h-full w-full flex flex-col justify-between overflow-hidden bg-[#080706]">
      {/* 
        Background Banquet Image:
        Preserves original buffet composition:
        Golden roll-top chafing dishes, underlit marble counter, candle lanterns, floral urns on the right.
        Dark left side with gentle gradient overlay for perfect readability.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('assets/hero-bg.jpg'), url('/assets/hero-bg.jpg')",
          backgroundPosition: 'right 25% center'
        }}
      >
        {/* Dark Left-to-Right Gradient Overlay matching reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070605] via-[#080706]/90 sm:via-[#080706]/80 md:via-[#080706]/65 to-transparent lg:w-[70%]" />
        
        {/* Soft bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/70 via-transparent to-black/40" />
      </div>

      {/* Main Content Area - Full screen single-viewport container */}
      <div className="relative z-10 max-w-[1700px] mx-auto w-full px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 flex-1 flex flex-col justify-between h-full min-h-0">
        
        {/* Hero Left Content */}
        <div className="max-w-2xl lg:max-w-3xl flex-1 flex flex-col justify-center">
          
          {/* Eyebrow with horizontal line */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D2C8B8]">
              PREMIUM CATERING SERVICES
            </span>
            <span className="w-10 sm:w-12 h-[1px] bg-[#8C6D37]/70 inline-block" />
          </div>

          {/* Main Heading (Matching reference typography & colors) */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight leading-[1.12] mb-4 sm:mb-5">
            <span className="text-white block">
              The Taste of Hyderabad,
            </span>
            <span className="italic text-[#E5A947] block font-serif font-normal">
              Crafted for Your Celebration
            </span>
          </h1>

          {/* Description */}
          <p className="text-neutral-300 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-xl mb-7 sm:mb-8 font-sans">
            Authentic flavours, traditional recipes and heartfelt hospitality for weddings, family gatherings, birthdays and corporate events.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Button 1: Explore Our Menu */}
            <button 
              onClick={onOpenMenu}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] shadow-[0_4px_20px_rgba(237,168,61,0.35)] hover:shadow-[0_6px_25px_rgba(237,168,61,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Utensils className="w-4 h-4 text-black stroke-[2.2]" />
              <span>Explore Our Menu</span>
            </button>

            {/* Button 2: Plan Your Celebration */}
            <button 
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-black/40 hover:bg-[#EDA83D]/10 border border-[#8C6D37]/80 hover:border-[#E5A947] backdrop-blur-md transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-white stroke-[1.8]" />
              <span>Plan Your Celebration</span>
            </button>
          </div>

        </div>

        {/* Bottom Left Statistics Card */}
        <div className="pt-4">
          <StatsPanel />
        </div>

      </div>

    </section>
  );
}
