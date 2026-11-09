import React from 'react';

export default function HomeServicesSection({ onNavigate, onOpenBooking, onOpenCustomMenu }) {
  
  const whyChoosePillars = [
    {
      title: 'Authentic Taste',
      desc: 'Traditional & premium recipes',
      icon: (
        // Chef Hat icon
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      )
    },
    {
      title: 'Custom Menus',
      desc: 'Tailored for every occasion',
      icon: (
        // Diamond icon
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M2 9h20M10 3l-2 6 4 12 4-12-2-6" />
        </svg>
      )
    },
    {
      title: 'Professional Service',
      desc: 'Experienced & courteous team',
      icon: (
        // People team icon
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Hygienic & Reliable',
      desc: 'Quality, safety and on-time service',
      icon: (
        // Shield checkmark icon
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  const specializedServices = [
    {
      id: 'buffet',
      title: 'Buffet Catering',
      desc: 'A wide variety of delicious, freshly prepared dishes.',
      image: 'assets/home/service_buffet.jpg',
      icon: (
        // Cloche / Food Lid
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 4v2M4 18h16a1 1 0 0 0 1-1A9 9 0 0 0 3 17a1 1 0 0 0 1 1z" />
          <circle cx="12" cy="4" r="1" fill="#ECC870" />
        </svg>
      )
    },
    {
      id: 'live_counters',
      title: 'Live Counters',
      desc: 'Interactive food stations for a delightful experience.',
      image: 'assets/home/service_live_counters.jpg',
      icon: (
        // Chef Hat
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      )
    },
    {
      id: 'custom_menus',
      title: 'Custom Menus',
      desc: 'Curated menu options tailored to your event.',
      image: 'assets/home/service_custom_menus.jpg',
      icon: (
        // Fork & Knife
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M18 2v20M2 2v8a4 4 0 0 0 4 4v8M6 2v6" />
        </svg>
      )
    },
    {
      id: 'event_support',
      title: 'Event Support',
      desc: 'Complete planning and on-site coordination.',
      image: 'assets/home/service_event_support.jpg',
      icon: (
        // People team
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full relative z-20">
      
      {/* =========================================================================
          SECTION 1: WHY CHOOSE NASHWAN CATERINGS? (EXACT Image 1 Bottom)
          Featuring curved gold wave trim, steaming Biryani Handi, 4 pillars, Charminar
      ========================================================================= */}
      <section className="relative w-full bg-[#01142B] text-white overflow-hidden">
        
        {/* Curved Golden Ribbon Wave Divider at Top - Sleek S-Curve matching Reference */}
        <div className="w-full overflow-hidden leading-none -mt-1 relative z-10">
          <svg 
            className="w-full h-8 sm:h-10 md:h-12 block" 
            viewBox="0 0 1440 90" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldRibbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DCA942" />
                <stop offset="20%" stopColor="#F7DF94" />
                <stop offset="45%" stopColor="#C99B35" />
                <stop offset="70%" stopColor="#FAE6A2" />
                <stop offset="85%" stopColor="#F3D37D" />
                <stop offset="100%" stopColor="#D4A43D" />
              </linearGradient>
            </defs>
            {/* Top Ivory Fill matching MenuPricingSection / CelebrationSection above */}
            <path 
              d="M 0,0 L 1440,0 L 1440,18 C 1100,8 800,10 520,52 C 300,85 160,85 0,45 Z" 
              fill="#FAF8F5" 
            />
            {/* Midnight Navy Fill below S-Curve */}
            <path 
              d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" 
              fill="#01142B" 
            />
            {/* Shimmering Gold S-Curve Ribbon Trim */}
            <path 
              d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" 
              stroke="url(#goldRibbonGradient)" 
              strokeWidth="4" 
              fill="none" 
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-10 relative">
          
          {/* Main Title: Why Choose Nashwan Caterings? (Section Heading: Cormorant Garamond 500) */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight">
              Why Choose <span className="font-cormorant italic text-[#ECC870]">Nashwan Caterings?</span>
            </h2>
          </div>

          {/* Section Content: Left Handi + 4 Feature Columns + Right Charminar - Tight & Balanced Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-10">
            
            {/* Left: Steaming Biryani Copper Handi */}
            <div className="shrink-0 flex justify-center">
              <img 
                src="assets/home/biryani_handi.jpg" 
                alt="Hyderabadi Dum Biryani" 
                className="w-56 sm:w-64 md:w-72 lg:w-[280px] xl:w-[320px] max-w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Center: 4 Feature Pillars with Gold Circles & Separator Lines */}
            <div className="w-full lg:flex-1 max-w-2xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#ECC870]/25 gap-y-4 sm:gap-y-0 py-1">
              {whyChoosePillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2 sm:px-3 pt-3 sm:pt-0">
                  {/* Gold Circle Badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#ECC870] bg-[#0B1E38] flex items-center justify-center mb-2 shadow-md">
                    {pillar.icon}
                  </div>
                  {/* Title (Cormorant Garamond 500) */}
                  <h3 className="font-cormorant text-white text-sm sm:text-base font-medium mb-1 tracking-tight">
                    {pillar.title}
                  </h3>
                  {/* Subtitle (Lato 400) */}
                  <p className="font-lato text-neutral-300 text-[11px] sm:text-xs font-normal leading-snug max-w-[130px]">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Iconic Charminar Gold Line-Art Illustration (Enlarged) */}
            <div className="shrink-0 hidden md:flex items-center justify-center">
              <img 
                src="assets/home/charminar_gold.jpg" 
                alt="Charminar Heritage" 
                className="w-36 md:w-44 lg:w-48 xl:w-56 h-auto object-contain opacity-95 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
              />
            </div>

          </div>

        </div>

        {/* S-Curve Divider: Midnight Navy to Warm Luxury Ivory */}
        <div className="w-full overflow-hidden leading-none relative z-10 -mb-[1px]">
          <svg 
            className="w-full h-8 sm:h-10 md:h-12 block" 
            viewBox="0 0 1440 90" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 0,0 L 1440,0 L 1440,18 C 1100,8 800,10 520,52 C 300,85 160,85 0,45 Z" 
              fill="#01142B" 
            />
            <path 
              d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" 
              fill="#FAF8F5" 
            />
            <path 
              d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" 
              stroke="url(#goldRibbonGradient)" 
              strokeWidth="5" 
              fill="none" 
            />
          </svg>
        </div>

      </section>


      {/* =========================================================================
          SECTION 2: COMPLETE CATERING SOLUTIONS (EXACT Image 2 Top)
          Ivory background with gold floral filigree watermarks, 4 service cards
      ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] overflow-hidden">
        
        {/* Delicate Gold Watermark Illustrations */}
        <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 opacity-20 pointer-events-none z-0">
          <svg viewBox="0 0 100 100" fill="none" stroke="#ECC870" strokeWidth="0.8">
            <path d="M5 95 Q 30 20, 80 5" />
            <path d="M30 45 Q 45 30, 65 35" />
            <path d="M45 30 Q 55 15, 75 20" />
            <circle cx="65" cy="35" r="2" fill="#ECC870" />
            <circle cx="75" cy="20" r="2" fill="#ECC870" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-52 sm:w-72 h-52 sm:h-72 opacity-20 pointer-events-none z-0 scale-x-[-1]">
          <svg viewBox="0 0 100 100" fill="none" stroke="#ECC870" strokeWidth="0.8">
            <path d="M5 95 Q 30 20, 80 5" />
            <path d="M30 45 Q 45 30, 65 35" />
            <path d="M45 30 Q 55 15, 75 20" />
            <circle cx="65" cy="35" r="2" fill="#ECC870" />
            <circle cx="75" cy="20" r="2" fill="#ECC870" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1700px] mx-auto w-full">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            
            {/* Eyebrow: — OUR SPECIALIZED SERVICES — (Small Label: Montserrat 500) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="w-12 sm:w-20 md:w-24 h-[1px] bg-[#ECC870]/80 inline-block" />
              <span className="font-montserrat text-[11px] sm:text-xs font-medium tracking-[0.28em] uppercase text-[#ECC870]">
                OUR SPECIALIZED SERVICES
              </span>
              <span className="w-12 sm:w-20 md:w-24 h-[1px] bg-[#ECC870]/80 inline-block" />
            </div>

            {/* Main Heading: Complete Catering Solutions for Every Occasion (Section Heading: Cormorant Garamond 500) */}
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-[#0B1E38] leading-[1.18]">
              Complete Catering Solutions <br />
              <span className="font-cormorant font-medium">for </span>
              <span className="font-cormorant italic text-[#ECC870] font-medium">Every Occasion</span>
            </h2>

            {/* Subtitle (Body: Lato 400) */}
            <p className="text-neutral-600 font-lato text-sm sm:text-base md:text-[17px] font-normal leading-relaxed mt-3 sm:mt-4 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we offer end-to-end catering services with customized menus, seamless execution and exceptional taste.
            </p>

          </div>

          {/* 4 Specialized Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
            {specializedServices.map((srv) => (
              <div 
                key={srv.id}
                onClick={() => onNavigate ? onNavigate('custom') : null}
                className="group relative rounded-[16px] sm:rounded-[18px] overflow-hidden bg-white border border-[#ECC870] cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(236,200,112,0.35)]"
              >
                
                {/* Photo Top Portion */}
                <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-[#F3EFEA]">
                  <img 
                    src={srv.image} 
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out" 
                  />
                </div>

                {/* Overlapping Circular Badge */}
                <div className="relative z-10 flex flex-col items-center -mt-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#ECC870] bg-[#041A3B] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                    {srv.icon}
                  </div>

                  {/* Body Content */}
                  <div className="pt-3 pb-6 px-4 text-center w-full">
                    {/* Menu / Service Heading: Cormorant Garamond 500 */}
                    <h3 className="font-cormorant text-[#0B1E38] text-lg sm:text-xl font-medium mb-1.5 group-hover:text-[#2BA4EE] transition-colors">
                      {srv.title}
                    </h3>
                    {/* Description: Lato 400 */}
                    <p className="font-lato text-neutral-600 text-xs sm:text-[13px] font-normal leading-relaxed max-w-[240px] mx-auto">
                      {srv.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>


      {/* =========================================================================
          SECTION 3: PLAN YOUR NEXT EVENT WITH US (EXACT Image 2 Bottom)
          Curved wave divider, calendar badge, "Plan Your Next Event with Us",
          "Get a Custom Quote →" button, Charminar watermark
      ========================================================================= */}
      <section className="relative w-full bg-[#01142B] text-white overflow-hidden">
        
        {/* Curved Golden Ribbon Wave Divider - S-Curve matching Image 1 */}
        <div className="w-full overflow-hidden leading-none -mt-1 relative z-10">
          <svg 
            className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block" 
            viewBox="0 0 1440 90" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldRibbonGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DCA942" />
                <stop offset="20%" stopColor="#F7DF94" />
                <stop offset="45%" stopColor="#C99B35" />
                <stop offset="70%" stopColor="#FAE6A2" />
                <stop offset="85%" stopColor="#F3D37D" />
                <stop offset="100%" stopColor="#D4A43D" />
              </linearGradient>
            </defs>
            <path 
              d="M 0,0 L 1440,0 L 1440,18 C 1100,8 800,10 520,52 C 300,85 160,85 0,45 Z" 
              fill="#FAF8F5" 
            />
            <path 
              d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" 
              fill="#01142B" 
            />
            <path 
              d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" 
              stroke="url(#goldRibbonGradient3)" 
              strokeWidth="5" 
              fill="none" 
            />
          </svg>
        </div>

        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10 sm:pb-14 relative">
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left/Center: Calendar Badge + Event Planning Copy */}
            <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
              
              {/* Gold Circular Calendar Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#ECC870] bg-[#0B1E38] flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>

              {/* Headings (Section Heading: Cormorant Garamond 500) */}
              <div className="shrink-0">
                <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-tight whitespace-nowrap">
                  Plan Your <span className="font-cormorant italic text-[#ECC870] font-medium">Next Event</span> with Us
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm mt-1 font-lato font-normal whitespace-normal sm:whitespace-nowrap">
                  Tell us about your event and get a customized catering plan.
                </p>
              </div>

            </div>

            {/* Vertical Gold Divider Line */}
            <div className="hidden lg:block h-14 w-[1px] bg-[#ECC870]/40 shrink-0" />

            {/* Right: "Get a Custom Quote →" Button & Enlarged Charminar */}
            <div className="flex items-center gap-5 sm:gap-7 shrink-0">

              {/* Get a Custom Quote Button (Button: Montserrat 500) */}
              <button 
                onClick={onOpenBooking}
                className="font-montserrat inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-black bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] shadow-[0_6px_24px_rgba(237,168,61,0.4)] hover:shadow-[0_8px_32px_rgba(237,168,61,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Get a Custom Quote</span>
                <span className="text-base leading-none">→</span>
              </button>

              {/* Enlarged Charminar Illustration */}
              <div className="shrink-0 flex items-center justify-center">
                <img 
                  src="assets/home/charminar_gold.jpg" 
                  alt="Charminar Heritage" 
                  className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto object-contain opacity-95 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
