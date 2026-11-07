import React from 'react';
import { X, Award, ShieldCheck, HeartHandshake, Utensils } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-[#ECC870]">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <img src="assets/logo.png" onError={(e) => { e.target.src = '/assets/logo.png' }} alt="Nashwan Catering" className="h-12 w-auto" />
          <div>
            <span className="text-[10px] tracking-widest text-[#ECC870] uppercase font-semibold">Our Heritage</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">The Art of <span className="text-[#ECC870]">Nashwan</span></h2>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            At <strong className="text-white">Nashwan Catering Services</strong>, we believe every grand gathering deserves an extraordinary culinary experience. Founded on rich gastronomic heritage and unwavering standards of hospitality, we specialize in high-end wedding banquets, corporate summits, and milestone celebrations.
          </p>
          <p>
            Our master culinary team blends authentic recipes with refined contemporary banquet presentation. From aromatic saffron-infused Hyderabadi Dum Biryanis slow-cooked in traditional deghs, to gourmet live counters and dessert pavilions, we turn every dining hall into a feast fit for royalty.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 my-6">
          <div className="bg-[#14120F] border border-[#D4AF37]/20 p-3.5 rounded-xl">
            <Award className="w-5 h-5 text-[#ECC870] mb-2" />
            <h4 className="text-xs font-serif font-bold text-white mb-0.5">Master Craftsmanship</h4>
            <p className="text-[11px] text-neutral-400">Generations of culinary secrets and authentic seasoning.</p>
          </div>
          <div className="bg-[#14120F] border border-[#D4AF37]/20 p-3.5 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-[#ECC870] mb-2" />
            <h4 className="text-xs font-serif font-bold text-white mb-0.5">100% Hygienic</h4>
            <p className="text-[11px] text-neutral-400">Strict temperature controls and premium sourced ingredients.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs font-semibold text-white">Ready to plan your menu with our chefs?</div>
            <div className="text-[11px] text-[#ECC870]">Direct numbers: 9492247495 & 9949390829</div>
          </div>
          <a 
            href="tel:9492247495"
            className="px-5 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wide hover:bg-[#ECC870]"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
