import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingModal from './components/BookingModal';
import CustomMenuModal from './components/CustomMenuModal';
import MenuModal from './components/MenuModal';
import GalleryModal from './components/GalleryModal';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import Toast from './components/Toast';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [customMenuOpen, setCustomMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [toast, setToast] = useState(null);

  const handleBookingSuccess = (data) => {
    setToast({
      title: 'Reservation Request Received',
      message: `Thank you ${data.name}. We have logged your request for ${data.eventType}. Our banquet manager will call you shortly.`
    });
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleFeatureClick = (feature) => {
    if (feature.id === 'custom') {
      setCustomMenuOpen(true);
    } else if (feature.id === 'events') {
      setBookingOpen(true);
    } else {
      setAboutOpen(true);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#080706] text-[#FDFBF7] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar 
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCustomMenu={() => setCustomMenuOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenGallery={() => setGalleryOpen(true)}
        onOpenAbout={() => setAboutOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onSelectService={handleServiceSelect}
      />

      {/* Hero Section (Single Viewport - No Scroll/Drag Down) */}
      <main className="flex-1 h-full w-full overflow-hidden">
        <Hero 
          onOpenBooking={() => setBookingOpen(true)}
          onOpenCustomMenu={() => setCustomMenuOpen(true)}
          onFeatureClick={handleFeatureClick}
          onOpenMenu={() => setMenuOpen(true)}
        />
      </main>

      {/* Modals & Popups */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        onBookingSuccess={handleBookingSuccess}
      />

      <CustomMenuModal 
        isOpen={customMenuOpen} 
        onClose={() => setCustomMenuOpen(false)} 
        onCustomMenuSubmit={(items) => {
          setToast({
            title: 'Custom Menu Saved',
            message: `Selected ${items.length} items. We will prepare an itemized proposal.`
          });
        }}
      />

      <MenuModal 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onSelectMenuForBooking={(menuTitle) => {
          setBookingOpen(true);
        }}
      />

      <GalleryModal 
        isOpen={galleryOpen} 
        onClose={() => setGalleryOpen(false)} 
      />

      <AboutModal 
        isOpen={aboutOpen} 
        onClose={() => setAboutOpen(false)} 
      />

      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />

      <ServiceDetailModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceTitle) => {
          setSelectedService(null);
          setBookingOpen(true);
        }}
      />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
