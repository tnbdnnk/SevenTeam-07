import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, selectAllBoardsList, selectIsLoading } from '../../redux/boards/boards-selectors';
import { fetchBoard } from '../../redux/boards/boards-operations';
import { selectUser } from '../../redux/auth/auth-selectors';

import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';
import Background from './Background/Background';

import css from './ScreensPage.module.css';


const ScreensPage = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { boardName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const boardList = useSelector(selectAllBoardsList);
  const board = useSelector(selectBoard);
  const { theme } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchBoard(`${boardName}`));
  }, [dispatch, boardName]); 

  useEffect(() => {
    if (!isLoading) { 
      if (boardList.length === 0) {
        navigate("/home");
      } else { 
        if (!(boardList.find(item => item._id === boardName))) { 
          const firstBoard = boardList[0];
          navigate(`/home/${firstBoard._id}`);
        }
      }
    } 
  }, [isLoading, boardList, boardName, navigate]); 

  return (
  <>
      {board && 
    <>
        <Background>
          <div className={css.activeSettingsWrapper}>
              <h2 className={[css.title, css[theme]].join(' ')}>{board.title}</h2>
              <Filters />
          </div>
          
          <section className={[css.section, css[theme]].join(' ')}>
            <div>
              <ul className={css.columnList}>
                {board.columns && board.columns
                .filter(columnItem => Object.hasOwn(columnItem, '_id'))
                .map(columnItem => (
                  <ColumnCard
                    key={columnItem._id}
                    columnItem={columnItem}
                  />
                ))}
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
