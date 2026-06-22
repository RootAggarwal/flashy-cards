import React from 'react';

/**
 * @typedef {Object} InputProps
 * @property {string} label - The label that describes the input field
 * @property {string} [error] - Error message to display below the input
 * @property {React.InputHTMLAttributes<HTMLInputElement>} [props] - Any valid HTML input attributes
 */

/** @type {React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>>} */
export default function Input({ label, error, className = '', id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`input-wrapper ${className}`.trim()}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input id={inputId} className={`input-field ${error ? 'input-field-error' : ''}`.trim()} {...props} />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
}
