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
    // console.log(label);

    // const handleSetColor = (label) => { 
    //     switch (label) {
    //     case label = 'without':
    //         //Здесь выполняются инструкции, если результат выражения равен value1
    //         break;
    //     case label = 'low':
    //         //Инструкции, соответствующие value2
    //         break;
    //     ...
    //     case label = 'medium':
    //         //Инструкции, соответствующие значению valueN
    //         //statementsN
    //         break;
    //     case label = 'high':
    //         //Инструкции, соответствующие значению valueN
    //         //statementsN
    //         break;
    //     default:
    //         //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
    //         //statements_def
    //         break;
    //     }
    //         //   return { backgroundColor: `${bgImage}` };
    //     // label: Joi.string().valid("without", "low", "medium", "high"),
    // }

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
        <div className={css.cardLine}></div>
            {/* <div style={handleSetColor(label)} className={css.cardLine}></div> */}
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
                        <div className={css.circle}></div>
                        {/* <div style={handleSetColor(label)} className={css.circle}></div> */}
                        <p className={css.text}>{label}</p>
                    </div>
                </div>
                <div>
                    <p className={css.caption}>Deadline</p>
                    <p className={css.text}>{deadline}</p>
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
