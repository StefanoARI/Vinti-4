import React, { useState, useEffect } from 'react';
import { PageId, AtelierAnchor, SposaAnchor } from '../types';
import { ATELIER_INFO } from '../data/content';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Scissors, 
  Sparkles, 
  HeartHandshake, 
  Gift, 
  GraduationCap, 
  MapPin, 
  Clock 
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtelierDropdownOpen, setIsAtelierDropdownOpen] = useState(false);
  const [isSposaDropdownOpen, setIsSposaDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageId, anchor?: string) => {
    setIsMobileMenuOpen(false);
    setIsAtelierDropdownOpen(false);
    setIsSposaDropdownOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-[#090807] border-b border-[#282119] text-[#c99f73] text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="flex items-center gap-1.5 tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#b88654] shrink-0" />
              Gallarate (VA) · Via E. Ferrario 24
            </span>
            <span className="hidden md:inline text-[#47392b]">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#beb5ab]">
              <Clock className="w-3.5 h-3.5 text-[#b88654] shrink-0" />
              Mar-Sab 09:00 - 18:30 (Gio Lounge fino alle 20:00)
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a 
              href={`tel:${ATELIER_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b88654] shrink-0" />
              {ATELIER_INFO.phone}
            </a>
            <span className="text-[#47392b]">|</span>
            <span className="uppercase tracking-widest text-[#d8b792] font-medium">
              Solo su Appuntamento
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0d0c0a]/98 backdrop-blur-md shadow-2xl border-b border-[#2d2318]/90 py-2.5' 
            : 'bg-gradient-to-b from-[#0b0a08]/95 via-[#0b0a08]/85 to-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-4">
          {/* Brand Logo & Editorial Typography */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer text-left shrink-0"
            id="brand-logo-btn"
          >
            <img 
              src="/images/logo-white.png" 
              alt="Nicole Vinti Haute Coiffure Logo" 
              className="h-11 sm:h-12 md:h-13 w-auto aspect-[454/624] object-contain shrink-0 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="flex flex-col justify-center shrink-0">
              <span className="block font-editorial text-xl sm:text-2xl md:text-[26px] tracking-[0.08em] sm:tracking-[0.1em] font-normal text-[#f7f4ed] group-hover:text-[#c99f73] transition-colors leading-tight">
                NICOLE VINTI
              </span>
              <span className="block text-[9px] sm:text-[10px] md:text-[10.5px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#c99f73] font-light leading-tight mt-0.5">
                Haute Coiffure &bull; Gallarate
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Responsive spacing & no-wrap to prevent squishing) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6 shrink-0">
            {/* Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`relative px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                currentPage === 'home' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
              }`}
              id="nav-home-btn"
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
              )}
            </button>

            {/* Chi Siamo */}
            <button
              onClick={() => handleLinkClick('chi-siamo')}
              className={`relative px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                currentPage === 'chi-siamo' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
              }`}
              id="nav-chi-siamo-btn"
            >
              Chi Siamo
              {currentPage === 'chi-siamo' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
              )}
            </button>

            {/* Atelier Capelli (Dropdown with anchors) */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAtelierDropdownOpen(true)}
              onMouseLeave={() => setIsAtelierDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('atelier')}
                className={`relative flex items-center gap-1 px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                  currentPage === 'atelier' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
                }`}
                id="nav-atelier-btn"
              >
                <span>Atelier Capelli</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#b88654]" />
                {currentPage === 'atelier' && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
                )}
              </button>

              {/* Sub-menu Dropdown */}
              <div 
                className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                  isAtelierDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-[#14120f]/98 border border-[#3b2e21] rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                  <button
                    onClick={() => handleLinkClick('atelier', 'taglio-styling')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm text-[#e4e0d7] hover:bg-[#231b14] hover:text-[#c99f73] transition-all flex items-center gap-2.5"
                  >
                    <Scissors className="w-4 h-4 text-[#b88654] shrink-0" />
                    <div>
                      <div className="font-medium text-[13px] leading-tight">Taglio &amp; Styling</div>
                      <div className="text-[11px] text-[#938a80] mt-0.5">Scultura morfologica bespoke</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLinkClick('atelier', 'colore')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm text-[#e4e0d7] hover:bg-[#231b14] hover:text-[#c99f73] transition-all flex items-center gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#b88654] shrink-0" />
                    <div>
                      <div className="font-medium text-[13px] leading-tight">Colore &amp; Balayage</div>
                      <div className="text-[11px] text-[#938a80] mt-0.5">Luce a mano libera &amp; sfumature</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLinkClick('atelier', 'hair-integration')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm text-[#e4e0d7] hover:bg-[#231b14] hover:text-[#c99f73] transition-all flex items-center gap-2.5"
                  >
                    <HeartHandshake className="w-4 h-4 text-[#b88654] shrink-0" />
                    <div>
                      <div className="font-medium text-[13px] leading-tight">Hair Integration</div>
                      <div className="text-[11px] text-[#938a80] mt-0.5">Infoltimento invisibile naturale</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Sposa & Immagine (Dropdown with anchors) */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSposaDropdownOpen(true)}
              onMouseLeave={() => setIsSposaDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('sposa-immagine')}
                className={`relative flex items-center gap-1 px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                  currentPage === 'sposa-immagine' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
                }`}
                id="nav-sposa-btn"
              >
                <span>Sposa &amp; Immagine</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#b88654]" />
                {currentPage === 'sposa-immagine' && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
                )}
              </button>

              {/* Sub-menu Dropdown */}
              <div 
                className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                  isSposaDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-[#14120f]/98 border border-[#3b2e21] rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                  <button
                    onClick={() => handleLinkClick('sposa-immagine', 'sposa')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm text-[#e4e0d7] hover:bg-[#231b14] hover:text-[#c99f73] transition-all"
                  >
                    <div className="font-medium text-[13px] leading-tight">Sposa Haute Couture</div>
                    <div className="text-[11px] text-[#938a80] mt-0.5">Acconciatura, make-up &amp; assistenza</div>
                  </button>

                  <button
                    onClick={() => handleLinkClick('sposa-immagine', 'consulenza')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm text-[#e4e0d7] hover:bg-[#231b14] hover:text-[#c99f73] transition-all"
                  >
                    <div className="font-medium text-[13px] leading-tight">Consulenza d'Immagine</div>
                    <div className="text-[11px] text-[#938a80] mt-0.5">Total Look &amp; Armocromia</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Gift Card */}
            <button
              onClick={() => handleLinkClick('gift-card')}
              className={`relative px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                currentPage === 'gift-card' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
              }`}
              id="nav-gift-card-btn"
            >
              Gift Card
              {currentPage === 'gift-card' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
              )}
            </button>

            {/* Corsi */}
            <button
              onClick={() => handleLinkClick('corsi')}
              className={`relative px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                currentPage === 'corsi' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
              }`}
              id="nav-corsi-btn"
            >
              Corsi
              {currentPage === 'corsi' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
              )}
            </button>

            {/* Contatti */}
            <button
              onClick={() => handleLinkClick('contatti')}
              className={`relative px-2 py-2 text-[12px] xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors whitespace-nowrap ${
                currentPage === 'contatti' ? 'text-[#c99f73]' : 'text-[#ded9cf] hover:text-[#c99f73]'
              }`}
              id="nav-contatti-btn"
            >
              Contatti
              {currentPage === 'contatti' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] rounded-full" />
              )}
            </button>
          </div>

          {/* Luxury CTA Button "Prenota Ora" with Warm Bronze styling */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-4 xl:px-5 py-2.5 rounded-full border border-[#b88654] text-[#0b0a08] font-semibold text-[11.5px] xl:text-xs uppercase tracking-[0.12em] bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] shadow-[0_2px_15px_rgba(184,134,84,0.25)] hover:shadow-[0_4px_22px_rgba(184,134,84,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              id="nav-prenota-ora-btn"
            >
              <span className="relative z-10 flex items-center gap-1.5 xl:gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Prenota Ora</span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger & Quick CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black shadow-md whitespace-nowrap"
            >
              Prenota
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#f5f1ea] hover:text-[#c99f73] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#11100e] border-b border-[#30251c] px-6 py-6 space-y-3 max-h-[85vh] overflow-y-auto animate-fadeIn">
            <button
              onClick={() => handleLinkClick('home')}
              className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] py-2.5 border-b border-[#211b15] transition-colors ${
                currentPage === 'home' ? 'text-[#c99f73] font-semibold' : 'text-[#dfdcd6] hover:text-[#c99f73]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('chi-siamo')}
              className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] py-2.5 border-b border-[#211b15] transition-colors ${
                currentPage === 'chi-siamo' ? 'text-[#c99f73] font-semibold' : 'text-[#dfdcd6] hover:text-[#c99f73]'
              }`}
            >
              Chi Siamo
            </button>

            {/* Atelier Capelli Mobile Sublinks */}
            <div className="py-2.5 border-b border-[#211b15]">
              <button
                onClick={() => handleLinkClick('atelier')}
                className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] font-semibold transition-colors ${
                  currentPage === 'atelier' ? 'text-[#c99f73]' : 'text-[#dfdcd6] hover:text-[#c99f73]'
                }`}
              >
                Atelier Capelli
              </button>
              <div className="pl-4 mt-2.5 space-y-2 text-xs text-[#a99e90]">
                <button
                  onClick={() => handleLinkClick('atelier', 'taglio-styling')}
                  className="block text-left hover:text-[#c99f73] py-1 transition-colors"
                >
                  &rarr; Taglio &amp; Styling
                </button>
                <button
                  onClick={() => handleLinkClick('atelier', 'colore')}
                  className="block text-left hover:text-[#c99f73] py-1 transition-colors"
                >
                  &rarr; Colore &amp; Balayage
                </button>
                <button
                  onClick={() => handleLinkClick('atelier', 'hair-integration')}
                  className="block text-left hover:text-[#c99f73] py-1 transition-colors"
                >
                  &rarr; Hair Integration
                </button>
              </div>
            </div>

            {/* Sposa & Immagine Mobile Sublinks */}
            <div className="py-2.5 border-b border-[#211b15]">
              <button
                onClick={() => handleLinkClick('sposa-immagine')}
                className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] font-semibold transition-colors ${
                  currentPage === 'sposa-immagine' ? 'text-[#c99f73]' : 'text-[#dfdcd6] hover:text-[#c99f73]'
                }`}
              >
                Sposa &amp; Immagine
              </button>
              <div className="pl-4 mt-2.5 space-y-2 text-xs text-[#a99e90]">
                <button
                  onClick={() => handleLinkClick('sposa-immagine', 'sposa')}
                  className="block text-left hover:text-[#c99f73] py-1 transition-colors"
                >
                  &rarr; Sposa Haute Couture
                </button>
                <button
                  onClick={() => handleLinkClick('sposa-immagine', 'consulenza')}
                  className="block text-left hover:text-[#c99f73] py-1 transition-colors"
                >
                  &rarr; Consulenza d'Immagine &amp; Armocromia
                </button>
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('gift-card')}
              className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] py-2.5 border-b border-[#211b15] transition-colors ${
                currentPage === 'gift-card' ? 'text-[#c99f73] font-semibold' : 'text-[#dfdcd6] hover:text-[#c99f73]'
              }`}
            >
              Gift Card
            </button>

            <button
              onClick={() => handleLinkClick('corsi')}
              className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] py-2.5 border-b border-[#211b15] transition-colors ${
                currentPage === 'corsi' ? 'text-[#c99f73] font-semibold' : 'text-[#dfdcd6] hover:text-[#c99f73]'
              }`}
            >
              Corsi Academy
            </button>

            <button
              onClick={() => handleLinkClick('contatti')}
              className={`block w-full text-left text-[13px] uppercase tracking-[0.14em] py-2.5 border-b border-[#211b15] transition-colors ${
                currentPage === 'contatti' ? 'text-[#c99f73] font-semibold' : 'text-[#dfdcd6] hover:text-[#c99f73]'
              }`}
            >
              Contatti &amp; Orari
            </button>

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-[0.14em] shadow-lg flex items-center justify-center gap-2 transition-all hover:brightness-105"
              >
                <Calendar className="w-4 h-4" />
                Prenota Ora il Tuo Trattamento
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
