import React, { useEffect } from 'react';

/**
 * @typedef {Object} ToastProps
 * @property {string} message - Message payload to display
 * @property {'success' | 'error' | 'info'} [type] - Type of feedback system alert
 * @property {() => void} onClose - Self-cleanup destructive callback
 * @property {number} [duration] - Auto-dismiss timeout configuration in ms
 */

/** @type {React.FC<ToastProps>} */
export default function Toast({ message, type = 'info', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close" type="button" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
