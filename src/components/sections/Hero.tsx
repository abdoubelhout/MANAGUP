import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative hero-glow pt-6 sm:pt-10 pb-14 sm:pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Colonne Gauche : Textes & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
            {/* Badge Nouveau / Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-5 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#FB5921] animate-pulse shrink-0"></span>
              <span className="font-label-xs text-slate-800 tracking-wide uppercase text-[10px] sm:text-xs">
                L'ERP nouvelle génération pensé pour l'e-commerce
              </span>
            </div>

            {/* Titre Imposant */}
            <h1 className="font-display-lg text-slate-900 tracking-tight mb-5 sm:mb-6">
              Pilotez tout votre e-commerce depuis un{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FB5921] to-[#FC9512]">
                seul ERP
              </span>
            </h1>

            {/* Sous-titre explicatif */}
            <p className="font-body-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl text-sm sm:text-base">
              Centralisez vos commandes{' '}
              <strong className="text-slate-900 font-semibold">
                WhatsApp, Shopify, Instagram
              </strong>
            </p>

            {/* Groupe de CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                className="orange-gradient-btn inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg text-white font-label-md text-sm sm:text-base transition-all duration-200 min-h-[48px]"
                href="#contact"
              >
                <span>Demander une démonstration</span>
                <MaterialIcon name="arrow_forward" className="text-xl" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-[#E2E8F0] text-slate-900 hover:bg-slate-50 transition-colors font-label-md text-sm sm:text-base shadow-sm min-h-[48px]"
                href="#fonctionnalites"
              >
                <MaterialIcon name="dashboard" className="text-lg text-[#FB5921]" />
                <span>Découvrir les fonctionnalités</span>
              </a>
            </div>

            {/* Trust Badge Micro-strip */}
            <div className="flex flex-row items-center gap-3 pt-4 border-t border-slate-200/80 w-full max-w-md">
              <div className="flex -space-x-1.5 overflow-hidden shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-700 text-xs font-bold">
                  W
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[#FB5921] text-xs font-bold">
                  S
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-indigo-700 text-xs font-bold">
                  IG
                </div>
              </div>
              <p className="font-body-sm text-slate-600 text-xs leading-tight">
                <strong className="text-slate-900 font-semibold">Une gestion centralisée.</strong>{' '}
                Plus de visibilité. Zéro commande perdue.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Mockup ERP & Badges Flottants Interactifs */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            {/* Glow effect de fond */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FB5921]/15 to-[#FC9512]/10 rounded-3xl filter blur-2xl -z-10"></div>

            {/* Conteneur Mockup Card Premium */}
            <div className="relative bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-200/90 shadow-2xl card-subtle-glow">
              {/* Bar d'entête mockup mac style */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-[#FBFBFD] rounded-t-xl mb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div className="text-center font-label-xs text-slate-400 flex items-center gap-1">
                  <MaterialIcon name="lock" className="text-xs" />
                  <span className="text-[10px] sm:text-xs">app.managtup.io/dashboard</span>
                </div>
                <div className="w-8"></div>
              </div>

              {/* Écran ERP Réel / Visuel Haute Fidélité Desktop */}
              <div className="relative rounded-lg overflow-hidden bg-slate-50 border border-slate-200/50">
                <div className="w-full bg-[#FAFAFC] text-slate-800 p-3 sm:p-4">
                  {/* Header ERP interne */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-lg text-sm sm:text-title-md font-bold text-slate-900">
                        Dashboard
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Sync en
                        direct
                      </span>
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                        MT
                      </div>
                    </div>
                  </div>

                  {/* 4 Mini KPI Cards : Responsive 2 cols on mobile, 4 on desktop */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-orange-200 bg-orange-50/40">
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Total Ventes (Mois)</span>
                      <span className="text-xs sm:text-sm font-bold text-[#FB5921] block">+142 850 €</span>
                      <span className="text-[8px] sm:text-[9px] text-emerald-600 block mt-0.5">
                        ↑ +12.5% vs M-1
                      </span>
                    </div>
                    <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Commandes traitées</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 block">1 280</span>
                      <span className="text-[8px] sm:text-[9px] text-emerald-600 block mt-0.5">↑ +8.2%</span>
                    </div>
                    <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Taux d'exécution</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 block">98.2%</span>
                      <span className="text-[8px] sm:text-[9px] text-emerald-600 block mt-0.5">↑ +1.1%</span>
                    </div>
                    <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">Campagnes actives</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 block">53</span>
                      <span className="text-[8px] sm:text-[9px] text-slate-400 block mt-0.5">Multi-canal</span>
                    </div>
                  </div>

                  {/* Graphique Courbe & Mini Table Grid : Stack on mobile, side-by-side on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-7 bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-700">
                          Flux de revenus en direct
                        </span>
                        <span className="text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded bg-orange-100 text-[#FB5921] font-bold">
                          Pic: 8 250 €
                        </span>
                      </div>
                      {/* SVG Wave Graph */}
                      <div className="h-16 sm:h-20 w-full flex items-end">
                        <svg
                          className="w-full h-full overflow-visible"
                          preserveAspectRatio="none"
                          viewBox="0 0 200 60"
                        >
                          <defs>
                            <linearGradient id="grad-hero" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#FB5921" stopOpacity="0.35"></stop>
                              <stop offset="100%" stopColor="#FC9512" stopOpacity="0.0"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,50 Q40,40 70,25 T120,10 T160,28 T200,8 L200,60 L0,60 Z"
                            fill="url(#grad-hero)"
                          ></path>
                          <path
                            d="M0,50 Q40,40 70,25 T120,10 T160,28 T200,8"
                            fill="none"
                            stroke="#FB5921"
                            strokeWidth="2.5"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    {/* Mini Live Stream Orders */}
                    <div className="sm:col-span-5 bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-700 block">
                        Commandes en attente
                      </span>
                      <div className="flex items-center justify-between p-1 rounded bg-slate-50 text-[9px] sm:text-[10px]">
                        <span className="font-medium text-emerald-700">#12451 Shopify</span>
                        <span className="font-bold">125.00 €</span>
                      </div>
                      <div className="flex items-center justify-between p-1 rounded bg-slate-50 text-[9px] sm:text-[10px]">
                        <span className="font-medium text-pink-700">#12452 Instagram</span>
                        <span className="font-bold">68.50 €</span>
                      </div>
                      <div className="flex items-center justify-between p-1 rounded bg-slate-50 text-[9px] sm:text-[10px]">
                        <span className="font-medium text-green-700">#12453 WhatsApp</span>
                        <span className="font-bold">210.00 €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges Flottants Interactifs */}
              {/* Badge 1: CA en direct */}
              <div className="hidden md:flex absolute -top-4 -left-4 lg:-left-6 bg-white py-2 px-3.5 rounded-xl border border-slate-200 shadow-xl items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#FB5921] flex items-center justify-center">
                  <MaterialIcon name="trending_up" className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-medium text-slate-400 block uppercase tracking-wider">
                    Chiffre d'Affaires
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">
                    +142 850 € <span className="text-xs font-semibold text-emerald-600">(+12.5%)</span>
                  </span>
                </div>
              </div>

              {/* Badge 2: Commandes en direct WhatsApp/Shopify */}
              <div className="hidden sm:flex absolute -bottom-5 -right-3 lg:-right-5 bg-white py-2 px-4 rounded-xl border border-slate-200 shadow-xl items-center gap-3">
                <div className="flex -space-x-1">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow">
                    <MaterialIcon name="chat" className="text-sm" />
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow">
                    <MaterialIcon name="storefront" className="text-sm" />
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    128 commandes directes
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Sync WhatsApp &amp; Shopify instantanée
                  </span>
                </div>
              </div>

              {/* Badge 3: API Active */}
              <div className="hidden lg:flex absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-emerald-200 shadow-lg items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[11px] font-bold text-emerald-800">
                  API Sync: Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

