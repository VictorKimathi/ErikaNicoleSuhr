import React from 'react';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  bgColor?: string;
}
export function Section({
  children,
  className = '',
  id,
  fullWidth = false,
  bgColor = 'bg-white'
}: SectionProps) {
  return <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${bgColor} ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}>
        {children}
      </div>
    </section>;
}