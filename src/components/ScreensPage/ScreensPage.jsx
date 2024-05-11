// import { useState } from 'react';
import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';
// import Background from './Background/Background';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../../redux/board/board-selectors';
import { fetchBoard } from '../../redux/board/board-operations';

import css from './ScreensPage.module.css';


const ScreensPage = () => {
  const dispatch = useDispatch();

  let { boardName } = useParams();
  const board = useSelector(selectBoard);
  // підключити ререндери після зміни і видалення борди !
  const bgImage = board?.background;
  
  useEffect(() => {
    dispatch(fetchBoard(`${boardName}`));
  }, [dispatch, boardName]); 
  // const error = useSelector(selectError);
  // const columns = board.columns;
  // console.log(board);
  // console.log(boardName);
  // console.log(columns);
   
  const handleBackground = (image) => {
    if (image) {
      return { backgroundImage: `url(${bgImage})` }
    };
    return;
  }

  // const [boards, setBoards] = useState();
  
  // const handleDeleteColumn = (index) => {
  //   setBoards((prevBoards) => {
  //     const newColumns = [...prevBoards.column];
  //     newColumns.splice(index, 1);
  //     console.log({ ...prevBoards, column: newColumns });
  //     return { ...prevBoards, column: newColumns };
  //   });
  // };

  // const handleAddColumn = (newColumn) => {
  //   setBoards((prevBoards) => ({
  //     ...prevBoards,
  //     column: [...prevBoards.column, newColumn],
  //   }));
  // };

  return (
  <>
    {board && 
      
        <div style={handleBackground(bgImage)} className={bgImage ? `${css.container} ${css.imageStyles}` : `${css.container}`}>
          {/* <Background className={css.container}> */}
          <section className={css.section}>
            <div className={css.activeSettingsWrapper}>
              <h2 className={css.title}>{board.title}</h2>
              <Filters />
            </div>

            <div className={css.columnListWrap}>
              <ul className={css.columnList}>
                {/* {board.columns.map(({ _id, title }, index) => ( */}
                {board.columns.map((columnItem) => (
                  <ColumnCard
                    key={columnItem._id}
                    // columnItem={columnItem}
                    // onDelete={() => handleDeleteColumn(i)}
                    // index={index}
                  />))}
                {/* <AddColumn onAddColumn={handleAddColumn} /> */}
                <AddColumn />
              </ul>
            </div>
          </section>
            {/* </Background> */}
        </div >
      }
      </>
  );
};


export default ScreensPage;
