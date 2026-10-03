import React from 'react';
import { FeatureItem } from '../../types';
import { MaterialIcon } from '../ui/MaterialIcon';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 card-subtle-glow transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FB5921] flex items-center justify-center mb-5">
          <MaterialIcon name={feature.iconName} className="text-2xl" />
        </div>
        <span className="text-xs font-bold text-slate-400 block mb-1">{feature.number}</span>
        <h3 className="font-title-md text-slate-900 mb-2 font-bold">{feature.title}</h3>
        <p className="font-body-sm text-slate-600 leading-relaxed">{feature.description}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#FB5921]">
        <span>{feature.badge}</span>
      </div>
    </div>
  );
};

