import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MaterialIcon } from '../ui/MaterialIcon';
import { contactFormSchema, ContactFormData } from '../../lib/validations';
import { WHATSAPP_LINK } from '../../lib/constants';

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      monthlyOrders: '100 à 500 commandes / mois',
      salesChannel: 'WhatsApp & Réseaux Sociaux',
      mainChallenge: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedData(data);
    setIsSubmitting(false);
    reset();
  };

  return (
    <section className="py-14 sm:py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Colonne GAUCHE : Argumentaire & Réassurance B2B */}
          <div className="lg:col-span-5 pt-2 sm:pt-4">
            <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2 text-xs sm:text-sm">
              Passez à la vitesse supérieure
            </span>
            <h2 className="font-headline-xl text-slate-900 font-extrabold mb-3 sm:mb-4">
              Demandez une démonstration personnalisée de 30 minutes
            </h2>
            <p className="font-body-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Découvrez concrètement comment MANAG'TUP ERP s'intègre à vos boutiques actuelles, vos
              comptes WhatsApp et votre entrepôt.
            </p>

            {/* 3 Badges de réassurance */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#FB5921] flex items-center justify-center shrink-0">
                  <MaterialIcon name="schedule" className="text-xl" />
                </div>
                <div>
                  <h4 className="font-label-md text-slate-900 font-bold text-xs sm:text-sm">
                    Réponse garantie sous 2 heures
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Un consultant e-commerce analyse vos flux existants.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MaterialIcon name="lock" className="text-xl" />
                </div>
                <div>
                  <h4 className="font-label-md text-slate-900 font-bold text-xs sm:text-sm">
                    Sans aucun engagement
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Testez l'environnement bac à sable avec vos propres produits.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <MaterialIcon name="support_agent" className="text-xl" />
                </div>
                <div>
                  <h4 className="font-label-md text-slate-900 font-bold text-xs sm:text-sm">
                    Onboarding &amp; Migration assistés
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Import de vos catalogues Excel et configuration transporteurs clés en main.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct alternative CTA */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <MaterialIcon name="chat" className="text-2xl text-emerald-700 shrink-0" />
                <div>
                  <p className="text-xs font-bold">Besoin d'un échange immédiat ?</p>
                  <p className="text-[11px] text-emerald-700">
                    Discutez directement avec un expert sur WhatsApp
                  </p>
                </div>
              </div>
              <a
                className="self-start xs:self-auto px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shrink-0 text-center"
                href={WHATSAPP_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ouvrir le chat
              </a>
            </div>
          </div>

          {/* Colonne DROITE : Formulaire B2B Haute Conversion */}
          <div className="lg:col-span-7 bg-[#FAFAFC] rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xl">
            <h3 className="font-title-md font-bold text-slate-900 mb-1 text-base sm:text-lg">
              Planifier ma session de démonstration
            </h3>
            <p className="font-body-sm text-slate-500 mb-5 sm:mb-6 text-xs sm:text-sm">
              Remplissez ces quelques informations pour personnaliser votre démonstration.
            </p>

            {submittedData ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                  <MaterialIcon name="check_circle" className="text-2xl" filled />
                </div>
                <h4 className="text-base font-bold text-emerald-900 mb-1 font-display">
                  Merci, {submittedData.fullName} !
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                  Votre demande pour <strong>{submittedData.company}</strong> a bien été enregistrée.
                  Un expert MANAG'TUP vous contactera sous 2 heures ouvrées au{' '}
                  <span className="font-mono font-medium">{submittedData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="text-xs font-semibold text-emerald-700 underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                      Nom complet *
                    </label>
                    <input
                      id="fullName"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all ${
                        errors.fullName ? 'border-red-300 bg-red-50/20' : 'border-slate-200'
                      }`}
                      placeholder="Alexandre Dupont"
                      required
                      type="text"
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                      Nom de l'entreprise *
                    </label>
                    <input
                      id="company"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all ${
                        errors.company ? 'border-red-300 bg-red-50/20' : 'border-slate-200'
                      }`}
                      placeholder="Maison Mode E-commerce"
                      required
                      type="text"
                      aria-invalid={errors.company ? 'true' : 'false'}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                      {...register('company')}
                    />
                    {errors.company && (
                      <p id="company-error" role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                      Email professionnel *
                    </label>
                    <input
                      id="email"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all ${
                        errors.email ? 'border-red-300 bg-red-50/20' : 'border-slate-200'
                      }`}
                      placeholder="alexandre@entreprise.com"
                      required
                      type="email"
                      autoComplete="email"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all ${
                        errors.phone ? 'border-red-300 bg-red-50/20' : 'border-slate-200'
                      }`}
                      placeholder="+33 6 12 34 56 78"
                      required
                      type="tel"
                      autoComplete="tel"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="text-red-500 text-[11px] mt-1 font-medium">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="monthlyOrders" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                      Volume de commandes mensuel *
                    </label>
                    <select
                      id="monthlyOrders"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all text-slate-700 cursor-pointer"
                      {...register('monthlyOrders')}
                    >
                      <option>100 à 500 commandes / mois</option>
                      <option>500 à 2 000 commandes / mois</option>
                      <option>2 000 à 10 000 commandes / mois</option>
                      <option>Plus de 10 000 commandes / mois</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="salesChannel" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                      Canal de vente prioritaire *
                    </label>
                    <select
                      id="salesChannel"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all text-slate-700 cursor-pointer"
                      {...register('salesChannel')}
                    >
                      <option>WhatsApp &amp; Réseaux Sociaux</option>
                      <option>Shopify / WooCommerce</option>
                      <option>Omnicanal (Web + Boutiques physiques)</option>
                      <option>B2B &amp; Vente en gros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mainChallenge" className="block font-label-sm text-slate-700 text-xs font-semibold mb-1">
                    Quel est votre plus grand défi opérationnel actuel ?
                  </label>
                  <textarea
                    id="mainChallenge"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB5921]/20 focus:border-[#FB5921] transition-all"
                    placeholder="Ex: Décalages d'inventaire entre WhatsApp et Shopify, temps perdu sur la facturation..."
                    rows={3}
                    {...register('mainChallenge')}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    className="w-full orange-gradient-btn py-3.5 px-6 rounded-lg text-white font-label-md text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60 min-h-[48px]"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? 'Traitement en cours...' : 'Envoyer ma demande de démo'}
                    </span>
                    <MaterialIcon name="arrow_forward" className="text-lg" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Vos données sont strictement confidentielles. Conformité RGPD &amp; hébergement
                  sécurisé ISO 27001.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

