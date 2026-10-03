import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Traceability: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2 text-xs sm:text-sm">
              Transparence Totale
            </span>
            <h2 className="font-headline-xl text-slate-900 font-extrabold mb-3 sm:mb-4">
              Journal d'audit en direct : Ne perdez jamais la trace d'un geste
            </h2>
            <p className="font-body-lg text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
              Qui a appliqué une remise ? Quel préparateur a mis le colis sous scellé ? À quelle
              seconde exacte le livreur a-t-il validé l'encaissement ? Chaque micro-événement est
              journalisé de manière immuable.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Audit trail certifié conforme et inviolable
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Attribution des erreurs d'expédition ramenée à 0%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Séparation rigoureuse des rôles (Vendeur, Magasinier, Comptable)
                </span>
              </div>
            </div>
          </div>

          {/* Audit Timeline Widget UI */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 pb-4 mb-5 sm:mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <MaterialIcon name="history" className="text-[#FB5921]" />
                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                  Traçabilité Commande #CMD-89422 (WhatsApp)
                </span>
              </div>
              <span className="self-start xs:self-auto px-2.5 py-0.5 sm:py-1 rounded bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-bold">
                Livrée &amp; Encaissée
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-2.5 sm:gap-4 text-xs">
                <div className="w-14 sm:w-16 font-mono font-bold text-slate-400 text-right pt-0.5 shrink-0 text-[11px] sm:text-xs">
                  14:52:10
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 mt-1.5 shrink-0 ring-4 ring-emerald-50"></div>
                <div className="bg-slate-50 p-2 sm:p-2.5 rounded-lg flex-1 border border-slate-100 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                    <strong className="text-slate-800 font-semibold text-xs truncate">
                      Paiement 210,00 € validé (COD)
                    </strong>
                    <span className="text-slate-400 text-[11px] shrink-0">Livreur #04</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 text-[11px] sm:text-xs leading-tight">
                    Encaissement transféré au compte caisse centrale.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-2.5 sm:gap-4 text-xs">
                <div className="w-14 sm:w-16 font-mono font-bold text-slate-400 text-right pt-0.5 shrink-0 text-[11px] sm:text-xs">
                  14:10:45
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500 mt-1.5 shrink-0 ring-4 ring-blue-50"></div>
                <div className="bg-slate-50 p-2 sm:p-2.5 rounded-lg flex-1 border border-slate-100 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                    <strong className="text-slate-800 font-semibold text-xs truncate">
                      Colis remis au transporteur express
                    </strong>
                    <span className="text-slate-400 text-[11px] shrink-0">Entrepôt Nord</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 text-[11px] sm:text-xs leading-tight">
                    Tracking #TRK-980123 notifié par WhatsApp.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-2.5 sm:gap-4 text-xs">
                <div className="w-14 sm:w-16 font-mono font-bold text-slate-400 text-right pt-0.5 shrink-0 text-[11px] sm:text-xs">
                  11:32:02
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 mt-1.5 shrink-0 ring-4 ring-amber-50"></div>
                <div className="bg-slate-50 p-2 sm:p-2.5 rounded-lg flex-1 border border-slate-100 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                    <strong className="text-slate-800 font-semibold text-xs truncate">
                      Colis scellé &amp; Facture éditée (#FAC-4412)
                    </strong>
                    <span className="text-slate-400 text-[11px] shrink-0">A. Diallo</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 text-[11px] sm:text-xs leading-tight">
                    Contrôle poids conforme (1.24 kg) - 2 articles vérifiés.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-2.5 sm:gap-4 text-xs">
                <div className="w-14 sm:w-16 font-mono font-bold text-slate-400 text-right pt-0.5 shrink-0 text-[11px] sm:text-xs">
                  10:15:22
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FB5921] mt-1.5 shrink-0 ring-4 ring-orange-50"></div>
                <div className="bg-slate-50 p-2 sm:p-2.5 rounded-lg flex-1 border border-slate-100 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                    <strong className="text-slate-800 font-semibold text-xs truncate">
                      Commande initiée via WhatsApp API
                    </strong>
                    <span className="text-slate-400 text-[11px] shrink-0">Système auto</span>
                  </div>
                  <p className="text-slate-500 mt-0.5 text-[11px] sm:text-xs leading-tight">
                    Déduction immédiate de 2 unités sur le stock omnicanal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

