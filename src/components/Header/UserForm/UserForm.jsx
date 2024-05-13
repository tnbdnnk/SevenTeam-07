import css from './UserForm.module.css';
import sprite from '../../../images/symbol-defs.svg';

import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { updateUser } from '../../../redux/auth/auth-operations';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

export const UserForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const { name, email, avatarURL, theme } = useSelector(selectUser);
  const us = useSelector(selectUser);
  console.log(us);

  const [avatarUser, setAvatarUser] = useState(avatarURL);
  const [nameUser, setNameUser] = useState(name);
  const [emailUser, setEmailUser] = useState(email);
  const [password, setPassword] = useState('');
  const [preview, setPreview] = useState(null);

  //временно
  // const [activeTheme, setactiveTheme] = useState('dark');
  const [activeTheme, setactiveTheme] = useState(theme);
  console.log(theme);

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

  const handleChangeImg = (event) => {
    const file = event.target.files[0];

    if (file.size > 50 * 1024) {
      toast.error('Ooops, the file size must not exceed 50 KB', {
        style: {
          border: '1px solid #713200',
          padding: '10px',
          color: '#713200',
          fontWeight: 700,
        },
      });
      return;
    }

    if (file) {
      setAvatarUser(file);
      const reader = new FileReader();

      reader.onload = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setNameUser(value);
        break;
      case 'email':
        setEmailUser(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = {
        avatarURL: avatarUser,
        name: nameUser,
        email: emailUser,
        password,
      };
      dispatch(updateUser(user));
      console.log(user);
      console.log(user.name);
      onClose();
      toast.success('Update accepted!');
    } catch (error) {
      toast.error('Ooops, there was an error...', {
        style: {
          border: '1px solid #713200',
          padding: '10px',
          color: '#713200',
          fontWeight: 700,
        },
      });
    }
  };

  return (
    <div>
      <h3 className={[css.title, css[activeTheme]].join(' ')}>Edit profile</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroupImg}>
          <label className="css.nameLable">
            {avatarURL ? (
              <img
                className={css.avatar}
                src={preview || avatarURL}
                alt="user-avatar"
              />
            ) : (
              <svg className={css.avatar}>
                <use href={avatar} />
              </svg>
            )}
            <div className={[css.plusWrap, css[activeTheme]].join(' ')}>
              <input
                className={css.inputImg}
                type="file"
                onChange={handleChangeImg}
                name="avatar"
                accept=".png, .jpg, .jpeg"
                ref={fileInputRef}
              />

              <svg className={css.plus}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </div>
          </label>
        </div>

        <div className={css.formGroup}>
          <label className="css.nameLable">
            <input
              className={[css.input, css[activeTheme]].join(' ')}
              type="text"
              placeholder="Name"
              value={nameUser}
              onChange={handleChange}
              name="name"
            />
          </label>
        </div>

        <div className={css.formGroup}>
          <label>
            <input
              className={[css.input, css[activeTheme]].join(' ')}
              value={emailUser}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div className={css.formGroupRel}>
          <label>
            <input
              className={[css.input, css[activeTheme]].join(' ')}
              value={password}
              onChange={handleChange}
              type={visible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
            />
            <button
              className={css.btnEye}
              type="button"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <svg className={[css.svgEye, css[activeTheme]].join(' ')}>
                <use href={`${sprite}#icon-eye`} />
              </svg>
            </button>
          </label>
        </div>
        <button
          className={[css.btnSend, css[activeTheme]].join(' ')}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};
