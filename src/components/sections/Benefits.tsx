import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAFAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FB5921]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 md:divide-x divide-slate-800">
            <div className="text-center md:text-left pt-3 sm:pt-0 md:pr-6">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FB5921] mb-1.5 sm:mb-2 font-display">
                +4h
              </p>
              <h4 className="font-title-md font-bold text-white mb-1 text-sm sm:text-base">Gagnées par jour</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Élimination des doubles saisies et des vérifications manuelles dans WhatsApp et
                Excel.
              </p>
            </div>
            <div className="text-center md:text-left pt-6 sm:pt-0 md:px-6">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1.5 sm:mb-2 font-display">
                -95%
              </p>
              <h4 className="font-title-md font-bold text-white mb-1 text-sm sm:text-base">D'erreurs de saisie</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scan automatisé et contrôle de conformité à chaque étape de la préparation de
                commande.
              </p>
            </div>
            <div className="text-center md:text-left pt-6 sm:pt-0 md:px-6">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FC9512] mb-1.5 sm:mb-2 font-display">
                360°
              </p>
              <h4 className="font-title-md font-bold text-white mb-1 text-sm sm:text-base">Visibilité totale</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suivi consolidé des marges, des niveaux de stock et des flux financiers en direct.
              </p>
            </div>
            <div className="text-center md:text-left pt-6 sm:pt-0 md:pl-6">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-400 mb-1.5 sm:mb-2 font-display">
                x3
              </p>
              <h4 className="font-title-md font-bold text-white mb-1 text-sm sm:text-base">Capacité de vente</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multipliez votre volume de commandes sans recruter proportionnellement d'opérateurs
                administratifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

