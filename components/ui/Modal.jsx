import React from 'react';

/**
 * @typedef {Object} ModalProps
 * @property {boolean} isOpen - Controls visibility state
 * @property {() => void} onClose - Callback function to trigger closing behavior
 * @property {string} title - Header text for the modal
 * @property {React.ReactNode} children - Main content slot
 */

/** @type {React.FC<ModalProps>} */
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <div className="modal-header">
          <h3 id="modal-title" className="modal-title">{title}</h3>
          <button className="modal-close" type="button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
