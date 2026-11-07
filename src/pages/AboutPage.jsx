import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage({ onNavigate, onOpenBooking }) {
  const pillars = [
    {
      title: 'AUTHENTICITY',
      tag: 'Heritage First',
      desc: "Honouring traditional tastes and Hyderabad's culinary heritage with time-tested recipes and genuine whole spices.",
      icon: Award
    },
    {
      title: 'QUALITY',
      tag: 'Finest Ingredients',
      desc: 'Selecting ingredients with freshness, flavour, and uncompromising consistency in mind.',
      icon: Sparkles
    },
    {
      title: 'HYGIENE',
      tag: '5-Star Sanitation',
      desc: 'Maintaining careful food preparation, sanitized temperature-controlled storage, and spotless service practices.',
      icon: ShieldCheck
    },
    {
      title: 'PRESENTATION',
      tag: 'Visual Splendour',
      desc: 'Because exceptional food should delight the eyes with golden chafing displays and floral artistry before the first bite.',
      icon: Utensils
    },
    {
      title: 'HOSPITALITY',
      tag: 'Heartfelt Care',
      desc: 'Serving every single guest with warmth, gracious professionalism, and genuine Nizami courtesy.',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-[#080706] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28">
      
      {/* Hero Banner for About Us */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-[#8C6D37]/30 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/95 to-[#080706]/70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#8C6D37]/40 bg-[#D4AF37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A947]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E5A947]">
              OUR STORY & PHILOSOPHY
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-white mb-4">
            Born in Hyderabad. <br />
            <span className="italic text-[#E5A947]">Inspired by Tradition. Driven by Taste.</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Nashwan Caterings began in 2023 with a passion for bringing together exceptional food and genuine hospitality. Our philosophy is built around a simple belief: <strong className="text-white">food is not merely part of an event. It is often the heart of the celebration.</strong>
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <div className="inline-block border-l-2 border-[#E5A947] pl-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                More Than Food. <span className="italic text-[#E5A947]">An Experience to Remember.</span>
              </h2>
            </div>
            
            <p>
              At Nashwan Caterings, every celebration has a story, and we believe the food should be one of its most memorable chapters.
            </p>
            <p>
              We take inspiration from Hyderabad's incredible food culture while also embracing flavours from across India and contemporary cuisine. Our chefs thoughtfully curate menus ranging from traditional authentic flavours to modern culinary creations, using carefully selected ingredients and balanced spices.
            </p>
            <p>
              Whether we are serving a small private gathering or catering a grand royal wedding, we approach every event with the same obsessive attention to detail: <strong className="text-white">we listen to your ideas, understand your preferences, and create a menu that complements your celebration.</strong>
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button 
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-all"
              >
                <span>Plan Your Celebration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#8C6D37] text-white hover:bg-white/5 text-xs font-semibold tracking-wider uppercase transition-all"
              >
                Explore Menus
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#8C6D37]/40 shadow-2xl group">
            <img 
              src="assets/hero-bg.jpg" 
              alt="Nashwan Catering Banquet Display" 
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#E5A947]">Authentic Nizam Hospitality</span>
              <h3 className="font-serif text-xl text-white mt-1">Where Hyderabad's Culinary Heritage Meets Contemporary Elegance</h3>
            </div>
          </div>

        </div>
      </section>

      {/* The Five Pillars Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-[#0E0C0A] border-y border-[#8C6D37]/30">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E5A947] font-semibold">Our Guiding Values</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">Our Five Pillars</h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              The foundational standards that ensure perfection on every plate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#14120F] border border-[#8C6D37]/30 hover:border-[#E5A947] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E5A947]/15 border border-[#8C6D37]/40 flex items-center justify-center text-[#E5A947] mb-3 group-hover:bg-[#E5A947] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#E5A947] font-semibold block mb-1">
                      {pillar.tag}
                    </span>
                    <h3 className="font-serif text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Corporate & General Brand Narrative Cards */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-2xl bg-[#120F0D] border border-[#8C6D37]/35 relative overflow-hidden">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E5A947] block mb-2">Celebrations & Weddings</span>
            <h3 className="font-serif text-2xl text-white mb-3">Rooted in Hyderabad. Crafted with Passion. Served with Heart.</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              Inspired by Hyderabad's rich culinary heritage, we blend authentic recipes and traditional spices with fresh ingredients, hygienic preparation, and elegant modern presentation. Every menu is thoughtfully crafted to honour timeless flavours while creating a dining experience that feels special and memorable.
            </p>
            <div className="text-xs text-[#E5A947] italic">
              "Because for us, catering is more than serving food. It is about creating moments that bring people together."
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#120F0D] border border-[#8C6D37]/35 relative overflow-hidden">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E5A947] block mb-2">Distinguished Corporate Banquets</span>
            <h3 className="font-serif text-2xl text-white mb-3">A Celebration of Taste. A Tradition of Elegance.</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              Whether it is an executive summit, employee recognition gala, or prestigious conference, our culinary approach honours traditional recipes while embracing contemporary creativity and sophisticated presentation with discreet, white-glove corporate protocol.
            </p>
            <div className="text-xs text-[#E5A947] italic">
              "We transform flavours into experiences, celebrations into cherished memories, and hospitality into an art."
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
