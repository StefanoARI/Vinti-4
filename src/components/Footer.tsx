import React from 'react';
import { PageId } from '../types';
import { ATELIER_INFO } from '../data/content';
import { MapPin, Phone, Mail, Award, Clock, ArrowUpRight, Instagram, Facebook, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#080706] border-t border-[#2a2118] text-[#b8b0a5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img 
                src="/images/logo-white.png" 
                alt="Nicole Vinti Logo" 
                className="h-12 sm:h-13 w-auto aspect-[454/624] object-contain opacity-95 shrink-0"
              />
              <div>
                <span className="font-editorial text-2xl tracking-[0.09em] text-[#f5f1ea] block leading-tight">
                  NICOLE VINTI
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#c99f73] block mt-0.5">
                  Haute Coiffure &amp; Image Consulting
                </span>
              </div>
            </div>
            <p className="text-sm text-[#8e857b] leading-relaxed">
              Dal 1987, l'eccellenza sartoriale del capello e la consulenza d'immagine totale nel cuore di Gallarate. Un percorso multisensoriale dedicato a chi esige unicità ed eleganza senza compromessi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#3b2e21] flex items-center justify-center text-[#c49f75] hover:border-[#b88654] hover:text-[#b88654] transition-colors"
                aria-label="Instagram Nicole Vinti"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#3b2e21] flex items-center justify-center text-[#c49f75] hover:border-[#b88654] hover:text-[#b88654] transition-colors"
                aria-label="Facebook Nicole Vinti"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#c99f73] flex items-center gap-1 ml-2 border-l border-[#35271a] pl-3">
                <Award className="w-3.5 h-3.5 text-[#b88654]" />
                ICD Intercoiffure Mondial
              </span>
            </div>
          </div>

          {/* Col 2: Navigazione Rapida */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#e0dad0] font-semibold">
              Esplora l'Atelier
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Home Experience</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('chi-siamo')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Chi Siamo &amp; La Visione</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('atelier', 'taglio-styling')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Taglio &amp; Styling Bespoke</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('atelier', 'colore')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Colore &amp; Balayage Sartoriale</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('atelier', 'hair-integration')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Hair Integration &amp; Infoltimento</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('sposa-immagine', 'sposa')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Sposa &amp; Percorso Bridal</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('gift-card')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Gift Card di Lusso</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('corsi')} 
                  className="hover:text-[#c99f73] transition-colors flex items-center gap-1.5"
                >
                  <span>Academy &amp; Masterclass</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Orari & Ricevimento */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#e0dad0] font-semibold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#b88654]" />
              Orari di Ricevimento
            </h4>
            <div className="space-y-1.5 text-xs text-[#9d9489]">
              {ATELIER_INFO.openingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between py-0.5 border-b border-[#211a14]">
                  <span className="font-medium text-[#c49f75]">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#786e64] italic pt-1">
              * Giovedì orario continuato con aperitivo lounge serale fino alle ore 20:00.
            </p>
          </div>

          {/* Col 4: GEO Localizzazione & Prenotazione */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#e0dad0] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#b88654]" />
              Posizione &amp; Contatti
            </h4>
            <div className="text-xs space-y-2 text-[#9d9489]">
              <p className="text-[#f1ede6] font-medium">
                {ATELIER_INFO.address}<br />
                {ATELIER_INFO.cap} {ATELIER_INFO.city} ({ATELIER_INFO.province}) - Italia
              </p>
              <p className="text-[11px] text-[#8a7f74]">
                A 10 min dall'aeroporto di Milano Malpensa e 30 min da Milano Centro.
              </p>
              <div className="pt-1">
                <a 
                  href={`tel:${ATELIER_INFO.phone}`} 
                  className="block text-[#c99f73] hover:underline font-medium text-sm"
                >
                  Tel: {ATELIER_INFO.phone}
                </a>
                <a 
                  href={`mailto:${ATELIER_INFO.email}`} 
                  className="block text-[#a99e90] hover:text-white text-xs mt-0.5"
                >
                  {ATELIER_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-lg border border-[#b88654]/60 text-[#c99f73] hover:bg-[#b88654] hover:text-black font-semibold text-xs uppercase tracking-widest transition-all"
              >
                Riserva un Appuntamento
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & GEO notices */}
        <div className="border-t border-[#231b14] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#70665d] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Nicole Vinti - Atelier Haute Coiffure. P.IVA 02746190128. Tutti i diritti riservati.
          </div>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#b88654]" />
              Privacy Policy &amp; Cookie Law
            </span>
            <span>&bull;</span>
            <span>Gallarate (VA) · Coordinate: 45.66063° N, 8.79321° E</span>
            <span>&bull;</span>
            <a 
              href={ATELIER_INFO.geo.mapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-[#c49f75] hover:underline inline-flex items-center gap-0.5"
            >
              Apri in Google Maps <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
