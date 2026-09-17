import React, { useState } from 'react';
import { SERVICES, ATELIER_INFO } from '../data/content';
import { X, CheckCircle, Calendar, Clock, Sparkles, UserCheck, MessageSquare, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedServiceId || SERVICES[0].id);
  const [specialist, setSpecialist] = useState<'nicole' | 'master'>('nicole');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:30');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Buongiorno Nicole Vinti Atelier,\nDesidero richiedere una prenotazione per:\n- Servizio: ${currentServiceObj.name}\n- Con: ${specialist === 'nicole' ? 'Nicole Vinti' : 'Senior Master Stylist'}\n- Data preferita: ${selectedDate || 'Prima data utile'}\n- Orario: ${selectedTime}\n- Nominativo: ${fullName}\n- Note: ${notes || 'Nessuna nota'}`
    );
    window.open(`https://wa.me/390331777600?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#12110f] border border-[#3b2e21] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-[#ede9e1]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#9c978e] hover:text-[#c99f73] hover:bg-[#201c15] transition-all"
          aria-label="Chiudi modale"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#b88654]/15 border border-[#b88654] flex items-center justify-center mx-auto text-[#c99f73]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-editorial text-3xl text-[#f5f1ea]">
                Richiesta Ricevuta con Successo
              </h3>
              <p className="text-sm text-[#a5a095] max-w-md mx-auto leading-relaxed">
                Grazie <strong className="text-[#f5f1ea]">{fullName}</strong>. La Concierge dell'Atelier Nicole Vinti verificherà la disponibilità in agenda e ti contatterà al <strong className="text-[#c99f73]">{phone}</strong> per confermare l'orario definitivo.
              </p>
            </div>

            <div className="bg-[#181613] border border-[#35281b] rounded-xl p-4 text-xs text-left space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-[#8c887f]">Trattamento:</span>
                <span className="text-[#f5f1ea] font-medium">{currentServiceObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8c887f]">Professionista:</span>
                <span className="text-[#c99f73] font-medium">
                  {specialist === 'nicole' ? 'Nicole Vinti' : 'Senior Master Stylist'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8c887f]">Data &amp; Ora:</span>
                <span className="text-[#f5f1ea]">{selectedDate || 'Data concordata'} alle {selectedTime}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Conferma Subito su WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#443323] text-[#c49f75] hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                Chiudi
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c99f73] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Private Concierge &bull; Gallarate
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#f7f4ed]">
                Riserva il Tuo Appuntamento Esclusivo
              </h2>
              <p className="text-xs text-[#9b968c]">
                Seleziona il trattamento e i tuoi dettagli. L'atelier accoglie solo su appuntamento per garantire privacy e cura maniacale.
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-[#c49f75] font-medium">
                1. Trattamento Desiderato
              </label>
              <select
                value={selectedService}
                onChange={e => setSelectedService(e.target.value)}
                className="w-full bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b88654] transition-all"
              >
                {SERVICES.map(srv => (
                  <option key={srv.id} value={srv.id}>
                    {srv.name} &bull; {srv.duration} ({srv.priceFrom})
                  </option>
                ))}
              </select>
            </div>

            {/* Specialist Preference */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-[#c49f75] font-medium">
                2. Preferenza Professionista
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpecialist('nicole')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    specialist === 'nicole'
                      ? 'border-[#b88654] bg-[#b88654]/15 text-white'
                      : 'border-[#30251a] bg-[#171512] text-[#a5a095] hover:border-[#4d3a29]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-[#f5f1ea]">
                    <UserCheck className="w-4 h-4 text-[#c99f73]" />
                    Nicole Vinti
                  </div>
                  <div className="text-[11px] text-[#938e83] mt-0.5">Master Hairstylist & Founder</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSpecialist('master')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    specialist === 'master'
                      ? 'border-[#b88654] bg-[#b88654]/15 text-white'
                      : 'border-[#30251a] bg-[#171512] text-[#a5a095] hover:border-[#4d3a29]'
                  }`}
                >
                  <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-[#f5f1ea]">
                    <Sparkles className="w-4 h-4 text-[#c99f73]" />
                    Senior Stylist
                  </div>
                  <div className="text-[11px] text-[#938e83] mt-0.5">Atelier Team Certificato</div>
                </button>
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider text-[#c49f75] font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  3. Data Preferita
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="w-full bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#b88654]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider text-[#c49f75] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Fascia Oraria
                </label>
                <select
                  value={selectedTime}
                  onChange={e => setSelectedTime(e.target.value)}
                  className="w-full bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#b88654]"
                >
                  <option value="09:00">09:00 (Mattina)</option>
                  <option value="10:30">10:30 (Mattina)</option>
                  <option value="12:00">12:00 (Mezzogiorno)</option>
                  <option value="14:30">14:30 (Pomeriggio)</option>
                  <option value="16:30">16:30 (Pomeriggio)</option>
                  <option value="18:00">18:00 (Aperitivo Gio/Sab)</option>
                  <option value="19:00">19:00 (Giovedì Serale Lounge)</option>
                </select>
              </div>
            </div>

            {/* Client Details */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs uppercase tracking-wider text-[#c49f75] font-medium">
                4. I Tuoi Riferimenti
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Nome e Cognome *"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-2.5 text-sm placeholder-[#736e65] focus:outline-none focus:border-[#b88654]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefono cellulare *"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-2.5 text-sm placeholder-[#736e65] focus:outline-none focus:border-[#b88654]"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email per conferma *"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-2.5 text-sm placeholder-[#736e65] focus:outline-none focus:border-[#b88654]"
              />
              <textarea
                placeholder="Eventuali richieste specifiche (es. sposa, prima volta in atelier, capelli delicati...)"
                rows={2}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full bg-[#1b1916] border border-[#3d2e20] text-[#e8e4db] rounded-xl px-4 py-2.5 text-sm placeholder-[#736e65] focus:outline-none focus:border-[#b88654]"
              ></textarea>
            </div>

            {/* Submit Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#78736a]">
                La richiesta sarà confermata telefonicamente.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-[0_0_25px_rgba(184,134,84,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Invia Richiesta di Prenotazione
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
