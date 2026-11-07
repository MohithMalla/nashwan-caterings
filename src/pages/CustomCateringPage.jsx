import React, { useState } from 'react';
import { Crown, Building2, PartyPopper, Calendar, Check, ArrowRight, ChefHat, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

export default function CustomCateringPage({ onNavigate, onOpenBooking, onOpenCustomMenu }) {
  const steps = [
    {
      num: '01',
      title: 'Share Your Vision',
      desc: 'Tell us about your event, venue, date, guest count, and preferences.'
    },
    {
      num: '02',
      title: 'Discover Your Flavours',
      desc: 'Explore traditional, regional, and contemporary food options tailored for your crowd.'
    },
    {
      num: '03',
      title: 'Curate Your Menu',
      desc: 'We build a balanced menu that complements your occasion and guests.'
    },
    {
      num: '04',
      title: 'Prepare & Present',
      desc: 'Our culinary team focuses on hygienic preparation, rich taste, and regal presentation.'
    },
    {
      num: '05',
      title: 'Celebrate & Enjoy',
      desc: 'You enjoy your special moments while our gracious team takes care of the complete food experience.'
    }
  ];

  const cateringCategories = [
    {
      title: 'Wedding Catering',
      tagline: 'Celebrate Love with a Feast to Remember',
      desc: "From traditional Haldi & Sangeet ceremonies to elegant wedding receptions and grand Valima banquets, create a menu that complements one of life's most important celebrations.",
      tags: ['Traditional Menus', 'Royal Buffet Service', 'Live Food Counters', 'Artisanal Desserts', 'Custom Dastarkhwan'],
      icon: Crown
    },
    {
      title: 'Corporate Catering',
      tagline: 'Professional Service. Exceptional Taste.',
      desc: 'Thoughtfully planned catering with prompt synchronization, hygienic packaging, executive multi-cuisine buffets, and professional hospitality.',
      tags: ['Corporate Meetings', 'Conferences & Summits', 'Executive Office Lunches', 'Annual Galas', 'Business Gatherings'],
      icon: Building2
    },
    {
      title: 'Birthday & Private Parties',
      tagline: 'Small Gathering or Grand Celebration, Make It Delicious',
      desc: 'Flawless culinary arrangements whether for intimate home dining or milestone celebrations, designed to delight guests of all ages.',
      tags: ['Birthdays', 'Anniversaries', 'Engagements', 'Housewarmings', 'Family Functions', 'Cocktail Parties'],
      icon: PartyPopper
    }
  ];

  return (
    <div className="min-h-screen bg-[#080706] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28">
      
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-[#8C6D37]/30 text-center sm:text-left">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/95 to-[#080706]/70 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#8C6D37]/40 bg-[#D4AF37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A947]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E5A947]">
              BESPOKE BANQUET SOLUTIONS
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            Your Occasion. Your Flavours. <br />
            <span className="italic text-[#E5A947]">Your Menu.</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            At Nashwan Caterings, we understand that no two celebrations are the same. Instead of a one-size-fits-all menu, we tailor the catering experience around your <strong className="text-white">occasion, guest count, food preferences, service style, and budget.</strong>
          </p>
        </div>
      </section>

      {/* 3 Main Catering Categories */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cateringCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-[#120F0D] border border-[#8C6D37]/30 hover:border-[#E5A947] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E5A947]/15 border border-[#8C6D37]/40 flex items-center justify-center text-[#E5A947] mb-4 group-hover:bg-[#E5A947] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#E5A947] mb-3">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#8C6D37]/20">
                    {cat.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-white/5 text-neutral-300 px-2.5 py-1 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How We Bring Your Event to Life (The 5 Steps from doc) */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-[#0E0C0A] border-y border-[#8C6D37]/30">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E5A947] font-semibold">The Nashwan Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">How We Bring Your Event to Life</h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              From the initial idea to the unforgettable final bite, here is how we ensure seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#14120F] border border-[#8C6D37]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-2xl font-bold text-[#E5A947] mb-2 pb-2 border-b border-[#8C6D37]/20">
                    {step.num}
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>PLAN MY EVENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Interactive Custom Menu Launcher */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#120F0D] border border-[#8C6D37]/40 shadow-2xl relative overflow-hidden">
          <ChefHat className="w-12 h-12 text-[#E5A947] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
            Ready to Build Your Own Course-by-Course Menu?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Use our interactive Custom Menu Curator to hand-pick welcome drinks, live appetizers, signature biryanis, artisanal breads, and royal desserts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={onOpenCustomMenu}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-all"
            >
              Open Interactive Menu Curator
            </button>
            <button 
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-xl border border-[#8C6D37] text-white hover:bg-white/5 text-xs font-semibold tracking-wider uppercase transition-all"
            >
              Request Direct Callback
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
