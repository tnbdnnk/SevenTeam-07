import css from './Theme.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

export const Theme = () => {
  const { theme } = useSelector(selectUser);

  //для 2го варіанту popup для закриття після обрання теми
  const [isThemeOpen, setisThemeOpen] = useState(true);

  const [activeTheme, setactiveTheme] = useState(theme);

  const options = [
    { label: 'Light', theme: 'light' },
    { label: 'Dark', theme: 'dark' },
    { label: 'Violet', theme: 'violet' },
  ];
  const indexTheme = options.findIndex(
    (option) => option.theme === activeTheme
  );
  const [activeIndex, setActiveIndex] = useState(indexTheme);

  const dispatch = useDispatch();

  const current = (e, theme, index) => {
    e.preventDefault();

    setActiveIndex(index);

    dispatch(updateTheme({ theme }));
    setactiveTheme(theme);
    //для 2го варіанту popup для закриття після оьрання теми
    setisThemeOpen(false);
  };

  const elements = options.map(({ label, theme }, index) => (
    <li
      key={label}
      onClick={(e) => current(e, theme, index)}
      className={
        index === activeIndex
          ? `${css.itemTheme} ${css.current} ${css[activeTheme]}`
          : `${css.itemTheme} ${css[activeTheme]}`
      }
    >
      {label}
    </li>
  ));

  return (
    <>
      {/* умова для 2 варіанту popup без перегортання */}
      {isThemeOpen && (
        <div className={[css.wraper, css[activeTheme]].join(' ')}>
          <ul className={css.list}>{elements}</ul>
        </div>
      )}
    </>
  );
};
