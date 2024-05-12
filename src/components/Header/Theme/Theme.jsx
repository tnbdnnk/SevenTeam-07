import css from './Theme.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

export const Theme = () => {
  const { theme } = useSelector(selectUser);

  const [activeTheme, setactiveTheme] = useState(theme);
  console.log(theme);

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
    console.log(theme);
    setActiveIndex(index);

    dispatch(updateTheme(theme));
    setactiveTheme(theme);
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
    <div className={[css.wraper, css[activeTheme]].join(' ')}>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};
