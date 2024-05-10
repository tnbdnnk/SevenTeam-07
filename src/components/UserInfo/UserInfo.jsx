import css from '../UserInfo/UserInfo.module.css';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../../helpers/ModalWindow/Modal';
import { UserForm } from 'components/UserForm/UserForm';
import sprite from '../../images/symbol-defs.svg';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../../redux/auth/auth-selectors';

export const UserInfo = () => {
  // const { name, avatarURL, theme } = useSelector(selectUser);

  const [activeTheme, setactiveTheme] = useState('dark');

  const avatarLight = `${sprite}#icon-user-icon-white-theme`;
  const avatarViolet = `${sprite}#icon-user-icon-violet-theme`;
  const avatarDark = `${sprite}#icon-user-icon-dark-theme`;

  const userAvatar = (theme) => {
    let themeAvatar;

    switch (theme) {
      case 'dark':
        themeAvatar = avatarDark;
        break;
      case 'ligth':
        themeAvatar = avatarLight;
        break;
      case 'violet':
        themeAvatar = avatarViolet;
        break;
      default:
        themeAvatar = avatarDark;
    }
    return themeAvatar;
  };

  const avatar = userAvatar(activeTheme);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={css.wrapUserInfo}>
      {/*   <p className={css.textUser}>{name ? name : 'Name'} </p> */}
      <p className={css.textUser}>Name </p>
      <button className={css.avatarBtn} onClick={openModal}>
        {/* {avatarURL ? (
          <img className={css.avatar} src={avatarURL} alt="user-avatar" />
        ) : ( */}
        <svg className={css.avatar}>
          <use href={avatar} />
        </svg>
        {/* )} */}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <UserForm avatar={avatar} onClose={closeModal} /> */}
        <UserForm />
      </Modal>
    </div>
  );
};
