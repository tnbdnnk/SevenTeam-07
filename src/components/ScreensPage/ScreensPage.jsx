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
  // console.log(board);

  useEffect(() => {
    dispatch(fetchBoard(`${boardName}`));
  }, [dispatch, boardName]); 

  // const error = useSelector(selectError);

  // import slug from 'slug';
// const handleSelect = (boardId) => {
//   // Здійснюємо запит на сервер, щоб отримати дані про борду за її ID
//   fetch(/api/boards/${boardId})
//     .then(response => response.json())
//     .then(data => {
//       if (data) {
//         // Якщо борда знайдена, викликаємо dispatch з отриманими даними
//         dispatch(selectBoard(data.id));
//         // Створюємо slug для URL
//         const boardSlug = slug(data.title);
//         // Змінюємо шлях за допомогою navigate
//         navigate(/home/${boardSlug}, { replace: true });
//       } else {
//         console.error(Борду з id ${boardId} не знайдено);
//       }
//     })
//     .catch(error => {
//       console.error('Помилка при отриманні даних про борду:', error);
//     });
// }

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
