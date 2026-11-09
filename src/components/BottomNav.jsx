import React from 'react';
import { Home, Info, BookOpen, ChefHat, Image as ImageIcon, Phone } from 'lucide-react';

export default function BottomNav({ activePage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, path: '/' },
    { id: 'about', label: 'ABOUT', icon: Info, path: '/about' },
    { id: 'menu', label: 'MENU', icon: BookOpen, path: '/menu' },
    { id: 'custom', label: 'CUSTOM', icon: ChefHat, path: '/custom' },
    { id: 'gallery', label: 'GALLERY', icon: ImageIcon, path: '/gallery' },
    { id: 'contact', label: 'CONTACT', icon: Phone, path: '/contact' },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#011024]/95 backdrop-blur-md border-t border-[#ECC870]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-2 py-1.5 sm:py-2 flex items-center justify-around md:hidden"
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activePage === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all duration-200 relative ${
              isActive 
                ? 'text-[#ECC870]' 
                : 'text-neutral-400 hover:text-[#ECC870]/80'
            }`}
          >
            {/* Active Indicator Pip */}
            {isActive && (
              <span className="absolute -top-1 w-5 h-0.5 bg-[#ECC870] rounded-full shadow-[0_0_8px_#ECC870]" />
            )}

            <div className={`p-1 rounded-full transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
              <IconComponent 
                className={`w-5 h-5 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.7]'}`} 
              />
            </div>

            <span className={`font-montserrat text-[9px] sm:text-[10px] tracking-wider uppercase font-medium mt-0.5 ${
              isActive ? 'text-[#ECC870] font-semibold' : 'text-neutral-400'
            }`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
