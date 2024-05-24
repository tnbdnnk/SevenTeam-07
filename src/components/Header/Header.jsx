import css from './Header.module.css';
import sprite from '../../images/symbol-defs.svg';
import { UserInfo } from './UserInfo/UserInfo';
import { Theme } from './Theme/Theme';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';

export const Header = ({ openBurger }) => {
  const [isThemeOpen, setisThemeOpen] = useState(false);

  const { theme } = useSelector(selectUser);

  return (
    <header className={[css.header, css[theme]].join(' ')}>
      <button className={css.btn} onClick={openBurger}>
        <svg className={[css.svg, css[theme]].join(' ')}>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <div className={css.wraperUser}>
        <button
          className={[css.wrapbtnTheme, css[theme]].join(' ')}
          onClick={() => setisThemeOpen((isThemeOpen) => !isThemeOpen)}
        >
          Theme
          <svg
            className={
              isThemeOpen
                ? `${css.svgTheme} ${css.active} ${css[theme]}`
                : `${css.svgTheme} ${css[theme]}`
            }
          >
            <use href={`${sprite}#icon-chevron-down`} />
          </svg>
          {isThemeOpen && <Theme />}
        </button>

        <UserInfo />
      </div>
    </header>
  );
};
