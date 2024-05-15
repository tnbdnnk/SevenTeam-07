import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { editColumn } from '../../../redux/boards/boards-operations';
import { deleteColumn } from '../../../redux/boards/boards-operations'
import { selectFilter } from '../../../redux/filter/filter-selectors';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { filterCards } from '../../../helpers/filterCards';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../../helpers/ModalWindow/Modal';

import CardItem from '../CardItem/CardItem';
import AddCard from '../AddCard/AddCard';

import { toast } from 'react-hot-toast';
import css from './ColumnCard.module.css';
import icons from '../../../images/symbol-defs.svg';


const ColumnCard = ({ columnItem }) => {

  const dispatch = useDispatch();
  const { _id, title, cards } = columnItem;
  const { theme } = useSelector(selectUser);
  const filter = useSelector(selectFilter);

  const filteredCards = filterCards(cards, filter);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('title', title);
  }); 

  const handleEditColumn = ({ title }) => {
    dispatch(editColumn({ _id: _id, title: title }));
    closeModal();
    toast.success('Column was edited successfully!');
  }

  const handleDeleteColumn = async (id) => {
    try {
      await dispatch(deleteColumn(id));
      toast.success('Column was deleted successfully!');
    } catch (error) {
      console.error(error.message);
    }
  }
  
  return (
    <li className={cards.length > 0 ? `${css.item} ${css.itemAdded}` : `${css.item}`} key={_id}>
      <div className={css.columnMainInfo}>
        <div className={[css.columnCard, css[theme]].join(' ')}>
          <p className={[css.text, css[theme]].join(' ')}>{title}</p>
          <div className={css.buttonsWrapper}>
            <button className={`${css.button} ${css.green}`} type="button" onClick={openModal}>
              <svg className={[css.icon, css[theme]].join(' ')}
                width="16"
                height="16"
              >
                <use href={icons + '#icon-pen'}></use>
              </svg>
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2 className={[css.modalHeader, css[theme]].join(' ')}>Edit column</h2>
              <form onSubmit={handleSubmit(handleEditColumn)}>
                <input type="text" {...register("title")} placeholder="Title" className={[css.addTitle, css[theme]].join(' ')} required />
                <button className={[css.addBtn, css[theme]].join(' ')} type="submit" onClick={openModal}>
                  <div className={css.iconWrap}>
                    <svg className={css.iconPlus} width="14" height="14">
                      <use href={icons + '#icon-plus'}></use>
                    </svg>
                  </div>
                  Edit
                </button>
              </form>
            </Modal>
                    
            <button className={`${css.button} ${css.red}`} type="button"  onClick={()=> handleDeleteColumn(_id)}>
              <svg
                className={[css.icon, css[theme]].join(' ')}
                width="16"
                height="16"
              >
                <use href={icons + '#icon-trash'}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={[css.cardsWrap, css[theme]].join(' ')}>
          {filteredCards.map((card) => (
            <CardItem key={card._id} card={card} />
          ))}
        </ul>
      </div>
      <AddCard columnId={_id} />
    </li>
  );
};


export default ColumnCard;
