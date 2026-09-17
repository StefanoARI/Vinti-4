import React from 'react';
import { ATELIER_INFO } from '../data/content';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={ATELIER_INFO.whatsappDirectUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contatta la Concierge Nicole Vinti su WhatsApp"
        className="group flex items-center gap-3 bg-[#131210] hover:bg-[#1a1714] border border-[#b88654]/40 hover:border-[#b88654] text-white px-4 py-2.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all transform hover:-translate-y-0.5"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
        </span>
        <div className="hidden sm:block text-left">
          <div className="text-[10px] uppercase tracking-wider text-[#c99f73] font-semibold leading-none">
            Concierge Online
          </div>
          <div className="text-xs text-[#dedad3] font-medium leading-tight mt-0.5">
            WhatsApp Diretto
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
      </a>
    </div>
  );
};
