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
  console.log(boardName);

  const board = useSelector(selectBoard);
  // const error = useSelector(selectError);
  // const columns = board.columns;
  console.log(board);
  // console.log(columns);

  useEffect(() => {     
    dispatch(fetchBoard(`${boardName}`));
    // dispatch(fetchBoard());
  }, [dispatch, boardName]) 
  
  // const [boards, setBoards] = useState({
  //   name: 'Project office',
  //   column: ['To Do', 'In Progress', 'Done'],
  //   // column: [],
  //   id: '12345',
  //   // background: 'https://wallpaper.forfun.com/fetch/98/986a3988049771e452a4c8de5399e3e1.jpeg',
  //   background: null,
  // });

    // const [boards, setBoards] = useState();

  const bgImage = board?.background;

  const handleBackground = (image) => {
    if (image) {
      return { backgroundImage: `url(${bgImage})` }
    };
    return;
  }
  
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
                {/* {columns && columns.map((item) => ( */}
                {board.columns.map(({ _id, title, index }) => (
                  <ColumnCard
                    key={_id}
                    title={title}
                    // onDelete={() => handleDeleteColumn(i)}
                    index={index}
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
