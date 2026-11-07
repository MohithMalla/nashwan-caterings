import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ service, isOpen, onClose, onBookService }) {
  if (!isOpen || !service) return null;

  const IconComponent = service.icon;

  const serviceDetails = {
    wedding: {
      highlights: [
        'Dedicated Royal Dastarkhwan setup with silver chafing dishes',
        'Live Zafrani Biryani Dum station with master ustad',
        'Traditional Shahi welcome drink service with uniform servers',
        'Elaborate dessert pavilion with double ka meetha & qubani'
      ]
    },
    corporate: {
      highlights: [
        'Prompt, synchronized executive multi-tier lunching and dinner',
        'Continental, Pan-Asian and authentic Indian live stations',
        'Hygienic individual box packs or premium corporate buffet spreads',
        'Strict punctuality and corporate event protocol compliance'
      ]
    },
    reception: {
      highlights: [
        'Celebratory banquet spread customized for 200 - 2,000+ attendees',
        'Interactive starters & kebab skewers served piping hot to tables',
        'Signature mocktail and artisanal beverage bar',
        'Flawless replenishment with seamless guest throughput'
      ]
    },
    traditional: {
      highlights: [
        'Authentic Hyderabadi and regional recipes passed down generations',
        'Traditional seating / Dastarkhwan arrangements on demand',
        'Slow-cooked firewood delicacies with original whole spices',
        'Dedicated pure vegetarian separate kitchen options'
      ]
    },
    vip: {
      highlights: [
        'Private chef experience with customized luxury menu',
        'Plated fine dining or intimate buffet for exclusive gatherings',
        'Premium china, linen and crystal glassware coordination',
        'Discreet, white-glove hospitality'
      ]
    }
  };

  const currentDetails = serviceDetails[service.id] || {
    highlights: [
      'Tailored menu curated by senior master chefs',
      'Fresh, certified hygienic ingredients and five-star preparation',
      'Full setup with elegant warm lighting and chafing equipment',
      'End-to-end service staff and dedicated event coordinator'
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-[#ECC870]">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#ECC870]">
            {IconComponent && <IconComponent className="w-6 h-6" />}
          </div>
          <div>
            <span className="text-[10px] tracking-widest text-[#ECC870] uppercase font-semibold">Specialized Service</span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">{service.title}</h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
          {service.desc}. We take care of every meticulous detail from setup and live cooking to guest hospitality and spotless closure.
        </p>

        <div className="space-y-3 mb-6 bg-[#14120F] border border-[#D4AF37]/20 p-4 rounded-xl">
          <h4 className="text-xs font-serif font-bold text-[#ECC870] uppercase tracking-wider mb-2">Service Inclusions</h4>
          {currentDetails.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-[#ECC870] shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:flex-1 py-3 rounded-full bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/10 text-neutral-300 text-xs hover:text-white"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
