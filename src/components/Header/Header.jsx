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

  return (
    <header className={[css.header, css[theme]].join(' ')}>
      <button className={css.btn} onClick={openBurger}>
        <svg className={[css.svg, css[theme]].join(' ')}>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <div className={css.wraperUser}>
        {/* <div className={[css.wrapbtnTheme, css[theme]].join(' ')}>
          Theme */}
        <button
          className={[css.btnTheme, css.wrapbtnTheme, css[theme]].join(' ')}
          // className={css.btnTheme}
          onClick={() => setisThemeOpen((isThemeOpen) => !isThemeOpen)}
        >
          Theme
          <svg
            //для 1го варіанту popup з перегортанням
            // className={
            //   isActive
            //     ? `${css.svgTheme} ${css.active} ${css[theme]}`
            //     : `${css.svgTheme} ${css[theme]}`
            // }
            className={`${css.svgTheme} ${css[theme]}`}
            //для 1го варіанту popup з перегортанням
            // onClick={() => setisActive((isActive) => !isActive)}
            onClick={() => setisActive(true)}
          >
            <use href={`${sprite}#icon-chevron-down`} />
          </svg>
          {isThemeOpen && <Theme />}
        </button>
        {/* {isThemeOpen && <Theme />} */}
        {/* </div> */}
        <UserInfo />
      </div>
    </header>
  );
};
