import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="bg-[#12100E] border border-[#D4AF37]/60 text-white px-5 py-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex items-start gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#ECC870] shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-serif font-bold text-[#ECC870] uppercase tracking-wider">{toast.title}</div>
          <div className="text-xs text-neutral-300 mt-0.5 leading-snug">{toast.message}</div>
        </div>
        <button onClick={onClose} className="text-neutral-400 hover:text-white p-1">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
