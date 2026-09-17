import React from 'react';
import { PageId } from '../types';
import { ATELIER_INFO, SERVICES, REVIEWS } from '../data/content';
import { 
  Sparkles, 
  Scissors, 
  Crown, 
  HeartHandshake, 
  ArrowRight, 
  Star, 
  Award, 
  Calendar, 
  Check, 
  MapPin, 
  Shield 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Haute Couture Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
        {/* Background visual with real uploaded atelier image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/salone.jpg"
            alt="Nicole Vinti Atelier Haute Coiffure Gallarate"
            className="w-full h-full object-cover object-center filter brightness-[0.34] contrast-[1.1] scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-[#0b0a08]/60 to-[#0b0a08]/40" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0a08]/50 to-[#0b0a08]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b88654]/40 bg-[#161411]/70 backdrop-blur-md text-[#c99f73] text-xs uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5 text-[#b88654]" />
            Atelier di Alta Coiffure &bull; Gallarate (Varese)
          </div>

          <div className="space-y-4">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#f9f7f3] font-normal leading-[1.05]">
              L’Arte del Capello.<br />
              <span className="italic font-light text-[#d8b792]">
                Il Piacere di Piacersi.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#c4beaf] font-light leading-relaxed">
              Dalla maestria di Nicole Vinti, un atelier esclusivo dove l'alta sartorialità del taglio, le sfumature di luce pura e l'infoltimento invisibile incontrano la consulenza d'immagine totale.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(184,134,84,0.35)] hover:shadow-[0_0_45px_rgba(184,134,84,0.55)] transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              Riserva la Tua Seduta
            </button>

            <button
              onClick={() => onNavigate('atelier')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#44382c] hover:border-[#b88654] text-[#ebe7df] hover:text-[#c99f73] text-xs uppercase tracking-[0.25em] transition-all bg-[#12100e]/60 backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2"
            >
              Scopri i Servizi
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Key metrics */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-[#2d251d]/80 text-left sm:text-center">
            <div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#c99f73]">1987</div>
              <div className="text-[11px] uppercase tracking-wider text-[#91877b] mt-1">Eredità &amp; Passione</div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#c99f73]">ICD Mondial</div>
              <div className="text-[11px] uppercase tracking-wider text-[#91877b] mt-1">Intercoiffure Italia</div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#c99f73]">Avant-Garde</div>
              <div className="text-[11px] uppercase tracking-wider text-[#91877b] mt-1">Italian Award Winner</div>
            </div>
            <div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#c99f73]">Total Look</div>
              <div className="text-[11px] uppercase tracking-wider text-[#91877b] mt-1">Metodo Certificato</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prestigious Accreditations Ticker / Recognition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11100e] border border-[#2e241a] rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
              Riconoscimenti &bull; Eventi &bull; Collaborazioni Internazionali
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center items-center justify-center">
            {ATELIER_INFO.awards.map((award, i) => (
              <div key={i} className="p-3 border-r last:border-r-0 border-[#251d14]">
                <div className="text-xs uppercase tracking-widest text-[#c99f73] font-medium">{award.year}</div>
                <div className="font-editorial text-base text-[#f0ede6] mt-1">{award.title}</div>
                <div className="text-[11px] text-[#8e8477] mt-0.5">{award.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Philosophy: "Il Piacere di Piacersi" & Salon Emotion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3b2f21] shadow-2xl">
              <img
                src="/images/Acconciature01.jpg"
                alt="Nicole Vinti - La promessa di bellezza e alta coiffure"
                onError={(e) => {
                  // Fallback to nicole-vinti-homepage.jpg or foto-nicole_1.jpg if Acconciature01 is not found
                  const target = e.currentTarget;
                  if (target.src.indexOf('nicole-vinti-homepage') === -1) {
                    target.src = '/images/nicole-vinti-homepage.jpg';
                  }
                }}
                className="w-full h-[540px] object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#14120f]/90 backdrop-blur-md border border-[#3d2e20]">
                <span className="text-xs uppercase tracking-widest text-[#c99f73] font-medium block">
                  La promessa di Nicole Vinti
                </span>
                <p className="font-editorial text-lg text-[#f2eee7] italic mt-1">
                  "Non trasformiamo le donne in qualcun altro. Riveliamo la loro versione più sublime."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
                Il Metodo Esclusivo
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#f7f4ed] leading-tight">
                Un’Esperienza Multisensoriale Pensata per Chi Esige la Perfezione
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
              A Gallarate, in Via E. Ferrario 24, sorge non un comune salone, ma un atelier di consulenza e alta coiffure dove ogni dettaglio è studiato per donare privacy, serenità e risposte sartoriali.
            </p>
            <p className="text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
              Dal momento in cui varchi la soglia, il protocollo <strong className="text-[#e2ded6]">Salon Emotion</strong> accoglie con aromaterapia botanica, massaggio craniale e un'analisi morfologica minuziosa: la forma del viso, il tono dell’incarnato, le linee del collo e la postura guidano ogni colpo di forbice e ogni sfumatura di colore.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12110e] border border-[#2b2218]">
                <div className="flex items-center gap-2 text-[#c99f73] font-medium text-sm">
                  <Shield className="w-4 h-4" />
                  Riservatezza Assoluta
                </div>
                <p className="text-xs text-[#8e8579] mt-1.5">
                  Spazi intimi e cabine dedicate per consulenze e trattamenti di Hair Integration.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#12110e] border border-[#2b2218]">
                <div className="flex items-center gap-2 text-[#c99f73] font-medium text-sm">
                  <Sparkles className="w-4 h-4" />
                  Materia Prima d'Eccellenza
                </div>
                <p className="text-xs text-[#8e8579] mt-1.5">
                  Colorazioni senza ammoniaca con oli biologici e capelli 100% Remy vergini certificati.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('chi-siamo')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#c99f73] hover:text-white transition-colors"
              >
                Scopri la storia di Nicole Vinti
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4 Signature Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
            Le Nostre Specializzazioni
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#f7f4ed]">
            I Quattro Pilastri dell'Atelier
          </h2>
          <p className="text-xs sm:text-sm text-[#9f998e]">
            Ogni trattamento è un'opera sartoriale progettata per esaltare l'identità unica di ogni cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Taglio & Styling */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#13120f] border border-[#30261b] hover:border-[#b88654]/80 transition-all flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/atelier-taglio.jpg"
                alt="Taglio & Styling Haute Couture Nicole Vinti"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-[#c99f73]">
                <Scissors className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c99f73]">Scultura &bull; Morfologia</span>
                <h3 className="font-editorial text-xl text-[#f3efe6] mt-1">Taglio &amp; Styling Couture</h3>
                <p className="text-xs text-[#958e82] leading-relaxed mt-2">
                  Linee geometriche pure o volumi morbidi scolpiti a forbice viva per armonizzare lineamenti ed espressione.
                </p>
              </div>
              <button
                onClick={() => onNavigate('atelier', 'taglio-styling')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c99f73] font-medium pt-2 group-hover:translate-x-1 transition-transform"
              >
                Approfondisci Taglio &rarr;
              </button>
            </div>
          </div>

          {/* Pillar 2: Colore & Balayage */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#13120f] border border-[#30261b] hover:border-[#b88654]/80 transition-all flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/atelier-colore.jpg"
                alt="Colore & Balayage Nicole Vinti"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-[#c99f73]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c99f73]">Luce Pura &bull; Pigmenti Botanici</span>
                <h3 className="font-editorial text-xl text-[#f3efe6] mt-1">Colore &amp; Balayage d'Autore</h3>
                <p className="text-xs text-[#958e82] leading-relaxed mt-2">
                  Dipinti a mano libera con riflessi multidimensionali e gloss lucidanti antiossidanti che preservano la fibra.
                </p>
              </div>
              <button
                onClick={() => onNavigate('atelier', 'colore')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c99f73] font-medium pt-2 group-hover:translate-x-1 transition-transform"
              >
                Approfondisci Colore &rarr;
              </button>
            </div>
          </div>

          {/* Pillar 3: Hair Integration */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#13120f] border border-[#30261b] hover:border-[#b88654]/80 transition-all flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/atelier-infoltimento.jpg"
                alt="Hair Integration & Infoltimento Nicole Vinti"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-[#c99f73]">
                <HeartHandshake className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c99f73]">Infoltimento &bull; Extension Remy</span>
                <h3 className="font-editorial text-xl text-[#f3efe6] mt-1">Hair Integration Invisibile</h3>
                <p className="text-xs text-[#958e82] leading-relaxed mt-2">
                  Soluzioni brevettate per ridare pienezza a diradamenti e creare lunghezze da favola nel rispetto del capello.
                </p>
              </div>
              <button
                onClick={() => onNavigate('atelier', 'hair-integration')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c99f73] font-medium pt-2 group-hover:translate-x-1 transition-transform"
              >
                Approfondisci Integration &rarr;
              </button>
            </div>
          </div>

          {/* Pillar 4: Sposa & Immagine */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#13120f] border border-[#30261b] hover:border-[#b88654]/80 transition-all flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/sposa1.jpg"
                alt="Sposa & Immagine Nicole Vinti"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-[#c99f73]">
                <Crown className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c99f73]">Bridal Luxury &bull; Armocromia</span>
                <h3 className="font-editorial text-xl text-[#f3efe6] mt-1">Sposa &amp; Total Look</h3>
                <p className="text-xs text-[#958e82] leading-relaxed mt-2">
                  Il percorso nuziale più desiderato delle spose del Lago Maggiore e di Milano, con assistenza in location.
                </p>
              </div>
              <button
                onClick={() => onNavigate('sposa-immagine', 'sposa')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c99f73] font-medium pt-2 group-hover:translate-x-1 transition-transform"
              >
                Approfondisci Sposa &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Luxury Testimonials & Client Reviews */}
      <section className="bg-[#0e0d0b] border-y border-[#2d241a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
              Testimonianze &bull; Esperienze Reali
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#f7f4ed]">
              La Parola alle Nostre Ospiti
            </h2>
            <p className="text-xs sm:text-sm text-[#9f998e]">
              Dalle spose più raffinate alle imprenditrici e donne dello spettacolo che scelgono la firma di Nicole Vinti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map(rev => (
              <div 
                key={rev.id}
                className="bg-[#14120f] border border-[#30251a] rounded-2xl p-8 space-y-4 relative flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#b88654] gap-1">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#82776c]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#ded9cf] italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#251d14] flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-sm text-[#f5f1ea]">{rev.author}</h4>
                    <p className="text-xs text-[#8c877d]">{rev.role} &bull; {rev.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#c99f73] bg-[#b88654]/10 px-2.5 py-1 rounded-full border border-[#b88654]/30">
                      {rev.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gift Card & Academy Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Gift Card */}
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#1c1813] via-[#14120f] to-[#0e0d0b] border border-[#3f3122] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold">
                Il Dono del Lusso
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#f7f4ed]">
                Nicole Vinti Luxury Gift Card
              </h3>
              <p className="text-sm text-[#b5af9f] leading-relaxed">
                Regala un’esperienza indimenticabile: una seduta di puro benessere, un balayage esclusivo o un percorso Total Look personalizzato. Confezione haute couture con nastro in seta consegnabile in atelier o in formato digitale d'eccellenza.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('gift-card')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] hover:brightness-110 text-black font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Scopri &amp; Personalizza il Buono
              </button>
            </div>
          </div>

          {/* Card 2: Nicole Vinti Academy */}
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#161411] via-[#12100d] to-[#0c0a08] border border-[#302519] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold">
                Alta Formazione Professionale
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#f7f4ed]">
                Nicole Vinti Academy
              </h3>
              <p className="text-sm text-[#b5af9f] leading-relaxed">
                Masterclass d'élite a numero chiuso (max 4-6 partecipanti) per hairstylist e titolari di salone. Taglio geometrico, infoltimento invisibile e consulenza d'immagine secondo gli standard Habia e ICD Intercoiffure.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('corsi')}
                className="px-6 py-3 rounded-full border border-[#b88654] text-[#c99f73] hover:bg-[#b88654] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Esplora i Corsi Academy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action & GEO Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#3f3122] p-8 sm:p-14 text-center bg-[#12100e] shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#b88654] rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#b88654] rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c99f73] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Via E. Ferrario 24 &bull; Gallarate (VA)
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl text-[#f7f4ed] leading-tight">
              Pronta a Vivere il Tuo Momento di Esclusività?
            </h2>

            <p className="text-sm text-[#bab4a5] leading-relaxed">
              Riceviamo esclusivamente su appuntamento dal martedì al sabato per dedicare ad ogni cliente il tempo, la calma e l’attenzione che merita.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-[0.25em] shadow-xl hover:shadow-[0_0_30px_rgba(184,134,84,0.45)] transition-all cursor-pointer"
              >
                Prenota Ora il Tuo Trattamento
              </button>
              <button
                onClick={() => onNavigate('contatti')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#3f3122] text-[#dedad2] hover:text-white text-xs uppercase tracking-[0.25em] transition-all cursor-pointer"
              >
                Contatta la Concierge
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
