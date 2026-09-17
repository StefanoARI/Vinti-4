import React, { useState } from 'react';
import { ATELIER_INFO, FAQS } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContattiPageProps {
  onOpenBooking: () => void;
}

export const ContattiPage: React.FC<ContattiPageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formReason, setFormReason] = useState('Consulenza Taglio & Colore');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Buongiorno Nicole Vinti Atelier,\nScrivo tramite la pagina Contatti del sito:\n- Nome: ${formName || 'Cliente'}\n- Motivo: ${formReason}\n- Telefono: ${formPhone}\n- Messaggio: ${formMessage || 'Vorrei maggiori informazioni'}`
    );
    window.open(`https://wa.me/390331777600?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" />
          Atelier &amp; Private Reception &bull; Gallarate (VA)
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f4ed]">
          Contatti &amp; Posizione
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
          Siamo a Gallarate in Via E. Ferrario 24, a pochi minuti da Milano Malpensa e dalle principali arterie lombarde e svizzere. Riceviamo con piacere solo su appuntamento.
        </p>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Contact info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#14120f] border border-[#2d2419] rounded-3xl p-8 space-y-6">
              <h2 className="font-editorial text-2xl text-[#f5f1ea]">
                L'Atelier Nicole Vinti
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-[#ded9ce]">
                  <MapPin className="w-5 h-5 text-[#c99f73] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Indirizzo Atelier</strong>
                    <span>{ATELIER_INFO.address}</span><br />
                    <span>{ATELIER_INFO.cap} {ATELIER_INFO.city} ({ATELIER_INFO.province}) - Italia</span>
                    <div className="text-[11px] text-[#8e897e] mt-1">
                      Coordinate GEO: 45.66063° N, 8.79321° E
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#ded9ce]">
                  <Phone className="w-5 h-5 text-[#c99f73] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Telefono Reception</strong>
                    <a href={`tel:${ATELIER_INFO.phone}`} className="text-[#c99f73] hover:underline">
                      {ATELIER_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#ded9ce]">
                  <MessageSquare className="w-5 h-5 text-[#c99f73] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">WhatsApp Concierge</strong>
                    <a 
                      href={ATELIER_INFO.whatsappDirectUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#25D366] hover:underline"
                    >
                      {ATELIER_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#ded9ce]">
                  <Mail className="w-5 h-5 text-[#c99f73] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Email Privata</strong>
                    <a href={`mailto:${ATELIER_INFO.email}`} className="hover:text-white">
                      {ATELIER_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari */}
              <div className="pt-4 border-t border-[#251d14] space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#c99f73] font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Orari di Ricevimento
                </h3>
                <div className="space-y-1.5 text-xs text-[#9d978d]">
                  {ATELIER_INFO.openingHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-[#1f1a14] last:border-b-0">
                      <span className="font-medium text-[#c99f73]">{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#7d786f] italic">
                  * Giovedì apertura serale prolungata fino alle 20:00 per trattamenti lounge dopolavoro.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] hover:brightness-110 text-black font-semibold text-xs uppercase tracking-widest shadow-lg shadow-[#b88654]/20 transition-all"
                >
                  Prenota un Appuntamento
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#14120f] border border-[#2d2419] rounded-3xl p-8 sm:p-10">
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#c99f73] font-semibold">
                Scrivi alla Nostra Concierge
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f1ea]">
                Richiesta Informazioni o Consulenza Privata
              </h2>
              <p className="text-xs text-[#9a958b]">
                Compila il modulo per qualsiasi richiesta specifica. Ti risponderemo telefonicamente o via email entro 24 ore lavorative.
              </p>
            </div>

            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#b88654]/15 border border-[#b88654] flex items-center justify-center mx-auto text-[#c99f73]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl text-white">Messaggio Inviato con Successo</h3>
                <p className="text-xs text-[#9a958b] max-w-md mx-auto leading-relaxed">
                  Grazie <strong className="text-white">{formName}</strong>. Abbiamo ricevuto la tua richiesta per "{formReason}". Verrai ricontattata dal nostro team al più presto.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppContact}
                    className="px-6 py-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Apri Chat WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a7a296] mb-1">Nome e Cognome *</label>
                    <input
                      type="text"
                      required
                      placeholder="Il tuo nome"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      className="w-full bg-[#1c1813] border border-[#35291b] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a7a296] mb-1">Telefono Cellulare *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+39 ..."
                      value={formPhone}
                      onChange={e => setFormPhone(e.target.value)}
                      className="w-full bg-[#1c1813] border border-[#35291b] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a7a296] mb-1">Indirizzo Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="email@dominio.it"
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      className="w-full bg-[#1c1813] border border-[#35291b] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a7a296] mb-1">Motivo della Richiesta</label>
                    <select
                      value={formReason}
                      onChange={e => setFormReason(e.target.value)}
                      className="w-full bg-[#1c1813] border border-[#35291b] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                    >
                      <option value="Consulenza Taglio & Colore">Consulenza Taglio &amp; Colore</option>
                      <option value="Infoltimento & Hair Integration">Infoltimento &amp; Hair Integration</option>
                      <option value="Percorso Sposa & Bridal">Percorso Sposa &amp; Bridal</option>
                      <option value="Consulenza d'Immagine Total Look">Consulenza d'Immagine Total Look</option>
                      <option value="Informazioni Corsi Academy">Informazioni Corsi Academy</option>
                      <option value="Gift Card di Lusso">Gift Card di Lusso</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a7a296] mb-1">Messaggio o Note</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Raccontaci le tue esigenze o desideri..."
                    value={formMessage}
                    onChange={e => setFormMessage(e.target.value)}
                    className="w-full bg-[#1c1813] border border-[#35291b] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-[#7c776e]">
                    I tuoi dati sono protetti in conformità al GDPR.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#b88654]/20 transition-all"
                  >
                    Invia Richiesta
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Interactive Google Maps / GEO Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14120f] border border-[#2d2419] rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c99f73] font-semibold">
                Come Raggiungerci
              </span>
              <h3 className="font-editorial text-2xl text-[#f5f1ea]">
                Via E. Ferrario 24 &bull; Gallarate (Varese)
              </h3>
            </div>
            <a
              href={ATELIER_INFO.geo.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#b88654] text-[#c99f73] hover:bg-[#b88654] hover:text-black text-xs uppercase tracking-wider transition-all self-start sm:self-auto"
            >
              Apri Navigatore GPS
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Styled Map Embed */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#35291b]">
            <iframe
              title="Mappa Nicole Vinti Atelier Gallarate"
              src="https://maps.google.com/maps?q=Via%20E.%20Ferrario%2024%20Gallarate%20VA&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%]"
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#9d978e] pt-2">
            <div className="p-3 bg-[#1a1713] rounded-xl border border-[#2d2419]">
              <strong className="block text-[#f2eee7] mb-0.5">Da Milano (30 min)</strong>
              Autostrada A8 Milano-Laghi, uscita Gallarate. Proseguire per il centro storico.
            </div>
            <div className="p-3 bg-[#1a1713] rounded-xl border border-[#2d2419]">
              <strong className="block text-[#f2eee7] mb-0.5">Da Malpensa (10 min)</strong>
              SS336 direzione Gallarate. Ideale per clienti in transito o residenti esteri.
            </div>
            <div className="p-3 bg-[#1a1713] rounded-xl border border-[#2d2419]">
              <strong className="block text-[#f2eee7] mb-0.5">Dalla Svizzera / Varese (20 min)</strong>
              Raccordo A8 direzione Milano, uscita Gallarate Ovest. Parcheggio dedicato disponibile.
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#c99f73] font-semibold">
            Domande Frequenti
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#f7f4ed]">
            Tutto Ciò che Desideri Sapere
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-[#14120f] border border-[#2d2419] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between text-sm font-medium text-[#f5f1ea] hover:text-[#c99f73] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#c99f73] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-[#a39d91] leading-relaxed border-t border-[#251d14]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
