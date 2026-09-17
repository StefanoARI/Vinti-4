import React, { useEffect } from 'react';
import { AtelierAnchor, PageId } from '../types';
import { SERVICES } from '../data/content';
import { Scissors, Sparkles, HeartHandshake, Check, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface AtelierPageProps {
  initialAnchor?: string;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const AtelierPage: React.FC<AtelierPageProps> = ({
  initialAnchor,
  onNavigate,
  onOpenBooking
}) => {
  useEffect(() => {
    if (initialAnchor) {
      const el = document.getElementById(initialAnchor);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialAnchor]);

  const taglioServices = SERVICES.filter(s => s.category === 'taglio');
  const coloreServices = SERVICES.filter(s => s.category === 'colore');
  const integrationServices = SERVICES.filter(s => s.category === 'integration');

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
          Menu Haute Coiffure &bull; Atelier Gallarate
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f4ed]">
          Atelier Capelli
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
          Ogni capello racchiude una storia unica. Scopri le nostre tre grandi specializzazioni sartoriali: Taglio &amp; Styling Morfologico, Colore &amp; Balayage di Luce Pura, e Hair Integration Invisibile.
        </p>

        {/* Anchor Quick Jump Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#taglio-styling"
            className="px-5 py-2 rounded-full border border-[#3d3122] bg-[#14120f] text-xs uppercase tracking-wider text-[#c99f73] hover:border-[#b88654] transition-all flex items-center gap-2"
          >
            <Scissors className="w-3.5 h-3.5" />
            Taglio &amp; Styling
          </a>
          <a
            href="#colore"
            className="px-5 py-2 rounded-full border border-[#3d3122] bg-[#14120f] text-xs uppercase tracking-wider text-[#c99f73] hover:border-[#b88654] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Colore &amp; Balayage
          </a>
          <a
            href="#hair-integration"
            className="px-5 py-2 rounded-full border border-[#3d3122] bg-[#14120f] text-xs uppercase tracking-wider text-[#c99f73] hover:border-[#b88654] transition-all flex items-center gap-2"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            Hair Integration
          </a>
        </div>
      </section>

      {/* SECTION 1: TAGLIO & STYLING (#taglio-styling) */}
      <section id="taglio-styling" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[#2d2419] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              Specializzazione 01
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#f7f4ed]">
              Taglio &amp; Styling Couture
            </h2>
            <p className="text-xs sm:text-sm text-[#9c978d] max-w-xl">
              Precisione geometrica britannica unita all'estro e alla morbidezza italiana. Il taglio viene eseguito studiando l'ovale del viso e il naturale verso di crescita della chioma.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('taglio-nicole-vinti')}
            className="px-6 py-2.5 rounded-full border border-[#b88654] text-[#c99f73] hover:bg-[#b88654] hover:text-black text-xs uppercase tracking-widest transition-all self-start md:self-auto"
          >
            Prenota Taglio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {taglioServices.map(srv => (
            <div 
              key={srv.id}
              className="bg-[#14120f] border border-[#2d2419] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#b88654]/70 transition-all group shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {srv.badge && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold bg-[#b88654] text-black px-2.5 py-1 rounded-full">
                    {srv.badge}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8e8a80]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b88654]" />
                      {srv.duration}
                    </span>
                    <span className="font-editorial text-lg text-[#c99f73] font-semibold">
                      {srv.priceFrom}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl text-[#f4efe8]">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-[#9d978e] leading-relaxed">
                    {srv.description}
                  </p>

                  {srv.features && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#201c15] text-[11px] text-[#b8b2a7]">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#b88654] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking(srv.id)}
                    className="w-full py-2.5 rounded-xl bg-[#1c1914] hover:bg-[#b88654] hover:text-black text-[#dcd7ce] text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Riserva Questo Servizio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: COLORE & BALAYAGE (#colore) */}
      <section id="colore" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[#2d2419] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Specializzazione 02
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#f7f4ed]">
              Colore &amp; Balayage Sartoriale
            </h2>
            <p className="text-xs sm:text-sm text-[#9c978d] max-w-xl">
              Pigmenti botanici puri, oli essenziali nutrienti e sfumature dipinte a mano libera. Il colore diventa un’estensione della luce naturale del tuo volto, senza mai impoverire lo stelo del capello.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('balayage-sartoriale')}
            className="px-6 py-2.5 rounded-full border border-[#b88654] text-[#c99f73] hover:bg-[#b88654] hover:text-black text-xs uppercase tracking-widest transition-all self-start md:self-auto"
          >
            Prenota Colore
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coloreServices.map(srv => (
            <div 
              key={srv.id}
              className="bg-[#14120f] border border-[#2d2419] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#b88654]/70 transition-all group shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {srv.badge && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold bg-[#b88654] text-black px-2.5 py-1 rounded-full">
                    {srv.badge}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8e8a80]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b88654]" />
                      {srv.duration}
                    </span>
                    <span className="font-editorial text-lg text-[#c99f73] font-semibold">
                      {srv.priceFrom}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl text-[#f4efe8]">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-[#9d978e] leading-relaxed">
                    {srv.description}
                  </p>

                  {srv.features && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#201c15] text-[11px] text-[#b8b2a7]">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#b88654] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking(srv.id)}
                    className="w-full py-2.5 rounded-xl bg-[#1c1914] hover:bg-[#b88654] hover:text-black text-[#dcd7ce] text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Riserva Questo Servizio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: HAIR INTEGRATION (#hair-integration) */}
      <section id="hair-integration" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[#2d2419] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              Specializzazione 03
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#f7f4ed]">
              Hair Integration &amp; Infoltimento Invisibile
            </h2>
            <p className="text-xs sm:text-sm text-[#9c978d] max-w-xl">
              Il fiore all'occhiello dell'Atelier Nicole Vinti. Trattamenti non chirurgici di rinfoltimento e allungamento d'alta gamma con capelli veri selezionati stelo per stelo.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('hair-integration-infoltimento')}
            className="px-6 py-2.5 rounded-full border border-[#b88654] text-[#c99f73] hover:bg-[#b88654] hover:text-black text-xs uppercase tracking-widest transition-all self-start md:self-auto"
          >
            Richiedi Check-Up Gratuito
          </button>
        </div>

        {/* Integration Spotlight Card */}
        <div className="bg-[#14120f] border border-[#35291b] rounded-3xl p-8 sm:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c99f73] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Riservatezza &bull; Cabina Privata &bull; Risultato Naturale al 100%
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#f5f1ea]">
                Dimentica i Diradamenti: Ritrova la Pienezza e la Fiducia
              </h3>
              <p className="text-sm text-[#bbb5aa] leading-relaxed">
                Che si tratti di un diradamento sul vertice, di una riga centrale che si allarga o del desiderio di lunghezze e corposità straordinarie, Nicole Vinti applica sistemi a micro-rete traspirante ultra-leggeri e invisibili.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#ccc7be] pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#b88654]" />
                  Nessuna colla nociva né chirurgia
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#b88654]" />
                  Puoi lavare, pettinare e legare i capelli
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#b88654]" />
                  Resistente a sport, sauna e piscina
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#b88654]" />
                  Capelli 100% Remy europei certificati
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <img
                src="/images/salone4.jpg"
                alt="Hair Integration Risultato Nicole Vinti"
                className="rounded-2xl border border-[#3a2d1d] object-cover h-80 w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrationServices.map(srv => (
            <div 
              key={srv.id}
              className="bg-[#14120f] border border-[#2d2419] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#b88654]/70 transition-all group shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {srv.badge && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold bg-[#b88654] text-black px-2.5 py-1 rounded-full">
                    {srv.badge}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8e8a80]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b88654]" />
                      {srv.duration}
                    </span>
                    <span className="font-editorial text-lg text-[#c99f73] font-semibold">
                      {srv.priceFrom}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#f4efe8]">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-[#9d978e] leading-relaxed">
                    {srv.description}
                  </p>

                  {srv.features && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#201c15] text-[11px] text-[#b8b2a7]">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#b88654] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking(srv.id)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black text-xs uppercase tracking-wider font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Richiedi Diagnosi Riservata
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4 pt-12">
        <h3 className="font-editorial text-3xl text-[#f5f1ea]">
          Hai Bisogno di un Consiglio Personalizzato?
        </h3>
        <p className="text-xs sm:text-sm text-[#9e998f] max-w-lg mx-auto">
          Contatta la nostra reception o prenota una consulenza preliminare di 30 minuti con Nicole Vinti per studiare il progetto più adatto ai tuoi capelli.
        </p>
        <button
          onClick={() => onOpenBooking()}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-widest shadow-xl hover:shadow-[0_0_25px_rgba(184,134,84,0.45)] transition-all"
        >
          Prenota una Consulenza in Atelier
        </button>
      </section>
    </div>
  );
};
