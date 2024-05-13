import { useSelector } from 'react-redux';
import { selectCardsByColumnId } from '../../../redux/cards/card-selectors';
import CardItem from '../CardItem/CardItem';
import AddCard from '../AddCard/AddCard';
import css from './ColumnCard.module.css';
import icons from '../../../images/symbol-defs.svg';

const ColumnCard = ({ columnItem }) => {
  const { _id, title } = columnItem;
  const cards = useSelector(selectCardsByColumnId(_id));

  return (
    <li
      className={cards.length > 0 ? `${css.item} ${css.itemAdded}` : css.item}
      key={_id}
    >
      <div className={css.columnMainInfo}>
        <div className={css.columnCard}>
          <p className={css.text}>{title}</p>
          <div className={css.buttonsWrapper}>
            <button className={`${css.button} ${css.green}`} type="button">
              <svg className={css.icon} width="16" height="16">
                <use href={icons + '#icon-pen'}></use>
              </svg>
            </button>
            <button className={`${css.button} ${css.red}`} type="button">
              <svg className={css.icon} width="16" height="16">
                <use href={icons + '#icon-trash'}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.cardsWrap}>
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
