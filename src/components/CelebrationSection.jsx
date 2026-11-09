import React, { useState } from 'react';

export default function CelebrationSection({ onNavigate, onOpenBooking, onOpenCustomMenu }) {
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  const occasions = [
    {
      id: 'wedding',
      name: 'Wedding',
      image: 'assets/occasions/wedding.jpg',
      icon: (
        // Interlocking rings icon matching reference
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="9" cy="12" r="5" stroke="currentColor" />
          <circle cx="15" cy="12" r="5" stroke="currentColor" />
          <path d="M12 9.5a2 2 0 0 1 0-3 2 2 0 0 1 0 3z" fill="#ECC870" stroke="none" />
        </svg>
      ),
      whatsappMsg: 'Hello Nashwan Caterings, I would like to inquire about wedding catering services and packages.'
    },
    {
      id: 'birthday',
      name: 'Birthday',
      image: 'assets/occasions/birthday.jpg',
      icon: (
        // Birthday cake with candles icon matching reference
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 14h16v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6z" />
          <path d="M4 14c1.5 1 2.5 1 4 0s2.5-1 4 0 2.5 1 4 0 2.5-1 4 0" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <line x1="16" y1="10" x2="16" y2="14" />
          <circle cx="8" cy="8" r="1" fill="#ECC870" stroke="none" />
          <circle cx="12" cy="8" r="1" fill="#ECC870" stroke="none" />
          <circle cx="16" cy="8" r="1" fill="#ECC870" stroke="none" />
        </svg>
      ),
      whatsappMsg: 'Hello Nashwan Caterings, I would like to plan catering for an upcoming Birthday celebration.'
    },
    {
      id: 'corporate',
      name: 'Corporate',
      image: 'assets/occasions/corporate.jpg',
      icon: (
        // Corporate office buildings icon matching reference
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="7" y="4" width="10" height="17" rx="1" />
          <rect x="3" y="10" width="4" height="11" rx="0.5" />
          <rect x="17" y="10" width="4" height="11" rx="0.5" />
          <line x1="10" y1="8" x2="10" y2="8.01" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="8" x2="14" y2="8.01" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="12" x2="10" y2="12.01" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="12" x2="14" y2="12.01" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="16" x2="10" y2="16.01" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="16" x2="14" y2="16.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      whatsappMsg: 'Hello Nashwan Caterings, I am looking for corporate catering services for our company event.'
    },
    {
      id: 'anniversary',
      name: 'Anniversary',
      image: 'assets/occasions/anniversary.jpg',
      icon: (
        // Heart outline matching reference
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      whatsappMsg: 'Hello Nashwan Caterings, I would like to inquire about anniversary celebration catering.'
    },
    {
      id: 'house_party',
      name: 'House Party',
      image: 'assets/occasions/house_party.jpg',
      icon: (
        // House outline matching reference
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      whatsappMsg: 'Hello Nashwan Caterings, I would like to discuss catering menus for a house party gathering.'
    },
    {
      id: 'reception',
      name: 'Reception',
      image: 'assets/occasions/reception.jpg',
      icon: (
        // Reception / gathering group matching reference
        <svg className="w-5 h-5 text-[#ECC870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      whatsappMsg: 'Hello Nashwan Caterings, I would like to inquire about wedding reception / Valima catering.'
    }
  ];

  const handleOccasionClick = (occ) => {
    setSelectedOccasion(occ.id);
    if (onNavigate) {
      onNavigate('custom');
    }
  };

  return (
    <section className="relative w-full pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] overflow-hidden">
      
      {/* Delicate Gold Botanical Leaf Filigree Watermark (Top Left & Top Right) */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" stroke="#ECC870" strokeWidth="0.8">
          <path d="M5 95 Q 30 20, 80 5" />
          <path d="M30 45 Q 45 30, 65 35" />
          <path d="M45 30 Q 55 15, 75 20" />
          <path d="M20 65 Q 30 50, 50 55" />
          <circle cx="65" cy="35" r="2" fill="#ECC870" />
          <circle cx="75" cy="20" r="2" fill="#ECC870" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 opacity-20 pointer-events-none z-0 scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#ECC870" strokeWidth="0.8">
          <path d="M5 95 Q 30 20, 80 5" />
          <path d="M30 45 Q 45 30, 65 35" />
          <path d="M45 30 Q 55 15, 75 20" />
          <path d="M20 65 Q 30 50, 50 55" />
          <circle cx="65" cy="35" r="2" fill="#ECC870" />
          <circle cx="75" cy="20" r="2" fill="#ECC870" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto w-full">
        
        {/* Header Section Matching Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          
          {/* Main Heading with Gold Horizontal Lines: — What are you celebrating? — (Section Heading: Cormorant Garamond 500) */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="w-16 sm:w-28 md:w-36 h-[1.5px] bg-[#ECC870] inline-block" />
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-[#0B1E38] whitespace-nowrap">
              What are you <span className="italic text-[#2BA4EE] font-cormorant font-medium">celebrating?</span>
            </h2>
            <span className="w-16 sm:w-28 md:w-36 h-[1.5px] bg-[#ECC870] inline-block" />
          </div>

          {/* Subtitle (Body: Lato 400) */}
          <p className="text-neutral-600 font-lato text-sm sm:text-base md:text-[17px] font-normal leading-relaxed mt-2.5 sm:mt-3">
            Pick your occasion — we’ll recommend the right menus instantly.
          </p>

        </div>

        {/* 6 Occasion Cards Grid on White Cards with Gold Border */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {occasions.map((occ) => {
            const isSelected = selectedOccasion === occ.id;
            return (
              <div 
                key={occ.id}
                onClick={() => handleOccasionClick(occ)}
                className={`group relative rounded-[16px] sm:rounded-[18px] overflow-hidden bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-[0_4px_18px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(236,200,112,0.3)] ${
                  isSelected 
                    ? 'border-[#2BA4EE] ring-2 ring-[#2BA4EE]/40' 
                    : 'border-[#ECC870] hover:border-[#D4AF37]'
                }`}
              >
                
                {/* Photo Top Portion */}
                <div className="relative w-full h-36 sm:h-40 md:h-44 overflow-hidden bg-[#F3EFEA]">
                  <img 
                    src={occ.image} 
                    alt={occ.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out" 
                  />
                </div>

                {/* Overlapping Circular Badge (Deep Royal Navy Circle with Gold Border) */}
                <div className="relative z-10 flex flex-col items-center -mt-5 sm:-mt-6">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#ECC870] bg-[#041A3B] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                    {occ.icon}
                  </div>

                  {/* Occasion Label in Navy Serif (White Card Background) */}
                  <div className="pt-2 sm:pt-2.5 pb-4 px-2 text-center w-full">
                    <h3 className="font-serif text-[#0B1E38] text-sm sm:text-base font-semibold tracking-wide group-hover:text-[#2BA4EE] transition-colors">
                      {occ.name}
                    </h3>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
