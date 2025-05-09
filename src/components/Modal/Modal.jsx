import { createPortal } from 'react-dom';
import { Overlay, ModalBody } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onOverlayClick, children }) {
  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onOverlayClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onOverlayClick]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onOverlayClick();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBody>{children}</ModalBody>
    </Overlay>,
    modalRoot
  );
}
