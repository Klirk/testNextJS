import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card = ({
  children,
  className = '',
  hoverable = false,
  bordered = true,
}: CardProps) => {
  const baseStyles = 'bg-black text-white rounded-lg overflow-hidden';
  const hoverStyles = hoverable ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,0,51,0.7)]' : '';
  const borderStyles = bordered ? 'border border-red-600' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${borderStyles} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-4 border-b border-red-800 bg-gray-900 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-4 bg-gray-900 border-t border-red-800 ${className}`}>
      {children}
    </div>
  );
};

export default Card; 