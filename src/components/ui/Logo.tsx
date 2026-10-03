import React, { useState } from 'react';
import { LOGO_URL, LOGO_FOOTER_URL } from '../../lib/constants';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto', variant = 'header' }) => {
  const [hasError, setHasError] = useState(false);
  const src = variant === 'footer' ? LOGO_FOOTER_URL : LOGO_URL;

  if (hasError) {
    return (
      <div className="flex items-center gap-2.5 font-display font-black tracking-tight text-slate-900 select-none">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FB5921] to-[#FC9512] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
          <svg
            viewBox="0 0 24 24"
            className="w-4.5 h-4.5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="font-extrabold text-xl tracking-tight">
          MANAG<span className="text-[#FB5921]">'</span>TUP
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={src}
        alt="MANAG'TUP ERP — Logiciel ERP E-commerce Multi-canal"
        width={variant === 'footer' ? 140 : 160}
        height={variant === 'footer' ? 32 : 36}
        className={`${className} object-contain transition-transform duration-200`}
        loading={variant === 'header' ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={variant === 'header' ? 'high' : 'auto'}
        onError={() => setHasError(true)}
      />
    </div>
  );
};
