import React from 'react';
import { Leaf, Flame, ArrowRight } from 'lucide-react';

export default function MenuPricingSection({ onNavigate, onOpenBooking }) {
  const vegTiers = [
    { name: 'Traditional Menu', price: '₹225 / plate' },
    { name: 'Basic Menu', price: '₹245 / plate' },
    { name: 'Standard Menu', price: '₹295 / plate' },
    { name: 'Special Menu 👑', price: '₹345 / plate', highlight: true }
  ];

  const nonVegTiers = [
    { name: 'Traditional Menu', price: '₹345 / plate' },
    { name: 'Basic Menu', price: '₹395 / plate' },
    { name: 'Standard Menu', price: '₹495 / plate' },
    { name: 'Special Menu 👑', price: '₹595 / plate', highlight: true }
  ];

  const handleInquire = (type) => {
    if (onNavigate) {
      onNavigate('menu', type);
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0B1E38] mb-3">
            Our Curated Menu Pricing
          </h2>
          <p className="font-lato text-neutral-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Select from our transparently priced vegetarian and non-vegetarian menus, designed for celebrations of all types.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Pure Veg Menu (Deep Forest Green) */}
          <div className="rounded-[18px] sm:rounded-[22px] bg-[#0A331B] border border-emerald-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_rgba(10,51,27,0.25)] text-white relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Leaf Icon Box */}
              <div className="w-11 h-11 rounded-[10px] bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center mb-5 shadow-inner">
                <Leaf className="w-5 h-5 text-[#22C55E]" />
              </div>

              {/* Tag Label */}
              <span className="font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase text-[#22C55E] block mb-2">
                PURE VEG MENU
              </span>

              {/* Starting Price */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-cormorant text-4xl sm:text-5xl font-normal text-white tracking-tight">
                  ₹225
                </span>
                <span className="font-lato text-xs sm:text-sm text-neutral-300 font-normal">
                  /plate starting
                </span>
              </div>

              {/* Description */}
              <p className="font-lato text-neutral-200 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                Wholesome vegetarian feasts with authentic Hyderabadi & Telangana flavours.
              </p>

              {/* Pricing Breakdown Rows */}
              <div className="space-y-3 pt-4 border-t border-emerald-500/20 mb-8">
                {vegTiers.map((tier, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 text-xs sm:text-sm">
                    <span className={`font-lato ${tier.highlight ? 'text-emerald-300 font-medium' : 'text-neutral-200 font-normal'}`}>
                      {tier.name}
                    </span>
                    <span className="font-montserrat font-medium text-white tracking-wide">
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => handleInquire('veg')}
              className="w-full py-3.5 px-6 rounded-[2px] bg-white hover:bg-neutral-100 text-[#0A331B] font-montserrat font-medium text-xs uppercase tracking-[0.16em] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>VIEW VEG PACKAGES</span>
              <ArrowRight className="w-4 h-4 text-[#0A331B]" />
            </button>
          </div>

          {/* Card 2: Non-Veg Menu (Deep Royal Crimson / Burgundy) */}
          <div className="rounded-[18px] sm:rounded-[22px] bg-[#3B0C13] border border-rose-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_rgba(59,12,19,0.25)] text-white relative overflow-hidden group hover:border-rose-500/40 transition-all duration-300">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Flame Icon Box */}
              <div className="w-11 h-11 rounded-[10px] bg-rose-950/80 border border-rose-500/40 flex items-center justify-center mb-5 shadow-inner">
                <Flame className="w-5 h-5 text-[#F87171]" />
              </div>

              {/* Tag Label */}
              <span className="font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase text-[#F87171] block mb-2">
                NON-VEG MENU
              </span>

              {/* Starting Price */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-cormorant text-4xl sm:text-5xl font-normal text-white tracking-tight">
                  ₹345
                </span>
                <span className="font-lato text-xs sm:text-sm text-neutral-300 font-normal">
                  /plate starting
                </span>
              </div>

              {/* Description */}
              <p className="font-lato text-neutral-200 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                Dum biryanis, kebabs from the sigri and signature Deccan delicacies.
              </p>

              {/* Pricing Breakdown Rows */}
              <div className="space-y-3 pt-4 border-t border-rose-500/20 mb-8">
                {nonVegTiers.map((tier, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 text-xs sm:text-sm">
                    <span className={`font-lato ${tier.highlight ? 'text-rose-300 font-medium' : 'text-neutral-200 font-normal'}`}>
                      {tier.name}
                    </span>
                    <span className="font-montserrat font-medium text-white tracking-wide">
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => handleInquire('nonveg')}
              className="w-full py-3.5 px-6 rounded-[2px] bg-white hover:bg-neutral-100 text-[#3B0C13] font-montserrat font-medium text-xs uppercase tracking-[0.16em] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>VIEW NON-VEG PACKAGES</span>
              <ArrowRight className="w-4 h-4 text-[#3B0C13]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
