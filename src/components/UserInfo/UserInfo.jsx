import css from '../UserInfo/UserInfo.module.css';
// import { useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../../helpers/ModalWindow/Modal';
// import { UserInfoForm } from 'components/UserInfoForm/UserInfoForm';
import sprite from '../../images/symbol-defs.svg';

export const UserInfo = () => {
  // const avatarLight = `${sprite}#icon-user-icon-white-theme`;
  // const avatarViolet = `${sprite}#icon-user-icon-violet-theme`;
  const avatarDark = `${sprite}#icon-user-icon-dark-theme`;

  // const [avatar, setAvatar] = useState(avatarDark);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={css.wrapUserInfo}>
      <p className={css.textUser}>Name</p>
      <button className={css.avatarBtn} onClick={openModal}>
        <svg className={css.avatar}>
          <use href={avatarDark} />
        </svg>
        {/* <img className={css.avatar} src={avatarViolet} alt="user-avatar" /> */}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <UserForm avatar={avatar} onClose={closeModal} /> */}
      </Modal>
    </div>
  );
};
