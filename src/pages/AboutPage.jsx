import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, Utensils, CheckCircle2, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage({ onNavigate, onOpenBooking }) {
  const pillars = [
    {
      title: 'AUTHENTICITY',
      tag: 'Heritage First',
      desc: "Honouring traditional tastes and Hyderabad's culinary heritage with time-tested recipes and genuine whole spices.",
      icon: (
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: 'QUALITY',
      tag: 'Finest Ingredients',
      desc: 'Selecting ingredients with freshness, flavour, aged basmati rice, pure desi ghee and uncompromising consistency.',
      icon: (
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M2 9h20M10 3l-2 6 4 12 4-12-2-6" />
        </svg>
      )
    },
    {
      title: 'HYGIENE',
      tag: '5-Star Sanitation',
      desc: 'Maintaining careful food preparation, sanitized temperature-controlled storage, and spotless service practices.',
      icon: (
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'PRESENTATION',
      tag: 'Visual Splendour',
      desc: 'Delighting the eyes with roll-top golden chafing displays, underlit marble banquets and floral artistry before the first bite.',
      icon: (
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 4v2M4 18h16a1 1 0 0 0 1-1A9 9 0 0 0 3 17a1 1 0 0 0 1 1z" />
        </svg>
      )
    },
    {
      title: 'HOSPITALITY',
      tag: 'Heartfelt Care',
      desc: 'Serving every single guest with warmth, gracious professionalism, and genuine Nizami courtesy.',
      icon: (
        <svg className="w-6 h-6 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28">
      
      {/* Hero Banner for About Us */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#01142B]">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-30 pointer-events-none"
          style={{ 
            backgroundImage: "url('assets/hero-bg.jpg')",
            backgroundPosition: 'right 20% center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011227] via-[#01142B]/95 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center sm:text-left">
          
          {/* Eyebrow */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#ECC870]">
              OUR STORY & PHILOSOPHY
            </span>
            <span className="w-12 h-[1px] bg-[#ECC870]/70 inline-block" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-white mb-4">
            Born in Hyderabad. <br />
            <span className="font-serif italic text-[#ECC870]">Inspired by Tradition. Driven by Taste.</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Nashwan Caterings began in 2023 with a passion for bringing together exceptional food and genuine hospitality. Our philosophy is built around a simple belief: <strong className="text-white">food is not merely part of an event. It is often the heart of the celebration.</strong>
          </p>

        </div>
      </section>

      {/* S-Curve Wave Divider into Ivory Story Section */}
      <div className="relative w-full h-[46px] sm:h-[62px] md:h-[76px] overflow-hidden leading-none z-10 -mt-[1px]">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full block" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A034" />
              <stop offset="25%" stopColor="#ECC870" />
              <stop offset="50%" stopColor="#FFF3CA" />
              <stop offset="75%" stopColor="#DFB251" />
              <stop offset="100%" stopColor="#C9932B" />
            </linearGradient>
          </defs>
          <path 
            d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" 
            fill="#FAF8F5" 
          />
          <path 
            d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" 
            stroke="url(#aboutGoldRibbon)" 
            strokeWidth="3.2" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Main Story Section (Luxury Warm Ivory) */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#0B1E38] w-full">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            <div className="space-y-5 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4AF37] block">
                Bespoke Banqueting
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#0B1E38] font-normal leading-tight">
                More Than Food. <br />
                <span className="italic text-[#2BA4EE]">An Experience to Remember.</span>
              </h2>
              <p>
                At Nashwan Caterings, every celebration has a story, and we believe the food should be one of its most memorable chapters.
              </p>
              <p>
                Our master chefs thoughtfully curate menus ranging from traditional Hyderabadi flavours to modern culinary creations, using carefully selected spices, aged basmati and slow-cooked degh traditions.
              </p>
              <p>
                Whether serving a small private gathering or catering a grand royal wedding for 2,000+ guests, we listen to your ideas and execute with flawless timing and impeccable presentation.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={onOpenBooking}
                  className="px-7 py-3 rounded-[2px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  Plan Your Event
                </button>
                <button 
                  onClick={() => onNavigate('menu')}
                  className="px-7 py-3 rounded-[2px] border border-[#ECC870] text-[#0B1E38] hover:bg-neutral-100 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Explore Menus →
                </button>
              </div>
            </div>

            {/* Framed Photography */}
            <div className="rounded-[18px] p-2 bg-gradient-to-b from-[#ECC870]/70 via-[#ECC870]/30 to-[#ECC870]/60 shadow-xl">
              <div className="relative rounded-[14px] overflow-hidden bg-black h-80 sm:h-96">
                <img 
                  src="assets/hero-bg.jpg" 
                  alt="Nashwan Catering Banquet" 
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: '85% 35%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-widest uppercase text-[#ECC870] font-bold block mb-1">
                    Signature Banqueting
                  </span>
                  <p className="font-serif text-lg font-medium text-white">
                    Royal Chafing Dishes & Underlit Marble Buffets
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* S-Curve Wave Divider into Royal Midnight Blue Pillars Section */}
      <div className="w-full overflow-hidden leading-none -mt-1 bg-[#FAF8F5] relative z-10">
        <svg className="w-full h-10 sm:h-14 md:h-18 block" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" fill="#01142B" />
          <path d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" stroke="#ECC870" strokeWidth="5" fill="none" />
        </svg>
      </div>

      {/* Five Pillars Section (Royal Midnight Navy) */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#01142B] text-white w-full">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#ECC870] block mb-2">
              OUR CORE VALUES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              The Five Pillars of <span className="italic text-[#ECC870]">Nashwan</span>
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm mt-2">
              Every banquet we curate is measured against these foundational standards of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pillars.map((pillar, i) => (
              <div 
                key={i}
                className="p-6 rounded-[16px] bg-[#03152E] border border-[#ECC870]/60 hover:border-[#ECC870] transition-all duration-300 flex flex-col items-center text-center shadow-lg group hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-full border border-[#ECC870] bg-[#01142B] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <div className="font-serif text-white font-bold text-sm tracking-wide mb-1 group-hover:text-[#ECC870] transition-colors">
                  {pillar.title}
                </div>
                <div className="text-[10px] text-[#2BA4EE] font-semibold uppercase tracking-wider mb-2">
                  {pillar.tag}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
