import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

export default function StatsPanel() {
  return (
    <div className="w-full max-w-xl">
      <div className="rounded-2xl border border-[#8C6D37]/40 bg-[#120F0D]/60 backdrop-blur-md px-5 sm:px-6 py-3.5 sm:py-4 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-3 divide-x divide-[#8C6D37]/30 items-center">
          
          {/* Column 1: Since 2023 */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 pr-3 sm:pr-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5A947] stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs text-neutral-400 font-normal leading-tight">
                Since
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                2023
              </span>
            </div>
          </div>

          {/* Column 2: 300+ Clients Served */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5A947] stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                300+
              </span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-normal leading-tight">
                Clients Served
              </span>
            </div>
          </div>

          {/* Column 3: 3+ Years of Hospitality */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 pl-3 sm:pl-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5A947] stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                3+
              </span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-normal leading-tight">
                Years of Hospitality
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
