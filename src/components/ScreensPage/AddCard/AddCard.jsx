import css from './AddCard.module.css';
import icons from '../../../images/symbol-defs.svg';
import AddCardModal from './AddCardModal/AddCardModal';
import { useModal } from '../../../hooks/useModal';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';


const AddCard = ({ onAddCard, columnId }) => {
  const { theme } = useSelector(selectUser);
  
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
      <button className={[css.button, css[theme]].join(' ')} type="button" onClick={openAddModal}>
        <div className={[css.iconBox, css[theme]].join(' ')}>
          <svg className={[css.icon, css[theme]].join(' ')} width="14" height="14">
            <use href={icons + '#icon-plus'}></use>
          </svg>
        </div>
        <p className={[css.text, css[theme]].join(' ')}>Add another card</p>
      </button>
    </>
  );
};

export default AddCard;
