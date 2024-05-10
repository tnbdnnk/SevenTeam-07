import css from '../UserForm/UserForm.module.css';
import sprite from '../../images/symbol-defs.svg';
// import { nanoid } from 'nanoid';
import { useState } from 'react';
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectUser } from '../../../redux/auth/auth-selectors';

export const UserForm = () => {
  // const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  // const { name,email,  avatarURL } = useSelector(selectUser);
  //   const [avatar, setAvatar] = useState(useSelector(avatarURL));
  //   const [name, setName] = useState(useSelector(name));
  //   const [email, setEmail] = useState(useSelector(email));
  //   const [password, setPassword] = useState('');

  //временно
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

  function handleSubmit(e) {
    e.preventDefault();
    // const user = { avatar, name, email, password };
  }

  return (
    <div>
      <h3 className={[css.title, css[activeTheme]].join(' ')}>Edit profile</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroupImg}>
          <label className="css.nameLable">
            {/* {avatarURL ? (
          <img className={css.avatar} src={avatarURL} alt="user-avatar" />
        ) : ( */}
            <svg className={css.avatar}>
              <use href={avatar} />
            </svg>
            {/* )} */}
            <div className={[css.plusWrap, css[activeTheme]].join(' ')}>
              <input
                className={css.inputImg}
                type="file"
                // value={avatar}
                // onChange={handleChangeImg}
                name="avatar"
                accept=".png, .jpg, .jpeg"
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
              // value={name}
              // onChange={handleChange}
              name="name"
            />
          </label>
        </div>

        <div className={css.formGroup}>
          <label>
            <input
              className={[css.input, css[activeTheme]].join(' ')}
              // value={email}
              // onChange={handleChange}
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
              // value={password}
              // onChange={handleChange}
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
