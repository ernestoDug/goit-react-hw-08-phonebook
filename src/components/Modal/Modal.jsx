import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { OverlayStyle, ContentStyle } from './Modal.module';

export const Modal = ({ children, onCloseModal }) => {
  // на закриття
  const clicker = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  // по іскейпу
  useEffect(() => {
    const keyClicker = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    // слухаю клаву
    window.addEventListener('keydown', keyClicker);
    // не слухаю
    return () => {
      window.removeEventListener('keydown', keyClicker);
    };
  }, [onCloseModal]);

  return (
    <OverlayStyle onClick={clicker}>
      <ContentStyle>{children}</ContentStyle>
    </OverlayStyle>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};
