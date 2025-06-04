import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  bordered?: boolean;
}

const Avatar = ({
  src,
  alt,
  size = 'md',
  className = '',
  bordered = false,
}: AvatarProps) => {
  const sizeStyles = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
    xl: { width: 96, height: 96 },
  };

  const dimensions = sizeStyles[size];
  const borderStyles = bordered ? 'border-2 border-red-600 shadow-[0_0_10px_rgba(255,0,51,0.7)]' : '';
  
  return (
    <div 
      className={`relative rounded-full overflow-hidden ${borderStyles} ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes={`${Math.max(dimensions.width, dimensions.height)}px`}
      />
    </div>
  );
};

export default Avatar; 