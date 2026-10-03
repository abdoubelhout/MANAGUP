import {
  AuditLogItem,
  BenefitMetricItem,
  FaqItem,
  FeatureItem,
  PersonaItem,
  QuickValueItem,
  WorkflowStep,
} from '../types';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAAaKhJY8nfnvgbiyBC70tMHfVt9S2EYu8Kg2j2McFkL6INvRerWSrglCAObWV5JQp6HLQyd8C4FxS5BSDSWhFFUCp2KzkMZ_9TNw3MoMJKkVQQXnSrs7bYL991TlJPqfnAgsPq5k1SDCjY0unr4JnOwjsnRP6iWQ7thGFCo3z1hHngauMIFZowg8gkGK5OAt9bGIqDArbf_ntO77FBJOQlFN_Rhy2Df8zssPCUX0yBTEBK8QPosc49OTqL51uhB7FX3A';

export const LOGO_FOOTER_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDqf_NVGtPAl5_unM9gTKIsq-dFyK63BP_32zTV-C6levdG2l0baRdC-6M5qA7aHqlUGocz6DvczFRB3FwhDPmF-7zeT8S-8CtAE8BbuPA8MIlwvKdVhxuItVl--7NVL7SicU5w-al2EoyS_wRdC_X3FLGxB6kK-dUyw4ACF0UTIrCTsm1GIThiDbq-7b8gReJtmT1INmm7OWVtoQUR6t6_bhCObwF-4lSmbl2FvG6S8mw2EDYXQvBzO5eVeCHfnIvujQ';

export const WHATSAPP_LINK = 'https://wa.me/33612345678?text=Bonjour,%20je%20souhaite%20une%20démo%20de%20MANAG%27TUP%20ERP';

export const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: "Pourquoi MANAGUP", href: '#pourquoi-managtup' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Démo', href: '#showcase' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const QUICK_VALUES: QuickValueItem[] = [
  {
    id: 'orders',
    title: 'Commandes centralisées',
    subtitle: 'WhatsApp, Web, Boutique',
    iconName: 'all_inbox',
  },
  {
    id: 'stock',
    title: 'Stock en temps réel',
    subtitle: 'Zéro survente ou rupture',
    iconName: 'inventory_2',
  },
  {
    id: 'suppliers',
    title: 'Achats & Fournisseurs',
    subtitle: "Réceptions & Bons d'achat",
    iconName: 'local_shipping',
  },
  {
    id: 'invoicing',
    title: 'Facturation automatisée',
    subtitle: 'Devis, factures & avoirs',
    iconName: 'receipt_long',
  },
  {
    id: 'payments',
    title: 'Suivi des paiements',
    subtitle: 'Encaissements en 1 clic',
    iconName: 'account_balance_wallet',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'multi-source',
    number: '01',
    title: 'Gestion Multi-Sources',
    description:
      'Connecteurs natifs WhatsApp Business, Instagram DM, Shopify, site codée et TPE physique. Centralisation automatique en temps réel.',
    badge: 'Synchronisation instantanée',
    iconName: 'forum',
  },
  {
    id: 'invoicing',
    number: '02',
    title: 'Facturation Automatisée',
    description:
      'Cycle documentaire complet : Devis -> Bon de commande -> Facture légale -> Reçu client. Génération PDF instantanée et envoi WhatsApp.',
    badge: 'Conforme aux normes comptables',
    iconName: 'receipt',
  },
  {
    id: 'stock-alerts',
    number: '03',
    title: 'Stocks & Alertes de Seuil',
    description:
      'Gestion multi-entrepôts, transferts entre boutiques, alertes automatiques de réapprovisionnement dès franchissement du seuil minimum.',
    badge: 'Zéro rupture imprévue',
    iconName: 'inventory_2',
  },
  {
    id: 'purchases',
    number: '04',
    title: 'Achats & Fournisseurs',
    description:
      'Bons de commande fournisseurs automatisés, réceptions partielles ou complètes, calcul automatique du coût unitaire moyen pondéré (CUMP).',
    badge: 'Calcul des marges nettes',
    iconName: 'local_shipping',
  },
  {
    id: 'treasury',
    number: '05',
    title: 'Paiements & Trésorerie',
    description:
      'Suivi précis des paiements à la livraison (Cash on Delivery), cartes bancaires, virements et Mobile Money avec état de rapprochement bancaire.',
    badge: 'Rapprochement sans écart',
    iconName: 'account_balance_wallet',
  },
  {
    id: 'shipping-api',
    number: '06',
    title: 'API Transporteurs & Suivi',
    description:
      'Génération en un clic des étiquettes transporteurs (DHL, ZR express , YAalidin , Mystro ....). Envoi direct du numéro de suivi par WhatsApp au client.',
    badge: 'Tracking client automatisé',
    iconName: 'package_2',
  },
  {
    id: 'audit-traceability',
    number: '07',
    title: 'Audit & Traçabilité Équipe',
    description:
      "Chaque action est enregistrée avec précision horodatée : qui a créé la commande, qui a modifié le prix, qui a validé le colis. Rôles et droits d'accès fins.",
    badge: 'Contrôle interne strict',
    iconName: 'policy',
  },
  {
    id: 'analytics',
    number: '08',
    title: 'Analytics & Marges Réelles',
    description:
      "Rapports de rentabilité par canal, par produit et par période en déduisant les coûts d'achat, de livraison et les commissions d'encaissement.",
    badge: 'Calcul de marge nette réel',
    iconName: 'monitoring',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 'Étape 01',
    title: 'Commande Reçue',
    description: 'Capture WhatsApp, Shopify ou TPE physique.',
    iconName: 'inbox',
    borderColor: 'border-[#FB5921]',
    textColor: 'text-[#FB5921]',
  },
  {
    step: 'Étape 02',
    title: 'Validation & Contrôle',
    description: "Vérification de l'adresse et validation client.",
    iconName: 'fact_check',
    borderColor: 'border-orange-400',
    textColor: 'text-orange-500',
  },
  {
    step: 'Étape 03',
    title: 'Réservation Stock',
    description: 'Déduction temps réel sur tous les canaux.',
    iconName: 'lock_clock',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-600',
  },
  {
    step: 'Étape 04',
    title: 'Colisage & Picking',
    description: 'Bordereau de préparation avec scan code-barre.',
    iconName: 'inventory',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-600',
  },
  {
    step: 'Étape 05',
    title: 'Expédition & Suivi',
    description: 'Étiquette transporteur et tracking SMS/WhatsApp.',
    iconName: 'local_shipping',
    borderColor: 'border-teal-500',
    textColor: 'text-teal-600',
  },
  {
    step: 'Étape 06',
    title: 'Encaissement',
    description: 'Pointage des règlements COD ou en ligne.',
    iconName: 'payments',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
  },
  {
    step: 'Étape 07',
    title: 'Rentabilité Nette',
    description: 'Consolidation automatique de marge nette.',
    iconName: 'query_stats',
    borderColor: 'border-slate-900',
    textColor: 'text-slate-900',
  },
];

export const AUDIT_LOGS: AuditLogItem[] = [
  {
    id: 'log-1',
    time: '14:52:10',
    title: 'Paiement 50 000 DA validé (Espèces / COD)',
    operator: 'Opérateur : Livreur #04',
    description: 'Encaissement transféré au compte caisse de distribution centrale.',
    dotColor: 'bg-emerald-500',
    ringColor: 'ring-emerald-50',
  },
  {
    id: 'log-2',
    time: '14:10:45',
    title: 'Colis remis au transporteur express',
    operator: 'Opérateur : Entrepôt Nord',
    description: 'Tracking #TRK-980123 notifié automatiquement au client par WhatsApp.',
    dotColor: 'bg-blue-500',
    ringColor: 'ring-blue-50',
  },
  {
    id: 'log-3',
    time: '11:32:02',
    title: 'Colis scellé & Facture éditée (#FAC-4412)',
    operator: 'Opérateur : A. Diallo',
    description: 'Contrôle poids conforme (1.24 kg) - 2 articles vérifiés par scan SKU.',
    dotColor: 'bg-amber-500',
    ringColor: 'ring-amber-50',
  },
  {
    id: 'log-4',
    time: '10:15:22',
    title: 'Commande initiée via passerelle WhatsApp API',
    operator: 'Système auto',
    description: 'Déduction immédiate de 2 unités sur le stock Shopify & Boutique.',
    dotColor: 'bg-[#FB5921]',
    ringColor: 'ring-orange-50',
  },
];

export const PERSONAS: PersonaItem[] = [
  {
    id: 'persona-1',
    title: 'E-commerçants & Pure Players',
    description:
      'Vendez sur plusieurs boutiques web et réseaux sociaux sans jamais redouter les surventes ou les retards de synchronisation.',
    tag: "Focalisé sur l'échelle & la vitesse",
    iconName: 'shopping_bag',
  },
  {
    id: 'persona-2',
    title: 'Boutiques & Retail Omnicanal',
    description:
      'Réconciliez vos points de vente physiques et vos commandes en ligne dans un inventaire unifié et transparent.',
    tag: 'Stock partagé en temps réel',
    iconName: 'storefront',
  },
  {
    id: 'persona-3',
    title: 'Opérateurs Logistiques',
    description:
      "Optimisez le picking, l'emballage et les départs transporteurs avec des bordereaux clairs et des scans de contrôle sans faille.",
    tag: 'Zéro erreur de préparation',
    iconName: 'warehouse',
  },
  {
    id: 'persona-4',
    title: 'Équipes ADV & Comptabilité',
    description:
      'Éliminez la ressaisie des factures, suivez les encaissements à la trace et exportez vos données comptables en 2 clics.',
    tag: 'Clôtures mensuelles sereines',
    iconName: 'account_balance',
  },
];

export const BENEFIT_METRICS: BenefitMetricItem[] = [
  {
    id: 'metric-1',
    value: '+6h',
    title: 'Gagnées par jour',
    description:
      'Élimination des doubles saisies et des vérifications manuelles dans WhatsApp et Sheet.',
    valueColorClass: 'text-[#FB5921]',
  },
  {
    id: 'metric-2',
    value: '-95%',
    title: "D'erreurs de saisie",
    description:
      'Scan automatisé et contrôle de conformité à chaque étape de la préparation de commande.',
    valueColorClass: 'text-white',
  },
  {
    id: 'metric-3',
    value: '360°',
    title: 'Visibilité totale',
    description:
      'Suivi consolidé des marges, des niveaux de stock et des flux financiers en direct.',
    valueColorClass: 'text-[#FC9512]',
  },
  {
    id: 'metric-4',
    value: 'x3',
    title: 'Capacité de vente',
    description:
      "Multipliez votre volume de commandes sans recruter proportionnellement d'opérateurs administratifs.",
    valueColorClass: 'text-emerald-400',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Comment s'effectue la connexion avec WhatsApp Business ?",
    answer:
      "MANAGUP se connecte via l'API officielle WhatsApp Cloud. Dès qu'un client passe commande ou confirme ses coordonnées par message, la commande est enregistrée dans l'ERP en 1 clic ou automatiquement par mot-clé, et le lien de suivi lui est renvoyé sans quitter la conversation.",
  },
  {
    id: 'faq-2',
    question: 'Combien de temps prend la migration depuis nos fichiers Sheet actuels ?',
    answer:
      "La migration se fait en moyenne en moins de 48 heures. Nos équipes vous fournissent des gabarits d'importation simples (produits, variantes, prix, stocks initiaux et clients) et valident l'intégrité de vos données avec vous avant la mise en production.",
  },
  {
    id: 'faq-3',
    question: 'Quels transporteurs et solutions de livraison locale sont pris en charge ?',
    answer:
      'Nous intégrons nativement les transporteurs internationaux majeurs (DHL, FedEx, UPS, Chronopost) ainsi que vos flottes de coursiers internes ou sociétés locales de livraison avec gestion du paiement contre remboursement (COD).',
  },
  {
    id: 'faq-4',
    question: 'Est-il possible de restreindre les accès de mes employés et magasiniers ?',
    answer:
      "Absolument. MANAGUP propose une gestion granulaire des rôles. Par exemple, vos préparateurs de commandes ne voient que la liste de colisage sans accès aux marges financières, et vos vendeurs en boutique n'ont pas accès aux paramètres comptables globaux.",
  },
];
