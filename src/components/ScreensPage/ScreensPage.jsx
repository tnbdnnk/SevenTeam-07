import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../../redux/boards/boards-selectors';
import { fetchBoard } from '../../redux/boards/boards-operations';
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
  
  // const isColumnListEmpty = () => {
  //   const column = board.columns[0];
  //   const hasId = Object.hasOwn(column, '_id');
  //   return hasId;
  // }

  useEffect(() => {
    dispatch(fetchBoard(`${boardName}`));
  }, [dispatch, boardName]); 

  // const error = useSelector(selectError);

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
                {/* {isColumnListEmpty() && board.columns.map((columnItem) => ( */}
                {board.columns.map((columnItem) => (
                  <ColumnCard
                    key={columnItem._id}
                    columnItem={columnItem}
                  />))}
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
