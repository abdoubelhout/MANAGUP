import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  className = '',
  filled = false,
}) => {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'material-symbols-fill' : ''} ${className}`}
      data-icon={name}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
