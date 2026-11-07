import React from 'react';

// Elegant SVG Laurel Wreath Icon
const LaurelWreath = ({ className = "w-4 h-4 text-[#ECC870]" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 21c-4.97 0-9-4.03-9-9 0-3.5 2-6.5 5-8" />
    <path d="M12 21c4.97 0 9-4.03 9-9 0-3.5-2-6.5-5-8" />
    <path d="M6 8a3 3 0 0 1 3 3" />
    <path d="M18 8a3 3 0 0 0-3 3" />
    <path d="M5 13a3 3 0 0 1 3 3" />
    <path d="M19 13a3 3 0 0 0-3 3" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

export default function StatsPanel() {
  const stats = [
    {
      value: '500+',
      label: 'Events Catered'
    },
    {
      value: '50+',
      label: 'Menu Options'
    },
    {
      value: '99%',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <div className="w-full max-w-md">
      <div className="rounded-xl border border-[#D4AF37]/35 bg-[#0A0907]/85 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.65)] hover:border-[#ECC870]/60 transition-all duration-300">
        <div className="grid grid-cols-3 divide-x divide-[#D4AF37]/25 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-1.5 sm:px-2.5">
              <div className="flex items-center gap-1 mb-0.5">
                <LaurelWreath className="w-3.5 h-3.5 text-[#ECC870] opacity-80" />
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#ECC870] to-[#C5A059]">
                  {item.value}
                </span>
              </div>
              <span className="text-[9px] sm:text-[11px] text-neutral-300 font-medium tracking-wide leading-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[9px] sm:text-[10px] text-neutral-400/80 mt-1 px-2 italic flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870]/60 inline-block"></span>
        <span>Figures for demonstration; replace with verified business metrics prior to publishing</span>
      </div>
    </div>
  );
}
