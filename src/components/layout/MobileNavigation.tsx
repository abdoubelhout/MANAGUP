import React from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';
import { WHATSAPP_LINK } from '../../lib/constants';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="fixed top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-3 py-2 text-base font-semibold text-slate-700 hover:text-[#FB5921] hover:bg-orange-50/60 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 text-sm font-semibold hover:bg-emerald-100 transition-colors"
          >
            <MaterialIcon name="chat" className="text-emerald-600 text-lg" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="orange-gradient-btn flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white text-sm font-bold shadow-md"
          >
            <span>Demander une démo</span>
            <MaterialIcon name="arrow_forward" className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};
