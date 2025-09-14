import type { ReactNode } from 'react';

interface NavigationButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  variant?: 'arrow' | 'text';
}

export default function NavigationButton({ 
  onClick, 
  children, 
  className = '', 
  variant = 'arrow' 
}: NavigationButtonProps) {
  const baseClasses = variant === 'arrow' 
    ? `absolute top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 group ${className}`
    : `flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-200 group ${className}`;

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}