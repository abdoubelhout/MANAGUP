import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';
import { WHATSAPP_LINK } from '../../lib/constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50/50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-display">
          Prêt à automatiser vos opérations e-commerce ?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Rejoignez les e-commerçants et distributeurs qui ont éliminé les pertes de commande et décuplé
          leur rentabilité grâce à MANAG'TUP.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="#contact"
            className="orange-gradient-btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg text-white text-sm sm:text-base font-bold shadow-lg min-h-[48px]"
          >
            <span>Demander ma démonstration gratuite</span>
            <MaterialIcon name="arrow_forward" className="text-lg" />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm sm:text-base font-bold hover:bg-slate-50 transition-colors shadow-sm min-h-[48px]"
          >
            <MaterialIcon name="chat" className="text-emerald-600 text-lg" />
            <span>Contacter un conseiller WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
