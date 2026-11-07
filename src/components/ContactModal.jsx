import React from 'react';
import { X, Phone, MessageSquare, MapPin, Clock, Mail } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-[#ECC870]">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#ECC870] text-xs font-semibold uppercase tracking-wider mb-2">
            Connect With Us
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">Contact <span className="text-[#ECC870]">Nashwan Catering</span></h2>
          <p className="text-xs text-neutral-300 mt-1">We are ready to cater your celebration to perfection</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-[#14120F] border border-[#D4AF37]/20 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#ECC870] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-white uppercase tracking-wider mb-1">Direct Calling Lines</h4>
              <div className="flex flex-col gap-1 text-sm font-medium text-neutral-200">
                <a href="tel:9492247495" className="hover:text-[#ECC870] transition-colors flex items-center gap-1.5">
                  <span>9492247495</span>
                  <span className="text-[10px] text-[#ECC870] bg-[#D4AF37]/20 px-2 py-0.5 rounded-full">Primary</span>
                </a>
                <a href="tel:9949390829" className="hover:text-[#ECC870] transition-colors flex items-center gap-1.5">
                  <span>9949390829</span>
                  <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full">Secondary</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#14120F] border border-[#D4AF37]/20 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-white uppercase tracking-wider mb-1">Instant WhatsApp Inquiries</h4>
              <p className="text-xs text-neutral-300 mb-2">Message our banqueting team for fast quotes and date availability.</p>
              <a 
                href="https://wa.me/919492247495?text=Hello%20Nashwan%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20catering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Chat on WhatsApp (+91 9492247495) →
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#14120F] border border-[#D4AF37]/20 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#ECC870] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-white uppercase tracking-wider mb-1">Service Hours</h4>
              <p className="text-xs text-neutral-300">Available 7 days a week: 9:00 AM – 11:00 PM for booking inquiries & consultations.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#1A1815] border border-[#D4AF37]/30 text-white text-xs uppercase tracking-wider hover:bg-[#D4AF37]/20"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
