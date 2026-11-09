import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage({ onNavigate, onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Banquet',
    date: '',
    guests: '200 - 500 Guests',
    venue: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello Nashwan Caterings,%0A%0A*New Catering Inquiry via Website:*%0A• Name: ${encodeURIComponent(formData.name)}%0A• Phone: ${encodeURIComponent(formData.phone)}%0A• Event Type: ${encodeURIComponent(formData.eventType)}%0A• Date: ${encodeURIComponent(formData.date || 'TBD')}%0A• Guests: ${encodeURIComponent(formData.guests)}%0A• Venue: ${encodeURIComponent(formData.venue || 'Hyderabad')}%0A• Notes: ${encodeURIComponent(formData.notes || 'None')}`;
    
    setSubmitted(true);
    window.open(`https://wa.me/919949390829?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28 font-sans">
      
      {/* Header Banner - Royal Midnight Blue */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#01142B]">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-25 pointer-events-none"
          style={{ 
            backgroundImage: "url('assets/hero-bg.jpg')",
            backgroundPosition: 'right 20% center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011227] via-[#01142B]/95 to-[#01142B]/75 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center sm:text-left">
          {/* Eyebrow */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#ECC870]">
              LET'S CREATE SOMETHING DELICIOUS TOGETHER
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            Your Celebration Starts Here
          </h1>
          <p className="font-serif italic text-[#ECC870] text-xl sm:text-2xl mb-4">
            Authentic Flavours. Timeless Traditions.
          </p>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl">
            Planning a wedding, corporate event, birthday, family gathering, or private celebration in Hyderabad? Tell us about your event and let us help transform your ideas into a memorable dining experience.
          </p>
        </div>
      </section>

      {/* S-Curve Wave Divider from Midnight Blue to Warm Luxury Ivory */}
      <div className="relative w-full h-[46px] sm:h-[62px] md:h-[76px] overflow-hidden leading-none z-10 -mt-[1px]">
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full block" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="contactGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A034" />
              <stop offset="25%" stopColor="#ECC870" />
              <stop offset="50%" stopColor="#FFF3CA" />
              <stop offset="75%" stopColor="#DFB251" />
              <stop offset="100%" stopColor="#C9932B" />
            </linearGradient>
          </defs>
          <path 
            d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18 L 1440,90 L 0,90 Z" 
            fill="#FAF8F5" 
          />
          <path 
            d="M 0,45 C 160,85 300,85 520,52 C 800,10 1100,8 1440,18" 
            stroke="url(#contactGoldRibbon)" 
            strokeWidth="3.2" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Main Contact Section - Warm Luxury Ivory Background */}
      <div className="bg-[#FAF8F5] text-[#0A192F] flex-1 py-14 sm:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Form: Request a Catering Quote (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-[#ECC870]/40 rounded-[18px] p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#B28228] font-bold block mb-1">Immediate Planning</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#01142B] font-bold">Request a Catering Quote</h2>
                <p className="text-xs text-neutral-600 mt-1">Fill in the details below and our banquet director will connect promptly via WhatsApp or phone.</p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-xl text-[#01142B] font-bold">Inquiry Transmitted</h3>
                  <p className="text-xs text-neutral-700">
                    Thank you! Your quote request has been routed directly to our WhatsApp catering hotline. We look forward to crafting an extraordinary feast.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#B28228] font-bold underline hover:text-[#01142B]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Your Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Mohammed Rasheed"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. 9949390829"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Occasion Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]"
                      >
                        <option>Wedding Banquet & Reception</option>
                        <option>Valima / Nikah Celebration</option>
                        <option>Sangeet & Mehendi Feast</option>
                        <option>Corporate Summit / Gala</option>
                        <option>Birthday / Anniversary</option>
                        <option>Housewarming / Private Party</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Tentative Event Date</label>
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Expected Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]"
                      >
                        <option>50 - 150 Guests</option>
                        <option>150 - 300 Guests</option>
                        <option>300 - 600 Guests</option>
                        <option>600 - 1200 Guests</option>
                        <option>1200+ Mega Feast</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Venue Location in Hyderabad</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Uppal / Banjara Hills / Gachibowli"
                        value={formData.venue}
                        onChange={(e) => setFormData({...formData, venue: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Special Preferences / Course Notes</label>
                    <textarea 
                      rows="3"
                      placeholder="Mention preferred dishes, dietary restrictions, live counters..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-[8px] px-3.5 py-2.5 text-sm text-[#01142B] focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[4px] bg-[#ECC870] hover:bg-[#F3D68A] text-[#01142B] font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#01142B]" />
                    <span>Send Catering Inquiry via WhatsApp</span>
                  </button>

                </form>
              )}
            </div>

            {/* Right Cards: Connect with Nashwan Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 sm:p-7 rounded-[18px] bg-gradient-to-b from-[#01142B] to-[#021A38] border border-[#ECC870]/40 text-white shadow-xl space-y-5">
                <span className="text-[10px] uppercase tracking-widest text-[#ECC870] font-bold block">Official Coordinates</span>
                <h3 className="font-serif text-2xl text-white font-normal">Connect With Nashwan</h3>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-200">
                  
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ECC870]/15 border border-[#ECC870]/40 flex items-center justify-center text-[#ECC870] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium">Nashwan Caterings</strong>
                      <span className="text-white/80">Balaji Enclave, Uppal, Hyderabad, Telangana</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ECC870]/15 border border-[#ECC870]/40 flex items-center justify-center text-[#ECC870] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium">Catering Direct Line</strong>
                      <div className="flex flex-col gap-0.5 mt-0.5">
                        <a href="tel:9492247495" className="hover:text-[#ECC870] font-bold text-[#ECC870] tracking-wide">9492247495</a>
                        <a href="tel:9949390829" className="hover:text-[#ECC870] font-bold text-[#ECC870] tracking-wide">9949390829</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium">WhatsApp Direct Dispatch</strong>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <a href="https://wa.me/919492247495" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                          Chat on 9492247495 <span>→</span>
                        </a>
                        <a href="https://wa.me/919949390829" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                          Chat on 9949390829 <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#ECC870]/15 border border-[#ECC870]/40 flex items-center justify-center text-[#ECC870] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium">Business Hours</strong>
                      <span className="text-white/80">8:00 AM to 11:00 PM IST (All 7 Days)</span>
                    </div>
                  </div>

                </div>

                {/* JustDial Card */}
                <div className="pt-4 border-t border-white/10">
                  <a 
                    href="https://www.justdial.com/Hyderabad/Nashwan-Catering-Services-Balaji-Enclave-Uppal/040PXX40-XX40-250414090522-R6N9_BZDET"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-[12px] bg-black/40 border border-[#ECC870]/40 flex items-center justify-between group hover:border-[#ECC870] transition-all"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#ECC870]">JustDial Verified Business</div>
                      <div className="text-[10px] text-neutral-400">View genuine customer ratings and reviews</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#ECC870]" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

    </div>
  );
}
