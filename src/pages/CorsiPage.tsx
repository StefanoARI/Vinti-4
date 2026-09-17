import React, { useState } from 'react';
import { COURSES, ATELIER_INFO } from '../data/content';
import { GraduationCap, Award, Check, Calendar, Users, Sparkles, Clock, ArrowRight, MessageSquare } from 'lucide-react';

export const CorsiPage: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantSalon, setApplicantSalon] = useState<string>('');
  const [applicantPhone, setApplicantPhone] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleEnrollment = (courseTitle: string) => {
    const text = encodeURIComponent(
      `Buongiorno Nicole Vinti Academy,\nDesidero richiedere informazioni ed iscrivermi al corso:\n- Masterclass: ${courseTitle}\n- Candidato: ${applicantName || 'Hairstylist'}\n- Salone / Città: ${applicantSalon || 'Italia'}\n- Telefono: ${applicantPhone || 'Non specificato'}`
    );
    window.open(`https://wa.me/390331777600?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c99f73] font-semibold flex items-center justify-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Nicole Vinti Academy &bull; Formazione d'Eccellenza
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f4ed]">
          Masterclass &amp; Alta Formazione
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#bbb5aa] leading-relaxed">
          Condividiamo oltre 35 anni di esperienza, ricerca internazionale e metodologie pluripremiate. Corsi esclusivi a numero rigorosamente chiuso per parrucchieri e stilisti che puntano al vertice del settore.
        </p>
      </section>

      {/* Academy Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14120f] border border-[#2d2419] rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-2 p-4 border-b md:border-b-0 md:border-r border-[#2d2419]">
              <div className="w-10 h-10 rounded-full bg-[#b88654]/15 text-[#c99f73] flex items-center justify-center mx-auto sm:mx-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-xl text-[#f5f1ea]">Certificazione Internazionale</h3>
              <p className="text-xs text-[#9d978e]">
                Metodologie allineate agli standard Habia UK e Intercoiffure Mondial, con attestato nominativo prestigioso rilasciato a fine corso.
              </p>
            </div>

            <div className="space-y-2 p-4 border-b md:border-b-0 md:border-r border-[#2d2419]">
              <div className="w-10 h-10 rounded-full bg-[#b88654]/15 text-[#c99f73] flex items-center justify-center mx-auto sm:mx-0">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-xl text-[#f5f1ea]">Classi da Massimo 4-6 Allievi</h3>
              <p className="text-xs text-[#9d978e]">
                Rifiutiamo le convention oceaniche. Lavoriamo a stretto contatto con Nicole Vinti per correggere la postura, l'impugnatura e la visione d'insieme.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <div className="w-10 h-10 rounded-full bg-[#b88654]/15 text-[#c99f73] flex items-center justify-center mx-auto sm:mx-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-xl text-[#f5f1ea]">Pratica su Modelle dal Vivo</h3>
              <p className="text-xs text-[#9d978e]">
                Sessioni intensive hands-on: ogni allievo esegue diagnosi e realizzazione pratica su modelle fornite dall'accademia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-12">
          {COURSES.map(course => (
            <div 
              key={course.id}
              className="bg-[#14120f] border border-[#2d2419] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-[#b88654]/60 transition-all shadow-xl"
            >
              <div className="lg:col-span-5 relative min-h-[300px]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-gradient-to-r from-[#d8b792] to-[#b88654] text-black px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#989389]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c99f73]" />
                      {course.duration}
                    </span>
                    <span>&bull;</span>
                    <span className="text-[#c99f73] font-medium">
                      {course.investment}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f1ea]">
                      {course.title}
                    </h2>
                    <p className="text-xs text-[#c99f73] mt-1 italic">
                      {course.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#aba59b] leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider text-[#c99f73] font-semibold block">
                      Programma Didattico Principale:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#cec9be]">
                      {course.program.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c99f73] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider text-[#8e897e] block mb-2">
                      Prossime Date Disponibili:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {course.upcomingDates.map((date, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-[#1a1713] border border-[#35291b] text-xs text-[#f2ede4]">
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#251d14] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-[#78736a]">
                    Materiale didattico, dispense e supporto post-corso inclusi.
                  </span>
                  <button
                    onClick={() => handleEnrollment(course.title)}
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#d8b792] via-[#b88654] to-[#97693d] hover:brightness-110 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#b88654]/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Richiedi Scheda e Iscrizione
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
