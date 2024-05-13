import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../../redux/boards/boards-selectors';
import { fetchBoard } from '../../redux/boards/boards-operations';
// import { selectAllBoardsList } from '';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';

import { selectUser } from '../../redux/auth/auth-selectors';

import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';
import Background from './Background/Background';

import css from './ScreensPage.module.css';


const ScreensPage = () => {
    
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);

  let { boardName } = useParams();
  const board = useSelector(selectBoard);

  console.log(board);
  
  const isColumnListEmpty = () => {
    const column = board.columns[0];
    const hasId = Object.hasOwn(column, '_id');
    return hasId;
  }

  useEffect(() => {
    dispatch(fetchBoard(`${boardName}`));
  }, [dispatch, boardName]); 
  // const error = useSelector(selectError);

  // 

  //  const [boards, setBoards] = useState({
  //   name: 'Project office',
  //   columns: [],
  //   // background: 'https://wallpaper.forfun.com/fetch/98/986a3988049771e452a4c8de5399e3e1.jpeg',
  //   background: null,
  //  });

  // const addNewCardToColumn = (columnId, newCard) => {
  //   console.log(columnId);
  //   console.log(newCard);
  //   setBoards((prevBoards) => {
  //     const updatedColumns = prevBoards.columns.map((column) => {
  //       if (column.id === columnId) {
  //         const updatedCards = [...column.cards, newCard];
  //         return { ...column, cards: updatedCards };
  //       }
  //       return column;
  //     });
  //     const res = { ...prevBoards, columns: updatedColumns };
  //     console.log(res);
  //     return res;
  //   });
  // };

  // const handleDeleteCard = (columnId, cardId) => {
  //   setBoards((prevBoards) => {
  //     const updatedColumns = prevBoards.columns.map((column) => {
  //       if (column.id === columnId) {
  //         const updatedCards = column.cards.filter(
  //           (card) => card.id !== cardId
  //         );
  //         return { ...column, cards: updatedCards };
  //       }
  //       return column;
  //     });
  //     const res = { ...prevBoards, columns: updatedColumns };
  //     console.log(res);
  //     return res;
  //   });
  // };

  // const updateCard = (columnId, cardId, updatedFields) => {
  //   setBoards((prevBoards) => {
  //     const updatedColumns = prevBoards.columns.map((column) => {
  //       if (column.id === columnId) {
  //         const updatedCards = column.cards.map((card) => {
  //           if (card.id === cardId) {
  //             return { ...card, ...updatedFields };
  //           }
  //           return card;
  //         });
  //         return { ...column, cards: updatedCards };
  //       }
  //       return column;
  //     });
  //     const res = { ...prevBoards, columns: updatedColumns };
  //     console.log(res);
  //     return res;
  //   });
  // };

  // const handleDeleteColumn = (id) => {
  //   setBoards((prevBoards) => {
  //     const updatedColumns = prevBoards.columns.filter(
  //       (column) => column.id !== id
  //     );

  //     const res = { ...prevBoards, columns: updatedColumns };
  //     console.log(res);
  //     return res;
  //   });
  // };

  // const handleAddColumn = (newColumn) => {
  //   const columnWithId = {
  //     ...newColumn,
  //     id: nanoid(),
  //   };
  //   setBoards((prevBoards) => ({
  //     ...prevBoards,
  //     columns: [...prevBoards.columns, columnWithId],
  //   }));
  // };

  return (
  <>
      {board && 
    <>
        <Background>
          <section className={[css.section, css[theme]].join(' ')}>
            <div className={css.activeSettingsWrapper}>
              <h2 className={[css.title, css[theme]].join(' ')}>{board.title}</h2>
              <Filters />
            </div>

            <div className={css.columnListWrap}>
              <ul className={css.columnList}>
                {isColumnListEmpty() && board.columns.map((columnItem) => (
                  <ColumnCard
                    key={columnItem._id}
                    columnItem={columnItem}
                    // onDelete={() => handleDeleteColumn(column.id)}
                    // onDeleteCard={handleDeleteCard}
                    // addNewCardToColumn={addNewCardToColumn}
                    // updateCard={updateCard}
                  />))}
                {/* <AddColumn onAddColumn={handleAddColumn} /> */}
                <AddColumn />
              </ul>
            </div>
          </section>
        </Background>
        </>
      }
      </>
  );
};


export default ScreensPage;
