import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Phone, 
  User, 
  Clock, 
  Utensils, 
  CheckCircle2, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Sparkles,
  ArrowRight,
  FileCheck
} from 'lucide-react';
import Footer from '../components/Footer';

export default function QuotePage({ onNavigate, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Royal Wedding Banquet',
    eventDate: '',
    guestCount: '250 - 500 Guests',
    cuisinePreference: 'Both (Veg & Non Veg)',
    venueLocation: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = 
`*NASHWAN CATERINGS - FAST QUOTE REQUEST*
━━━━━━━━━━━━━━━━━━━━━━━━━━
• *Client Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Event Type:* ${formData.eventType}
• *Event Date:* ${formData.eventDate || 'To be decided'}
• *Approx. Guests:* ${formData.guestCount}
• *Cuisine Preference:* ${formData.cuisinePreference}
• *Venue Location:* ${formData.venueLocation || 'Hyderabad'}
• *Special Notes:* ${formData.notes || 'None'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Please share the custom menu proposal and quotation within 30 minutes.`;

    if (onBookingSuccess) {
      onBookingSuccess(formData);
    }
    setSubmitted(true);

    const whatsappUrl = `https://wa.me/919949390829?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#01142B] text-[#FDFBF7] flex flex-col pt-24 sm:pt-28 font-sans selection:bg-[#ECC870]/30">
      
      {/* Top Banner / Breadcrumb Heading - Royal Midnight Blue Consistent with Other Pages */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#011022] via-[#01142B] to-[#021B3A] border-b border-[#ECC870]/20 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('assets/hero-bg.jpg')", backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011227]/90 via-[#01142B]/95 to-[#01142B] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.25em] uppercase text-[#ECC870] block mb-2">
            NASHWAN CATERINGS • INSTANT BANQUET QUOTATION
          </span>

          <h1 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-3">
            Tell us your date — <span className="font-cormorant italic text-[#ECC870]">we'll send a custom menu & quote in 30 minutes</span>
          </h1>

          <p className="font-lato text-neutral-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Fill the details below or call directly at <span className="text-[#ECC870] font-semibold">9492247495</span> / <span className="text-[#ECC870] font-semibold">9949390829</span>. Our executive banquet chefs will draft your personalized proposal immediately.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: QUOTE FORM (7 Cols) ==================== */}
          <div className="lg:col-span-7 bg-[#021B3A]/90 border border-[#ECC870]/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
            
            {/* Header Accent Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#ECC870]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-[#ECC870]/20 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ECC870] font-semibold block mb-1">
                  VIP Celebration Quotation
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl text-white font-medium">
                  Plan Your Event Menu
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#ECC870] bg-[#01142B] px-3 py-1.5 rounded-full border border-[#ECC870]/30">
                <Clock className="w-3.5 h-3.5" />
                <span>30-Min Response</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cormorant text-3xl text-white font-medium">
                  Thank You, {formData.name}!
                </h3>
                <p className="font-lato text-neutral-300 text-sm max-w-md mx-auto">
                  Your event details for <strong>{formData.eventType}</strong> on <strong>{formData.eventDate || 'your preferred date'}</strong> have been logged. Our banquet director is reviewing your requirements and will connect within 30 minutes.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919949390829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white font-montserrat text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#ECC870]/40 text-[#ECC870] font-montserrat text-xs uppercase tracking-wider font-medium hover:bg-[#ECC870]/10 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#ECC870] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Mohammed Rasheed"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl pl-10 pr-3.5 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ECC870] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#ECC870] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl pl-10 pr-3.5 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ECC870] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Event Type & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Event Type
                    </label>
                    <select 
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                    >
                      <option value="Royal Wedding Banquet">Royal Wedding Banquet</option>
                      <option value="Grand Reception & Valima">Grand Reception & Valima</option>
                      <option value="Corporate Gala & Summit">Corporate Gala & Summit</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Sangeet & Haldi Celebration">Sangeet & Haldi Celebration</option>
                      <option value="House Party & Family Feast">House Party & Family Feast</option>
                      <option value="Traditional Dastarkhwan Feast">Traditional Dastarkhwan Feast</option>
                      <option value="Private VIP Dining">Private VIP Dining</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Event Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#ECC870] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="date" 
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                        className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl pl-10 pr-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Estimated Guests & Cuisine Preference (Veg, Non Veg, Both) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Estimated Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#ECC870] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select 
                        value={formData.guestCount}
                        onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                        className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl pl-10 pr-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                      >
                        <option value="50 - 150 Guests">50 - 150 Guests</option>
                        <option value="150 - 300 Guests">150 - 300 Guests</option>
                        <option value="300 - 600 Guests">300 - 600 Guests</option>
                        <option value="600 - 1200 Guests">600 - 1200 Guests</option>
                        <option value="1200+ Mega Gathering">1200+ Mega Gathering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Cuisine Preference
                    </label>
                    <div className="relative">
                      <Utensils className="w-4 h-4 text-[#ECC870] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select 
                        value={formData.cuisinePreference}
                        onChange={(e) => setFormData({...formData, cuisinePreference: e.target.value})}
                        className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl pl-10 pr-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors font-medium"
                      >
                        <option value="Veg">Veg</option>
                        <option value="Non Veg">Non Veg</option>
                        <option value="Both (Veg & Non Veg)">Both (Veg & Non Veg)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 4: Venue Location */}
                <div>
                  <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                    Venue / Function Hall Location (Optional)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#ECC870] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="e.g. Uppal, Banjara Hills, Jubilee Hills, Secunderabad, Gachibowli..."
                      value={formData.venueLocation}
                      onChange={(e) => setFormData({...formData, venueLocation: e.target.value})}
                      className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl pl-10 pr-3.5 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ECC870] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 5: Notes & Special Preferences */}
                <div>
                  <label className="block text-xs font-montserrat font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                    Special Preferences or Dietary Guidelines
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Mention live counter preferences (e.g. Live Biryani Degh, Dosa Counter, Chaat, Dessert counter), spice levels, or timings..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-[#01142B] border border-[#ECC870]/30 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ECC870] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 rounded-xl bg-gradient-to-r from-[#F6CA68] via-[#EDA83D] to-[#E39626] text-black font-montserrat font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-[0_6px_24px_rgba(237,168,61,0.4)] hover:shadow-[0_8px_32px_rgba(237,168,61,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Get Custom Menu & Quote</span>
                  </button>

                  <a
                    href="https://wa.me/919949390829?text=Hello%20Nashwan%20Catering%2C%20I%20would%20like%20to%20get%20a%20catering%20quote%20for%20my%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 rounded-xl border border-[#ECC870]/50 hover:bg-[#ECC870]/15 text-[#ECC870] text-xs font-montserrat font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

              </form>
            )}

          </div>

          {/* ==================== RIGHT COLUMN: TRUST BADGES, FSSAI, ISO, ADDRESS (5 Cols) ==================== */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Government FSSAI & ISO Official Trust Card */}
            <div className="bg-[#021B3A]/90 border border-[#ECC870]/30 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#ECC870]/20">
                <div className="w-10 h-10 rounded-full bg-[#ECC870]/15 border border-[#ECC870] flex items-center justify-center text-[#ECC870]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium text-white">
                    Government Certified & Compliant
                  </h3>
                  <p className="font-lato text-xs text-neutral-300">
                    Full food safety, hygiene & quality management assurance
                  </p>
                </div>
              </div>

              {/* FSSAI Registration Badge */}
              <div className="p-4 rounded-xl bg-[#01142B] border border-emerald-500/30 flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-white shrink-0 shadow-md border border-neutral-200 flex items-center justify-center">
                  <img src="assets/fssai.png" alt="FSSAI" className="h-8 w-auto object-contain" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-emerald-400">
                      FSSAI Registered
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded-full font-semibold">
                      Govt. of Telangana
                    </span>
                  </div>
                  <div className="font-montserrat text-sm font-semibold text-white tracking-wider">
                    Lic. No: 23624031003794
                  </div>
                  <p className="text-[11px] text-neutral-300 font-lato">
                    Validity: Upto <strong>17-12-2029</strong> • Food Safety and Standards Authority of India
                  </p>
                  <p className="text-[11px] text-[#ECC870] font-lato">
                    Registered to: <strong>PATHAN WAJEED KHAN / NASHWAN CATERING SERVICES</strong>
                  </p>
                </div>
              </div>

              {/* ISO Certification Badge */}
              <div className="p-4 rounded-xl bg-[#01142B] border border-[#ECC870]/30 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#ECC870]/10 border border-[#ECC870]/40 text-[#ECC870] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#ECC870]">
                      ISO Certified
                    </span>
                    <span className="text-[10px] bg-[#ECC870]/20 text-[#ECC870] px-2 py-0.2 rounded-full font-semibold">
                      Quality & Safety
                    </span>
                  </div>
                  <div className="font-montserrat text-sm font-semibold text-white tracking-wide">
                    ISO 9001:2015 & ISO 22000:2018
                  </div>
                  <p className="text-[11px] text-neutral-300 font-lato">
                    Certified Food Safety Management System (FSMS) & Hospitality Protocols
                  </p>
                </div>
              </div>

              {/* Halal Certified Badge */}
              <div className="p-4 rounded-xl bg-[#01142B] border border-amber-500/25 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-amber-300 block">
                    100% Halal Preparation
                  </span>
                  <p className="text-[11px] text-neutral-300 font-lato">
                    Authentic Hyderabadi recipes prepared strictly according to traditional halal dietary guidelines and pure ingredients.
                  </p>
                </div>
              </div>

            </div>

            {/* Official Registered Address & Contact Card */}
            <div className="bg-[#021B3A]/90 border border-[#ECC870]/30 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-4">
              <h4 className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#ECC870]">
                Official Registered Address
              </h4>

              <div className="text-xs text-neutral-200 font-lato space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ECC870] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-montserrat text-xs mb-1">
                      Nashwan Catering Services (Regd. Office)
                    </strong>
                    <span className="text-neutral-300 leading-relaxed block">
                      H.No: 2-20-17/5, Kummari Kunta, Chilka Nagar, Uppal, Medchal-Malkajgiri, Uppal Circle No.2, Hyderabad, Telangana - 500039
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#ECC870]/15">
                  <Phone className="w-4 h-4 text-[#ECC870] shrink-0" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <a href="tel:9492247495" className="hover:text-[#ECC870] font-semibold text-white">9492247495</a>
                    <span className="text-neutral-500">•</span>
                    <a href="tel:9949390829" className="hover:text-[#ECC870] font-semibold text-white">9949390829</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#ECC870] shrink-0" />
                  <span className="text-neutral-300">Desk Hours: 9:00 AM – 10:00 PM IST (All 7 Days)</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919949390829?text=Hi%20Nashwan%20Catering%2C%20I%20would%20like%20to%20speak%20with%20your%20banquet%20manager."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-montserrat font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct Banquet Desk on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Link to Custom Menu Builder */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B1E38] to-[#021B3A] border border-[#ECC870]/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-cormorant text-lg text-white font-medium">
                  Want to Handpick Every Dish?
                </h4>
                <p className="font-lato text-xs text-neutral-300">
                  Explore our 900+ dish master database with live dish checkboxes.
                </p>
              </div>
              <button
                onClick={() => onNavigate('custom')}
                className="shrink-0 p-2.5 rounded-full bg-[#ECC870] text-[#01142B] hover:scale-105 transition-transform"
                title="Go to Custom Menu Builder"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Page Footer */}
      <Footer 
        onNavigate={onNavigate} 
        onOpenBooking={() => onNavigate('quote')} 
      />
    </div>
  );
}
