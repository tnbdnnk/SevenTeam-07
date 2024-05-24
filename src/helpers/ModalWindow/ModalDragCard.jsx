import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';

import css from './ModalDragCard.module.css';


const ModalDragCard = ({ isOpen, onClose, children, userInfo }) => {
  const { theme } = useSelector(selectUser);

  const modalRef = useRef(null);
  useEffect(() => {
    const closeModal = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={handleClickOutside}>
      <div className={
        userInfo
            ? [css.modal, css[theme], css.userInfo].join(' ')
            : [css.modal, css[theme]].join(' ')
        }
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};


export default ModalDragCard;
