import React, { useState } from 'react';
import { X, Calendar, Users, Phone, User, Clock, Utensils, CheckCircle2, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Royal Wedding Banquet',
    eventDate: '',
    guestCount: '250 - 500 Guests',
    cuisinePreference: 'Multi-Cuisine Royal Spread',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    
    // Construct message
    const message = `Hello Nashwan Catering,%0A%0AI would like to book an event:%0A• Name: ${encodeURIComponent(formData.name)}%0A• Phone: ${encodeURIComponent(formData.phone)}%0A• Event: ${encodeURIComponent(formData.eventType)}%0A• Date: ${encodeURIComponent(formData.eventDate || 'To be decided')}%0A• Guests: ${encodeURIComponent(formData.guestCount)}%0A• Cuisine: ${encodeURIComponent(formData.cuisinePreference)}%0A• Notes: ${encodeURIComponent(formData.notes || 'None')}`;
    
    onBookingSuccess(formData);
    onClose();

    // Optionally open WhatsApp with pre-filled details to 9492247495
    window.open(`https://wa.me/919492247495?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0D0B09] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-[#ECC870] hover:bg-[#D4AF37]/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#ECC870] text-xs font-semibold uppercase tracking-wider mb-2">
            VIP Event Reservations
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5CE] via-[#ECC870] to-[#C5A059]">Celebration</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            Fill the reservation details below or call directly at <span className="text-[#ECC870] font-semibold">9492247495</span> / <span className="text-[#ECC870] font-semibold">9949390829</span>.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Your Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Mohammed Rasheed"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Phone Number *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Event Type</label>
              <select 
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
              >
                <option value="Royal Wedding Banquet">Royal Wedding Banquet</option>
                <option value="Grand Reception & Valima">Grand Reception & Valima</option>
                <option value="Corporate Gala & Summit">Corporate Gala & Summit</option>
                <option value="Sangeet & Haldi Celebration">Sangeet & Haldi Celebration</option>
                <option value="Traditional Dastarkhwan Feast">Traditional Dastarkhwan Feast</option>
                <option value="Private VIP Dining">Private VIP Dining</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Event Date</label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                <input 
                  type="date" 
                  value={formData.eventDate}
                  onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                  className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Estimated Guests</label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                <select 
                  value={formData.guestCount}
                  onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                  className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
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
              <label className="block text-xs font-medium text-neutral-300 mb-1">Cuisine Preference</label>
              <div className="relative">
                <Utensils className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                <select 
                  value={formData.cuisinePreference}
                  onChange={(e) => setFormData({...formData, cuisinePreference: e.target.value})}
                  className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors"
                >
                  <option value="Multi-Cuisine Royal Spread">Multi-Cuisine Royal Spread</option>
                  <option value="Authentic Hyderabadi Dum Dastarkhwan">Authentic Hyderabadi Dum Dastarkhwan</option>
                  <option value="Mughlai & Tandoori Specialties">Mughlai & Tandoori Specialties</option>
                  <option value="Pure Veg Royal Banqueting">Pure Veg Royal Banqueting</option>
                  <option value="Continental & Live Counters">Continental & Live Counters</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">Special Preferences or Venue</label>
            <textarea 
              rows="3"
              placeholder="Mention venue location, dietary guidelines, live counter preferences..."
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="w-full bg-[#14120F] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ECC870] transition-colors resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#B89228] text-black font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:scale-[1.02] transition-transform"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm & Send Inquiry</span>
            </button>

            <a
              href="https://wa.me/919492247495?text=Hello%20Nashwan%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20event%20catering."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-[#D4AF37]/50 hover:bg-[#D4AF37]/15 text-[#ECC870] text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
