import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-7 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary: 'orange-gradient-btn text-white font-semibold',
    secondary:
      'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm font-semibold hover:border-slate-300',
    whatsapp:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm',
    ghost: 'text-slate-600 hover:text-[#FB5921] hover:bg-orange-50/50',
  };

  const combinedClass = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (asLink && href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
