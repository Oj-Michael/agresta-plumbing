import React, { useEffect } from 'react';

const CitiesModal = ({ isOpen, onClose, cities }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="cities-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cities-modal-title"
    >
      <div 
        className="cities-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cities-modal__header">
          <h2 id="cities-modal-title" className="cities-modal__title">
            Cities We Serve
          </h2>
          <button 
            className="cities-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="cities-modal__body">
          <ul className="cities-modal__list">
            {cities.map((city, index) => (
              <li key={index} className="cities-modal__item">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CitiesModal;
