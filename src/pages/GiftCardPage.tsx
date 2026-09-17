import React, { useState } from 'react';
import { GIFT_CARD_EXPERIENCES, ATELIER_INFO } from '../data/content';
import { Gift, Sparkles, Check, Heart, Shield, ArrowRight, Eye, Send, Package } from 'lucide-react';

interface GiftCardPageProps {
  onOpenBooking: () => void;
}

export const GiftCardPage: React.FC<GiftCardPageProps> = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(GIFT_CARD_EXPERIENCES[0].id);
  const [recipientName, setRecipientName] = useState<string>('Beatrice Rossi');
  const [senderName, setSenderName] = useState<string>('Con affetto, Marco');
  const [customMessage, setCustomMessage] = useState<string>('Un momento di pura bellezza e relax dedicato solo a te.');
  const [packagingType, setPackagingType] = useState<'box' | 'digital'>('box');
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const currentExp = GIFT_CARD_EXPERIENCES.find(e => e.id === selectedExpId) || GIFT_CARD_EXPERIENCES[0];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const handleOrderWhatsApp = () => {
    const text = encodeURIComponent(
      `Buongiorno Nicole Vinti Atelier,\nDesidero ordinare una Luxury Gift Card:\n- Esperienza: ${currentExp.title} (€ ${currentExp.value})\n- Per: ${recipientName}\n- Da parte di: ${senderName}\n- Dedica: "${customMessage}"\n- Formato: ${packagingType === 'box' ? 'Cofanetto Couture con nastro in seta' : 'Digital Voucher PDF'}`
    );
    window.open(`https://wa.me/390331777600?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold">
          Luxury Gift Collection &bull; Atelier Gallarate
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f4ed]">
          Nicole Vinti Gift Card
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
          Regala un'emozione irripetibile. Il dono di un tempo sospeso, coccole sensoriali e la maestria sartoriale di Nicole Vinti.
        </p>
      </section>

      {/* Main Interactive Customizer & Live Voucher Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Configurator Form */}
          <div className="lg:col-span-7 bg-[#14120f] border border-[#2d2419] rounded-3xl p-6 sm:p-10 space-y-8">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#c99f73] font-semibold flex items-center gap-1.5">
                <Gift className="w-4 h-4" />
                Personalizza il Tuo Buono di Pregio
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f1ea]">
                Configura l'Esperienza
              </h2>
            </div>

            {/* Step 1: Select Experience */}
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-wider text-[#c99f73] font-medium">
                1. Scegli l'Esperienza
              </label>
              <div className="grid grid-cols-1 gap-3">
                {GIFT_CARD_EXPERIENCES.map(exp => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setSelectedExpId(exp.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      selectedExpId === exp.id
                        ? 'border-[#b88654] bg-[#b88654]/15 text-white shadow-[0_0_15px_rgba(184,134,84,0.15)]'
                        : 'border-[#2d2419] bg-[#1a1713] text-[#a5a095] hover:border-[#3d3122]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-editorial text-lg text-[#f7f4ee] font-medium">
                          {exp.title}
                        </span>
                        {exp.highlight && (
                          <span className="text-[9px] uppercase tracking-wider bg-[#b88654]/20 text-[#c99f73] px-2 py-0.5 rounded-full border border-[#b88654]/40">
                            {exp.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#8c887e]">{exp.tagline}</p>
                    </div>
                    <div className="font-editorial text-2xl text-[#c99f73] shrink-0 font-semibold">
                      € {exp.value}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Personalization Details */}
            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-wider text-[#c99f73] font-medium">
                2. Dati e Dedica sul Voucher
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-[11px] text-[#938e83] mb-1">Destinatario / A chi è dedicato *</span>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={e => setRecipientName(e.target.value)}
                    placeholder="Nome del destinatario"
                    className="w-full bg-[#1c1813] border border-[#372d1f] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                  />
                </div>
                <div>
                  <span className="block text-[11px] text-[#938e83] mb-1">Mittente / Da parte di *</span>
                  <input
                    type="text"
                    value={senderName}
                    onChange={e => setSenderName(e.target.value)}
                    placeholder="Il tuo nome o firma"
                    className="w-full bg-[#1c1813] border border-[#372d1f] text-[#f2eee7] rounded-xl px-4 py-2.5 text-sm focus:border-[#b88654] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <span className="block text-[11px] text-[#938e83] mb-1">Dedica personale (stampata su pergamena d'autore)</span>
                <textarea
                  rows={2}
                  value={customMessage}
                  onChange={e => setCustomMessage(e.target.value)}
                  placeholder="Scrivi un messaggio speciale..."
                  className="w-full bg-[#1c1813] border border-[#372d1f] text-[#f2eee7] rounded-xl px-4 py-2 text-sm focus:border-[#b88654] focus:outline-none"
                ></textarea>
              </div>
            </div>

            {/* Step 3: Packaging selection */}
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-wider text-[#c99f73] font-medium">
                3. Formato di Consegna
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPackagingType('box')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    packagingType === 'box'
                      ? 'border-[#b88654] bg-[#b88654]/15 text-white'
                      : 'border-[#2d2419] bg-[#1a1713] text-[#a5a095]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-[#f5f1ea]">
                    <Package className="w-4 h-4 text-[#c99f73]" />
                    Cofanetto Couture
                  </div>
                  <div className="text-[11px] text-[#8e8a80] mt-1">
                    Scatola nera opaca con nastro in seta bronzo e ceralacca. Ritiro in atelier o corriere.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPackagingType('digital')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    packagingType === 'digital'
                      ? 'border-[#b88654] bg-[#b88654]/15 text-white'
                      : 'border-[#2d2419] bg-[#1a1713] text-[#a5a095]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-[#f5f1ea]">
                    <Send className="w-4 h-4 text-[#c99f73]" />
                    Elegante Digital PDF
                  </div>
                  <div className="text-[11px] text-[#8e8a80] mt-1">
                    Spedizione immediata via email o WhatsApp in alta definizione, pronto da stampare o inoltrare.
                  </div>
                </button>
              </div>
            </div>

            {/* Submit Actions */}
            <div className="pt-4 border-t border-[#2d2419] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#8c887e]">
                Validità voucher: <strong>12 Mesi</strong> dall'emissione.
              </div>
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-widest shadow-xl hover:shadow-[0_0_25px_rgba(184,134,84,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Ordina Gift Card (€ {currentExp.value})
              </button>
            </div>
          </div>

          {/* Column 2: Live Voucher Preview Card (The luxury physical voucher visualizer) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#8e8a81] px-2">
              <span className="flex items-center gap-1.5 uppercase tracking-wider text-[#c99f73]">
                <Eye className="w-3.5 h-3.5" />
                Anteprima Voucher in Tempo Reale
              </span>
              <span>Atelier Gallarate</span>
            </div>

            {/* Visual Voucher Card */}
            <div className="relative rounded-2xl overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-[#1c1813] via-[#14120f] to-[#0d0b09] border-2 border-[#b88654]/70 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-[#f2ede4] space-y-6">
              {/* Bronze watermark / seal */}
              <div className="absolute top-4 right-4 text-right">
                <span className="font-editorial text-xs tracking-widest text-[#c99f73] block">
                  VOUCHER VIP
                </span>
                <span className="text-[10px] text-[#6e6a62] font-mono">
                  #NV-{Math.floor(currentExp.value * 17)}
                </span>
              </div>

              {/* Brand mark */}
              <div className="space-y-1">
                <span className="font-editorial text-2xl tracking-[0.25em] text-[#f5f1ea] block">
                  NICOLE VINTI
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#c99f73] block font-light">
                  Haute Coiffure &bull; Salon Emotion
                </span>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#b88654]/60 to-transparent my-4" />

              {/* Experience Title & Value */}
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-[#8a857b]">Esperienza Riservata</div>
                <h3 className="font-editorial text-2xl text-[#f7f4ee]">
                  {currentExp.title}
                </h3>
                <div className="text-xl font-editorial text-[#c99f73] font-semibold">
                  Valore € {currentExp.value}
                </div>
              </div>

              {/* To and From */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="border-l-2 border-[#b88654] pl-3 space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#8e897e] block">Per:</span>
                  <span className="font-editorial text-lg text-[#f4efe8] block">
                    {recipientName || 'Nome Destinatario'}
                  </span>
                </div>

                <div className="text-xs text-[#a9a397] italic pl-3 leading-relaxed">
                  "{customMessage || 'Un momento di autentico benessere e stile per te.'}"
                </div>

                <div className="text-[11px] text-[#8e897e] pl-3 pt-1">
                  Da: <span className="text-[#e2ded5]">{senderName || 'Nome Mittente'}</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#2d2419] flex items-center justify-between text-[10px] text-[#78736a]">
                <span>Via E. Ferrario 24, Gallarate</span>
                <span>Tel: +39 0331 777600</span>
              </div>
            </div>

            {/* Included list overview */}
            <div className="p-5 rounded-2xl bg-[#14120f] border border-[#2d2419] space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#c99f73] font-medium block">
                Cosa include questa esperienza:
              </span>
              <ul className="space-y-1.5 text-xs text-[#b0aaa0]">
                {currentExp.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#c99f73] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
