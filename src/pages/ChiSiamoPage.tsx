import React from 'react';
import { PageId } from '../types';
import { ATELIER_INFO } from '../data/content';
import { Award, Sparkles, Check, Heart, Shield, ArrowRight, MapPin } from 'lucide-react';

interface ChiSiamoPageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenBooking: () => void;
}

export const ChiSiamoPage: React.FC<ChiSiamoPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
          Chi Siamo &bull; La Visione di Nicole Vinti
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f4ed]">
          L'Alta Sartorialità della Bellezza
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
          Dal 1987, una storia di passione intransigente, dedizione artigianale e ricerca continua per rendere ogni donna consapevole del proprio splendore unico.
        </p>
      </section>

      {/* Main Bio & Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#35291b] shadow-2xl relative">
              <img
                src="/images/nicole-ritratto.jpg"
                alt="Nicole Vinti Master Hairstylist e Image Consultant"
                className="w-full h-[600px] object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#14120f]/90 backdrop-blur-md border border-[#3d2f20]">
                <div className="font-editorial text-2xl text-[#f5f1ea]">Nicole Vinti</div>
                <div className="text-xs uppercase tracking-widest text-[#c99f73] mt-0.5">
                  Founder, Master Stylist &amp; Consulente d'Immagine
                </div>
                <div className="text-[11px] text-[#8e897e] mt-1">
                  Membro ICD Intercoiffure Mondial &bull; Docente e Formatrice Internazionale
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c99f73] font-medium">
                Dall'Arte del Taglio al Total Look
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#f5f1ea] leading-tight">
                "Non Creo Maschere. Scolpisco l'Armonia."
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#bbb5aa] leading-relaxed">
              <p>
                La carriera di <strong>Nicole Vinti</strong> affonda le radici nel 1987, anno in cui ha inaugurato il suo primo salone. Fin da giovanissima, Nicole ha compreso che la tecnica da sola non era sufficiente: occorreva uno sguardo olistico, capace di leggere la fisionomia, il movimento del corpo, i colori naturali della pelle e, soprattutto, l'animo della persona.
              </p>
              <p>
                Nel 2000 fonda a Gallarate il salone <em>Vis a Vis</em>, che nel 2013 si trasforma in <strong>"Il Piacere di Piacersi"</strong>: il primo concept store in Italia dedicato al <em>Total Look</em>, fondendo parrucchiere, armocromia, trucco e consulenza di stile in un unico percorso sartoriale.
              </p>
              <p>
                La sua dedizione all'eccellenza l'ha portata a collaborare come <strong>Trainer Tutor ed Assessor per Habia Italia</strong>, a firmare look per il <strong>Festival di Sanremo</strong>, <strong>X Factor</strong>, e il <strong>Venezia World Wide Hair Tour</strong>, fino ad essere premiata all’<strong>International Salon di Londra</strong> (2002) e a vincere l’<strong>Italian Hairdressing Award Avant-Garde</strong> (2014).
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-[#251d14]">
              <div className="space-y-1">
                <span className="font-editorial text-2xl text-[#c99f73]">35+ Anni</span>
                <p className="text-xs text-[#8c877d]">Di carriera e perfezionamento continuo</p>
              </div>
              <div className="space-y-1">
                <span className="font-editorial text-2xl text-[#c99f73]">10.000+</span>
                <p className="text-xs text-[#8c877d]">Progetti di stile e trasformazioni esclusive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Excellence */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
            Cronologia del Successo
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#f7f4ed]">
            Le Tappe di un Percorso Straordinario
          </h2>
        </div>

        <div className="relative border-l border-[#35291b] ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#b88654] ring-4 ring-[#0b0a09]" />
            <span className="text-xs font-semibold tracking-widest text-[#c99f73] uppercase">1987</span>
            <h3 className="font-editorial text-xl text-[#f5f1ea] mt-0.5">Il Primo Atelier</h3>
            <p className="text-sm text-[#9c978d] mt-1.5 leading-relaxed">
              Apertura del primo salone e inizio della ricerca sulle tecniche di taglio angolato e scultura geometrica.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#b88654] ring-4 ring-[#0b0a09]" />
            <span className="text-xs font-semibold tracking-widest text-[#c99f73] uppercase">2000 - 2002</span>
            <h3 className="font-editorial text-xl text-[#f5f1ea] mt-0.5">Nascita di Vis a Vis &amp; London Award</h3>
            <p className="text-sm text-[#9c978d] mt-1.5 leading-relaxed">
              Fondazione di Vis a Vis a Gallarate. Nel 2002 vince il prestigioso premio all’International Salon di Londra, affermandosi a livello europeo.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#b88654] ring-4 ring-[#0b0a09]" />
            <span className="text-xs font-semibold tracking-widest text-[#c99f73] uppercase">2013</span>
            <h3 className="font-editorial text-xl text-[#f5f1ea] mt-0.5">"Il Piacere di Piacersi" - Il Primo Total Look Italiano</h3>
            <p className="text-sm text-[#9c978d] mt-1.5 leading-relaxed">
              Rivoluzione del format: il salone integra abbigliamento, accessori, armocromia e make-up creando la prima oasi di Total Look in Italia.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#b88654] ring-4 ring-[#0b0a09]" />
            <span className="text-xs font-semibold tracking-widest text-[#c99f73] uppercase">2014</span>
            <h3 className="font-editorial text-xl text-[#f5f1ea] mt-0.5">Italian Hairdressing Award - Avant-Garde</h3>
            <p className="text-sm text-[#9c978d] mt-1.5 leading-relaxed">
              Consacrazione con il primo premio nella categoria d'avanguardia artistica e ingresso nel circolo internazionale ICD Intercoiffure Mondial.
            </p>
          </div>

          {/* Milestone 5 */}
          <div className="relative">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#b88654] ring-4 ring-[#0b0a09]" />
            <span className="text-xs font-semibold tracking-widest text-[#c99f73] uppercase">Oggi</span>
            <h3 className="font-editorial text-xl text-[#f5f1ea] mt-0.5">Salon Emotion &amp; Nicole Vinti Academy</h3>
            <p className="text-sm text-[#9c978d] mt-1.5 leading-relaxed">
              Un centro multisensoriale in Via E. Ferrario 24 a Gallarate, punto di riferimento per spose d'alta quota, infoltimento invisibile e formazione di maestri acconciatori.
            </p>
          </div>
        </div>
      </section>

      {/* L'Atelier di Gallarate: Spazio Multisensoriale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14120f] border border-[#2d2419] rounded-3xl p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  Gallarate (Varese) &bull; Via E. Ferrario 24
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#f5f1ea]">
                  L'Atelier: Oasi di Discrezione e Calma
                </h2>
              </div>
              <p className="text-sm text-[#bbb5aa] leading-relaxed">
                Ogni elemento architettonico del nostro atelier è progettato per eliminare il caos cittadino. Luci soffuse a temperatura calda calibrata per non alterare la percezione cromatica, diffusione di essenze naturali, arredi minimali dalle linee fluide e postazioni ampie per salvaguardare l'intimità di ogni momento.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#d1cdc4]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#c99f73] shrink-0" />
                  <span>Cabina riservata dedicata alla diagnosi, all'infoltimento e alle prove sposa</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#c99f73] shrink-0" />
                  <span>Area lavaggio con poltrone massaggianti shiatsu e cromoterapia rilassante</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#c99f73] shrink-0" />
                  <span>Lounge bar con selezione di tè biologici, caffè d'autore e bollicine pregiate</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#b88654]/20 transition-all"
                >
                  Richiedi un Appuntamento Riservato
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/salone.jpg"
                alt="Atelier Nicole Vinti Interni"
                className="rounded-xl border border-[#35291b] object-cover h-64 w-full"
              />
              <img
                src="/images/taglio-donna.jpg"
                alt="Dettaglio Salon Emotion Nicole Vinti"
                className="rounded-xl border border-[#35291b] object-cover h-64 w-full mt-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
