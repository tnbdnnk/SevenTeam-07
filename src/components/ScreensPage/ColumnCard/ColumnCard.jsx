import { useSelector } from 'react-redux';
import { selectCardsByColumnId } from '../../../redux/cards/card-selectors';
import CardItem from '../CardItem/CardItem';
import AddCard from '../AddCard/AddCard';
// import DeleteColumnModal from './DeleteColumn/DeleteColumnModal';
// import EditColumnModal from './EditColumn/EditColumnModal';

import { selectUser } from '../../../redux/auth/auth-selectors';

import css from './ColumnCard.module.css';
import icons from '../../../images/symbol-defs.svg';

const ColumnCard = ({ columnItem }) => {
  const { _id, title } = columnItem;
  const cards = useSelector(selectCardsByColumnId(_id));
    const { theme } = useSelector(selectUser);

  return (
    <li
      className={cards.length > 0 ? `${css.item} ${css.itemAdded}` : css.item}
      key={_id}
    >
      <div className={css.columnMainInfo}>
          <div className={[css.columnCard, css[theme]].join(' ')}>
          <p className={[css.text, css[theme]].join(' ')}>{title}</p>
          <div className={css.buttonsWrapper}>
            <button className={`${css.button} ${css.green}`} type="button">
              <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                <use href={icons + '#icon-pen'}></use>
              </svg>
            </button>
            <button className={`${css.button} ${css.red}`} type="button">
              <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                <use href={icons + '#icon-trash'}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={[css.cardsWrap, css[theme]].join(' ')}>
          {cards.map((card) => (
            <CardItem key={card._id} card={card} />
          ))}
        </ul>
      </div>
      <AddCard columnId={_id} />
    </li>
  );
};

export default ColumnCard;
