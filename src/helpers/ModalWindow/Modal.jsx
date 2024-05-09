import { useEffect, useRef } from 'react';

import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectUser } from '../../../redux/auth/auth-selectors';

// import {createPortal} from 'react-dom';
import css from './modal-overlay.module.css';
import icons from '../../images/symbol-defs.svg';

const Modal = ({ isOpen, onClose, children }) => {
  //временно
  const [activeTheme, setactiveTheme] = useState('dark');
  // const { theme } = useSelector(selectUser);

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
    //  <div className={css.overlay} onClick={handleClickOutside}></div>
    <div
      className={[css.overlay, css[activeTheme]].join(' ')}
      onClick={handleClickOutside}
    >
      <div className={css.modal} ref={modalRef}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg className={css.closeIcon} width="18" height="18">
            <use href={icons + '#icon-x-close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
