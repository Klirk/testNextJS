import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption';
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
    h1: 'text-4xl sm:text-5xl leading-tight',
    h2: 'text-3xl sm:text-4xl leading-tight',
    h3: 'text-2xl sm:text-3xl leading-tight',
    h4: 'text-xl sm:text-2xl leading-tight',
    body: 'text-base leading-relaxed',
    'body-sm': 'text-sm leading-relaxed',
    caption: 'text-xs leading-normal',
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
function getElementByVariant(variant: TextProps['variant']): 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' {
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
    default:
      return 'p';
  }
}

export default Text; 