import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

export const Problems: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFC]" id="pourquoi-managtup">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2 text-xs sm:text-sm">
            La rupture avec les anciens outils
          </span>
          <h2 className="font-headline-xl text-slate-900 font-extrabold mb-3 sm:mb-4">
            Ne laissez plus la dispersion freiner votre croissance
          </h2>
          <p className="font-body-lg text-slate-600 text-sm sm:text-base">
            Comparez le chaos des processus morcelés à la puissance unifiée d'un véritable ERP moderne
            pensé pour les vendeurs agiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Colonne GAUCHE : Avant MANAG'TUP */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 border border-red-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <MaterialIcon name="cancel" />
                  </div>
                  <div>
                    <h3 className="font-title-md font-bold text-slate-900 text-base sm:text-lg">Avant MANAG'TUP</h3>
                    <p className="font-body-sm text-slate-500 text-xs">
                      La dispersion coûteuse et le stress quotidien
                    </p>
                  </div>
                </div>
                <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                  Chaos opérationnel
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MaterialIcon name="close" className="text-red-500 mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Commandes WhatsApp perdues ou oubliées
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Captures d'écran éparpillées, messages non répondus et clients déçus.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MaterialIcon name="close" className="text-red-500 mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Fichiers Excel désynchronisés
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Chaque membre de l'équipe tient son propre tableau avec des quantités obsolètes.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MaterialIcon name="close" className="text-red-500 mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Ruptures inopinées &amp; surventes
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Produits vendus en ligne alors qu'ils ont déjà été achetés en boutique physique.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MaterialIcon name="close" className="text-red-500 mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Saisies manuelles chronophages
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Recopie manuelle des adresses clients, factures Word éditées à la main.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Résultat : Perte de 15% à 25% du CA potentiel</span>
              <span className="text-red-600 font-semibold">Erreurs d'envoi récurrentes</span>
            </div>
          </div>

          {/* Colonne DROITE : Avec MANAG'TUP */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 border-2 border-[#FB5921] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#FB5921]/15 to-transparent w-48 h-48 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FB5921] flex items-center justify-center shrink-0">
                    <MaterialIcon name="check_circle" filled />
                  </div>
                  <div>
                    <h3 className="font-title-md font-bold text-slate-900 text-base sm:text-lg">Avec MANAG'TUP ERP</h3>
                    <p className="font-body-sm text-body-sm text-slate-500 text-xs">
                      Fluidité, contrôle total et automatisation
                    </p>
                  </div>
                </div>
                <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold bg-[#FB5921]/10 text-[#FB5921] border border-[#FB5921]/30">
                  Flux sans couture
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MaterialIcon name="check" className="text-[#FB5921] mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Centralisation immédiate des commandes
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      WhatsApp, Shopify et Instagram convergent instantanément dans un tableau unifié.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MaterialIcon name="check" className="text-[#FB5921] mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Stocks déduits à la milliseconde
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Une vente en boutique réserve instantanément l'article sur tous vos canaux e-commerce.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MaterialIcon name="check" className="text-[#FB5921] mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Facturation &amp; Bordereaux en 1 clic
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Création automatique de la facture légale, impression du bon de colisage et du bordereau.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MaterialIcon name="check" className="text-[#FB5921] mt-0.5 text-lg" />
                  <div>
                    <strong className="font-label-md text-slate-800 text-sm block">
                      Traçabilité &amp; Marges réelles en direct
                    </strong>
                    <span className="font-body-sm text-slate-500 text-xs">
                      Qui a préparé la commande ? Quel est le bénéfice net après coût de livraison ?
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-orange-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <MaterialIcon name="verified" className="text-sm" /> 0% de commandes égarées
              </span>
              <span className="font-semibold text-slate-800">+4h libérées par jour / opérateur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

