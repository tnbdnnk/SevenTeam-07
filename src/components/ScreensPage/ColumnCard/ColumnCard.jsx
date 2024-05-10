import { useState } from 'react';
import { useModal } from '../../../hooks/useModal';
// import CardItem from '../CardItem/CardItem';
import AddCard from '../AddCard/AddCard';
import DeleteColumnModal from './DeleteColumn/DeleteColumnModal';
import EditColumnModal from './EditColumn/EditColumnModal';
import css from './ColumnCard.module.css';
import icons from '../../../images/symbol-defs.svg';

// const ColumnCard = ({ _id, title, index }) => { 
const ColumnCard = ({ _id, title }) => { 

    // const cards = [];
    // const cards = [
    //     {
    //         id: '11',
    //         title: 'The Watch Spot Design',
    //         subscription: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    //         priority: 'Low',
    //         // дата буде в іншому форматі = Date?
    //         deadline: '12/05/2023'
    //     },
    //     {
    //         id: '11',
    //         title: 'The Watch Spot Design',
    //         subscription: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    //         priority: 'Low',
    //         // дата буде в іншому форматі = Date?
    //         deadline: '12/05/2023'
    //     },
    //     {
    //         id: '11',
    //         title: 'The Watch Spot Design',
    //         subscription: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    //         priority: 'Low',
    //         // дата буде в іншому форматі = Date?
    //         deadline: '12/05/2023'
    //     },
    //     {
    //         id: '11',
    //         title: 'The Watch Spot Design',
    //         subscription: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    //         priority: 'Low',
    //         // дата буде в іншому форматі = Date?
    //         deadline: '12/05/2023'
    //     },
    // ];
   
  const [currentName, setCurrentName] = useState(name);
  const {
    openModal: openEditModal,
    closeModal: closeEditModal,
    isModalOpen: isEditModalOpen,
  } = useModal();
  const {
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
    isModalOpen: isDeleteModalOpen,
  } = useModal();

  const handleNameChange = (newName) => {
    setCurrentName(newName);
  };

//   const confirmDelete = () => {
//     onDelete(index);
//     closeDeleteModal();
//   };

    return (
        // <li className={cards.length > 0 ? `${css.item} ${css.itemAdded}` : `${css.item}`} key={id}>
        <li className={css.item} key={_id}>
        {isEditModalOpen && (
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
                // onConfirmDelete={confirmDelete}
            />
        )}
            <div className={css.columnMainInfo}>
                <div className={css.columnCard}>
                    <p className={css.text}>{title}</p>
                    <div className={css.buttonsWrapper}>
                        <button className={`${css.button} ${css.green}`} type="button" onClick={openEditModal}>
                            <svg className={css.icon} width="16" height="16">
                                <use href={icons + '#icon-pen'}></use>
                            </svg>
                        </button>
                        <button className={`${css.button} ${css.red}`} type="button" onClick={openDeleteModal}>
                            <svg className={css.icon} width="16" height="16">
                                <use href={icons + '#icon-trash'}></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={css.cardsWrap}>
                    {/* {cards?.map((card) => (
                        <CardItem
                            key={card.id}
                            title={card.title}
                            subscription={card.subscription}
                            priority={card.priority}
                            deadline={card.deadline}
                        />))} */}
                </div>
            </div>
            <AddCard />
        </li>
    );
};

export default ColumnCard;
