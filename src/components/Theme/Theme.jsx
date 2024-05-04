import css from '../Theme/Theme.module.css';

export const Theme = () => {
  const options = [{ label: 'Light' }, { label: 'Dark' }, { label: 'Violet' }];

  const elements = options.map(item => (
    <li key={item.label} className={css.itemTheme}>
      {item.label}
    </li>
  ));

  return (
    <div className={css.wraper}>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};
