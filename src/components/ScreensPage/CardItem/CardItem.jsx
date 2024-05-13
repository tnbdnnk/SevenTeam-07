import { useDispatch } from 'react-redux';
import { deleteCard, editCard } from '../../../redux/cards/card-operations';
import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';
import {
  handleSetColor,
  handleFormatDate,
  handleCompareDates,
} from './CardItemFunctions/CardItemFunctions';

const CardItem = ({ card }) => {
  const { _id, title, description, label, deadline } = card;
  const dispatch = useDispatch();
  const currentDate = Date.now();
  const formattedDeadline = handleFormatDate(deadline);
  const isDeadlineToday = handleCompareDates(currentDate, formattedDeadline);

  const handleDeleteCard = () => {
    dispatch(deleteCard(_id));
  };

  const handleEditCard = () => {
    dispatch(editCard({ _id, title, description, label, deadline }));
  };

  return (
    <li key={_id} className={css.card}>
      <div style={handleSetColor(label)} className={css.cardLine}></div>
      <div className={css.textCardWrap}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.subscribe}>{description}</p>
      </div>

      <div className={css.vector}></div>

      <div className={css.addedInfoWrap}>
        <div className={css.propertyWrap}>
          <div>
            <p className={css.caption}>Priority</p>
            <div className={css.priorityDataWrap}>
              <div style={handleSetColor(label)} className={css.circle}></div>
              <p className={css.text}>{label}</p>
            </div>
          </div>
          <div>
            <p className={css.caption}>Deadline</p>
            <p className={css.text}>{handleFormatDate(deadline)}</p>
          </div>
        </div>

        <div className={css.buttonsWrap}>
          {isDeadlineToday && (
            <button className={`${css.button} ${css.green}`} type="button">
              <svg className={css.iconAccent} width="16" height="16">
                <use href={icons + '#icon-bell'}></use>
              </svg>
            </button>
          )}
          <button className={`${css.button} ${css.green}`} type="button">
            <svg className={css.icon} width="16" height="16">
              <use href={icons + '#icon-arrow-circle-broken-right'}></use>
            </svg>
          </button>
          <button
            className={`${css.button} ${css.green}`}
            type="button"
            onClick={handleEditCard}
          >
            <svg className={css.icon} width="16" height="16">
              <use href={icons + '#icon-pen'}></use>
            </svg>
          </button>
          <button
            className={`${css.button} ${css.red}`}
            type="button"
            onClick={handleDeleteCard}
          >
            <svg className={css.icon} width="16" height="16">
              <use href={icons + '#icon-trash'}></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
