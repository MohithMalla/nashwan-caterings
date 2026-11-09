import React from 'react';

export default function Hero({ onOpenBooking, onOpenCustomMenu, onOpenMenu }) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#01142B]">
      {/* 
        Background Banquet Image:
        Deep royal blue banquet ambience with floral arrangement (lilies & hydrangeas),
        glistening roll-top chafing dishes with menu tent cards, and candle chandeliers.
        Dark left side with gentle gradient overlay for perfect readability.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('assets/hero-bg.jpg'), url('/assets/hero-bg.jpg')",
          backgroundPosition: 'right 20% center'
        }}
      >
        {/* Deep Midnight Blue Left-to-Right Gradient Overlay matching reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011227] via-[#01142B]/90 sm:via-[#01142B]/80 md:via-[#01142B]/60 to-transparent lg:w-[68%]" />
        
        {/* Soft bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#011227]/80 via-transparent to-transparent" />
      </div>

      {/* Main Content Area - Full screen single-viewport container */}
      <div className="relative z-10 max-w-[1700px] mx-auto w-full px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12 flex-1 flex flex-col justify-between h-full min-h-0">
        
        {/* Hero Left Content */}
        <div className="max-w-2xl lg:max-w-3xl flex-1 flex flex-col justify-center">
          
          {/* Eyebrow with horizontal line */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="font-montserrat text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-[#ECC870]">
              PREMIUM CATERING SERVICES
            </span>
            <span className="w-12 h-[1px] bg-[#ECC870]/70 inline-block" />
          </div>

          {/* Main Heading (Hero Heading: Cormorant Garamond 400) */}
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal tracking-tight leading-[1.12] mb-5 sm:mb-6">
            <span className="text-white block font-cormorant font-normal">
              The Taste of Hyderabad,
            </span>
            <span className="text-white block font-cormorant font-normal">
              Crafted for Your Celebration.
            </span>
          </h1>

          {/* Description (Body Text: Lato 400) */}
          <p className="font-lato text-neutral-300 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-xl mb-8">
            Authentic flavours, traditional recipes and heartfelt hospitality for weddings, family gatherings, birthdays and corporate events.
          </p>

          {/* Action CTA Buttons (Buttons: Montserrat 500) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
            {/* Button 1: EXPLORE OUR MENU (Solid Gold Filled Rectangle) */}
            <button 
              onClick={onOpenMenu}
              className="font-montserrat px-8 py-3.5 rounded-[2px] text-xs sm:text-[13px] font-medium text-[#0B1E38] bg-[#ECC870] hover:bg-[#F3D68A] shadow-[0_4px_20px_rgba(236,200,112,0.3)] hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.18em] transition-all duration-200"
            >
              EXPLORE OUR MENU
            </button>

            {/* Button 2: PLAN YOUR CELEBRATION (Gold Outlined Rectangle) */}
            <button 
              onClick={onOpenBooking}
              className="font-montserrat px-8 py-3.5 rounded-[2px] text-xs sm:text-[13px] font-medium text-white bg-[#0B1E38]/60 hover:bg-[#ECC870]/10 border border-[#ECC870]/80 hover:border-[#ECC870] uppercase tracking-[0.18em] transition-all duration-200"
            >
              PLAN YOUR CELEBRATION
            </button>
          </div>

          {/* Bottom Left Statistics Badge: SINCE 2023 • 300+ CLIENTS SERVED (Small Label: Montserrat 500) */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-[2px] border border-[#ECC870]/40 bg-[#0B1E38]/60 backdrop-blur-md shadow-lg">
              <span className="font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.22em] text-[#ECC870] uppercase">
                SINCE 2023 • 300+ CLIENTS SERVED
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
