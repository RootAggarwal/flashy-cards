import React from 'react';

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - The text or elements inside the button
 * @property {'button' | 'submit' | 'reset'} [type] - HTML button type
 * @property {'primary' | 'secondary' | 'danger'} [variant] - Visual style variant
 * @property {'sm' | 'md' | 'lg'} [size] - Visual size of the button
 * @property {boolean} [isLoading] - Shows loader state if true
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Any valid HTML button attributes
 */

/** @type {React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>} */
export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger'
  }[variant];

  const sizeClass = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }[size];

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
