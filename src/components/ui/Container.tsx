import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const sizeMap = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-8xl',
  };

  return (
    <div className={cn(sizeMap[size], 'mx-auto px-4 sm:px-6 md:px-8', className)}>
      {children}
    </div>
  );
};
