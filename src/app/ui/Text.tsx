import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption' | 'code';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  color?: 'default' | 'muted' | 'primary' | 'success' | 'error' | 'neon';
}

const Text = ({
  children,
  variant = 'body',
  align = 'left',
  weight = 'normal',
  className = '',
  color = 'default',
}: TextProps) => {
  const variantStyles = {
    h1: 'text-4xl sm:text-5xl tracking-tighter',
    h2: 'text-3xl sm:text-4xl tracking-tight',
    h3: 'text-2xl sm:text-3xl tracking-tight',
    h4: 'text-xl sm:text-2xl tracking-tight',
    body: 'text-base leading-relaxed',
    'body-sm': 'text-sm leading-relaxed',
    caption: 'text-xs leading-normal',
    code: 'text-sm font-mono bg-gray-800 px-1.5 py-0.5 rounded border-l-2 border-red-500',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorStyles = {
    default: 'text-white',
    muted: 'text-gray-400',
    primary: 'text-red-500',
    success: 'text-green-400',
    error: 'text-red-500',
    neon: 'neon-red-text',
  };

  const Element = getElementByVariant(variant);

  return (
    <Element
      className={`${variantStyles[variant]} ${alignStyles[align]} ${weightStyles[weight]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </Element>
  );
};

// Helper function to determine which HTML element to use based on variant
function getElementByVariant(variant: TextProps['variant']): 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'code' {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'caption':
      return 'span';
    case 'code':
      return 'code';
    default:
      return 'p';
  }
}

export default Text; 