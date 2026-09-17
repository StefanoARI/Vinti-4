import React, { useState, useEffect } from 'react';
import { PageId, AtelierAnchor, SposaAnchor } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ChiSiamoPage } from './pages/ChiSiamoPage';
import { AtelierPage } from './pages/AtelierPage';
import { SposaImmaginePage } from './pages/SposaImmaginePage';
import { GiftCardPage } from './pages/GiftCardPage';
import { CorsiPage } from './pages/CorsiPage';
import { ContattiPage } from './pages/ContattiPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentAnchor, setCurrentAnchor] = useState<string | undefined>(undefined);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Dynamic SEO page title update based on active page
  useEffect(() => {
    switch (currentPage) {
      case 'home':
        document.title = "Nicole Vinti | Atelier Haute Coiffure & Total Look | Gallarate (VA)";
        break;
      case 'chi-siamo':
        document.title = "Chi Siamo & La Visione | Nicole Vinti Atelier Gallarate";
        break;
      case 'atelier':
        document.title = "Atelier Capelli: Taglio, Colore & Hair Integration | Nicole Vinti";
        break;
      case 'sposa-immagine':
        document.title = "Sposa Haute Couture & Consulenza d'Immagine | Nicole Vinti Gallarate";
        break;
      case 'gift-card':
        document.title = "Luxury Gift Card | Esperienze Salon Emotion | Nicole Vinti";
        break;
      case 'corsi':
        document.title = "Masterclass & Corsi Academy per Hairstylist | Nicole Vinti";
        break;
      case 'contatti':
        document.title = "Contatti, Orari & GEO Posizione Gallarate | Nicole Vinti Atelier";
        break;
      default:
        document.title = "Nicole Vinti | Atelier Haute Coiffure & Image Consulting";
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId, anchor?: string) => {
    setCurrentPage(page);
    setCurrentAnchor(anchor);
    if (!anchor) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f1ede5] flex flex-col selection:bg-[#b88654] selection:text-[#0b0b0e]">
      {/* Luxury Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'chi-siamo' && (
          <ChiSiamoPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'atelier' && (
          <AtelierPage
            initialAnchor={currentAnchor}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'sposa-immagine' && (
          <SposaImmaginePage
            initialAnchor={currentAnchor}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'gift-card' && (
          <GiftCardPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'corsi' && (
          <CorsiPage />
        )}

        {currentPage === 'contatti' && (
          <ContattiPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Luxury Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Flow Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedService}
      />

      {/* WhatsApp Concierge Floating Contact */}
      <WhatsAppButton />
    </div>
  );
}
