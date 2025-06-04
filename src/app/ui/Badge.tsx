import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const variantStyles = {
    default: 'bg-black border border-red-600 text-white shadow-[0_0_5px_rgba(255,0,51,0.5)]',
    primary: 'bg-red-900 text-white border border-red-500 shadow-[0_0_5px_rgba(255,0,51,0.7)]',
    secondary: 'bg-black text-red-500 border border-red-600',
    success: 'bg-green-900 border border-green-500 text-green-300 shadow-[0_0_5px_rgba(0,255,0,0.5)]',
    danger: 'bg-red-900 border border-red-500 text-white shadow-[0_0_8px_rgba(255,0,0,0.7)]',
    warning: 'bg-yellow-900 border border-yellow-500 text-yellow-300',
    info: 'bg-blue-900 border border-blue-400 text-blue-300',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge; 