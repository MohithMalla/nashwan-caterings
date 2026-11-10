import React from 'react';
import { 
  Users, 
  Sparkles, 
  ChefHat, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  UtensilsCrossed, 
  Calendar,
  Phone
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ServicesPage({ onNavigate, onOpenBooking }) {
  const services = [
    {
      id: 'wedding-catering',
      title: 'Wedding Catering',
      tagline: 'ROYAL CELEBRATIONS • 200 TO 3000+ GUESTS',
      image: 'assets/occasions/wedding.jpg',
      badge: 'Signature Banqueting',
      desc: 'Extravagant royal wedding banquets, Nikah feasts, Valima receptions, and vibrant Sangeet celebrations. We craft unforgettable culinary memories with authentic slow-cooked degh biryanis, royal chafing setups, and silver-grade table service.',
      highlights: [
        'Slow-cooked firewood Degh Zafrani Mutton Dum Biryani',
        'Traditional Hyderabadi Dastarkhwan or Royal Buffet setup',
        'Live charcoal tandoor, pathar ka gosht & kebab stations',
        'Experienced uniformed captains, stewards & table attendants',
        'Complete setup with roll-top golden chafing dishes & fine cutlery'
      ],
      idealFor: 'Weddings, Nikah, Valima, Sangeet & Grand Receptions'
    },
    {
      id: 'premium-buffet-services',
      title: 'Premium Buffet Services',
      tagline: 'FIVE-STAR VISUAL SPLENDOUR & LIVE STATIONS',
      image: 'assets/home/service_buffet.jpg',
      badge: 'Underlit Marble Buffets',
      desc: 'A breathtaking banquet presentation featuring roll-top golden chafing dishes, underlit marble display counters, and artistic floral decor. Designed for seamless guest circulation while maintaining optimal culinary temperatures from first serving to last.',
      highlights: [
        'Luxury brass & golden chafers with warm candlelight glow',
        'Multi-cuisine spreads: Hyderabadi, North Indian, Chinese & Continental',
        'Interactive live cooking counters: Dosas, Chaats, Pastas, Biryani',
        'Hygienic sneeze guards & temperature-controlled food presentation',
        'Dedicated counter attendants ensuring continuous replenishment'
      ],
      idealFor: 'Celebratory Banquets, Engagements & Milestone Gatherings'
    },
    {
      id: 'corporate-events',
      title: 'Corporate Events',
      tagline: 'EXECUTIVE CONFERENCES, SUMMITS & ANNUAL GALAS',
      image: 'assets/occasions/corporate.jpg',
      badge: 'Executive Precision',
      desc: 'Flawless corporate catering with military punctuality, elegant executive spreads, and discrete hospitality. Ideal for board luncheons, corporate summits, product launches, annual galas, and multinational festive dinners.',
      highlights: [
        'Punctual on-site setup 60 minutes prior to delegate arrival',
        'Balanced menus: healthy salads, high-protein mains & light desserts',
        'Express buffet flow designed for tight corporate itineraries',
        'Clear vegetarian, non-veg, and dietary preference segregation',
        'Formal corporate invoicing, GST compliance & dedicated account manager'
      ],
      idealFor: 'Corporate Summits, Annual Days, Board Lunches & Team Galas'
    },
    {
      id: 'house-parties',
      title: 'House Parties & Private Gatherings',
      tagline: 'INTIMATE HOSPITALITY • 30 TO 150 GUESTS',
      image: 'assets/occasions/house_party.jpg',
      badge: 'Personalized Care',
      desc: 'Enjoy your own celebration as a relaxed host. Whether it is an intimate birthday feast, housewarming (Griha Pravesh), anniversary dinner, or private family get-together, our team delivers mouth-watering cuisine and attentive service directly to your venue or home.',
      highlights: [
        'Tailored menu curation matching your family taste traditions',
        'Compact and space-efficient luxury chafing buffet setups',
        'Professional service staff taking care of food serving & beverage pours',
        'Complete end-to-end service with spotless post-event cleanup',
        'Freshly prepared in our FSSAI-registered commercial kitchen'
      ],
      idealFor: 'Birthdays, Anniversaries, Housewarmings & Festive Dinners'
    }
  ];

  const standards = [
    {
      icon: <ChefHat className="w-6 h-6 text-[#ECC870]" />,
      title: 'Master Degh Ustaads',
      desc: 'Decades of authentic culinary heritage preparing royal Hyderabadi recipes with slow-cooked firewood deghs.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#ECC870]" />,
      title: 'ISO & FSSAI Certified',
      desc: 'FSSAI Reg. 23624031003794 and ISO 9001:2015 & 22000:2018 certified processes ensuring uncompromised food safety.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ECC870]" />,
      title: '100% Halal Operations',
      desc: 'Strict halal sourcing, authentic spices, aged basmati rice, and pure desi ghee without artificial preservatives.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#ECC870]" />,
      title: '30-Minute Custom Quotes',
      desc: 'Fast, transparent catering quotes and bespoke menu consultations via WhatsApp and direct call.'
    }
  ];

  return (
    <div className="bg-[#01142B] text-[#FDFBF7] min-h-screen flex flex-col font-sans selection:bg-[#ECC870]/30">
      
      {/* Hero Banner with Dark Blue & Gold Elegance */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#010E1E] via-[#01142B] to-[#021A38] border-b border-[#ECC870]/20 text-center overflow-hidden">
        {/* Subtle patterned backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-20 pointer-events-none" 
          style={{ backgroundImage: "url('assets/hero-bg.jpg')", backgroundPosition: 'center 30%' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010E1E]/90 via-[#01142B]/95 to-[#021A38] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECC870]/10 border border-[#ECC870]/30 text-[#ECC870] text-xs font-montserrat uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BESPOKE EVENT SERVICES</span>
          </div>
          
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
            Our Specialized <span className="italic text-[#ECC870]">Catering Services</span>
          </h1>
          
          <p className="font-lato text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From regal wedding banquets to executive corporate summits and private family gatherings, 
            Nashwan Caterings combines authentic Hyderabadi culinary heritage with five-star hospitality.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="font-montserrat px-8 py-3.5 rounded-[2px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_4px_20px_rgba(236,200,112,0.3)] hover:scale-[1.02]"
            >
              GET A CUSTOM QUOTE
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="font-montserrat px-7 py-3.5 rounded-[2px] border border-[#ECC870]/70 hover:border-[#ECC870] text-[#ECC870] hover:text-white hover:bg-[#ECC870]/10 font-semibold text-xs uppercase tracking-wider transition-all duration-200"
            >
              EXPLORE CURATED MENUS
            </button>
          </div>
        </div>
      </section>

      {/* S-Curve Ribbon Divider */}
      <div className="w-full overflow-hidden leading-none -mt-1 bg-[#021A38]">
        <svg className="w-full h-8 sm:h-12 md:h-14 block" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" fill="#FAF8F5" />
          <path d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" stroke="#ECC870" strokeWidth="4" fill="none" />
        </svg>
      </div>

      {/* Services Grid Section (Warm Ivory Luxury Layout) */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#0A192F] flex-1">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
          
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-gradient-to-br from-[#ECC870]/70 via-[#ECC870]/20 to-[#ECC870]/60 group">
                    <div className="relative h-72 sm:h-96 md:h-[420px] rounded-xl overflow-hidden bg-black">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Badge Over Image */}
                      <div className="absolute top-4 left-4 bg-[#01142B]/90 backdrop-blur-md border border-[#ECC870]/40 px-3.5 py-1.5 rounded-full text-[10px] font-montserrat uppercase tracking-widest text-[#ECC870] font-semibold">
                        {service.badge}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-montserrat uppercase tracking-wider text-[#ECC870] font-semibold block mb-0.5">
                          {service.idealFor}
                        </span>
                        <h3 className="font-cormorant text-2xl sm:text-3xl text-white font-medium">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-2">
                    <span className="text-[11px] font-montserrat uppercase tracking-[0.2em] text-[#B28228] font-bold block">
                      {service.tagline}
                    </span>
                    <h2 className="font-cormorant text-3xl sm:text-4xl text-[#01142B] font-normal leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-lato text-neutral-700 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-montserrat uppercase tracking-wider text-[#01142B] font-bold block">
                      Key Service Inclusions:
                    </span>
                    <div className="space-y-2">
                      {service.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B28228] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onNavigate('quote')}
                      className="font-montserrat px-6 py-3 rounded-[2px] bg-[#01142B] hover:bg-[#021B3A] text-[#ECC870] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2"
                    >
                      <span>Inquire For This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ECC870]" />
                    </button>
                    <button
                      onClick={() => onNavigate('custom')}
                      className="font-montserrat px-5 py-3 rounded-[2px] border border-[#B28228]/50 hover:border-[#B28228] text-[#01142B] hover:bg-[#ECC870]/10 font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      Explore 900+ Dishes
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* S-Curve Divider into Standards Section */}
      <div className="w-full overflow-hidden leading-none bg-[#FAF8F5]">
        <svg className="w-full h-8 sm:h-12 md:h-14 block" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
          <path d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" fill="#01142B" />
          <path d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" stroke="#ECC870" strokeWidth="4" fill="none" />
        </svg>
      </div>

      {/* Nashwan Service Standards (Royal Midnight Navy) */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#01142B] text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-montserrat uppercase tracking-[0.25em] text-[#ECC870] font-bold block">
              OUR SERVICE COMMITMENT
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-white font-normal">
              Why Celebrations Trust <span className="italic text-[#ECC870]">Nashwan</span>
            </h2>
            <p className="font-lato text-neutral-300 text-xs sm:text-sm">
              We treat every event as a sacred trust, upholding unmatched culinary hygiene, hospitality, and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#021B3A] border border-[#ECC870]/30 hover:border-[#ECC870] transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#01142B] border border-[#ECC870]/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-montserrat text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#ECC870] transition-colors">
                  {item.title}
                </h3>
                <p className="font-lato text-xs text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Direct CTA Banner */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#021B3A] via-[#01142B] to-[#021A38] border border-[#ECC870]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-montserrat uppercase tracking-widest text-[#ECC870] font-bold block">
                Plan In 30 Minutes
              </span>
              <h3 className="font-cormorant text-2xl sm:text-3xl text-white font-medium">
                Ready to plan catering for your special date?
              </h3>
              <p className="font-lato text-xs text-neutral-300">
                Tell us your date & guest count — our banquet director will send a personalized menu and quote in 30 minutes.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('quote')}
                className="font-montserrat px-6 py-3.5 rounded-[2px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg"
              >
                GET A QUOTE
              </button>
              <a
                href="https://wa.me/919949390829?text=Hello%20Nashwan%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20event%20catering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat px-5 py-3.5 rounded-[2px] border border-emerald-400/50 hover:bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wider transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
