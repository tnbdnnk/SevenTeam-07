import { useState } from 'react';
import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';
import { nanoid } from 'nanoid';

// import Background from './Background/Background';

import css from './ScreensPage.module.css';

const ScreensPage = () => {
  const [boards, setBoards] = useState({
    name: 'Project office',
    columns: [],
    // background: 'https://wallpaper.forfun.com/fetch/98/986a3988049771e452a4c8de5399e3e1.jpeg',
    background: null,
  });

  const bgImage = boards?.background;

  const handleBackground = (image) => {
    if (image) {
      return { backgroundImage: `url(${bgImage})` };
    }
    return;
  };

  const addNewCardToColumn = (columnId, newCard) => {
    console.log(columnId);
    console.log(newCard);
    setBoards((prevBoards) => {
      const updatedColumns = prevBoards.columns.map((column) => {
        if (column.id === columnId) {
          const updatedCards = [...column.cards, newCard];
          return { ...column, cards: updatedCards };
        }
        return column;
      });
      const res = { ...prevBoards, columns: updatedColumns };
      console.log(res);
      return res;
    });
  };

  const handleDeleteCard = (columnId, cardId) => {
    setBoards((prevBoards) => {
      const updatedColumns = prevBoards.columns.map((column) => {
        if (column.id === columnId) {
          const updatedCards = column.cards.filter(
            (card) => card.id !== cardId
          );
          return { ...column, cards: updatedCards };
        }
        return column;
      });
      const res = { ...prevBoards, columns: updatedColumns };
      console.log(res);
      return res;
    });
  };

  const updateCard = (columnId, cardId, updatedFields) => {
    setBoards((prevBoards) => {
      const updatedColumns = prevBoards.columns.map((column) => {
        if (column.id === columnId) {
          const updatedCards = column.cards.map((card) => {
            if (card.id === cardId) {
              return { ...card, ...updatedFields };
            }
            return card;
          });
          return { ...column, cards: updatedCards };
        }
        return column;
      });
      const res = { ...prevBoards, columns: updatedColumns };
      console.log(res);
      return res;
    });
  };

  const handleDeleteColumn = (id) => {
    setBoards((prevBoards) => {
      const updatedColumns = prevBoards.columns.filter(
        (column) => column.id !== id
      );

      const res = { ...prevBoards, columns: updatedColumns };
      console.log(res);
      return res;
    });
  };

  const handleAddColumn = (newColumn) => {
    const columnWithId = {
      ...newColumn,
      id: nanoid(),
    };
    setBoards((prevBoards) => ({
      ...prevBoards,
      columns: [...prevBoards.columns, columnWithId],
    }));
  };

  return (
    <div
      style={handleBackground(bgImage)}
      className={
        bgImage ? `${css.container} ${css.imageStyles}` : `${css.container}`
      }
    >
      <section className={css.section}>
        <div className={css.activeSettingsWrapper}>
          <h2 className={css.title}>{boards.name}</h2>
          <Filters />
        </div>

        <div className={css.columnListWrap}>
          <ul className={css.columnList}>
            {boards.columns.map((column) => (
              <ColumnCard
                key={column.id}
                id={column.id}
                name={column.name}
                onDelete={() => handleDeleteColumn(column.id)}
                onDeleteCard={handleDeleteCard}
                cards={column.cards}
                addNewCardToColumn={addNewCardToColumn}
                updateCard={updateCard}
              />
            ))}
            <AddColumn onAddColumn={handleAddColumn} />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ScreensPage;
