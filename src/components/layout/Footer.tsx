import React from 'react';
import { Logo } from '../ui/Logo';
import { MaterialIcon } from '../ui/MaterialIcon';
import { WHATSAPP_LINK } from '../../lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo et Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Logo className="h-7 md:h-8 w-auto" variant="footer" />
          <span className="hidden sm:inline text-slate-300">|</span>
          <p className="text-slate-500 text-xs sm:text-sm">
            © 2026 MANAGUP ERP. Tous droits réservés.
          </p>
        </div>

        {/* Links Exacts du design */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 sm:gap-6 text-xs sm:text-sm">
          <a
            href="#fonctionnalites"
            className="text-slate-600 hover:text-[#FB5921] transition-colors"
          >
            Fonctionnalités
          </a>
          <a
            href="#workflow"
            className="text-slate-600 hover:text-[#FB5921] transition-colors"
          >
            Flux de commande
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-[#FB5921] transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#pourquoi-managtup"
            className="text-slate-600 hover:text-[#FB5921] transition-colors"
          >
            Sécurité & Audit
          </a>
          <a
            href="#contact"
            className="text-[#FB5921] hover:underline font-bold transition-colors"
          >
            Demander une démo
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1 font-medium"
          >
            <MaterialIcon name="chat" className="text-sm text-emerald-600" />
            <span>WhatsApp Direct</span>
          </a>
        </nav>
      </div>
    </footer>
  );
};
