import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { OverlayStyle, ContentStyle } from './Modal.module';
import { motion, AnimatePresence } from 'framer-motion';

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
        <AnimatePresence>
        <motion.div
          exit={{ x: -300, opacity: 0 }}
          key={ContentStyle}
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ContentStyle>{children}</ContentStyle>
        </motion.div>
    </AnimatePresence>
      </OverlayStyle>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func.isRequired,
};
