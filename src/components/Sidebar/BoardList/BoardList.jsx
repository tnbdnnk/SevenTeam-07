import { NavLink } from "react-router-dom";

import css from "./boardList.module.css"
// import sprite from '../../../images/symbol-defs.svg'


const BoardList = ({ items }) => {

  const list = items.map(item => {
    const boardName = item.title.replace(' ', '').toLowerCase();

    return (
      <li key={item.id} id={css.boardItem}>
        <NavLink to={`/home/:${boardName}`} className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`}>
            {item.name}
        </NavLink>
      </li>)
  })
  return <ul className={css.list}>Тут буде список бордів: {list}</ul>;
}

export default BoardList;