// import DeleteCardModal from './DeleteCard/DeleteCardModal';
// import { useModal } from '../../../hooks/useModal';
// import EditCardModal from './EditCard/EditCardModal';
import { handleSetColor, handleFormatDate, handleCompareDates } from './CardItemFunctions/CardItemFunctions';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';
import {deleteCard} from "../../../redux/boards/boards-operations"
import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';


const CardItem = ({
    card
//   card: { id, name, text, priority, deadline },
//   onDeleteCard,
//   updateCard,
//   columnId,
}) => {

const { _id, title, description, label, deadline } = card;
const { theme } = useSelector(selectUser);

const currentDate = Date.now();
const formattedDeadline = handleFormatDate(deadline);
    const isDeadlineToday = handleCompareDates(currentDate, formattedDeadline);
    
    // Для видалення карточки Маша
    const dispatch = useDispatch();
  const handleDeleteCard = async (id) => {
    try {
      await dispatch(deleteCard(id));
    } catch (error) {
      console.error(error.message);
    }
  }
  
//   const {
//     openModal: openDeleteModal,
//     closeModal: closeDeleteModal,
//     isModalOpen: isDeleteModalOpen,
//     } = useModal();
    
//   const {
//     openModal: openEditCardModal,
//     closeModal: closeEditCardModal,
//     isModalOpen: isEditCardModalOpen,
//     } = useModal();
    
//   const handleDeleteCard = () => {
//     onDeleteCard(id);
//     closeDeleteModal();
//   };

  return (
    <li key={_id} className={[css.card, css[theme]].join(' ')}>
      {/* {isDeleteModalOpen && (
        <DeleteCardModal
          isModalOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
          onConfirmDelete={handleDeleteCard}
        />
      )}
      {isEditCardModalOpen && (
        <EditCardModal
          isModalOpen={isEditCardModalOpen}
          closeModal={closeEditCardModal}
          updateCard={updateCard}
          card={{ id, name, text, priority, deadline }}
          columnId={columnId}
        />
        )} */}
          
        <div style={handleSetColor(label)} className={css.cardLine}></div>
        <div className={css.textCardWrap}>
            <h4 className={[css.title, css[theme]].join(' ')}>{title}</h4>
            <p className={[css.subscribe, css[theme]].join(' ')}>{description}</p>
        </div>

        <div className={[css.vector, css[theme]].join(' ')}></div>

        <div className={css.addedInfoWrap}>
            <div className={css.propertyWrap}>
                <div>
                    <p className={[css.caption, css[theme]].join(' ')}>Priority</p>
                    <div className={css.priorityDataWrap}>
                        <div style={handleSetColor(label)} className={css.circle}></div>
                        <p className={[css.text, css[theme]].join(' ')}>{label}</p>
                    </div>
                </div>
                <div>
                    <p className={[css.caption, css[theme]].join(' ')}>Deadline</p>
                    <p className={[css.text, css[theme]].join(' ')}>{handleFormatDate(deadline)}</p>
                </div>
            </div>

            <div className={css.buttonsWrap}>  
                {isDeadlineToday && <button className={`${css.button} ${css.green}`} type='button'>
                    <svg className={css.iconAccent} width='16' height='16'>
                        <use href={icons + '#icon-bell'}></use>
                    </svg>
                </button>}
                <button className={`${css.button} ${css.green}`} type='button'>
                    <svg className={[css.icon, css[theme]].join(' ')} width='16' height='16'>
                        <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                    </svg>
                </button>
                {/* <button className={`${css.button} ${css.green}`} type='button' onClick={openEditCardModal}> */}
                <button className={`${css.button} ${css.green}`} type='button'>
                    <svg className={[css.icon, css[theme]].join(' ')} width='16' height='16'>
                        <use href={icons + '#icon-pen'}></use>
                    </svg>
                </button>
                {/* <button className={`${css.button} ${css.red}`} type='button' onClick={openDeleteModal}> */}
                <button className={`${css.button} ${css.red}`} type='button' onClick={()=> handleDeleteCard(_id)}>
                    <svg className={[css.icon, css[theme]].join(' ')} width='16' height='16'>
                        <use href={icons + '#icon-trash'}></use>
                    </svg>
                </button>
            </div>
        </div>
    </li>
    );
};


export default CardItem;
