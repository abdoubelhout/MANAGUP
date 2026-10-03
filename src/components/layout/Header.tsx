import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import { MaterialIcon } from '../ui/MaterialIcon';
import { NAV_LINKS, WHATSAPP_LINK } from '../../lib/constants';
import { MobileNavigation } from './MobileNavigation';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Leading Brand & Logo */}
          <a
            className="flex items-center gap-3 active:scale-[0.98] transition-transform duration-100"
            href="#"
            aria-label="MANAG'TUP ERP"
          >
            <Logo className="h-8 md:h-9 w-auto object-contain" />
            <span className="sr-only">MANAG'TUP</span>
          </a>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="font-label-md text-slate-600 hover:text-[#FB5921] transition-colors duration-150"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Trailing Action */}
          <div className="flex items-center gap-3">
            <a
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 font-label-md text-slate-600 hover:text-[#FB5921] transition-colors text-xs"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MaterialIcon name="chat" className="text-lg text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              className="orange-gradient-btn inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg text-white font-label-md text-xs sm:text-sm transition-all duration-200 active:scale-[0.98]"
              href="#contact"
            >
              <span className="hidden xs:inline sm:inline">Demander une démo</span>
              <span className="xs:hidden sm:hidden">Démo</span>
              <MaterialIcon name="arrow_forward" className="text-base sm:text-lg" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
};

