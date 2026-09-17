import React, { useEffect, useState } from 'react';
import { PageId, SposaAnchor } from '../types';
import { Crown, Sparkles, Check, Heart, Calendar, Clock, MapPin, ArrowRight, UserCheck, MessageSquare } from 'lucide-react';

interface SposaImmaginePageProps {
  initialAnchor?: string;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const SposaImmaginePage: React.FC<SposaImmaginePageProps> = ({
  initialAnchor,
  onNavigate,
  onOpenBooking
}) => {
  const [weddingDate, setWeddingDate] = useState('');
  const [weddingLocation, setWeddingLocation] = useState('');
  const [brideName, setBrideName] = useState('');
  const [bridePhone, setBridePhone] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

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

  const handleBrideCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const handleBrideWhatsApp = () => {
    const text = encodeURIComponent(
      `Gentile Nicole Vinti Atelier,\nDesidero verificare la disponibilità per il mio Matrimonio:\n- Sposa: ${brideName}\n- Data Nozze: ${weddingDate}\n- Location: ${weddingLocation}\n- Telefono: ${bridePhone}`
    );
    window.open(`https://wa.me/393478899210?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
          Bridal Haute Couture &bull; Total Look &bull; Gallarate
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f4ed]">
          Sposa &amp; Immagine
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
          La sublimazione della tua bellezza autentica. Dal percorso sposa su misura fino alla consulenza d'immagine e armocromia "Il Piacere di Piacersi" firmata Nicole Vinti.
        </p>

        {/* Anchor Quick Jump Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#sposa"
            className="px-5 py-2 rounded-full border border-[#3d3122] bg-[#14120f] text-xs uppercase tracking-wider text-[#c99f73] hover:border-[#b88654] transition-all flex items-center gap-2"
          >
            <Crown className="w-3.5 h-3.5" />
            Sposa Haute Couture
          </a>
          <a
            href="#consulenza"
            className="px-5 py-2 rounded-full border border-[#3d3122] bg-[#14120f] text-xs uppercase tracking-wider text-[#c99f73] hover:border-[#b88654] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Consulenza d'Immagine &amp; Armocromia
          </a>
        </div>
      </section>

      {/* SECTION 1: SPOSA HAUTE COUTURE (#sposa) */}
      <section id="sposa" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#35291b] shadow-2xl relative">
              <img
                src="/images/sposa2.jpg"
                alt="Acconciatura Sposa Nicole Vinti Atelier"
                className="w-full h-[580px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#14120f]/90 backdrop-blur-md border border-[#3d2f20]">
                <div className="text-xs uppercase tracking-widest text-[#c99f73] font-semibold">
                  Percorso Sposa VIP
                </div>
                <h3 className="font-editorial text-2xl text-[#f5f1ea] mt-1">
                  Assistenza Esclusiva in Villa o a Domicilio
                </h3>
                <p className="text-xs text-[#9d978e] mt-1">
                  Lago Maggiore, Lago di Como, Milano, Varese e tutta Italia.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                L'Esperienza del Sì
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#f7f4ed] leading-tight">
                Il Tuo Giorno Più Bello Merita l'Alta Moda del Capello
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
              La sposa di Nicole Vinti non è omologata: è una protagonista che irradia grazia, sicurezza e stile sartoriale. Il nostro percorso nuziale non si limita a un'acconciatura, ma è un affiancamento costante che parte dallo studio del velo, della scollatura dell'abito e dei dettagli floreali.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14120f] border border-[#2d2419] flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b88654]/15 text-[#c99f73] flex items-center justify-center shrink-0 font-editorial font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#f5f1ea]">Studio Armocromatico &amp; Morfologico dell'Abito</h4>
                  <p className="text-xs text-[#8c887e] mt-0.5">Analisi approfondita del tessuto, colore dell'abito e fisionomia per progettare l'acconciatura e il make-up ideale.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14120f] border border-[#2d2419] flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b88654]/15 text-[#c99f73] flex items-center justify-center shrink-0 font-editorial font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#f5f1ea]">Due Prove Complete in Atelier Riservato</h4>
                  <p className="text-xs text-[#8c887e] mt-0.5">Prove fotografiche con simulazione luce naturale e set fotografico per testare la tenuta e la resa visiva in camera.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14120f] border border-[#2d2419] flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b88654]/15 text-[#c99f73] flex items-center justify-center shrink-0 font-editorial font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#f5f1ea]">Presenza di Nicole il Giorno delle Nozze</h4>
                  <p className="text-xs text-[#8c887e] mt-0.5">Nicole Vinti sarà al tuo fianco nella location o a casa, curando ogni ritocco fino all'uscita per la cerimonia.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('bridal-experience-couture')}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-widest shadow-xl hover:shadow-[0_0_25px_rgba(184,134,84,0.45)] transition-all"
              >
                Riserva il Tuo Percorso Sposa
              </button>
            </div>
          </div>
        </div>

        {/* Wedding Date Checker Banner */}
        <div className="bg-[#14120f] border border-[#35291b] rounded-3xl p-8 sm:p-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold">
              Disponibilità Limitata &bull; Una Sposa al Giorno
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#f7f4ed]">
              Verifica se la Data del Tuo Matrimonio è Ancora Disponibile
            </h3>
            <p className="text-xs sm:text-sm text-[#9f998e]">
              Per garantire la massima devozione ed esclusività, Nicole Vinti segue personalmente un numero limitato di spose per ciascuna stagione.
            </p>
          </div>

          {inquirySent ? (
            <div className="p-6 rounded-2xl bg-[#1b1915] border border-[#b88654]/50 text-center max-w-xl mx-auto space-y-3">
              <div className="text-[#c99f73] font-medium text-base">
                Verifica Richiesta Ricevuta!
              </div>
              <p className="text-xs text-[#bbb5aa]">
                Nicole Vinti verificherà il calendario matrimoniale per la data del <strong className="text-white">{weddingDate}</strong> a <strong className="text-white">{weddingLocation}</strong> e ti contatterà al più presto.
              </p>
              <button
                onClick={handleBrideWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                Scrivi Subito su WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={handleBrideCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#a7a296] mb-1">Il Tuo Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Nome Sposa"
                  value={brideName}
                  onChange={e => setBrideName(e.target.value)}
                  className="w-full bg-[#1b1915] border border-[#372d1f] text-sm text-[#f1ede6] rounded-xl px-3.5 py-2.5 focus:border-[#b88654] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#a7a296] mb-1">Data del Matrimonio</label>
                <input
                  type="date"
                  required
                  value={weddingDate}
                  onChange={e => setWeddingDate(e.target.value)}
                  className="w-full bg-[#1b1915] border border-[#372d1f] text-sm text-[#f1ede6] rounded-xl px-3.5 py-2.5 focus:border-[#b88654] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#a7a296] mb-1">Location o Città</label>
                <input
                  type="text"
                  required
                  placeholder="Es. Stresa, Cernobbio, Varese..."
                  value={weddingLocation}
                  onChange={e => setWeddingLocation(e.target.value)}
                  className="w-full bg-[#1b1915] border border-[#372d1f] text-sm text-[#f1ede6] rounded-xl px-3.5 py-2.5 focus:border-[#b88654] focus:outline-none"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Verifica Data
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 2: CONSULENZA D'IMMAGINE & ARMOCROMIA (#consulenza) */}
      <section id="consulenza" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="border-t border-[#251d14] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  "Il Piacere di Piacersi"
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#f7f4ed] leading-tight">
                  Consulenza d'Immagine Globale &amp; Armocromia
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
                Pioniera in Italia con il concept store <em>"Il Piacere di Piacersi"</em> inaugurato nel 2013, Nicole Vinti ha unito la scienza cromatica e la morfologia del viso in un metodo consolidato ed entusiasmante.
              </p>
              <p className="text-sm text-[#bbb5aa] leading-relaxed">
                Non si tratta solo di sapere se appartieni alla stagione Inverno, Primavera, Estate o Autunno: scoprirai esattamente quale sfumatura di biondo, castano o rame valorizza il bianco degli occhi, quali scollature slanciano il collo e come coordinare make-up e accessori per un'immagine magnetica e coerente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#14120f] border border-[#2d2419]">
                  <h4 className="font-medium text-sm text-[#f5f1ea]">Draping Test con Drappi Seta</h4>
                  <p className="text-xs text-[#8c887e] mt-1">Identificazione scientifica del sottotono caldo o freddo, del contrasto e dell'intensità cromatica.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#14120f] border border-[#2d2419]">
                  <h4 className="font-medium text-sm text-[#f5f1ea]">Dossier Personale &amp; Palette</h4>
                  <p className="text-xs text-[#8c887e] mt-1">Ricevi una guida pocket e digitale con i tuoi colori amici per shopping, tinture, abbigliamento e gioielli.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('consulenza-total-look')}
                  className="px-8 py-3.5 rounded-full border border-[#b88654] text-[#c99f73] hover:bg-[#b88654] hover:text-black font-semibold text-xs uppercase tracking-widest transition-all"
                >
                  Prenota la Consulenza Total Look (€ 180)
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden border border-[#35291b] shadow-2xl relative">
                <img
                  src="/images/nicole-ritratto.jpg"
                  alt="Consulenza Armocromia Nicole Vinti Gallarate"
                  className="w-full h-[540px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#14120f]/90 backdrop-blur-md border border-[#3d2f20]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#c99f73] font-semibold uppercase tracking-wider">Metodo Total Look</span>
                    <span className="text-[#8c887e]">90 Minuti di Sessione Riservata</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
