import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const ValueStrip: React.FC = () => {
  return (
    <section className="border-y border-slate-200/80 bg-white py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-6 lg:gap-8 items-center">
          <div className="flex items-center justify-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-50 text-[#FB5921] flex items-center justify-center flex-shrink-0">
              <MaterialIcon name="all_inbox" className="text-lg sm:text-xl" />
            </div>
            <div>
              <p className="font-label-md text-slate-900 font-bold leading-tight text-xs sm:text-sm">
                Commandes centralisées
              </p>
              <p className="font-body-sm text-slate-500 text-[11px] sm:text-xs">
                WhatsApp, Web, Boutique
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-50 text-[#FB5921] flex items-center justify-center flex-shrink-0">
              <MaterialIcon name="inventory_2" className="text-lg sm:text-xl" />
            </div>
            <div>
              <p className="font-label-md text-slate-900 font-bold leading-tight text-xs sm:text-sm">
                Stock en temps réel
              </p>
              <p className="font-body-sm text-slate-500 text-[11px] sm:text-xs">
                Zéro survente ou rupture
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-50 text-[#FB5921] flex items-center justify-center flex-shrink-0">
              <MaterialIcon name="local_shipping" className="text-lg sm:text-xl" />
            </div>
            <div>
              <p className="font-label-md text-slate-900 font-bold leading-tight text-xs sm:text-sm">
                Achats &amp; Fournisseurs
              </p>
              <p className="font-body-sm text-slate-500 text-[11px] sm:text-xs">
                Réceptions &amp; Bons d'achat
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-50 text-[#FB5921] flex items-center justify-center flex-shrink-0">
              <MaterialIcon name="receipt_long" className="text-lg sm:text-xl" />
            </div>
            <div>
              <p className="font-label-md text-slate-900 font-bold leading-tight text-xs sm:text-sm">
                Facturation automatisée
              </p>
              <p className="font-body-sm text-slate-500 text-[11px] sm:text-xs">
                Devis, factures &amp; avoirs
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-50 text-[#FB5921] flex items-center justify-center flex-shrink-0">
              <MaterialIcon name="account_balance_wallet" className="text-lg sm:text-xl" />
            </div>
            <div>
              <p className="font-label-md text-slate-900 font-bold leading-tight text-xs sm:text-sm">
                Suivi des paiements
              </p>
              <p className="font-body-sm text-slate-500 text-[11px] sm:text-xs">
                Encaissements en 1 clic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

