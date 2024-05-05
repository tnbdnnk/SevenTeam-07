import css from '../Header/Header.module.css';
import sprite from '../../images/symbol-defs.svg';
import { UserInfo } from '../UserInfo/UserInfo';
import { Theme } from '../Theme/Theme';
import { useState } from 'react';

export const Header = ({ openBurger }) => {
  const [isThemeOpen, setisThemeOpen] = useState(false);

  return (
    <header className={css.header}>
      <button className={css.btn} onClick={openBurger}>
        <svg className={css.svg}>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <div className={css.wraperUser}>
        <div className={css.wrapbtnTheme}>
          Theme
          <button
            className={css.btnTheme}
            onClick={() => setisThemeOpen((isThemeOpen) => !isThemeOpen)}
          >
            <svg className={css.svgTheme}>
              <use href={`${sprite}#icon-chevron-down`} />
            </svg>
          </button>
          {isThemeOpen && <Theme />}
        </div>
        <UserInfo />
      </div>
    </header>
  );
};
