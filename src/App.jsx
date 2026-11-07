import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import CustomCateringPage from './pages/CustomCateringPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BookingModal from './components/BookingModal';
import CustomMenuModal from './components/CustomMenuModal';
import Toast from './components/Toast';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [customMenuOpen, setCustomMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const handleBookingSuccess = (data) => {
    setToast({
      title: 'Reservation Request Received',
      message: `Thank you ${data.name}. We have logged your request for ${data.eventType}. Our banquet manager will call you shortly.`
    });
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`bg-[#080706] text-[#FDFBF7] font-sans selection:bg-[#E5A947]/30 selection:text-white ${
      activePage === 'home' ? 'h-screen w-screen overflow-hidden' : 'min-h-screen'
    }`}>
      
      {/* Universal Top Navigation - Matching reference screenshot */}
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCustomMenu={() => handleNavigate('custom')}
        onOpenMenu={() => handleNavigate('menu')}
        onOpenGallery={() => handleNavigate('gallery')}
        onOpenAbout={() => handleNavigate('about')}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Pages Container: EXACT untouched home page when activePage === 'home' */}
      {activePage === 'home' && (
        <main className="flex-1 h-full w-full overflow-hidden">
          <Hero 
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCustomMenu={() => handleNavigate('custom')}
            onOpenMenu={() => handleNavigate('menu')}
          />
        </main>
      )}

      {activePage === 'about' && (
        <AboutPage 
          onNavigate={handleNavigate} 
          onOpenBooking={() => setBookingOpen(true)} 
        />
      )}

      {activePage === 'menu' && (
        <MenuPage 
          onNavigate={handleNavigate} 
          onOpenBooking={() => setBookingOpen(true)} 
          onOpenCustomMenu={() => setCustomMenuOpen(true)}
        />
      )}

      {activePage === 'custom' && (
        <CustomCateringPage 
          onNavigate={handleNavigate} 
          onOpenBooking={() => setBookingOpen(true)} 
          onOpenCustomMenu={() => setCustomMenuOpen(true)}
        />
      )}

      {activePage === 'gallery' && (
        <GalleryPage 
          onNavigate={handleNavigate} 
          onOpenBooking={() => setBookingOpen(true)} 
        />
      )}

      {activePage === 'contact' && (
        <ContactPage 
          onNavigate={handleNavigate} 
          onOpenBooking={() => setBookingOpen(true)} 
        />
      )}

      {/* Booking & Quote Overlays */}
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

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
