import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Workflow: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-200/80 overflow-hidden" id="workflow">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2 text-xs sm:text-sm">
            Cycle Opérationnel Continu
          </span>
          <h2 className="font-headline-xl text-slate-900 font-extrabold mb-3 sm:mb-4">
            Un flux sans friction, de la réception au bilan
          </h2>
          <p className="font-body-lg text-slate-600 text-sm sm:text-base">
            Observez comment chaque commande traverse votre organisation avec une fluidité robotique
            et sans aucune ressaisie.
          </p>
        </div>

        {/* Timeline Horizontale Desktop & Cards Intentionnelles Mobile */}
        <div className="relative">
          {/* Ligne de connexion orange centrale (Desktop uniquement) */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-1 bg-gradient-to-r from-[#FB5921] via-[#FC9512] to-emerald-500 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-6 relative z-10">
            {/* Étape 1 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-[#FB5921] text-[#FB5921] flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="inbox" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#FB5921] uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 01
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">Commande Reçue</h4>
                <p className="text-xs text-slate-500">Capture WhatsApp, Shopify ou TPE physique.</p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-orange-400 text-orange-500 flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="fact_check" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-orange-500 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 02
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">
                  Validation &amp; Contrôle
                </h4>
                <p className="text-xs text-slate-500">Vérification de l'adresse et validation client.</p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-amber-500 text-amber-600 flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="lock_clock" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 03
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">
                  Réservation Stock
                </h4>
                <p className="text-xs text-slate-500">Déduction temps réel sur tous les canaux.</p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-amber-500 text-amber-600 flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="inventory" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 04
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">
                  Colisage &amp; Picking
                </h4>
                <p className="text-xs text-slate-500">Bordereau de préparation avec scan code-barre.</p>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-teal-500 text-teal-600 flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="local_shipping" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-teal-600 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 05
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">
                  Expédition &amp; Suivi
                </h4>
                <p className="text-xs text-slate-500">Étiquette transporteur et tracking SMS/WhatsApp.</p>
              </div>
            </div>

            {/* Étape 6 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-emerald-500 text-emerald-600 flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="payments" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 06
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">Encaissement</h4>
                <p className="text-xs text-slate-500">Pointage des règlements COD ou en ligne.</p>
              </div>
            </div>

            {/* Étape 7 */}
            <div className="flex sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-0 p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl sm:rounded-none border border-slate-200/70 sm:border-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 flex items-center justify-center shadow-sm sm:shadow-lg sm:mb-4 shrink-0">
                <MaterialIcon name="query_stats" className="text-xl sm:text-2xl" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Étape 07
                </span>
                <h4 className="font-label-md text-slate-900 font-bold text-sm mb-0.5 sm:mb-1">
                  Rentabilité Nette
                </h4>
                <p className="text-xs text-slate-500">Consolidation automatique de marge nette.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

