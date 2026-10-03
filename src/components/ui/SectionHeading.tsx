import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center max-w-3xl mx-auto mb-14 md:mb-16' : 'text-left mb-8 md:mb-10',
        className
      )}
    >
      {badge && (
        <span className="text-xs font-bold text-[#FB5921] uppercase tracking-wider block mb-2 font-display">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-display">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
