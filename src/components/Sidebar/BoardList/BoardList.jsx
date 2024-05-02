const BoardList = ({ items }) => {
  const list = items.map(item => { return (<li key={item.id}>{item.name}</li>)})

  return <ul>Тут буде список бордів: {list}</ul>
}

export default BoardList