import css from './Header.module.css';
import sprite from '../../images/symbol-defs.svg';
import { UserInfo } from './UserInfo/UserInfo';
import { Theme } from './Theme/Theme';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';

export const Header = ({ openBurger }) => {
  const [isThemeOpen, setisThemeOpen] = useState(false);
  const [isActive, setisActive] = useState(false);
  const { theme } = useSelector(selectUser);
  console.log(theme);
  // const [activeTheme, setactiveTheme] = useState(theme);

  // // для проверки
  // const [activeTheme, setactivTheme] = useState(theme);

  return (
    <header className={[css.header, css[theme]].join(' ')}>
      {/* // <header className={`${css.header} ${css[theme]}`}> */}
      <button className={css.btn} onClick={openBurger}>
        <svg className={[css.svg, css[theme]].join(' ')}>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <div className={css.wraperUser}>
        <div className={[css.wrapbtnTheme, css[theme]].join(' ')}>
          Theme
          <button
            className={css.btnTheme}
            onClick={() => setisThemeOpen((isThemeOpen) => !isThemeOpen)}
          >
            <svg
              className={
                isActive
                  ? `${css.svgTheme} ${css.active} ${css[theme]}`
                  : `${css.svgTheme} ${css[theme]}`
              }
              onClick={() => setisActive((isActive) => !isActive)}
            >
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
