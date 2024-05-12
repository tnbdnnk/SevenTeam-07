// import DeleteCardModal from './DeleteCard/DeleteCardModal';
// import { useModal } from '../../../hooks/useModal';
// import EditCardModal from './EditCard/EditCardModal';

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
    const isDeadlineToday = true;
    // console.log(deadline);

    const handleSetColor = (label) => { 
        switch (label) {
            case label = 'without':
                return { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
            case label = 'low':
                return { backgroundColor: '#8fa1d0' }
            case label = 'medium':
                return { backgroundColor: '#e09cb5' }
            case label = 'high':
                return { backgroundColor: '#bedbb0' }
            default:
                return { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
        }
    }

    const handleFormatDate = (deadline) => {
        // const dateParts = deadline.split(', ')[0].split('/');
        // const formattedDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
        // return formattedDate;

        const dateParts = deadline.split(', ')[0].split('/');
        const day = dateParts[1].padStart(2, '0');
        const month = dateParts[0].padStart(2, '0');
        const year = dateParts[2];
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
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
    <li key={_id} className={css.card}>
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
                {isDeadlineToday && <button className={`${css.button} ${css.green}`} type='button'>
                    <svg className={css.iconAccent} width='16' height='16'>
                        <use href={icons + '#icon-bell'}></use>
                    </svg>
                </button>}
                <button className={`${css.button} ${css.green}`} type='button'>
                    <svg className={css.icon} width='16' height='16'>
                        <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                    </svg>
                </button>
                {/* <button className={`${css.button} ${css.green}`} type='button' onClick={openEditCardModal}> */}
                <button className={`${css.button} ${css.green}`} type='button'>
                    <svg className={css.icon} width='16' height='16'>
                        <use href={icons + '#icon-pen'}></use>
                    </svg>
                </button>
                {/* <button className={`${css.button} ${css.red}`} type='button' onClick={openDeleteModal}> */}
                <button className={`${css.button} ${css.red}`} type='button'>
                    <svg className={css.icon} width='16' height='16'>
                        <use href={icons + '#icon-trash'}></use>
                    </svg>
                </button>
            </div>
        </div>
    </li>
    );
};


export default CardItem;
