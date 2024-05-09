import css from '../UserForm/UserForm.module.css';
import sprite from '../../images/symbol-defs.svg';
import { nanoid } from 'nanoid';
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

  function handleSubmit(e) {
    e.preventDefault();
    // const user = { avatar, name, email, password };
  }

  const avatarId = nanoid();
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  return (
    <div>
      <h3>Edit profile</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor={avatarId}></label>
          <input
            type="file"
            // value={avatar}
            // onChange={handleChangeImg}
            name="avatar"
            // id={avatar}
            accept=".png, .jpg, .jpeg"
            id={avatarId}
          />
          <button className={css.btnTheme}>
            <svg>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </button>
        </div>
        <div className={css.formGroup}>
          {/* <label htmlFor={nameId}>Name:</label> */}
          <label htmlFor={nameId}></label>
          <input
            type="text"
            placeholder="Name"
            // value={name}
            // onChange={handleChange}
            name="name"
            id={nameId}
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={emailId}></label>
          <input
            // value={email}
            // onChange={handleChange}
            type="email"
            name="email"
            id={emailId}
            placeholder="Email"
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={passwordId}></label>
          <input
            // value={password}
            // onChange={handleChange}
            type={visible ? 'text' : 'password'}
            name="password"
            id={passwordId}
            placeholder="Password"
          />
          <button
            type="button"
            className={css.btnTheme}
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <svg>
              <use href={`${sprite}#icon-eye`} />
            </svg>
          </button>
        </div>
        <button className={css.btnSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
