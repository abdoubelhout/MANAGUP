import React from 'react';
import { FEATURES } from '../../lib/constants';
import { FeatureCard } from './FeatureCard';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAFC]" id="fonctionnalites">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2">
            Périmètre Fonctionnel Complet
          </span>
          <h2 className="font-headline-xl text-slate-900 font-extrabold mb-4">
            Tout ce dont votre e-commerce a besoin pour accélérer
          </h2>
          <p className="font-body-lg text-slate-600">
            Fini les abonnements à 10 micro-outils incompatibles. MANAG'TUP réunit l'ensemble de votre
            chaîne de valeur commerciale et logistique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

