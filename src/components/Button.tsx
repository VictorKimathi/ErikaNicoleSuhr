import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  to,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-block font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-teal-700 text-white hover:bg-teal-800',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-transparent text-teal-700 border border-teal-700 hover:bg-teal-50'
  };
  const sizeStyles = {
    small: 'text-sm py-2 px-4',
    medium: 'text-base py-2.5 px-6',
    large: 'text-lg py-3 px-8'
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (href) {
    return <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>;
  }
  if (to) {
    return <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>;
  }
  return <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>;
}