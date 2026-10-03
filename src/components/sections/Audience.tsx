import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Audience: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2 text-xs sm:text-sm">
            Architecturé pour vos métiers
          </span>
          <h2 className="font-headline-xl text-slate-900 font-extrabold mb-3 sm:mb-4">
            Pour qui est pensé MANAGUP ERP ?
          </h2>
          <p className="font-body-lg text-slate-600 text-sm sm:text-base">
            Une plateforme adaptée aux défis des acteurs du commerce moderne qui refusent la lourdeur
            des vieux ERP traditionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Persona 1 */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-[#FB5921] flex items-center justify-center mb-4 sm:mb-5">
              <MaterialIcon name="shopping_bag" className="text-xl sm:text-2xl" />
            </div>
            <h3 className="font-title-md font-bold text-slate-900 mb-2 text-base sm:text-lg">
              E-commerçants &amp; Pure Players
            </h3>
            <p className="font-body-sm text-slate-600 leading-relaxed mb-4 text-xs sm:text-sm">
              Vendez sur plusieurs boutiques web et réseaux sociaux sans jamais redouter les surventes
              ou les retards de synchronisation.
            </p>
            <span className="text-xs font-semibold text-[#FB5921]">
              Focalisé sur l'échelle &amp; la vitesse
            </span>
          </div>

          {/* Persona 2 */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-[#FB5921] flex items-center justify-center mb-4 sm:mb-5">
              <MaterialIcon name="storefront" className="text-xl sm:text-2xl" />
            </div>
            <h3 className="font-title-md font-bold text-slate-900 mb-2 text-base sm:text-lg">
              Boutiques &amp; Retail Omnicanal
            </h3>
            <p className="font-body-sm text-slate-600 leading-relaxed mb-4 text-xs sm:text-sm">
              Réconciliez vos points de vente physiques et vos commandes en ligne dans un inventaire
              unifié et transparent.
            </p>
            <span className="text-xs font-semibold text-[#FB5921]">Stock partagé en temps réel</span>
          </div>

          {/* Persona 3 */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-[#FB5921] flex items-center justify-center mb-4 sm:mb-5">
              <MaterialIcon name="warehouse" className="text-xl sm:text-2xl" />
            </div>
            <h3 className="font-title-md font-bold text-slate-900 mb-2 text-base sm:text-lg">Opérateurs Logistiques</h3>
            <p className="font-body-sm text-slate-600 leading-relaxed mb-4 text-xs sm:text-sm">
              Optimisez le picking, l'emballage et les départs transporteurs avec des bordereaux clairs
              et des scans de contrôle sans faille.
            </p>
            <span className="text-xs font-semibold text-[#FB5921]">Zéro erreur de préparation</span>
          </div>

          {/* Persona 4 */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-[#FB5921] flex items-center justify-center mb-4 sm:mb-5">
              <MaterialIcon name="account_balance" className="text-xl sm:text-2xl" />
            </div>
            <h3 className="font-title-md font-bold text-slate-900 mb-2 text-base sm:text-lg">
              Équipes ADV &amp; Comptabilité
            </h3>
            <p className="font-body-sm text-slate-600 leading-relaxed mb-4 text-xs sm:text-sm">
              Éliminez la ressaisie des factures, suivez les encaissements à la trace et exportez vos
              données comptables en 2 clics.
            </p>
            <span className="text-xs font-semibold text-[#FB5921]">Clôtures mensuelles sereines</span>
          </div>
        </div>
      </div>
    </section>
  );
};

