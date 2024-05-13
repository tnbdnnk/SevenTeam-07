// import { useState } from 'react';
// import { useModal } from '../../../hooks/useModal';
import CardItem from '../CardItem/CardItem';
import AddCard from '../AddCard/AddCard';
// import DeleteColumnModal from './DeleteColumn/DeleteColumnModal';
// import EditColumnModal from './EditColumn/EditColumnModal';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

import css from './ColumnCard.module.css';
import icons from '../../../images/symbol-defs.svg';


  const ColumnCard = ({
    columnItem,
    // onDelete,
    // onDeleteCard,
    // addNewCardToColumn,
    // updateCard,
  }) => {

    const { _id, title, cards } = columnItem;
    const { theme } = useSelector(selectUser);

  // const [currentName, setCurrentName] = useState(name);
  //   const [currentName, setCurrentName] = useState(title);
  //   const {
  //     openModal: openEditModal,
  //     closeModal: closeEditModal,
  //     isModalOpen: isEditModalOpen,
  //   } = useModal();

  //   const {
  //     openModal: openDeleteModal,
  //     closeModal: closeDeleteModal,
  //     isModalOpen: isDeleteModalOpen,
  //   } = useModal();

  // const handleNameChange = (newName) => {
  //   setCurrentName(newName);
  // };

  // const confirmDelete = () => {
  //   // onDelete(id);
  //   onDelete(_id); 
  //   closeDeleteModal();
  // };
  
  return (
 <li className={cards.length > 0 ? `${css.item} ${css.itemAdded}` : `${css.item}`} key={_id}>
      {/* {isEditModalOpen && (
        <EditColumnModal
          isModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
          handleRenameColumn={handleNameChange}
          currentName={currentName}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteColumnModal
          isModalOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
          onConfirmDelete={confirmDelete}
        />
      )} */}
      <div className={css.columnMainInfo}>
          <div className={[css.columnCard, css[theme]].join(' ')}>
          <p className={[css.text, css[theme]].join(' ')}>{title}</p>
          <div className={css.buttonsWrapper}>
            {/* <button className={`${css.button} ${css.green}`} type="button" onClick={openEditModal}> */}
            <button className={`${css.button} ${css.green}`} type="button">
              <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                <use href={icons + '#icon-pen'}></use>
              </svg>
            </button>
            {/* <button className={`${css.button} ${css.red}`} type="button" onClick={openDeleteModal}> */}
            <button className={`${css.button} ${css.red}`} type="button">
              <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                <use href={icons + '#icon-trash'}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={[css.cardsWrap, css[theme]].join(' ')}>
          {cards.map((card) => (
              <CardItem 
                  key={card._id}
                  card={card}
                  // onDeleteCard={() => onDeleteCard(_id, card.id)}
                  // updateCard={updateCard}
                  // columnId={id}
                />
            ))}
        </ul>
      </div>
      {/* <AddCard onAddCard={addNewCardToColumn} columnId={_id} /> */}
      <AddCard columnId={_id} />
    </li>
  );
};


export default ColumnCard;
