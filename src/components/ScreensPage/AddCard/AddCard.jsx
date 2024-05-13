import { useDispatch } from 'react-redux';
import { addCard } from '../../../redux/cards/card-operations';
import css from './AddCard.module.css';
import icons from '../../../images/symbol-defs.svg';
import AddCardModal from './AddCardModal/AddCardModal';
import { useModal } from '../../../hooks/useModal';

const AddCard = ({ columnId }) => {
  const {
    openModal: openAddModal,
    closeModal: closeAddModal,
    isModalOpen: isAddModalOpen,
  } = useModal();
  const dispatch = useDispatch();

  const handleAddCard = (newCard) => {
    dispatch(addCard(columnId, newCard));
    closeAddModal();
  };

  return (
    <>
      {isAddModalOpen && (
        <AddCardModal
          closeModal={closeAddModal}
          isModalOpen={isAddModalOpen}
          onAddCard={handleAddCard}
        />
      )}
      <button className={css.button} type="button" onClick={openAddModal}>
        <div className={css.iconBox}>
          <svg className={css.icon} width="14" height="14">
            <use href={icons + '#icon-plus'}></use>
          </svg>
        </div>
        <p className={css.text}>Add another card</p>
      </button>
    </>
  );
};

export default AddCard;
