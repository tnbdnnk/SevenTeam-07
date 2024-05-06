import css from '../Theme/Theme.module.css';
import { useState } from 'react';

export const Theme = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // const options = [
  //   { label: 'Light', current: false },
  //   { label: 'Dark', current: true },
  //   { label: 'Violet', current: false },
  // ];

  const options = [{ label: 'Light' }, { label: 'Dark' }, { label: 'Violet' }];

  const current = (e, item, index) => {
    e.preventDefault();
    console.log(item);
    setActiveIndex(index);
    // const idxCurrent = options.findIndex(option => option.current === true);
    // options[idxCurrent] = { ...options[idxCurrent], current: false };
    // const idx = options.findIndex(option => option.label === item);
    // if (idx === -1) {
    //   return;
    // }
    // options[idx] = { ...options[idx], current: true };
    console.log(options);
  };

  // const elements = options.map(item => (
  //   <li
  //     key={item.label}
  //     onClick={() => current(item.label)}
  //     className={
  //       item.current ? `${css.itemTheme} ${css.current}` : css.itemTheme
  //     }
  //   >
  //     {item.label}
  //   </li>
  // ));

  const elements = options.map(({ label }, index) => (
    <li
      key={label}
      onClick={(e) => current(e, label, index)}
      className={
        index === activeIndex
          ? `${css.itemTheme} ${css.current}`
          : css.itemTheme
      }
    >
      {label}
    </li>
  ));

  return (
    <div className={css.wraper}>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};
