import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'rounded-md font-medium tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-red-600 text-white hover:bg-red-700 neon-glow',
    secondary: 'bg-black text-white border border-red-600 hover:bg-gray-900 shadow-[0_0_5px_rgba(255,0,51,0.5)]',
    outline: 'bg-transparent border border-red-600 hover:bg-gray-900 hover:border-red-400 text-red-500 shadow-[0_0_5px_rgba(255,0,51,0.3)]',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 