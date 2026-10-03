import React, { useState } from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

type ShowcaseTab = 'dashboard' | 'orders' | 'inventory';
type ChannelFilter = 'all' | 'whatsapp' | 'shopify' | 'instagram';

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('dashboard');
  const [channelFilter, setChannelFilter] = useState<ChannelFilter>('all');

  const orders = [
    { id: '#12453', channel: 'whatsapp', name: 'Karim B.', amount: '210.00 €', status: 'Validé WhatsApp', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: '#12451', channel: 'shopify', name: 'Sarah M.', amount: '125.00 €', status: 'En préparation', badgeColor: 'bg-orange-100 text-[#FB5921]' },
    { id: '#12452', channel: 'instagram', name: 'Léa V.', amount: '68.50 €', status: 'Payé CB', badgeColor: 'bg-blue-100 text-blue-800' },
    { id: '#12450', channel: 'whatsapp', name: 'Mamadou T.', amount: '340.00 €', status: 'Bordereau prêt', badgeColor: 'bg-purple-100 text-purple-800' },
  ];

  const filteredOrders = channelFilter === 'all' 
    ? orders 
    : orders.filter((o) => o.channel === channelFilter);

  return (
    <section className="py-20 bg-white border-b border-slate-200/80" id="showcase">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-label-sm text-[#FB5921] font-bold uppercase tracking-wider block mb-2">
            Showcase Produit
          </span>
          <h2 className="font-headline-xl text-slate-900 font-extrabold mb-4">
            Une vision claire de votre activité, en temps réel.
          </h2>
          <p className="font-body-lg text-slate-600">
            Une ergonomie pensée pour les directeurs des opérations et les équipes sur le terrain :
            vitesse d'exécution, lisibilité immédiate et contrôle absolu.
          </p>
        </div>

        {/* Grande Présentation Immersive avec Callouts Interactifs */}
        <div className="relative bg-slate-900 rounded-3xl p-3 sm:p-5 md:p-6 shadow-2xl border border-slate-800 overflow-hidden">
          {/* Subtle Orange Glow Ambient */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FB5921]/15 rounded-full blur-3xl pointer-events-none -z-0"></div>

          {/* Mockup Frame */}
          <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-inner border border-slate-200">
            {/* Topbar de l'app ERP */}
            <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                  MANAGUP
                </span>
                
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  Espace Ventes &amp; Opérations Multi-sites
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[11px] sm:text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Connexion 4 Canaux Active
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FB5921]/10 text-[#FB5921] font-bold flex items-center justify-center text-[10px] sm:text-xs">
                  ADMIN
                </div>
              </div>
            </div>

            {/* Mobile Tab Selector */}
            <div className="lg:hidden flex border-b border-slate-200 bg-slate-50 px-2 py-1 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('dashboard')}
                className={`flex-1 py-1.5 font-bold text-center rounded-lg transition-colors ${
                  activeTab === 'dashboard' ? 'bg-white text-[#FB5921] shadow-sm' : 'text-slate-600'
                }`}
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('orders')}
                className={`flex-1 py-1.5 font-bold text-center rounded-lg transition-colors ${
                  activeTab === 'orders' ? 'bg-white text-[#FB5921] shadow-sm' : 'text-slate-600'
                }`}
              >
                Commandes
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('inventory')}
                className={`flex-1 py-1.5 font-bold text-center rounded-lg transition-colors ${
                  activeTab === 'inventory' ? 'bg-white text-[#FB5921] shadow-sm' : 'text-slate-600'
                }`}
              >
                Inventaire
              </button>
            </div>

            {/* Dashboard Inner Content Showcase */}
            <div className="p-3 sm:p-5 md:p-6 bg-[#FAFAFC] grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
              {/* Sidebar ERP Navigation */}
              <div className="hidden lg:block col-span-2 bg-white rounded-xl p-3 border border-slate-200 space-y-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full px-3 py-2 rounded-lg flex items-center gap-2 text-left font-bold transition-colors cursor-pointer ${
                    activeTab === 'dashboard'
                      ? 'bg-orange-50 text-[#FB5921]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <MaterialIcon name="dashboard" className="text-base" /> Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('orders')}
                  className={`w-full px-3 py-2 rounded-lg flex items-center gap-2 text-left font-bold transition-colors cursor-pointer ${
                    activeTab === 'orders'
                      ? 'bg-orange-50 text-[#FB5921]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <MaterialIcon name="shopping_cart" className="text-base" /> Commandes
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('inventory')}
                  className={`w-full px-3 py-2 rounded-lg flex items-center gap-2 text-left font-bold transition-colors cursor-pointer ${
                    activeTab === 'inventory'
                      ? 'bg-orange-50 text-[#FB5921]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <MaterialIcon name="inventory" className="text-base" /> Inventaire
                </button>
                <div className="px-3 py-2 text-slate-400 rounded-lg flex items-center gap-2 select-none">
                  <MaterialIcon name="analytics" className="text-base" /> Analytics
                </div>
                <div className="px-3 py-2 text-slate-400 rounded-lg flex items-center gap-2 select-none">
                  <MaterialIcon name="group" className="text-base" /> Clients
                </div>
                <div className="px-3 py-2 text-slate-400 rounded-lg flex items-center gap-2 select-none">
                  <MaterialIcon name="settings" className="text-base" /> Paramètres
                </div>
              </div>

              {/* Main Dashboard Canvas */}
              <div className="col-span-1 lg:col-span-10 space-y-5">
                {/* 4 KPI Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 relative overflow-hidden">
                    <span className="text-xs font-semibold text-slate-500">Chiffre d'Affaires Brut</span>
                    <p className="text-lg sm:text-xl font-extrabold text-[#FB5921] mt-1">+3400000 DA</p>
                    <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">
                      ↗ +12.5% vs M-1
                    </span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500">Commandes Totales</span>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">1 280 Colis</p>
                    <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">
                      ↗ +8.2% de volume
                    </span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500">Efficacité Préparation</span>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">98.2%</p>
                    <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">
                      Expédié en &lt; 24h
                    </span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500">Canaux Connectés</span>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">4 Sources</p>
                    <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                      WhatsApp, Web, Boutique
                    </span>
                  </div>
                </div>

                {/* 2 Main Cards : Analytics & Orders Stream */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  {/* Revenue Curve & Stock Table */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-slate-900">
                          Analyse des Ventes en Direct
                        </span>
                        <span className="text-xs font-bold text-[#FB5921] bg-orange-50 px-2 py-0.5 rounded">
                          Pic : 800000 DA (14:45)
                        </span>
                      </div>
                      <div className="h-28 w-full">
                        <svg
                          className="w-full h-full"
                          preserveAspectRatio="none"
                          viewBox="0 0 400 100"
                        >
                          <defs>
                            <linearGradient id="curve-grad" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#FB5921" stopOpacity="0.3"></stop>
                              <stop offset="100%" stopColor="#FC9512" stopOpacity="0.0"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,80 C80,70 120,20 180,15 C240,10 280,60 340,30 L400,20 L400,100 L0,100 Z"
                            fill="url(#curve-grad)"
                          ></path>
                          <path
                            d="M0,80 C80,70 120,20 180,15 C240,10 280,60 340,30 L400,20"
                            fill="none"
                            stroke="#FB5921"
                            strokeWidth="3"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    {/* Mini Stock Tracking Table */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-900 uppercase">
                          Suivi des Niveaux de Stock
                        </span>
                        <span className="text-xs text-[#FB5921] font-semibold">
                          1 Alerte Seuil Actif
                        </span>
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-100 text-slate-400">
                            <th className="py-1">Article</th>
                            <th>SKU</th>
                            <th>Stock</th>
                            <th>État</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          <tr>
                            <td className="py-1.5 font-medium">Summer Dress Floral</td>
                            <td className="text-slate-500">SD-001</td>
                            <td className="font-bold">150 U</td>
                            <td>
                              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                                En Stock
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1.5 font-medium">Leather Handbag Brown</td>
                            <td className="text-slate-500">LB-002</td>
                            <td className="font-bold text-[#FB5921]">5 U</td>
                            <td>
                              <span className="px-2 py-0.5 rounded text-[10px] bg-orange-100 text-[#FB5921] font-bold">
                                Alerte Stock Bas
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right Orders & Live Stream */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-900 block">
                          Dernières Commandes
                        </span>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => setChannelFilter('all')}
                            className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                              channelFilter === 'all'
                                ? 'bg-[#FB5921] text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Tous
                          </button>
                          <button
                            type="button"
                            onClick={() => setChannelFilter('whatsapp')}
                            className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                              channelFilter === 'whatsapp'
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            WA
                          </button>
                          <button
                            type="button"
                            onClick={() => setChannelFilter('shopify')}
                            className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                              channelFilter === 'shopify'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Web
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs">
                        {filteredOrders.map((order) => (
                          <div
                            key={order.id}
                            className="p-2.5 rounded-lg bg-slate-50 hover:bg-orange-50/50 transition-colors border border-slate-200 flex items-center justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-800">{order.id}</span>
                                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${order.badgeColor}`}>
                                  {order.status}
                                </span>
                              </div>
                              <span className="text-[10px] text-slate-500">{order.name}</span>
                            </div>
                            <span className="font-bold text-slate-900">{order.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Fulfillment Stream */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold text-slate-900 block mb-2">
                        Flux d'Exécution en Direct
                      </span>
                      <div className="space-y-2 text-[11px]">
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>14:52 : #12453 encaissé 210,00 € (Livreur #04)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>14:51 : #12450 emballée (Entrepôt Nord)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FB5921]"></span>
                          <span>14:48 : Bordereau DHL généré pour #12448</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Highlights Strips under showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 flex items-center gap-3">
              <MaterialIcon name="sync_alt" className="text-[#FB5921]" />
              <span className="text-xs font-semibold text-white">Gestion Multi-Canal Intégrée</span>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 flex items-center gap-3">
              <MaterialIcon name="inventory_2" className="text-[#FB5921]" />
              <span className="text-xs font-semibold text-white">Réservation de Stock en Direct</span>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 flex items-center gap-3">
              <MaterialIcon name="notifications_active" className="text-[#FB5921]" />
              <span className="text-xs font-semibold text-white">Alertes Seuil Intelligentes</span>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 flex items-center gap-3">
              <MaterialIcon name="verified_user" className="text-[#FB5921]" />
              <span className="text-xs font-semibold text-white">Traçabilité &amp; Audit Opérateur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

