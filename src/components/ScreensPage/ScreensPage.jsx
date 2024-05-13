import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBoard } from '../../redux/boards/boards-operations';
import { selectBoard } from '../../redux/boards/boards-selectors';
import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';
import css from './ScreensPage.module.css';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector(selectBoard);

  useEffect(() => {
    dispatch(fetchBoard(boardId));
  }, [dispatch, boardId]);

  return (
    <>
      {board && (
        <div className={css.container}>
          <section className={css.section}>
            <div className={css.activeSettingsWrapper}>
              <h2 className={css.title}>{board.title}</h2>
              <Filters />
            </div>

            <div className={css.columnListWrap}>
              <ul className={css.columnList}>
                {board.columns.map((columnItem) => (
                  <ColumnCard key={columnItem._id} columnItem={columnItem} />
                ))}
                <AddColumn />
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ScreensPage;
