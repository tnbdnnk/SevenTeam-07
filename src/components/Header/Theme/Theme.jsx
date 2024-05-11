import css from './Theme.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../../redux/auth/auth-operations';

export const Theme = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeTheme, setactiveTheme] = useState('dark');

  const options = [
    { label: 'Light', theme: 'ligth' },
    { label: 'Dark', theme: 'dark' },
    { label: 'Violet', theme: 'violet' },
  ];

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
