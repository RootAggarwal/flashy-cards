import React from 'react';

/**
 * @typedef {Object} LoaderProps
 * @property {'sm' | 'md' | 'lg'} [size] - Diameter classification sizing
 * @property {string} [className] - Optional custom CSS class names
 */

/** @type {React.FC<LoaderProps>} */
export default function Loader({ size = 'md', className = '' }) {
  const sizeClass = {
    sm: 'loader-sm',
    md: 'loader-md',
    lg: 'loader-lg'
  }[size];

  return <div className={`loader ${sizeClass} ${className}`.trim()} aria-label="Loading" />;
}
