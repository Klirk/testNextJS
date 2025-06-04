import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  className = '',
  id,
}: SectionProps) => {
  return (
    <section id={id} className={`py-12 md:py-16 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-10 max-w-2xl mx-auto text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white neon-red-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section; 