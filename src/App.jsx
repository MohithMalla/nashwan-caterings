import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import CelebrationSection from './components/CelebrationSection';
import MenuPricingSection from './components/MenuPricingSection';
import HomeServicesSection from './components/HomeServicesSection';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import CustomCateringPage from './pages/CustomCateringPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import CustomMenuModal from './components/CustomMenuModal';
import Toast from './components/Toast';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [bookingOpen, setBookingOpen] = useState(false);
  const [customMenuOpen, setCustomMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Derive activePage string from URL path for Navbar highlighting
  const getActivePage = () => {
    const path = location.pathname.replace(/^\//, '');
    if (!path || path === 'home') return 'home';
    if (path.startsWith('about')) return 'about';
    if (path.startsWith('menu')) return 'menu';
    if (path.startsWith('custom')) return 'custom';
    if (path.startsWith('services')) return 'custom';
    if (path.startsWith('gallery')) return 'gallery';
    if (path.startsWith('contact')) return 'contact';
    return 'home';
  };

  const activePage = getActivePage();

  const handleBookingSuccess = (data) => {
    setToast({
      title: 'Reservation Request Received',
      message: `Thank you ${data.name}. We have logged your request for ${data.eventType}. Our banquet manager will call you shortly.`
    });
  };

  const handleNavigate = (page, category) => {
    let target = page === 'home' ? '/' : `/${page}`;
    if (page === 'menu' && category) {
      target = `/menu?category=${category}`;
    }
    navigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#01142B] text-[#FDFBF7] font-sans selection:bg-[#E5A947]/30 selection:text-white min-h-screen">
      
      {/* Universal Top Navigation - Connected to Router */}
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCustomMenu={() => handleNavigate('custom')}
        onOpenMenu={() => handleNavigate('menu', 'veg')}
        onOpenGallery={() => handleNavigate('gallery')}
        onOpenAbout={() => handleNavigate('about')}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Declarative Routes for every page */}
      <Routes>
        
        {/* ==================== 1. HOME ROUTE ==================== */}
        <Route path="/" element={
          <main className="w-full">
            {/* Top Hero Section */}
            <Hero 
              onOpenBooking={() => setBookingOpen(true)}
              onOpenCustomMenu={() => handleNavigate('custom')}
              onOpenMenu={() => handleNavigate('menu', 'veg')}
            />

            {/* Celebration Occasions Selector */}
            <CelebrationSection 
              onNavigate={handleNavigate}
              onOpenBooking={() => setBookingOpen(true)}
              onOpenCustomMenu={() => handleNavigate('custom')}
            />

            {/* Curated Menu Pricing Section - Transparent Veg & Non-Veg Packages */}
            <MenuPricingSection 
              onNavigate={handleNavigate}
              onOpenBooking={() => setBookingOpen(true)}
            />

            {/* Main Top Services & Sections below Hero */}
            <HomeServicesSection 
              onNavigate={handleNavigate}
              onOpenBooking={() => setBookingOpen(true)}
              onOpenCustomMenu={() => handleNavigate('custom')}
            />

            {/* Home Page Footer */}
            <Footer 
              onNavigate={handleNavigate}
              onOpenBooking={() => setBookingOpen(true)}
            />
          </main>
        } />
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* ==================== 2. ABOUT ROUTE ==================== */}
        <Route path="/about" element={
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenBooking={() => setBookingOpen(true)} 
          />
        } />

        {/* ==================== 3. MENU ROUTE ==================== */}
        <Route path="/menu" element={
          <MenuPage 
            onNavigate={handleNavigate} 
            onOpenBooking={() => setBookingOpen(true)} 
            onOpenCustomMenu={() => handleNavigate('custom')}
          />
        } />

        {/* ==================== 4. CUSTOM MENU / SERVICES ROUTE ==================== */}
        <Route path="/custom" element={
          <CustomCateringPage 
            onNavigate={handleNavigate} 
            onOpenBooking={() => setBookingOpen(true)} 
            onOpenCustomMenu={() => handleNavigate('custom')}
          />
        } />
        <Route path="/custom-menu" element={<Navigate to="/custom" replace />} />
        <Route path="/services" element={<Navigate to="/custom" replace />} />

        {/* ==================== 5. GALLERY ROUTE ==================== */}
        <Route path="/gallery" element={
          <GalleryPage 
            onNavigate={handleNavigate} 
            onOpenBooking={() => setBookingOpen(true)} 
          />
        } />

        {/* ==================== 6. CONTACT ROUTE ==================== */}
        <Route path="/contact" element={
          <ContactPage 
            onNavigate={handleNavigate} 
            onOpenBooking={() => setBookingOpen(true)} 
          />
        } />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Persistent Mobile Bottom Navigation (Home, About, Menu, Custom, Gallery, Contact) */}
      <BottomNav 
        activePage={activePage} 
        onNavigate={handleNavigate} 
      />

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
