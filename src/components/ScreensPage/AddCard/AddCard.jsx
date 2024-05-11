import css from './AddCard.module.css';
import icons from '../../../images/symbol-defs.svg';
import AddCardModal from './AddCardModal/AddCardModal';
import { useModal } from '../../../hooks/useModal';

const AddCard = ({ onAddCard, columnId }) => {
  const {
    openModal: openAddModal,
    closeModal: closeAddModal,
    isModalOpen: isAddModalOpen,
  } = useModal();

  return (
    <>
      {isAddModalOpen && (
        <AddCardModal
          closeModal={closeAddModal}
          isModalOpen={isAddModalOpen}
          onAddCard={onAddCard}
          columnId={columnId}
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
