import css from "./boardList.module.css"

const BoardList = ({ items }) => {
  const list = items.map(item => { return (<li key={item.id}>{item.name}</li>)})

  return <ul className={css.list}>Тут буде список бордів: {list}</ul>
}

export default BoardList