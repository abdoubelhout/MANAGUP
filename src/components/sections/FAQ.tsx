import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MaterialIcon } from '../ui/MaterialIcon';
import { FAQS } from '../../lib/constants';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFC] border-t border-slate-200/80" id="faq">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionHeading
          badge="Foire Aux Questions"
          title="Questions fréquentes"
          description="Tout ce que vous devez savoir pour passer sur MANAG'TUP en toute sérénité."
        />

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-4 text-left flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 focus:outline-none hover:text-[#FB5921] transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="pr-3 sm:pr-4">{faq.question}</span>
                  <MaterialIcon
                    name="expand_more"
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FB5921]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
