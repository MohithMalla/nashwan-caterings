import React from 'react';
import { Sparkles, UtensilsCrossed, ShieldCheck, Award } from 'lucide-react';

export default function ServiceHighlights({ onFeatureClick }) {
  const highlights = [
    {
      id: 'events',
      title: 'Events & Celebrations',
      desc: 'Bespoke banqueting for milestone occasions',
      icon: Sparkles
    },
    {
      id: 'custom',
      title: 'Customized Menus',
      desc: 'Tailored culinary palettes & regional delicacies',
      icon: UtensilsCrossed
    },
    {
      id: 'hygiene',
      title: 'Fresh & Hygienic',
      desc: 'Farm-fresh ingredients & 5-star sanitation',
      icon: ShieldCheck
    },
    {
      id: 'team',
      title: 'Professional Team',
      desc: 'Master chefs & gracious royal hospitality',
      icon: Award
    }
  ];

  return (
    <div className="w-full max-w-2xl py-2 sm:py-2.5 border-y border-[#D4AF37]/25 backdrop-blur-[2px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2 items-center">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              <div 
                onClick={() => onFeatureClick && onFeatureClick(item)}
                className="group flex flex-col sm:items-center text-left sm:text-center p-1 sm:p-1.5 rounded-lg hover:bg-white/[0.03] transition-all cursor-pointer"
              >
                {/* Gold outline icon container */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#ECC870] group-hover:border-[#ECC870] group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all duration-300 mb-1 sm:mb-1.5">
                  <Icon className="w-4 h-4 stroke-[1.5]" />
                </div>
                
                <h4 className="text-[11px] sm:text-xs font-serif font-medium text-[#FDFBF7] tracking-wide group-hover:text-[#ECC870] transition-colors leading-tight">
                  {item.title}
                </h4>
              </div>

              {/* Thin vertical separator between items on desktop */}
              {index < highlights.length - 1 && (
                <div className="hidden sm:block h-7 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent self-center -mx-1" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
